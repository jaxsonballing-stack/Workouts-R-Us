const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Stripe } = require('stripe');

admin.initializeApp();
const db = admin.firestore();

// Keys granted when a bundle is purchased
const BUNDLE_KEYS = {
  tone:   ['tone',   'cardio', 'yoga',  'pilates'],
  muscle: ['muscle', 'strength', 'hiit', 'boxing'],
};

// 35-day access window (5-day grace past 30-day billing)
const ACCESS_DAYS = 35;

function paidThroughDate() {
  return new Date(Date.now() + ACCESS_DAYS * 24 * 60 * 60 * 1000);
}

exports.stripeWebhook = functions.https.onRequest(async (req, res) => {
  const stripeSecret  = functions.config().stripe.secret_key;
  const webhookSecret = functions.config().stripe.webhook_secret;
  const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' });

  // Verify Stripe signature using the raw body
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // ── Subscription renewed successfully ────────────────────────────────────
  if (event.type === 'invoice.payment_succeeded') {
    const invoice = event.data.object;
    // Only handle subscription invoices (not one-time charges)
    if (!invoice.subscription) return res.status(200).send('OK');

    const customerEmail = invoice.customer_email;
    if (!customerEmail) return res.status(200).send('No email on invoice');

    const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
    const programKey = subscription.metadata && subscription.metadata.programKey;
    if (!programKey) {
      console.warn('No programKey in subscription metadata — skipping');
      return res.status(200).send('OK');
    }

    try {
      const userRecord = await admin.auth().getUserByEmail(customerEmail);
      const uid = userRecord.uid;
      const keys = BUNDLE_KEYS[programKey] || [programKey];
      const paidThrough = paidThroughDate();

      const batch = db.batch();
      keys.forEach(k => {
        const ref = db.collection('users').doc(uid).collection('purchases').doc(k);
        batch.set(ref, {
          programKey: k,
          paidThrough,
          lastRenewedAt: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
      });
      await batch.commit();
      console.log(`Renewed access for ${customerEmail} → [${keys.join(', ')}] until ${paidThrough.toISOString()}`);
    } catch (err) {
      console.error('Error renewing access:', err.message);
    }
  }

  // ── Subscription cancelled / payment failed → lock immediately ───────────
  if (
    event.type === 'customer.subscription.deleted' ||
    event.type === 'invoice.payment_failed'
  ) {
    let customerEmail, programKey;

    if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object;
      programKey = subscription.metadata && subscription.metadata.programKey;
      const customer = await stripe.customers.retrieve(subscription.customer);
      customerEmail = customer.email;
    } else {
      const invoice = event.data.object;
      customerEmail = invoice.customer_email;
      if (invoice.subscription) {
        const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
        programKey = subscription.metadata && subscription.metadata.programKey;
      }
    }

    if (!customerEmail || !programKey) return res.status(200).send('OK');

    try {
      const userRecord = await admin.auth().getUserByEmail(customerEmail);
      const uid = userRecord.uid;
      const keys = BUNDLE_KEYS[programKey] || [programKey];

      const batch = db.batch();
      keys.forEach(k => {
        const ref = db.collection('users').doc(uid).collection('purchases').doc(k);
        // Set paidThrough to epoch so the site treats it as expired immediately
        batch.set(ref, { paidThrough: new Date(0) }, { merge: true });
      });
      await batch.commit();
      console.log(`Locked access for ${customerEmail} → [${keys.join(', ')}]`);
    } catch (err) {
      console.error('Error locking access:', err.message);
    }
  }

  res.status(200).send('OK');
});
