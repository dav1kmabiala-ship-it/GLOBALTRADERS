import React, { useState, useMemo } from 'react'
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useProgress } from './hooks/useProgress.js'
import { LessonView } from './components/LessonView.jsx'
import { GlossaryPage } from './pages/GlossaryPage.jsx'
import { modules, allLessons, allLessonIds } from './data/index.js'

function Sidebar({ progress, open, onClose }) {
  const location = useLocation()
  const totalProgress = progress.getTotalProgress(allLessonIds)

  return (
    <>
      <div className={`sidebar-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">📈</div>
          <div>
            <div className="sidebar-title">GlobalTraders</div>
            <div className="sidebar-subtitle">Académie de Trading</div>
          </div>
        </div>

        <div className="sidebar-nav">
          <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`} onClick={onClose}>
            <span className="sidebar-link-icon">🏠</span> Accueil
          </Link>
          <Link to="/glossaire" className={`sidebar-link ${location.pathname === '/glossaire' ? 'active' : ''}`} onClick={onClose}>
            <span className="sidebar-link-icon">📖</span> Glossaire
          </Link>

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
          <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{totalProgress}%</div>
        </div>
      </div>
    </>
  )
}

function HomePage({ progress }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="home-hero">
        <h1>GlobalTraders Academy</h1>
        <p>
          Une académie de trading complète, progressive et visuelle. Apprenez les marchés financiers,
          l'analyse technique, les Smart Money Concepts et bien plus, à votre rythme.
        </p>
        <button className="btn btn-primary" onClick={() => navigate(`/module/${modules[0].id}`)}>
          Commencer la formation →
        </button>
        <div className="home-stats">
          <div className="home-stat">
            <div className="home-stat-num">{modules.length}</div>
            <div className="home-stat-label">Modules</div>
          </div>
          <div className="home-stat">
            <div className="home-stat-num">{allLessons.length}</div>
            <div className="home-stat-label">Leçons</div>
          </div>
          <div className="home-stat">
            <div className="home-stat-num">{progress.getTotalProgress(allLessonIds)}%</div>
            <div className="home-stat-label">Progression</div>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <strong>⚠️ Avertissement sur le risque :</strong> Le trading comporte un risque de perte en capital. Aucun concept technique, aucune stratégie et aucun indicateur présentés dans cette formation ne garantissent un résultat. Les exemples graphiques sont des illustrations pédagogiques synthétiques, non des données de marché réelles.
      </div>

      <h2 className="page-title" style={{ fontSize: 22, marginBottom: 20 }}>Parcours de formation</h2>
      <div className="module-grid">
        {modules.map(m => {
          const moduleLessonIds = m.lessons.map(l => l.id)
          const modProgress = progress.getProgress(moduleLessonIds)
          return (
            <div key={m.id} className="module-card" onClick={() => navigate(`/module/${m.id}`)}>
              <div className="module-card-num">Module {m.number}</div>
              <div className="module-card-title">{m.title}</div>
              <div className="module-card-desc">{m.description}</div>
              <div className="module-card-meta">
                <span>📚 {m.lessons.length} leçons</span>
                <span className={`badge badge-${m.badge}`}>{m.badge === 'basics' ? 'Bases' : m.badge === 'advanced' ? 'Avancé' : m.badge === 'risk' ? 'Risque' : m.badge === 'psych' ? 'Psychologie' : 'Pratique'}</span>
              </div>
              {modProgress > 0 && <div className="module-card-progress" style={{ width: `${modProgress}%` }} />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ModulePage({ progress }) {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const module = modules.find(m => m.id === moduleId)

  if (!module) {
    return <div><h1>Module introuvable</h1><Link to="/">← Retour à l'accueil</Link></div>
  }

  const moduleLessonIds = module.lessons.map(l => l.id)
  const modProgress = progress.getProgress(moduleLessonIds)

  return (
    <div>
      <div className="module-header">
        <div className="module-card-num">Module {module.number}</div>
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
          <Link
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className={`lesson-nav-item ${progress.completed[lesson.id] ? 'completed' : ''}`}
            style={{ width: '100%' }}
          >
            <span style={{ color: 'var(--text-muted)', minWidth: 28 }}>{i + 1}.</span>
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

function LessonPage({ progress }) {
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const lessonIndex = allLessons.findIndex(l => l.id === lessonId)
  const lesson = allLessons[lessonIndex]

  if (!lesson) {
    return <div><h1>Leçon introuvable</h1><Link to="/">← Retour à l'accueil</Link></div>
  }

  // Find module and lesson index within module
  const module = modules.find(m => m.lessons.some(l => l.id === lessonId))
  const lessonInModuleIndex = module.lessons.findIndex(l => l.id === lessonId)

  const prevLesson = lessonInModuleIndex > 0 ? module.lessons[lessonInModuleIndex - 1] : null
  const nextLesson = lessonInModuleIndex < module.lessons.length - 1 ? module.lessons[lessonInModuleIndex + 1] : null

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Link to={`/module/${module.id}`} style={{ fontSize: 14 }}>
          ← Module {module.number} : {module.title}
        </Link>
      </div>
      <LessonView
        lesson={lesson}
        notes={progress.notes}
        onSaveNote={progress.saveNote}
        onMarkComplete={progress.markComplete}
        isCompleted={!!progress.completed[lesson.id]}
        onPrev={prevLesson ? () => navigate(`/lesson/${prevLesson.id}`) : null}
        onNext={nextLesson ? () => navigate(`/lesson/${nextLesson.id}`) : null}
        prevLabel={prevLesson ? prevLesson.title : ''}
        nextLabel={nextLesson ? nextLesson.title : ''}
      />
    </div>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const progress = useProgress()

  return (
    <div className="app-layout">
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '✕' : '☰'}
      </button>
      <Sidebar progress={progress} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage progress={progress} />} />
          <Route path="/module/:moduleId" element={<ModulePage progress={progress} />} />
          <Route path="/lesson/:lessonId" element={<LessonPage progress={progress} />} />
          <Route path="/glossaire" element={<GlossaryPage />} />
        </Routes>
      </div>
    </div>
  )
}
