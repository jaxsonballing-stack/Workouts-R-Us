import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const FITNESS_GOALS = ['Lose Weight', 'Build Muscle', 'Improve Endurance', 'Get Flexible', 'General Fitness']

export default function ProfilePage() {
  const { user, profile, signOut, updateProfile, loading } = useAuth()
  const navigate = useNavigate()

  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const [form, setForm] = useState({
    full_name: profile?.full_name || '',
    username: profile?.username || '',
    bio: profile?.bio || '',
    fitness_goal: profile?.fitness_goal || '',
  })

  React.useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || '',
        username: profile.username || '',
        bio: profile.bio || '',
        fitness_goal: profile.fitness_goal || '',
      })
    }
  }, [profile])

  async function handleSignOut() {
    try {
      await signOut()
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    if (!form.full_name.trim()) { setError('Name is required.'); return }
    setSaving(true)
    setError('')
    setSuccess('')
    try {
      await updateProfile(form)
      setSuccess('Profile updated!')
      setEditing(false)
    } catch (err) {
      setError(err.message || 'Failed to save profile.')
    } finally {
      setSaving(false)
    }
  }

  function handleCancel() {
    setEditing(false)
    setError('')
    setForm({
      full_name: profile?.full_name || '',
      username: profile?.username || '',
      bio: profile?.bio || '',
      fitness_goal: profile?.fitness_goal || '',
    })
  }

  if (loading) return <div className="page-with-nav"><div className="spinner" /></div>

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User'
  const initials = displayName.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'Recently'

  return (
    <div className="page-with-nav" style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <style>{`
        .profile-wrap { max-width: 680px; margin: 0 auto; padding: 40px 6% 40px; }

        .profile-header {
          background: linear-gradient(160deg, var(--blue), #6a11cb, var(--pink));
          border-radius: 28px; padding: 40px;
          display: flex; align-items: center; gap: 28px;
          margin-bottom: 28px; position: relative; overflow: hidden;
          flex-wrap: wrap;
        }
        .profile-header-bg {
          position: absolute; right: -20px; top: -20px;
          font-family: 'Bebas Neue', sans-serif; font-size: 140px;
          color: rgba(255,255,255,0.05); letter-spacing: 4px; pointer-events: none;
        }
        .profile-avatar {
          width: 84px; height: 84px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: 3px solid rgba(255,255,255,0.35);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Bebas Neue', sans-serif; font-size: 32px;
          flex-shrink: 0; position: relative; z-index: 1;
        }
        .profile-header-info { position: relative; z-index: 1; }
        .profile-display-name { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 1px; line-height: 1; margin-bottom: 4px; }
        .profile-username { font-size: 13px; color: rgba(255,255,255,0.65); font-weight: 600; margin-bottom: 8px; }
        .profile-goal-badge {
          display: inline-block;
          background: rgba(255,255,255,0.2); border: 1px solid rgba(255,255,255,0.3);
          border-radius: 40px; padding: 4px 14px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
        }

        .stats-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 28px; }
        .stat-card {
          background: var(--glass); border: 1px solid var(--glass-border); border-radius: 18px;
          padding: 20px; text-align: center;
        }
        .stat-value {
          font-family: 'Bebas Neue', sans-serif; font-size: 28px;
          background: linear-gradient(135deg, var(--blue), var(--pink));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          margin-bottom: 4px;
        }
        .stat-label { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.4); }

        .profile-section {
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: 22px; padding: 32px; margin-bottom: 20px;
        }
        .section-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .section-title { font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 1px; }
        .edit-btn {
          background: var(--glass); border: 1px solid var(--glass-border);
          color: #fff; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          padding: 8px 20px; border-radius: 50px; cursor: pointer; transition: border-color 0.2s;
        }
        .edit-btn:hover { border-color: var(--pink); }

        .info-row { margin-bottom: 18px; }
        .info-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 4px; }
        .info-value { font-size: 15px; font-weight: 600; color: rgba(255,255,255,0.85); }
        .info-value.empty { color: rgba(255,255,255,0.25); font-style: italic; }

        .goal-select {
          width: 100%; padding: 14px 18px;
          background: var(--glass); border: 1px solid var(--glass-border);
          border-radius: 12px; color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500; outline: none;
          transition: border-color 0.2s;
          -webkit-appearance: none;
          appearance: none;
        }
        .goal-select:focus { border-color: rgba(255,59,167,0.6); }
        .goal-select option { background: #0f0f1e; color: #fff; }

        .form-actions { display: flex; gap: 12px; margin-top: 8px; }
        .save-btn {
          flex: 1; padding: 14px;
          background: linear-gradient(135deg, var(--blue), var(--pink));
          color: #fff; font-weight: 900; font-size: 13px; letter-spacing: 1.5px; text-transform: uppercase;
          border-radius: 50px; border: none; cursor: pointer;
          box-shadow: 0 4px 20px rgba(255,59,167,0.35);
          transition: transform 0.2s;
        }
        .save-btn:hover:not(:disabled) { transform: translateY(-1px); }
        .save-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .cancel-btn {
          padding: 14px 24px;
          background: transparent; border: 1px solid var(--glass-border);
          color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          border-radius: 50px; cursor: pointer; transition: border-color 0.2s;
        }
        .cancel-btn:hover { border-color: rgba(255,255,255,0.4); color: #fff; }

        .signout-btn {
          width: 100%; padding: 16px;
          background: rgba(255,59,59,0.1); border: 1px solid rgba(255,59,59,0.25);
          color: #ff6b6b; font-family: 'DM Sans', sans-serif; font-weight: 800; font-size: 14px;
          letter-spacing: 1.5px; text-transform: uppercase; border-radius: 50px; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .signout-btn:hover { background: rgba(255,59,59,0.18); border-color: rgba(255,59,59,0.45); }

        @media (max-width: 500px) {
          .profile-header { gap: 18px; }
          .stats-row { grid-template-columns: 1fr 1fr; }
          .profile-section { padding: 24px 20px; }
        }
      `}</style>

      <div className="profile-wrap">

        {/* Header card */}
        <div className="profile-header">
          <div className="profile-header-bg">ME</div>
          <div className="profile-avatar">{initials}</div>
          <div className="profile-header-info">
            <div className="profile-display-name">{displayName}</div>
            {profile?.username && <div className="profile-username">@{profile.username}</div>}
            {profile?.fitness_goal && <div className="profile-goal-badge">{profile.fitness_goal}</div>}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-value">6</div>
            <div className="stat-label">Programs</div>
          </div>
          <div className="stat-card">
            <div className="stat-value" style={{ fontSize: 16 }}>{memberSince.split(' ')[0]}</div>
            <div className="stat-label">{memberSince.split(' ')[1] || 'Member'}</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">🔥</div>
            <div className="stat-label">Active</div>
          </div>
        </div>

        {/* Messages */}
        {error && <div className="error-msg" style={{ marginBottom: 16 }}>{error}</div>}
        {success && <div className="success-msg" style={{ marginBottom: 16 }}>{success}</div>}

        {/* Profile info / edit form */}
        <div className="profile-section">
          <div className="section-head">
            <div className="section-title">Profile Info</div>
            {!editing && (
              <button className="edit-btn" onClick={() => { setEditing(true); setSuccess('') }}>Edit</button>
            )}
          </div>

          {editing ? (
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input" type="text" placeholder="Your Name"
                  value={form.full_name} onChange={e => setForm({ ...form, full_name: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Username</label>
                <input className="form-input" type="text" placeholder="your_username"
                  value={form.username} onChange={e => setForm({ ...form, username: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Bio</label>
                <input className="form-input" type="text" placeholder="Tell us about yourself..."
                  value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Fitness Goal</label>
                <select className="goal-select"
                  value={form.fitness_goal} onChange={e => setForm({ ...form, fitness_goal: e.target.value })}>
                  <option value="">Select a goal...</option>
                  {FITNESS_GOALS.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>
              <div className="form-actions">
                <button className="save-btn" type="submit" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
                <button className="cancel-btn" type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <div className="info-row">
                <div className="info-label">Full Name</div>
                <div className={`info-value${!profile?.full_name ? ' empty' : ''}`}>
                  {profile?.full_name || 'Not set'}
                </div>
              </div>
              <div className="info-row">
                <div className="info-label">Username</div>
                <div className={`info-value${!profile?.username ? ' empty' : ''}`}>
                  {profile?.username ? `@${profile.username}` : 'Not set'}
                </div>
              </div>
              <div className="info-row">
                <div className="info-label">Email</div>
                <div className="info-value">{user?.email}</div>
              </div>
              <div className="info-row">
                <div className="info-label">Bio</div>
                <div className={`info-value${!profile?.bio ? ' empty' : ''}`}>
                  {profile?.bio || 'No bio yet'}
                </div>
              </div>
              <div className="info-row" style={{ marginBottom: 0 }}>
                <div className="info-label">Fitness Goal</div>
                <div className={`info-value${!profile?.fitness_goal ? ' empty' : ''}`}>
                  {profile?.fitness_goal || 'Not set'}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sign out */}
        <div className="profile-section" style={{ padding: '24px 32px' }}>
          <button className="signout-btn" onClick={handleSignOut}>Sign Out</button>
        </div>

      </div>
    </div>
  )
}
