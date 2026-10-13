import React, { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { modules, allLessons, allLessonIds, getModuleByLessonId } from '../data/index.js'

export function DashboardPage({ progress }) {
  const navigate = useNavigate()

  const totalProgress = progress.getTotalProgress(allLessonIds)
  const completedCount = allLessonIds.filter(id => progress.completed[id]).length

  // Find last visited lesson (check notes for recent activity, or first incomplete)
  const lastLesson = useMemo(() => {
    // Check if any lesson has notes (proxy for "last visited")
    const notedLessons = Object.keys(progress.notes || {}).filter(id => progress.notes[id]?.trim())
    if (notedLessons.length > 0) {
      const lastId = notedLessons[notedLessons.length - 1]
      return allLessons.find(l => l.id === lastId)
    }
    // Return first incomplete lesson
    return allLessons.find(l => !progress.completed[l.id]) || allLessons[0]
  }, [progress.notes, progress.completed])

  const lastModule = lastLesson ? getModuleByLessonId(lastLesson.id) : null
  const moduleProgress = lastModule ? progress.getProgress(lastModule.lessons.map(l => l.id)) : 0

  // Next recommended lesson
  const nextLesson = useMemo(() => {
    return allLessons.find(l => !progress.completed[l.id]) || null
  }, [progress.completed])

  // Concept review cards
  const conceptReviews = [
    { name: 'BOS', desc: 'Break of Structure', module: 'm13', lesson: 'm13-l4' },
    { name: 'CHoCH', desc: 'Change of Character', module: 'm13', lesson: 'm13-l5' },
    { name: 'FVG', desc: 'Fair Value Gap', module: 'm15', lesson: 'm15-l1' },
    { name: 'Order Block', desc: 'Zone institutionnelle', module: 'm16', lesson: 'm16-l1' },
    { name: 'Breaker Block', desc: 'Inversion de rôle', module: 'm16', lesson: 'm16-l2' },
    { name: 'Liquidités', desc: 'BSL & SSL', module: 'm14', lesson: 'm14-l2' },
    { name: 'Liquidity Sweep', desc: 'Sweep & retournement', module: 'm14', lesson: 'm14-l4' },
    { name: 'PDH / PDL', desc: 'Previous Daily High/Low', module: 'm17', lesson: 'm17-l1' },
  ]

  // Activity stats
  const quizCount = allLessons.filter(l => l.sections?.some(s => s.type === 'quiz')).length
  const exerciseCount = allLessons.filter(l => l.sections?.some(s => s.type === 'exercise')).length

  // Circular progress
  const circumference = 2 * Math.PI * 52
  const dashOffset = circumference - (totalProgress / 100) * circumference

  return (
    <div className="dashboard main-content--padded">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-welcome">
          <h1>Bonjour 👋</h1>
          <p>Bienvenue dans ton espace d'apprentissage. Voici un aperçu de ta progression.</p>
        </div>
        <div className="dashboard-search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--text-muted)' }}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <input placeholder="Rechercher une leçon, un concept..." onKeyDown={e => { if (e.key === 'Enter') navigate('/concepts') }} />
        </div>
      </div>

      {/* Progress + Continue */}
      <div className="dashboard-grid">
        {/* Progress Card */}
        <div className="progress-card">
          <div className="progress-card-header">
            <div className="progress-card-title">Progression globale</div>
            <div className="progress-pct">{totalProgress}%</div>
          </div>
          <div className="progress-card-body">
            <div className="circular-progress">
              <svg width="120" height="120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                <circle
                  cx="60" cy="60" r="52" fill="none"
                  stroke="url(#gradAccent)" strokeWidth="6" strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  style={{ transition: 'stroke-dashoffset 1s var(--ease)' }}
                />
                <defs>
                  <linearGradient id="gradAccent" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E8B864" />
                    <stop offset="100%" stopColor="#D4A04C" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="circular-progress-text">{totalProgress}%</div>
            </div>
            <div className="progress-stats">
              <div className="progress-stat">
                <span className="progress-stat-label">Leçons terminées</span>
                <span className="progress-stat-value">{completedCount} / {allLessons.length}</span>
              </div>
              <div className="progress-stat">
                <span className="progress-stat-label">Prochain objectif</span>
                <span className="progress-stat-value">{nextLesson ? nextLesson.title : 'Toutes les leçons sont terminées 🎉'}</span>
              </div>
              <div className="progress-stat">
                <span className="progress-stat-label">Prochaine leçon recommandée</span>
                <span className="progress-stat-value">{nextLesson ? `M${getModuleByLessonId(nextLesson.id)?.number}` : '—'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Learning */}
        <div className="continue-card">
          <div className="continue-card-title">Reprendre</div>
          {lastLesson && lastModule ? (
            <>
              <div className="continue-lesson-info">
                <div className="continue-lesson-module">Module {lastModule.number} — {lastModule.title}</div>
                <div className="continue-lesson-title">{lastLesson.title}</div>
                <div className="continue-lesson-meta">
                  Progression du module : {moduleProgress}%
                </div>
                <div className="progress-bar-bg" style={{ marginBottom: 16 }}>
                  <div className="progress-bar-fill" style={{ width: `${moduleProgress}%` }} />
                </div>
              </div>
              <button className="btn btn-primary" onClick={() => navigate(`/lesson/${lastLesson.id}`)}>
                Continuer →
              </button>
            </>
          ) : (
            <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>Aucune leçon à reprendre.</div>
          )}
        </div>
      </div>

      {/* Concept Review */}
      <div className="concept-review-section">
        <div className="concept-review-header">
          <h3 style={{ fontSize: 17, fontWeight: 700 }}>Concepts à réviser</h3>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/concepts')}>Voir la bibliothèque →</button>
        </div>
        <div className="concept-review-grid">
          {conceptReviews.map(c => (
            <div key={c.name} className="concept-review-card" onClick={() => navigate(`/lesson/${c.lesson}`)}>
              <div className="concept-review-name">{c.name}</div>
              <div className="concept-review-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>Activité pédagogique</h3>
        <div className="activity-grid">
          <div className="activity-card">
            <div className="activity-card-num">{completedCount}</div>
            <div className="activity-card-label">Leçons terminées</div>
          </div>
          <div className="activity-card">
            <div className="activity-card-num">{quizCount}</div>
            <div className="activity-card-label">Quiz disponibles</div>
          </div>
          <div className="activity-card">
            <div className="activity-card-num">{exerciseCount}</div>
            <div className="activity-card-label">Exercices disponibles</div>
          </div>
          <div className="activity-card">
            <div className="activity-card-num">{modules.length}</div>
            <div className="activity-card-label">Modules au total</div>
          </div>
        </div>
      </div>
    </div>
  )
}
