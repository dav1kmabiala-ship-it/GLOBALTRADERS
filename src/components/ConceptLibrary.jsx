import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { glossary } from '../data/glossary.js'

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'smc', label: 'Smart Money Concepts' },
  { id: 'basics', label: 'Fondamentaux' },
  { id: 'risk', label: 'Risque & Gestion' },
  { id: 'psych', label: 'Psychologie' },
  { id: 'strategy', label: 'Stratégie & Backtesting' },
]

// Categorize glossary terms
const smcTerms = ['Market Structure', 'Swing High (SH)', 'Swing Low (SL)', 'Higher High (HH)', 'Higher Low (HL)', 'Lower High (LH)', 'Lower Low (LL)', 'BOS (Break of Structure)', 'CHoCH (Change of Character)', 'BSL (Buy-Side Liquidity)', 'SSL (Sell-Side Liquidity)', 'Liquidity', 'Liquidity Sweep', 'Internal Liquidity', 'External Liquidity', 'FVG (Fair Value Gap)', 'Order Block', 'Breaker Block', 'PDH (Previous Daily High)', 'PDL (Previous Daily Low)', 'Equal Highs', 'Equal Lows', 'Confluence', 'Multi-Timeframe Analysis', 'Support', 'Resistance', 'Trendline', 'Retest']
const riskTerms = ['Stop Loss', 'Take Profit', 'Drawdown', 'Risk/Reward (R:R)', 'Levier', 'Slippage', 'Gap', 'Volatility']
const psychTerms = ['FOMO', 'Revenge Trading']
const strategyTerms = ['Backtesting', 'Forward Testing', 'Profit Factor', 'Expectancy (Espérance mathématique)']
const basicsTerms = ['Trading', 'Spread', 'Pip', 'Lot', 'Commission', 'Swap']

function getCategory(term) {
  if (smcTerms.includes(term)) return 'smc'
  if (riskTerms.includes(term)) return 'risk'
  if (psychTerms.includes(term)) return 'psych'
  if (strategyTerms.includes(term)) return 'strategy'
  if (basicsTerms.includes(term)) return 'basics'
  return 'basics'
}

export function ConceptLibrary() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    let result = glossary.map(g => ({ ...g, category: getCategory(g.term) }))
    if (activeCategory !== 'all') {
      result = result.filter(g => g.category === activeCategory)
    }
    if (search) {
      const q = search.toLowerCase()
      result = result.filter(g =>
        g.term.toLowerCase().includes(q) ||
        g.def.toLowerCase().includes(q) ||
        g.expl.toLowerCase().includes(q)
      )
    }
    return result
  }, [search, activeCategory])

  return (
    <div className="concept-library main-content--padded">
      <h1 className="page-title">Bibliothèque de concepts</h1>
      <p className="page-subtitle">Tous les concepts techniques de la formation, avec définitions, exemples et renvois vers les leçons.</p>

      <input
        className="glossary-search"
        type="text"
        placeholder="🔍 Rechercher un concept (BOS, FVG, Order Block, PDH...)"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="concept-filters">
        {categories.map(c => (
          <button
            key={c.id}
            className={`concept-filter-btn ${activeCategory === c.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 16 }}>
        {filtered.length} concept{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
      </div>

      <div className="concept-grid">
        {filtered.map((g, i) => (
          <div key={i} className="concept-card-v2">
            <div className="concept-card-v2-header">
              <div className="concept-card-v2-name">{g.term}</div>
              <div className="concept-card-v2-category">
                {categories.find(c => c.id === g.category)?.label || 'Autre'}
              </div>
            </div>
            <div className="concept-card-v2-def">{g.def}</div>
            <div className="concept-card-v2-def" style={{ color: 'var(--text-muted)' }}>{g.expl}</div>
            <div className="concept-card-v2-example">Exemple : {g.example}</div>
            <div className="concept-card-v2-link">→ {g.link}</div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: 40 }}>
          Aucun concept trouvé pour « {search} ».
        </div>
      )}
    </div>
  )
}
