import { useState } from 'react'

export function Quiz({ questions, lessonId }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showExplanations, setShowExplanations] = useState({})

  const handleSelect = (qIndex, optIndex) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }))
  }

  const handleSubmit = () => {
    setSubmitted(true)
    const allAnswered = questions.every((_, i) => answers[i] !== undefined)
    if (allAnswered) {
      setShowExplanations(Object.fromEntries(questions.map((_, i) => [i, true])))
    }
  }

  const handleReset = () => {
    setAnswers({})
    setSubmitted(false)
    setShowExplanations({})
  }

  const score = questions.reduce((acc, q, i) => acc + (answers[i] === q.correct ? 1 : 0), 0)
  const percentage = Math.round((score / questions.length) * 100)
  const allAnswered = questions.every((_, i) => answers[i] !== undefined)

  return (
    <div className="quiz-container">
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <div className="quiz-question-text">
            {qIndex + 1}. {q.question}
          </div>
          {q.options.map((opt, optIndex) => {
            const isSelected = answers[qIndex] === optIndex
            const isCorrect = q.correct === optIndex
            const showResult = submitted && isSelected
            let className = 'quiz-option'
            if (isSelected && !submitted) className += ' selected'
            if (showResult && isCorrect) className += ' correct'
            if (showResult && !isCorrect) className += ' incorrect'
            if (submitted && isCorrect && !isSelected) className += ' correct'
            return (
              <div key={optIndex} className={className} onClick={() => handleSelect(qIndex, optIndex)}>
                <div className="quiz-option-letter">{String.fromCharCode(65 + optIndex)}</div>
                <div>{opt}</div>
              </div>
            )
          })}
          {showExplanations[qIndex] && (
            <div className={`quiz-explanation show`}>
              <strong>Réponse : </strong>{q.options[q.correct]}
              <br />
              <strong>Explication : </strong>{q.explanation}
            </div>
          )}
        </div>
      ))}

      {!submitted ? (
        <button className="btn btn-primary" onClick={handleSubmit} disabled={!allAnswered} style={{ opacity: allAnswered ? 1 : 0.5 }}>
          {allAnswered ? 'Valider le quiz' : 'Répondez à toutes les questions'}
        </button>
      ) : (
        <>
          <div className={`quiz-score ${percentage >= 70 ? 'pass' : 'fail'}`}>
            Score : {score}/{questions.length} ({percentage}%) — {percentage >= 70 ? '✅ Validé' : '❌ À revoir'}
          </div>
          <button className="btn btn-secondary" onClick={handleReset}>Recommencer</button>
        </>
      )}
    </div>
  )
}

export function Checklist({ items, storageKey }) {
  const [checked, setChecked] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '[]')
    } catch { return [] }
  })

  const toggle = (i) => {
    setChecked(prev => {
      const next = prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]
      localStorage.setItem(storageKey, JSON.stringify(next))
      return next
    })
  }

  return (
    <div className="checklist">
      {items.map((item, i) => (
        <div key={i} className={`checklist-item ${checked.includes(i) ? 'checked' : ''}`} onClick={() => toggle(i)}>
          <div className="checklist-box"></div>
          <div className="checklist-text">{item}</div>
        </div>
      ))}
    </div>
  )
}

export function Exercise({ question, correction }) {
  const [show, setShow] = useState(false)
  return (
    <div>
      <div className="exercise-box">
        <h4>📝 Exercice pratique</h4>
        <div dangerouslySetInnerHTML={{ __html: question }} />
        <button className="btn btn-secondary btn-sm" style={{ marginTop: 12 }} onClick={() => setShow(!show)}>
          {show ? 'Masquer la correction' : 'Afficher la correction'}
        </button>
      </div>
      {show && (
        <div className="correction-box show">
          <h4>✅ Correction détaillée</h4>
          <div dangerouslySetInnerHTML={{ __html: correction }} />
        </div>
      )}
    </div>
  )
}

export function NotePad({ lessonId, notes, onSave }) {
  const [text, setText] = useState(notes[lessonId] || '')
  return (
    <div className="card">
      <h4 style={{ marginBottom: 10, fontSize: 15 }}>📝 Mes notes</h4>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Prenez des notes sur cette leçon..."
        style={{
          width: '100%', minHeight: 100, padding: 12,
          background: 'var(--bg-secondary)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)',
          fontFamily: 'var(--font)', fontSize: 14, resize: 'vertical'
        }}
      />
      <button className="btn btn-primary btn-sm" style={{ marginTop: 8 }} onClick={() => onSave(lessonId, text)}>
        Enregistrer
      </button>
    </div>
  )
}
