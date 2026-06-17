import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { programs } from '../data/programs'

const programKeys = Object.keys(programs)

export default function HomePage() {
  const navigate = useNavigate()
  const programsRef = useRef(null)

  function scrollToPrograms() {
    programsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="page-with-nav">
      <style>{`
        /* ── HERO ── */
        .hero {
          min-height: 100vh; position: relative; display: flex; align-items: center;
          padding: 80px 6% 80px; overflow: hidden;
        }
        .hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse at 20% 50%, rgba(11,47,255,0.22) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(255,59,167,0.17) 0%, transparent 60%),
            var(--dark);
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        }
        .hero-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
        .hg1 { width: 500px; height: 500px; background: var(--blue); opacity: 0.13; top: -100px; left: -80px; animation: gp1 6s ease-in-out infinite; }
        .hg2 { width: 450px; height: 450px; background: var(--pink); opacity: 0.1; bottom: -80px; right: -60px; animation: gp2 7s ease-in-out infinite; }
        .hero-content { position: relative; z-index: 10; max-width: 700px; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: 50px; padding: 8px 20px;
          font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(255,255,255,0.65); margin-bottom: 28px;
          animation: fadeUp 0.7s ease both;
        }
        .bdot { width: 7px; height: 7px; border-radius: 50%; background: var(--pink); box-shadow: 0 0 8px var(--pink); animation: blink 1.5s ease-in-out infinite; }
        .hero-h {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px,10vw,140px); line-height: 0.92; letter-spacing: 2px;
          margin-bottom: 28px; animation: fadeUp 0.7s 0.1s ease both;
        }
        .hero-h .bl { color: var(--blue); display: block; }
        .hero-h .pk { color: var(--pink); display: block; }
        .hero-sub {
          font-size: 17px; line-height: 1.7; color: rgba(255,255,255,0.6); font-weight: 500;
          max-width: 500px; margin-bottom: 40px; animation: fadeUp 0.7s 0.2s ease both;
        }
        .hero-actions { display: flex; gap: 18px; flex-wrap: wrap; animation: fadeUp 0.7s 0.3s ease both; }
        .hero-stats { display: flex; gap: 44px; margin-top: 64px; animation: fadeUp 0.7s 0.4s ease both; flex-wrap: wrap; }
        .hs-num {
          font-family: 'Bebas Neue', sans-serif; font-size: 48px; line-height: 1;
          background: linear-gradient(135deg, var(--blue), var(--pink));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hs-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-top: 4px; }
        .hs-sep { width: 1px; background: var(--glass-border); align-self: stretch; }

        /* ── MARQUEE ── */
        .marquee-wrap { padding: 22px 0; background: linear-gradient(135deg, var(--blue), var(--pink)); overflow: hidden; }
        .marquee-track { display: flex; gap: 44px; width: max-content; animation: marquee 22s linear infinite; }
        .marquee-item { font-family: 'Bebas Neue', sans-serif; font-size: 20px; letter-spacing: 3px; color: rgba(255,255,255,0.85); white-space: nowrap; display: flex; align-items: center; gap: 18px; }
        .mdot { width: 7px; height: 7px; border-radius: 50%; background: rgba(255,255,255,0.4); }

        /* ── PROGRAMS ── */
        .programs-section { padding: 100px 6%; background: var(--dark2); }
        .prog-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 56px; flex-wrap: wrap; gap: 20px; }
        .sec-sub { font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.5); font-weight: 500; max-width: 460px; }
        .prog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .prog-card {
          border-radius: 22px; overflow: hidden; position: relative;
          aspect-ratio: 3/4; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s;
        }
        .prog-card:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 40px 80px rgba(0,0,0,0.6); }
        .prog-emoji { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 100px; transition: transform 0.4s; }
        .prog-card:hover .prog-emoji { transform: scale(1.12); }
        .prog-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 55%); }
        .prog-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 28px; }
        .prog-tag { display: inline-block; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; border-radius: 40px; margin-bottom: 10px; backdrop-filter: blur(6px); }
        .prog-name { font-family: 'Bebas Neue', sans-serif; font-size: 32px; letter-spacing: 1px; line-height: 1; margin-bottom: 6px; }
        .prog-desc { font-size: 12px; color: rgba(255,255,255,0.6); line-height: 1.5; font-weight: 500; margin-bottom: 18px; }
        .prog-price { display: flex; align-items: center; justify-content: space-between; }
        .prog-price-num { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: var(--yellow); }
        .prog-btn { width: 40px; height: 40px; border-radius: 50%; background: var(--yellow); display: flex; align-items: center; justify-content: center; color: var(--dark); font-size: 18px; font-weight: 900; border: none; cursor: pointer; transition: transform 0.2s; }
        .prog-card:hover .prog-btn { transform: scale(1.1); }

        /* ── TESTIMONIALS ── */
        .testi-section { padding: 100px 6%; background: var(--dark); }
        .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-top: 56px; }
        .testi-card {
          background: var(--glass); border: 1px solid var(--glass-border); border-radius: 22px; padding: 32px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .testi-card:hover { border-color: rgba(11,47,255,0.4); transform: translateY(-5px); }
        .testi-stars { font-size: 15px; letter-spacing: 2px; color: var(--yellow); margin-bottom: 14px; }
        .testi-text { font-size: 14px; line-height: 1.7; color: rgba(255,255,255,0.72); margin-bottom: 24px; font-weight: 500; }
        .testi-author { display: flex; align-items: center; gap: 12px; }
        .testi-av { width: 42px; height: 42px; border-radius: 50%; background: linear-gradient(135deg, var(--blue), var(--pink)); display: flex; align-items: center; justify-content: center; font-family: 'Bebas Neue', sans-serif; font-size: 16px; flex-shrink: 0; }
        .testi-name { font-size: 14px; font-weight: 800; }
        .testi-role { font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }

        /* ── CTA ── */
        .cta-section { padding: 110px 6%; position: relative; overflow: hidden; background: var(--dark2); text-align: center; }
        .cta-glow { position: absolute; width: 600px; height: 300px; border-radius: 50%; background: linear-gradient(135deg, var(--blue), var(--pink)); filter: blur(100px); opacity: 0.13; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
        .cta-content { position: relative; z-index: 2; }
        .cta-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(52px,9vw,120px); line-height: 0.92; letter-spacing: 2px; margin-bottom: 20px; }
        .cta-title span { color: var(--yellow); }
        .cta-sub { font-size: 17px; color: rgba(255,255,255,0.55); line-height: 1.6; max-width: 480px; margin: 0 auto 40px; font-weight: 500; }
        .cta-btns { display: flex; gap: 18px; justify-content: center; flex-wrap: wrap; }

        /* ── FOOTER ── */
        footer { background: var(--dark); border-top: 1px solid var(--glass-border); padding: 56px 6% 36px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 56px; margin-bottom: 56px; }
        .footer-logo-text { font-family: 'Bebas Neue', sans-serif; font-size: 30px; letter-spacing: 2px; background: linear-gradient(90deg, var(--blue), var(--pink)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 14px; display: block; }
        .footer-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.7; font-weight: 500; max-width: 240px; }
        .footer-col h4 { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 18px; color: rgba(255,255,255,0.85); }
        .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-col ul li a { font-size: 13px; color: rgba(255,255,255,0.4); text-decoration: none; font-weight: 500; cursor: pointer; transition: color 0.2s; }
        .footer-col ul li a:hover { color: #fff; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 28px; border-top: 1px solid var(--glass-border); flex-wrap: wrap; gap: 12px; }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.28); font-weight: 500; }

        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .prog-grid { grid-template-columns: 1fr 1fr; }
          .testi-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .prog-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .hero-stats { gap: 20px; }
          .hs-sep { display: none; }
        }
      `}</style>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-glow hg1" />
        <div className="hero-glow hg2" />
        <div className="hero-content">
          <div className="hero-badge"><div className="bdot" />50,000+ Members Strong</div>
          <div className="hero-h">
            <span>Train</span>
            <span className="bl">Hard.</span>
            <span className="pk">Live Bold.</span>
          </div>
          <p className="hero-sub">Real programs. Expert coaches. Unstoppable results. Choose your workout and start your transformation today.</p>
          <div className="hero-actions">
            <button className="btn-yellow" onClick={scrollToPrograms}>Browse Programs</button>
            <button className="btn-outline">Watch Intro</button>
          </div>
          <div className="hero-stats">
            <div><div className="hs-num">50K+</div><div className="hs-label">Members</div></div>
            <div className="hs-sep" />
            <div><div className="hs-num">6</div><div className="hs-label">Programs</div></div>
            <div className="hs-sep" />
            <div><div className="hs-num">4.9★</div><div className="hs-label">Rating</div></div>
            <div className="hs-sep" />
            <div><div className="hs-num">12yrs</div><div className="hs-label">Experience</div></div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {['Strength Training','Cardio Blast','Yoga & Mindfulness','HIIT Extreme','Pilates Core','Boxing Fitness',
            'Strength Training','Cardio Blast','Yoga & Mindfulness','HIIT Extreme','Pilates Core','Boxing Fitness'].map((item, i) => (
            <div key={i} className="marquee-item"><span>{item}</span><div className="mdot" /></div>
          ))}
        </div>
      </div>

      {/* Programs */}
      <section className="programs-section" id="programs" ref={programsRef}>
        <div className="prog-header">
          <div>
            <div className="sec-label">6 Programs Available</div>
            <div className="sec-title">Choose Your<br />Workout</div>
          </div>
          <p className="sec-sub">Every program includes a full 4-week plan, nutrition guide, and expert coaching tips.</p>
        </div>
        <div className="prog-grid">
          {programKeys.map(key => {
            const p = programs[key]
            return (
              <div key={key} className={`prog-card ${p.bgClass}`} onClick={() => navigate(`/workouts/${key}`)}>
                <div className="prog-emoji">{p.emoji}</div>
                <div className="prog-overlay" />
                <div className="prog-info">
                  <div className="prog-tag">{p.tag}</div>
                  <div className="prog-name">{p.name}</div>
                  <p className="prog-desc">{p.desc}</p>
                  <div className="prog-price">
                    <div className="prog-price-num">$29</div>
                    <button className="prog-btn">→</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testi-section" id="testimonials">
        <div style={{ textAlign: 'center' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>Real People. Real Results.</div>
          <div className="sec-title">Members Love It</div>
        </div>
        <div className="testi-grid">
          {[
            { initials: 'SJ', name: 'Sarah J.', role: 'HIIT Extreme', text: "I lost 28 pounds in 6 weeks on the HIIT Extreme program. The workouts are intense but the results are insane. Best investment I've ever made in myself." },
            { initials: 'MR', name: 'Marcus R.', role: 'Strength Builder', text: "The Strength Builder program added 40lbs to my bench in 4 weeks. The progressive overload system actually works. I'm hooked for life." },
            { initials: 'AL', name: 'Aisha L.', role: 'Yoga Flow', text: "Yoga Flow changed my life. My back pain is gone, my stress is down, and I finally sleep through the night. Worth every single penny." },
          ].map((t, i) => (
            <div key={i} className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-av">{t.initials}</div>
                <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-glow" />
        <div className="cta-content">
          <div className="cta-title">No Excuses.<br /><span>Only Gains.</span></div>
          <p className="cta-sub">Pick a program, make the commitment, and watch yourself transform. Your strongest self is waiting.</p>
          <div className="cta-btns">
            <button className="btn-yellow" onClick={scrollToPrograms}>Pick Your Program</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div>
            <span className="footer-logo-text">Workouts R Us</span>
            <p className="footer-desc">Real programs. Real coaches. Real results. Your transformation starts here.</p>
          </div>
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              {programKeys.map(k => <li key={k}><a onClick={() => navigate(`/workouts/${k}`)}>{programs[k].name}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul><li><a>About Us</a></li><li><a>Our Coaches</a></li><li><a>Blog</a></li><li><a>Careers</a></li></ul>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <ul><li><a>Help Center</a></li><li><a>Contact Us</a></li><li><a>Community</a></li></ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Workouts R Us. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
