import React, { useState } from 'react'
import { Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { useProgress } from './hooks/useProgress.js'
import { Sidebar } from './components/Sidebar.jsx'
import { HomePage } from './components/HomePage.jsx'
import { DashboardPage } from './components/DashboardPage.jsx'
import { ModulesPage, ModulePage } from './components/ModulesPage.jsx'
import { LessonPage } from './components/LessonPage.jsx'
import { ConceptLibrary } from './components/ConceptLibrary.jsx'
import { modules, allLessons, allLessonIds } from './data/index.js'

function FavoritesPage({ progress }) {
  const navigate = useNavigate()
  const favLessons = (progress.favorites || [])
    .map(id => allLessons.find(l => l.id === id))
    .filter(Boolean)

  return (
    <div className="main-content--padded simple-page">
      <h1 className="page-title">Favoris</h1>
      <p className="page-subtitle">Vos leçons marquées comme favorites.</p>
      {favLessons.length === 0 ? (
        <div style={{ color: 'var(--text-muted)', padding: 40, textAlign: 'center' }}>
          Aucune leçon dans vos favoris pour le moment.
        </div>
      ) : (
        favLessons.map(lesson => {
          const mod = modules.find(m => m.lessons.some(l => l.id === lesson.id))
          return (
            <Link key={lesson.id} to={`/lesson/${lesson.id}`} className="fav-item">
              <div>
                <div className="fav-item-title">{lesson.title}</div>
                <div className="fav-item-module">Module {mod?.number} — {mod?.title}</div>
              </div>
            </Link>
          )
        })
      )}
    </div>
  )
}

function SettingsPage() {
  return (
    <div className="main-content--padded simple-page">
      <h1 className="page-title">Paramètres</h1>
      <p className="page-subtitle">Gérez vos préférences d'apprentissage.</p>

      <div className="settings-section">
        <div className="card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Affichage</h3>
          <div className="settings-row">
            <div>
              <div className="settings-label">Thème</div>
              <div className="settings-desc">L'académie utilise un thème sombre premium.</div>
            </div>
            <span className="badge badge-basics">Sombre</span>
          </div>
          <div className="settings-row">
            <div>
              <div className="settings-label">Langue</div>
              <div className="settings-desc">Langue du contenu pédagogique.</div>
            </div>
            <span className="badge badge-basics">Français</span>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <div className="card">
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Données & Progression</h3>
          <div className="settings-row">
            <div>
              <div className="settings-label">Stockage local</div>
              <div className="settings-desc">Votre progression est sauvegardée dans votre navigateur (localStorage).</div>
            </div>
            <span style={{ fontSize: 13, color: 'var(--success)' }}>● Actif</span>
          </div>
          <div className="settings-row">
            <div>
              <div className="settings-label">Réinitialiser la progression</div>
              <div className="settings-desc">Efface toutes les leçons terminées, notes et favoris.</div>
            </div>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => {
                if (confirm('Êtes-vous sûr ? Toute votre progression sera perdue.')) {
                  localStorage.removeItem('gt_academy_progress')
                  localStorage.removeItem('gt_academy_notes')
                  localStorage.removeItem('gt_academy_favs')
                  window.location.reload()
                }
              }}
            >
              Réinitialiser
            </button>
          </div>
        </div>
      </div>

      <div className="disclaimer">
        <strong>⚠️ Avertissement :</strong> Le trading comporte un risque de perte en capital. Aucun concept présenté dans cette formation ne garantit un résultat.
      </div>
    </div>
  )
}

function PlaceholderPage({ title, icon, desc }) {
  return (
    <div className="main-content--padded simple-page">
      <h1 className="page-title">{title}</h1>
      <p className="page-subtitle">{desc}</p>
      <div className="card" style={{ textAlign: 'center', padding: 60 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>{icon}</div>
        <p style={{ color: 'var(--text-muted)', fontSize: 15 }}>Cette section sera disponible prochainement.</p>
        <Link to="/modules" style={{ marginTop: 16, display: 'inline-block' }}>← Retour aux modules</Link>
      </div>
    </div>
  )
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const progress = useProgress()
  const location = useLocation()

  // Full-page routes (no sidebar)
  const isFullPage = location.pathname === '/'

  return (
    <div className="app-layout">
      {!isFullPage && (
        <>
          <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <Sidebar progress={progress} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}
      <div className={`main-content ${isFullPage ? 'full-page' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage progress={progress} />} />
          <Route path="/dashboard" element={<DashboardPage progress={progress} />} />
          <Route path="/modules" element={<ModulesPage progress={progress} />} />
          <Route path="/module/:moduleId" element={<ModulePage progress={progress} />} />
          <Route path="/lesson/:lessonId" element={<LessonPage progress={progress} />} />
          <Route path="/concepts" element={<ConceptLibrary />} />
          <Route path="/glossaire" element={<ConceptLibrary />} />
          <Route path="/charts" element={<PlaceholderPage title="Graphiques pédagogiques" icon="📊" desc="Visualisez les concepts de marché avec des graphiques annotés." />} />
          <Route path="/exercises" element={<PlaceholderPage title="Exercices et quiz" icon="📝" desc="Entraînez-vous avec les exercices et quiz de la formation." />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal de trading" icon="📓" desc="Tenez un journal de vos analyses et trades." />} />
          <Route path="/favoris" element={<FavoritesPage progress={progress} />} />
          <Route path="/parametres" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  )
}
