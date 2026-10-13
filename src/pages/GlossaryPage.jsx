import React, { useState, useMemo } from 'react'
import { glossary } from '../data/glossary.js'

export function GlossaryPage() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return glossary
    const q = search.toLowerCase()
    return glossary.filter(g =>
      g.term.toLowerCase().includes(q) ||
      g.def.toLowerCase().includes(q) ||
      g.expl.toLowerCase().includes(q)
    )
  }, [search])

  return (
    <div>
      <h1 className="page-title">📖 Glossaire du Trading</h1>
      <p className="page-subtitle">Tous les termes techniques de la formation, avec définitions, explications et renvois vers les leçons.</p>

      <input
        className="glossary-search"
        type="text"
        placeholder="🔍 Rechercher un terme..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
        {filtered.length} terme{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
      </div>

      {filtered.map((g, i) => (
        <div key={i} className="glossary-item">
          <div className="glossary-term">{g.term}</div>
          <div className="glossary-def">{g.def}</div>
          <div className="glossary-expl">{g.expl}</div>
          <div className="glossary-example">Exemple : {g.example}</div>
          <div className="glossary-link">→ {g.link}</div>
        </div>
      ))}

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>
          Aucun terme trouvé pour « {search} ».
        </div>
      )}
    </div>
  )
}
