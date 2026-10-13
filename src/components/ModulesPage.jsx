import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { modules, moduleLevels } from '../data/index.js'

const difficultyMap = {
  basics: 1,
  advanced: 3,
  risk: 2,
  psych: 2,
  practice: 2,
}

const badgeLabels = {
  basics: 'Bases',
  advanced: 'Avancé',
  risk: 'Risque',
  psych: 'Psychologie',
  practice: 'Pratique',
}

export function ModulesPage({ progress }) {
  const navigate = useNavigate()

  return (
    <div className="modules-page main-content--padded">
      <h1 className="page-title">Tous les modules</h1>
      <p className="page-subtitle">Parcours structuré en 4 niveaux, des fondamentaux aux Smart Money Concepts.</p>

      {moduleLevels.map(level => {
        const levelModules = level.moduleIds.map(id => modules.find(m => m.id === id)).filter(Boolean)
        const levelLessonIds = levelModules.flatMap(m => m.lessons.map(l => l.id))
        const levelProgress = progress.getProgress(levelLessonIds)

        return (
          <div key={level.level} className="level-section">
            <div className="level-header">
              <span className={`badge-level badge-level-${level.level}`}>
                Niveau {level.level}
              </span>
              <span className="level-header-title">{level.title}</span>
              <span className="level-header-line" />
              <span style={{ fontSize: 13, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{levelProgress}%</span>
            </div>
            <p className="level-header-desc">{level.description}</p>

            <div className="module-grid">
              {levelModules.map(m => {
                const moduleLessonIds = m.lessons.map(l => l.id)
                const modProgress = progress.getProgress(moduleLessonIds)
                const difficulty = difficultyMap[m.badge] || 2

                return (
                  <div
                    key={m.id}
                    className="module-card-v2"
                    onClick={() => navigate(`/module/${m.id}`)}
                  >
                    <div className="module-card-v2-top">
                      <span className="module-card-v2-num">Module {m.number}</span>
                      <div className="module-card-v2-difficulty">
                        {[1, 2, 3].map(d => (
                          <span key={d} className={`difficulty-dot ${d <= difficulty ? 'active' : ''}`} />
                        ))}
                      </div>
                    </div>
                    <div className="module-card-v2-title">{m.title}</div>
                    <div className="module-card-v2-desc">{m.description}</div>
                    <div className="module-card-v2-meta">
                      <span className="module-card-v2-lessons">📚 {m.lessons.length} leçons</span>
                      <span className={`badge badge-${m.badge}`}>{badgeLabels[m.badge] || m.badge}</span>
                    </div>
                    <div className="module-card-v2-progress-bar">
                      <div className="module-card-v2-progress-fill" style={{ width: `${modProgress}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function ModulePage({ progress }) {
  const navigate = useNavigate()
  const { moduleId } = useParams()
  const module = modules.find(m => m.id === moduleId)

  if (!module) {
    return <div className="main-content--padded"><h1>Module introuvable</h1></div>
  }

  const moduleLessonIds = module.lessons.map(l => l.id)
  const modProgress = progress.getProgress(moduleLessonIds)
  const level = moduleLevels.find(l => l.moduleIds.includes(module.id))

  return (
    <div className="main-content--padded">
      <div className="module-header">
        {level && <span className={`badge-level badge-level-${level.level}`} style={{ marginBottom: 12 }}>Niveau {level.level} — {level.title}</span>}
        <div className="module-card-num" style={{ marginBottom: 8 }}>Module {module.number}</div>
        <h1>{module.title}</h1>
        <p className="module-intro">{module.intro}</p>
        <div className="objectives-list">
          {module.objectives.map((obj, i) => (
            <span key={i} className="objective-tag">{obj}</span>
          ))}
        </div>
        <div style={{ marginTop: 16 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 4 }}>
            Progression du module : {modProgress}% ({module.lessons.filter(l => progress.completed[l.id]).length}/{module.lessons.length})
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${modProgress}%` }} />
          </div>
        </div>
      </div>

      <h3 style={{ marginBottom: 16, fontSize: 18 }}>Sommaire — Cliquez sur une leçon</h3>
      <div className="lesson-nav" style={{ flexDirection: 'column' }}>
        {module.lessons.map((lesson, i) => (
          <button
            key={lesson.id}
            className={`lesson-nav-item ${progress.completed[lesson.id] ? 'completed' : ''}`}
            style={{ width: '100%', textAlign: 'left' }}
            onClick={() => navigate(`/lesson/${lesson.id}`)}
          >
            <span style={{ color: 'var(--text-muted)', minWidth: 28 }}>{i + 1}.</span>
            {lesson.title}
          </button>
        ))}
      </div>
    </div>
  )
}
