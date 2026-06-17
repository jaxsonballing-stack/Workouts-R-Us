import React from 'react'
import { useNavigate } from 'react-router-dom'
import { programs } from '../data/programs'

const programKeys = Object.keys(programs)

export default function WorkoutsPage() {
  const navigate = useNavigate()

  return (
    <div className="page-with-nav">
      <style>{`
        .workouts-page {
          min-height: 100vh;
          background: var(--dark2);
          padding: 60px 6% 40px;
        }
        .workouts-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .workouts-prog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          max-width: 1200px;
          margin: 0 auto;
        }
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

        @media (max-width: 900px) { .workouts-prog-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .workouts-prog-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="workouts-page">
        <div className="workouts-header">
          <div className="sec-label" style={{ justifyContent: 'center' }}>6 Programs Available</div>
          <div className="sec-title">Choose Your Workout</div>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '460px', margin: '0 auto' }}>
            Every program includes a full 4-week plan, nutrition guide, and expert coaching tips.
          </p>
        </div>

        <div className="workouts-prog-grid">
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
      </div>
    </div>
  )
}
