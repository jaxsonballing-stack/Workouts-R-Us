import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const tabs = [
  { path: '/', label: 'Home', icon: '🏠' },
  { path: '/workouts', label: 'Workouts', icon: '🏋️' },
  { path: '/me', label: 'Me', icon: '👤' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 200;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: rgba(8,8,15,0.92);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .nav-tab {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          padding: 8px 24px;
          border-radius: 16px;
          border: none;
          background: transparent;
          transition: background 0.2s;
          flex: 1;
        }
        .nav-tab:hover { background: rgba(255,255,255,0.05); }
        .nav-tab-icon { font-size: 22px; transition: transform 0.2s; }
        .nav-tab.active .nav-tab-icon { transform: scale(1.15); }
        .nav-tab-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
          transition: color 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-tab.active .nav-tab-label {
          background: linear-gradient(135deg, #0b2fff, #ff3ba7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .nav-tab-indicator {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0b2fff, #ff3ba7);
          opacity: 0;
          transition: opacity 0.2s;
          margin-top: 2px;
        }
        .nav-tab.active .nav-tab-indicator { opacity: 1; }
      `}</style>
      <nav className="bottom-nav">
        {tabs.map(tab => {
          const isActive = location.pathname === tab.path
          return (
            <button
              key={tab.path}
              className={`nav-tab${isActive ? ' active' : ''}`}
              onClick={() => navigate(tab.path)}
            >
              <span className="nav-tab-icon">{tab.icon}</span>
              <span className="nav-tab-label">{tab.label}</span>
              <div className="nav-tab-indicator" />
            </button>
          )
        })}
      </nav>
    </>
  )
}
