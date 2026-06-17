import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function SignupPage() {
  const navigate = useNavigate()
  const { signUp } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!fullName || !email || !password || !confirm) { setError('Please fill in all fields.'); return }
    if (password !== confirm) { setError('Passwords do not match.'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    try {
      await signUp(email, password, fullName)
      navigate('/me')
    } catch (err) {
      setError(err.message || 'Failed to create account.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--dark2)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <style>{`
        .auth-card {
          width: 100%;
          max-width: 440px;
          background: var(--glass);
          border: 1px solid var(--glass-border);
          border-radius: 28px;
          padding: 48px 40px;
          position: relative;
        }
        .auth-logo {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 28px;
          letter-spacing: 2px;
          background: linear-gradient(90deg, var(--blue), var(--pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          text-align: center;
          margin-bottom: 32px;
        }
        .auth-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 48px;
          letter-spacing: 2px;
          text-align: center;
          margin-bottom: 8px;
          line-height: 1;
        }
        .auth-sub {
          text-align: center;
          color: rgba(255,255,255,0.45);
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 36px;
        }
        .auth-submit {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, var(--blue), var(--pink));
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: 15px;
          letter-spacing: 2px;
          text-transform: uppercase;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          margin-top: 8px;
          box-shadow: 0 8px 36px rgba(255,59,167,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .auth-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 14px 44px rgba(255,59,167,0.5); }
        .auth-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .auth-footer {
          text-align: center;
          margin-top: 28px;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
        }
        .auth-footer a {
          color: var(--pink);
          text-decoration: none;
          font-weight: 700;
        }
        .auth-footer a:hover { text-decoration: underline; }
        .auth-glow {
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--pink));
          filter: blur(100px);
          opacity: 0.07;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }
        .auth-content { position: relative; z-index: 1; }
      `}</style>

      <div className="auth-card">
        <div className="auth-glow" />
        <div className="auth-content">
          <span className="auth-logo">Workouts R Us</span>
          <div className="auth-title">Join the Movement</div>
          <p className="auth-sub">Create your account and start training</p>

          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Jane Smith"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                placeholder="Min. 6 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                className="form-input"
                type="password"
                placeholder="••••••••"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <button className="auth-submit" type="submit" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
