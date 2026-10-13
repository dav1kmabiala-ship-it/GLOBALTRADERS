import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { HeroChart } from './HeroChart.jsx'
import { MarketPreview } from './MarketPreview.jsx'
import { modules, allLessons, allLessonIds } from '../data/index.js'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.reveal') || []
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

const pillars = [
  { icon: '◆', title: 'Comprendre', desc: 'Saisir la logique du marché, la structure des prix et les mécanismes qui régissent les mouvements.' },
  { icon: '◈', title: 'Analyser', desc: 'Lire les graphiques, identifier les zones clés, les liquidités et les opportunités à fort potentiel.' },
  { icon: '◉', title: 'Exécuter avec discipline', desc: 'Appliquer une méthode rigoureuse, gérer le risque et garder le contrôle émotionnel.' },
]

const progressionSteps = [
  { num: '01', title: 'Fondamentaux', desc: 'Marchés, actifs, plateformes' },
  { num: '02', title: 'Analyse technique', desc: 'Graphiques, indicateurs, risque' },
  { num: '03', title: 'Structure de marché', desc: 'BOS, CHoCH, liquidités' },
  { num: '04', title: 'Smart Money Concepts', desc: 'FVG, Order Blocks, PDH/PDL' },
  { num: '05', title: 'Méthode & Backtesting', desc: 'Stratégie, démo, projet final' },
]

const masteryLevels = [
  { num: '01', name: 'Débutant', desc: 'Découverte des marchés et des premiers concepts.' },
  { num: '02', name: 'Analyste', desc: 'Lecture des graphiques et identification des structures.' },
  { num: '03', name: 'Trader en formation', desc: 'Construction d\'une méthode et gestion du risque.' },
  { num: '04', name: 'Analyste avancé', desc: 'Maîtrise des Smart Money Concepts et backtesting.' },
]

export function HomePage({ progress }) {
  const navigate = useNavigate()
  const ref = useReveal()
  const totalProgress = progress.getTotalProgress(allLessonIds)

  return (
    <div className="cinematic-home" ref={ref}>
      {/* Section 1 — Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge anim-fade-in-up">
            <span className="hero-badge-dot" />
            Académie de Trading · {modules.length} modules · {allLessons.length} leçons
          </div>
          <h1 className="hero-title anim-fade-in-up anim-delay-1">MASTER THE MARKET.</h1>
          <p className="hero-subtitle anim-fade-in-up anim-delay-2">
            Comprends la structure du marché. Maîtrise les liquidités. Construis une méthode de trading disciplinée.
          </p>
          <p className="hero-description anim-fade-in-up anim-delay-3">
            Un parcours complet, des fondamentaux jusqu'aux concepts avancés de Smart Money Concepts.
            Chaque leçon combine théorie, graphiques annotés, quiz et exercices pratiques.
          </p>
          <div className="hero-buttons anim-fade-in-up anim-delay-4">
            <button className="btn btn-primary btn-lg" onClick={() => navigate('/modules')}>
              Explorer la formation →
            </button>
            <button className="btn btn-secondary btn-lg" onClick={() => navigate('/dashboard')}>
              Découvrir le programme
            </button>
          </div>
          <div className="hero-stats anim-fade-in-up anim-delay-5">
            <div>
              <div className="hero-stat-num">{modules.length}</div>
              <div className="hero-stat-label">Modules</div>
            </div>
            <div>
              <div className="hero-stat-num">{allLessons.length}</div>
              <div className="hero-stat-label">Leçons</div>
            </div>
            <div>
              <div className="hero-stat-num">{totalProgress}%</div>
              <div className="hero-stat-label">Progression</div>
            </div>
          </div>
        </div>
        <div className="hero-visual anim-fade-in anim-delay-2">
          <HeroChart />
        </div>
      </section>

      {/* Section 2 — Promise */}
      <section className="promise-section">
        <div className="reveal">
          <h2 className="section-title">Le marché devient plus lisible lorsque tu comprends sa logique.</h2>
        </div>
        <div className="pillar-grid stagger">
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card reveal">
              <div className="pillar-icon" style={{ color: 'var(--accent)', fontSize: 22 }}>{p.icon}</div>
              <div className="pillar-title">{p.title}</div>
              <div className="pillar-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3 — Academy Overview */}
      <section className="academy-overview">
        <div className="reveal">
          <h2 className="section-title">Un parcours visuel, des fondamentaux aux concepts avancés</h2>
          <p className="section-subtitle">La formation est structurée en 5 étapes progressives, chacune construisant sur la précédente.</p>
        </div>
        <div className="progression-track reveal">
          <div className="progression-track-line" style={{ width: '90%' }} />
          {progressionSteps.map((step, i) => (
            <div key={i} className="progression-step">
              <div className="progression-dot" style={{ borderColor: i === 0 ? 'var(--accent)' : '' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>{step.num}</span>
              </div>
              <div className="progression-step-title">{step.title}</div>
              <div className="progression-step-desc">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 — Interactive Market Preview */}
      <section className="market-preview-section">
        <div className="reveal">
          <h2 className="section-title">Aperçu interactif du marché</h2>
          <p className="section-subtitle">Explore les concepts clés des Smart Money Concepts directement sur des graphiques annotés.</p>
        </div>
        <div className="reveal">
          <MarketPreview />
        </div>
      </section>

      {/* Section 5 — Mastery */}
      <section className="mastery-section">
        <div className="reveal">
          <h2 className="section-title">Progression et maîtrise</h2>
          <p className="section-subtitle">Des étapes pédagogiques claires, pas une promesse de rentabilité.</p>
        </div>
        <div className="mastery-grid stagger">
          {masteryLevels.map((m, i) => (
            <div key={i} className="mastery-card reveal">
              <div className="mastery-num">{m.num}</div>
              <div className="mastery-name">{m.name}</div>
              <div className="mastery-desc">{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 — CTA */}
      <section className="cta-section">
        <div className="cta-card reveal">
          <h2 className="cta-title">Ton prochain niveau commence par une meilleure compréhension du marché.</h2>
          <p className="cta-subtitle">Rejoins l'académie et construis ta méthode de trading, étape par étape.</p>
          <button className="btn btn-primary btn-lg" onClick={() => navigate('/modules')}>
            Commencer mon parcours →
          </button>
        </div>
      </section>

      {/* Disclaimer */}
      <div style={{ padding: '0 60px 60px', position: 'relative', zIndex: 1 }}>
        <div className="disclaimer">
          <strong>⚠️ Avertissement sur le risque :</strong> Le trading comporte un risque de perte en capital. Aucun concept technique, aucune stratégie et aucun indicateur présentés dans cette formation ne garantissent un résultat. Les exemples graphiques sont des illustrations pédagogiques synthétiques, non des données de marché réelles.
        </div>
      </div>
    </div>
  )
}
