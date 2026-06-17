import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { programs } from '../data/programs'

const DAY_NAMES = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

function DayCard({ day, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`day-card${open ? ' open' : ''}`}>
      <div className="day-header" onClick={() => setOpen(!open)}>
        <div className="day-header-left">
          <div className="day-num">0{index + 1}</div>
          <div className="day-info">
            <div className="day-name">{DAY_NAMES[index]} — {day.name}</div>
            <div className="day-meta">{day.focus}</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="day-tags">
            {day.tags.map(t => <span key={t} className="day-tag">{t}</span>)}
          </div>
          <div className="day-chevron">⌄</div>
        </div>
      </div>
      {open && (
        <div className="day-body">
          {day.rest ? (
            <div className="rest-day">
              <span>🛌</span>
              Rest and recovery is where progress happens. Sleep well, eat clean, and come back stronger tomorrow.
            </div>
          ) : (
            <div className="exercises-list">
              {day.exercises.map((ex, ei) => (
                <div key={ei} className="exercise-item">
                  <div className="ex-num">{ei + 1}</div>
                  <div className="ex-info">
                    <div className="ex-name">{ex.n}</div>
                    {ex.detail && <div className="ex-detail">{ex.detail}</div>}
                  </div>
                  <div className="ex-badge">{ex.badge}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function WorkoutDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeWeek, setActiveWeek] = useState(1)

  const program = programs[id]

  if (!program) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--dark)' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>Program not found.</p>
          <button className="btn-gradient" onClick={() => navigate('/workouts')}>Back to Workouts</button>
        </div>
      </div>
    )
  }

  const weekData = program.weeks[activeWeek]

  return (
    <div style={{ background: 'var(--dark)', minHeight: '100vh' }}>
      <style>{`
        .workout-wrap { padding: 32px 6% 80px; max-width: 1100px; margin: 0 auto; }
        .back-btn {
          display: inline-flex; align-items: center; gap: 8px;
          color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; margin-bottom: 36px; transition: color 0.2s; border: none; background: none;
        }
        .back-btn:hover { color: #fff; }
        .workout-hero {
          background: linear-gradient(160deg, var(--blue), #6a11cb, var(--pink));
          border-radius: 28px; padding: 56px; margin-bottom: 56px;
          position: relative; overflow: hidden;
          box-shadow: 0 32px 80px rgba(255,59,167,0.25);
        }
        .wh-bg-text { position: absolute; right: -20px; top: -20px; font-family: 'Bebas Neue', sans-serif; font-size: 200px; color: rgba(255,255,255,0.05); letter-spacing: 4px; line-height: 1; pointer-events: none; }
        .wh-top { display: flex; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; gap: 24px; }
        .wh-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.18); border: 1px solid rgba(255,255,255,0.3); border-radius: 50px; padding: 7px 18px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; backdrop-filter: blur(8px); }
        .wh-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(52px,7vw,88px); letter-spacing: 2px; line-height: 0.95; margin-bottom: 16px; }
        .wh-sub { font-size: 16px; color: rgba(255,255,255,0.75); line-height: 1.6; font-weight: 500; max-width: 540px; }
        .wh-meta { display: flex; gap: 24px; margin-top: 32px; flex-wrap: wrap; }
        .wh-meta-item { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.75); }
        .wh-success-badge { background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 16px; padding: 20px 24px; text-align: center; flex-shrink: 0; }
        .wsb-icon { font-size: 40px; margin-bottom: 8px; }
        .wsb-text { font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.75); }

        .week-tabs { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
        .week-tab {
          padding: 10px 22px; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          border: 1px solid var(--glass-border); background: var(--glass); color: rgba(255,255,255,0.5);
          cursor: pointer; transition: all 0.2s;
        }
        .week-tab.active, .week-tab:hover {
          background: linear-gradient(135deg, var(--blue), var(--pink));
          border-color: transparent; color: #fff;
        }

        .days-grid { display: flex; flex-direction: column; gap: 20px; }
        .day-card {
          background: var(--glass); border: 1px solid var(--glass-border); border-radius: 20px; overflow: hidden;
          transition: border-color 0.3s;
        }
        .day-card.open { border-color: rgba(255,59,167,0.35); }
        .day-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 28px; cursor: pointer; }
        .day-header-left { display: flex; align-items: center; gap: 18px; }
        .day-num { font-family: 'Bebas Neue', sans-serif; font-size: 40px; color: var(--pink); line-height: 1; min-width: 48px; }
        .day-name { font-size: 17px; font-weight: 800; margin-bottom: 4px; }
        .day-meta { font-size: 12px; color: rgba(255,255,255,0.45); font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
        .day-tags { display: flex; gap: 8px; flex-wrap: wrap; }
        .day-tag { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); border-radius: 40px; padding: 4px 12px; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .day-chevron { font-size: 20px; color: rgba(255,255,255,0.4); transition: transform 0.3s; }
        .day-card.open .day-chevron { transform: rotate(180deg); }
        .day-body { padding: 0 28px 28px; }

        .exercises-list { display: flex; flex-direction: column; gap: 14px; }
        .exercise-item {
          display: grid; grid-template-columns: 48px 1fr auto; align-items: center; gap: 16px;
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px; padding: 16px 20px;
        }
        .ex-num { font-family: 'Bebas Neue', sans-serif; font-size: 28px; color: rgba(255,255,255,0.2); line-height: 1; text-align: center; }
        .ex-name { font-size: 15px; font-weight: 800; margin-bottom: 4px; }
        .ex-detail { font-size: 12px; color: rgba(255,255,255,0.45); font-weight: 600; }
        .ex-badge { background: linear-gradient(135deg, var(--blue), var(--pink)); border-radius: 8px; padding: 6px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; white-space: nowrap; }
        .rest-day {
          text-align: center; padding: 32px;
          background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); border-radius: 14px;
          color: rgba(255,255,255,0.35); font-size: 15px; font-weight: 600;
        }
        .rest-day span { font-size: 36px; display: block; margin-bottom: 10px; }

        .nutrition-section { margin-top: 56px; }
        .nutrition-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 28px; }
        .nutr-card {
          background: var(--glass); border: 1px solid var(--glass-border); border-radius: 18px; padding: 28px;
          transition: border-color 0.3s;
        }
        .nutr-card:hover { border-color: rgba(255,59,167,0.3); }
        .nutr-icon { font-size: 36px; margin-bottom: 14px; }
        .nutr-title { font-size: 16px; font-weight: 800; margin-bottom: 8px; }
        .nutr-text { font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.6; font-weight: 500; }

        .tips-section { margin-top: 56px; background: linear-gradient(135deg,rgba(11,47,255,0.15),rgba(255,59,167,0.1)); border: 1px solid rgba(255,59,167,0.2); border-radius: 22px; padding: 44px; }
        .tips-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 20px; margin-top: 28px; }
        .tip-item { display: flex; gap: 14px; }
        .tip-icon { width: 40px; height: 40px; border-radius: 12px; background: rgba(255,223,0,0.15); border: 1px solid rgba(255,223,0,0.25); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .tip-text h4 { font-size: 14px; font-weight: 800; margin-bottom: 4px; }
        .tip-text p { font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.5; font-weight: 500; }

        @media (max-width: 900px) {
          .nutrition-grid { grid-template-columns: 1fr; }
          .tips-grid { grid-template-columns: 1fr; }
          .wh-top { flex-direction: column; }
          .exercise-item { grid-template-columns: 36px 1fr auto; }
          .day-tags { display: none; }
        }
        @media (max-width: 600px) {
          .workout-hero { padding: 32px 24px; }
          .workout-wrap { padding: 24px 4% 80px; }
        }
      `}</style>

      <div className="workout-wrap">
        <button className="back-btn" onClick={() => navigate('/workouts')}>← Back to Programs</button>

        <div className="workout-hero">
          <div className="wh-bg-text">{program.name.toUpperCase().split(' ')[0]}</div>
          <div className="wh-top">
            <div>
              <div className="wh-badge">✅ 4-Week Program · Lifetime Access</div>
              <div className="wh-title">{program.name}</div>
              <p className="wh-sub">{program.desc}</p>
              <div className="wh-meta">
                {program.meta.map((m, i) => (
                  <div key={i} className="wh-meta-item"><span>{m}</span></div>
                ))}
              </div>
            </div>
            <div className="wh-success-badge">
              <div className="wsb-icon">{program.emoji}</div>
              <div className="wsb-text">Your Program<br />Awaits!</div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div className="sec-label">Your 4-Week Plan</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', marginBottom: '24px' }}>Weekly Schedule</div>
        </div>

        <div className="week-tabs">
          {[1, 2, 3, 4].map(w => (
            <button
              key={w}
              className={`week-tab${activeWeek === w ? ' active' : ''}`}
              onClick={() => setActiveWeek(w)}
            >
              Week {w} — {program.weeks[w].label}
            </button>
          ))}
        </div>

        <div className="days-grid">
          {weekData.days.map((day, i) => (
            <DayCard key={i} day={day} index={i} />
          ))}
        </div>

        <div className="nutrition-section">
          <div className="sec-label">Fuel Your Training</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px' }}>Nutrition Guide</div>
          <div className="nutrition-grid">
            {program.nutrition.map((n, i) => (
              <div key={i} className="nutr-card">
                <div className="nutr-icon">{n.icon}</div>
                <div className="nutr-title">{n.title}</div>
                <p className="nutr-text">{n.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tips-section">
          <div className="sec-label">Expert Advice</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', marginBottom: '8px' }}>Pro Tips</div>
          <div className="tips-grid">
            {program.tips.map((t, i) => (
              <div key={i} className="tip-item">
                <div className="tip-icon">{t.icon}</div>
                <div className="tip-text"><h4>{t.title}</h4><p>{t.text}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <button className="btn-yellow" onClick={() => navigate('/workouts')}>← Explore More Programs</button>
        </div>
      </div>
    </div>
  )
}
