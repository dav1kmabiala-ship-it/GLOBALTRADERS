import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { modules, allLessonIds } from '../data/index.js'

const Icon = ({ path, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {path}
  </svg>
)

const icons = {
  dashboard: <><rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" /></>,
  modules: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></>,
  concepts: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></>,
  charts: <><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 5-7" /></>,
  exercises: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M9 13l2 2 4-4" /></>,
  journal: <><path d="M12 6.253v13" /><path d="M12 6.253c2.376-.83 4.5-1.253 6.5-1.253 1.374 0 2.5.281 3.5.753v13c-1-.472-2.126-.753-3.5-.753-2 0-4.124.423-6.5 1.253-2.376-.83-4.5-1.253-6.5-1.253-1.374 0-2.5.281-3.5.753v-13c1-.472 2.126-.753 3.5-.753 2 0 4.124.423 6.5 1.253z" /></>,
  favorites: <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
  home: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></>,
}

// ATC candlestick logo SVG
const ATCLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    {/* Candlestick chart icon */}
    <rect x="4" y="8" width="3" height="8" rx="0.5" fill="#FFFFFF" />
    <line x1="5.5" y1="5" x2="5.5" y2="8" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="5.5" y1="16" x2="5.5" y2="19" stroke="#FFFFFF" strokeWidth="1" />
    <rect x="10.5" y="5" width="3" height="10" rx="0.5" fill="#FFFFFF" opacity="0.85" />
    <line x1="12" y1="3" x2="12" y2="5" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="12" y1="15" x2="12" y2="18" stroke="#FFFFFF" strokeWidth="1" />
    <rect x="17" y="10" width="3" height="6" rx="0.5" fill="#FFFFFF" opacity="0.7" />
    <line x1="18.5" y1="7" x2="18.5" y2="10" stroke="#FFFFFF" strokeWidth="1" />
    <line x1="18.5" y1="16" x2="18.5" y2="19" stroke="#FFFFFF" strokeWidth="1" />
  </svg>
)

export function Sidebar({ progress, open, onClose }) {
  const location = useLocation()
  const totalProgress = progress.getTotalProgress(allLessonIds)

  const navItems = [
    { to: '/dashboard', label: 'Vue d\'ensemble', icon: icons.dashboard },
    { to: '/modules', label: 'Tous les modules', icon: icons.modules },
    { to: '/concepts', label: 'Bibliothèque de concepts', icon: icons.concepts },
    { to: '/charts', label: 'Graphiques pédagogiques', icon: icons.charts },
    { to: '/exercises', label: 'Exercices et quiz', icon: icons.exercises },
    { to: '/journal', label: 'Journal de trading', icon: icons.journal },
    { to: '/favoris', label: 'Favoris', icon: icons.favorites },
    { to: '/parametres', label: 'Paramètres', icon: icons.settings },
  ]

  return (
    <>
      <div className={`sidebar-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" onClick={onClose} style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <div className="sidebar-logo"><ATCLogo /></div>
            <div>
              <div className="sidebar-title">ATC Learn Track</div>
              <div className="sidebar-subtitle">AFRITRADINGCAPITAL</div>
            </div>
          </Link>
        </div>

        <div className="sidebar-nav">
          <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={onClose}>
            <span className="sidebar-link-icon"><Icon path={icons.home} /></span> Accueil
          </Link>

          <div className="sidebar-section-label">Navigation</div>
          {navItems.map(item => (
            <Link
              key={item.to}
              to={item.to}
              className={`sidebar-link ${location.pathname.startsWith(item.to) ? 'active' : ''}`}
              onClick={onClose}
            >
              <span className="sidebar-link-icon"><Icon path={item.icon} /></span> {item.label}
            </Link>
          ))}

          <div className="sidebar-section-label">Modules</div>
          {modules.map(m => {
            const moduleLessonIds = m.lessons.map(l => l.id)
            const modProgress = progress.getProgress(moduleLessonIds)
            return (
              <Link
                key={m.id}
                to={`/module/${m.id}`}
                className={`sidebar-module-item ${location.pathname.startsWith(`/module/${m.id}`) ? 'active' : ''}`}
                onClick={onClose}
              >
                <span className="sidebar-module-num">M{m.number}</span>
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.title}</span>
                {modProgress > 0 && <span style={{ fontSize: 10, color: 'var(--success)' }}>{modProgress}%</span>}
              </Link>
            )
          })}
        </div>

        <div className="sidebar-progress">
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Progression globale</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${totalProgress}%` }} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4, color: 'var(--text-primary)' }}>{totalProgress}%</div>
        </div>
      </div>
    </>
  )
}
