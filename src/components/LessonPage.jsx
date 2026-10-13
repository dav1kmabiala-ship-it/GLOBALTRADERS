import React, { useMemo } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { LessonView } from './LessonView.jsx'
import { modules, allLessons, getModuleByLessonId } from '../data/index.js'

export function LessonPage({ progress }) {
  const { lessonId } = useParams()
  const navigate = useNavigate()

  const lesson = allLessons.find(l => l.id === lessonId)

  if (!lesson) {
    return <div className="main-content--padded"><h1>Leçon introuvable</h1><Link to="/modules">← Retour aux modules</Link></div>
  }

  const module = getModuleByLessonId(lessonId)
  const lessonInModuleIndex = module.lessons.findIndex(l => l.id === lessonId)
  const prevLesson = lessonInModuleIndex > 0 ? module.lessons[lessonInModuleIndex - 1] : null
  const nextLesson = lessonInModuleIndex < module.lessons.length - 1 ? module.lessons[lessonInModuleIndex + 1] : null

  // Generate TOC from lesson sections (headings only)
  const tocItems = useMemo(() => {
    return lesson.sections
      .map((s, i) => ({ index: i, type: s.type, content: s.content }))
      .filter(s => s.type === 'heading')
  }, [lesson])

  const scrollToSection = (index) => {
    const el = document.getElementById(`section-${index}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const moduleProgress = progress.getProgress(module.lessons.map(l => l.id))

  return (
    <div className="lesson-layout">
      {/* Left — Lesson Menu */}
      <div className="lesson-menu-col">
        <Link to={`/module/${module.id}`} style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 12, display: 'block', padding: '0 8px' }}>
          ← Module {module.number}
        </Link>
        <div className="lesson-menu-title">{module.title}</div>
        {module.lessons.map((l, i) => (
          <Link
            key={l.id}
            to={`/lesson/${l.id}`}
            className={`lesson-menu-item ${l.id === lessonId ? 'active' : ''}`}
          >
            <span className="lesson-menu-item-num">{i + 1}</span>
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.title}</span>
            {progress.completed[l.id] && <span className="lesson-menu-item-check">✓</span>}
          </Link>
        ))}
        <div style={{ padding: '12px 8px', marginTop: 12, borderTop: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Progression du module</div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${moduleProgress}%` }} />
          </div>
          <div style={{ fontSize: 12, fontWeight: 600, marginTop: 4 }}>{moduleProgress}%</div>
        </div>
      </div>

      {/* Center — Lesson Content */}
      <div className="lesson-main-col">
        <div className="lesson-header-v2">
          <div className="lesson-header-v2-module">Module {module.number} — {module.title}</div>
          <h1 className="lesson-header-v2-title">{lesson.title}</h1>
          <div className="lesson-header-v2-meta">
            <span className="lesson-header-v2-meta-item">
              📖 Leçon {lessonInModuleIndex + 1}/{module.lessons.length}
            </span>
            <span className="lesson-header-v2-meta-item">
              📊 {moduleProgress}% du module
            </span>
          </div>
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
          sectionIdPrefix="section-"
        />
      </div>

      {/* Right — Table of Contents */}
      <div className="lesson-toc-col">
        <div className="lesson-toc-title">Sommaire</div>
        {tocItems.map((item, i) => (
          <div
            key={i}
            className="lesson-toc-item"
            onClick={() => scrollToSection(item.index)}
          >
            {item.content}
          </div>
        ))}
        {tocItems.length === 0 && (
          <div style={{ fontSize: 13, color: 'var(--text-muted)', padding: '0 8px' }}>
            Aucun sommaire disponible.
          </div>
        )}
      </div>
    </div>
  )
}
