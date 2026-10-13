import React from 'react'
import { CandlestickChart, Diagram, ComparisonTable } from '../charts/CandlestickChart.jsx'
import { Quiz, Checklist, Exercise, NotePad } from './Interactive.jsx'
import { PositionSizeCalculator, RiskRewardCalculator, PipValueCalculator, DrawdownCalculator } from './Calculators.jsx'

const calculators = {
  PositionSize: PositionSizeCalculator,
  RiskReward: RiskRewardCalculator,
  PipValue: PipValueCalculator,
  Drawdown: DrawdownCalculator
}

function Section({ section, lessonId, notes, onSaveNote }) {
  switch (section.type) {
    case 'heading':
      return <h3 style={{ fontSize: 20, fontWeight: 700, margin: '24px 0 12px', color: 'var(--text-primary)' }}>{section.content}</h3>

    case 'text':
      return <div className="lesson-body"><p dangerouslySetInnerHTML={{ __html: section.content }} /></div>

    case 'list':
      return (
        <div className="lesson-body">
          {section.ordered ? (
            <ol>{section.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}
          </ol>
          ) : (
            <ul>{section.items.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item }} />)}</ul>
          )}
        </div>
      )

    case 'table':
      return (
        <div className="lesson-body">
          <ComparisonTable headers={section.headers} rows={section.rows} />
        </div>
      )

    case 'callout':
      return (
        <div className={`callout callout-${section.variant || 'info'}`}>
          <div className="callout-title">
            {section.variant === 'warning' && '⚠️'}
            {section.variant === 'danger' && '🚨'}
            {section.variant === 'success' && '✅'}
            {section.variant === 'info' && 'ℹ️'}
            {section.title}
          </div>
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      )

    case 'chart':
      return <CandlestickChart {...section.props} title={section.title} />

    case 'diagram':
      return <Diagram title={section.title}>{section.content}</Diagram>

    case 'quiz':
      return <Quiz questions={section.questions} lessonId={lessonId} />

    case 'exercise':
      return <Exercise question={section.question} correction={section.correction} />

    case 'checklist':
      return <Checklist items={section.items} storageKey={`cl-${lessonId}`} />

    case 'calculator':
      const Calc = calculators[section.name]
      return Calc ? <Calc /> : null

    case 'summary':
      return (
        <div className="card" style={{ background: 'rgba(0,212,255,0.03)', borderColor: 'var(--accent-dim)' }}>
          <h3 style={{ marginBottom: 12, color: 'var(--accent)' }}>📌 Résumé de la leçon</h3>
          <ul style={{ marginLeft: 20 }}>
            {section.points.map((p, i) => <li key={i} style={{ marginBottom: 6 }}>{p}</li>)}
          </ul>
        </div>
      )

    case 'note':
      return <NotePad lessonId={lessonId} notes={notes} onSave={onSaveNote} />

    default:
      return null
  }
}

export function LessonView({ lesson, notes, onSaveNote, onMarkComplete, isCompleted, onPrev, onNext, prevLabel, nextLabel, sectionIdPrefix }) {
  if (!lesson) return <div>Leçon introuvable.</div>

  return (
    <div className="lesson-content">
      {lesson.prerequisites && (
        <div className="callout callout-info" style={{ marginBottom: 20 }}>
          <div className="callout-title">📋 Prérequis</div>
          {lesson.prerequisites}
        </div>
      )}

      {lesson.sections.map((section, i) => (
        <div key={i} id={sectionIdPrefix ? `${sectionIdPrefix}${i}` : undefined}>
          <Section section={section} lessonId={lesson.id} notes={notes} onSaveNote={onSaveNote} />
        </div>
      ))}

      <div className="lesson-nav-buttons">
        {onPrev ? (
          <button className="btn btn-secondary" onClick={onPrev}>← {prevLabel || 'Précédent'}</button>
        ) : <div />}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            className={`btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}`}
            onClick={() => onMarkComplete(lesson.id)}
          >
            {isCompleted ? '✓ Terminé — Marquer non terminé' : 'Marquer comme terminé'}
          </button>
          {onNext && <button className="btn btn-primary" onClick={onNext}>{nextLabel || 'Suivant'} →</button>}
        </div>
      </div>
    </div>
  )
}
