import { useState, useMemo } from 'react'

export function PositionSizeCalculator() {
  const [capital, setCapital] = useState(10000)
  const [riskPct, setRiskPct] = useState(1)
  const [entry, setEntry] = useState(1.1000)
  const [stop, setStop] = useState(1.0950)
  const [pipValue, setPipValue] = useState(10)

  const result = useMemo(() => {
    const riskAmount = capital * (riskPct / 100)
    const pipDistance = Math.abs(entry - stop) / 0.0001
    const lotSize = pipDistance > 0 ? riskAmount / (pipDistance * pipValue) : 0
    return {
      riskAmount: riskAmount.toFixed(2),
      pipDistance: pipDistance.toFixed(1),
      lotSize: lotSize.toFixed(2)
    }
  }, [capital, riskPct, entry, stop, pipValue])

  return (
    <div className="calculator-box">
      <h4 style={{ marginBottom: 16 }}>🧮 Calculateur de taille de position</h4>
      <div className="calc-row">
        <span className="calc-label">Capital total ($)</span>
        <input className="calc-input" type="number" value={capital} onChange={e => setCapital(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Risque par position (%)</span>
        <input className="calc-input" type="number" step="0.1" value={riskPct} onChange={e => setRiskPct(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Prix d'entrée</span>
        <input className="calc-input" type="number" step="0.0001" value={entry} onChange={e => setEntry(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Stop Loss</span>
        <input className="calc-input" type="number" step="0.0001" value={stop} onChange={e => setStop(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Valeur du pip ($/pip/lot)</span>
        <input className="calc-input" type="number" value={pipValue} onChange={e => setPipValue(+e.target.value)} />
      </div>
      <div className="calc-result">
        Montant risqué : {result.riskAmount}$ | Distance : {result.pipDistance} pips | Taille : {result.lotSize} lots
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
        Formule : Taille = (Capital × %Risque) / (Distance en pips × Valeur du pip)
      </div>
    </div>
  )
}

export function RiskRewardCalculator() {
  const [entry, setEntry] = useState(1.1000)
  const [stop, setStop] = useState(1.0950)
  const [target, setTarget] = useState(1.1100)

  const result = useMemo(() => {
    const risk = Math.abs(entry - stop)
    const reward = Math.abs(target - entry)
    const rr = risk > 0 ? (reward / risk).toFixed(2) : '0'
    return { risk: risk.toFixed(4), reward: reward.toFixed(4), rr }
  }, [entry, stop, target])

  return (
    <div className="calculator-box">
      <h4 style={{ marginBottom: 16 }}>🧮 Calculateur Ratio Risque/Rendement</h4>
      <div className="calc-row">
        <span className="calc-label">Prix d'entrée</span>
        <input className="calc-input" type="number" step="0.0001" value={entry} onChange={e => setEntry(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Stop Loss</span>
        <input className="calc-input" type="number" step="0.0001" value={stop} onChange={e => setStop(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Take Profit</span>
        <input className="calc-input" type="number" step="0.0001" value={target} onChange={e => setTarget(+e.target.value)} />
      </div>
      <div className="calc-result">
        Risque : {result.risk} | Rendement : {result.reward} | Ratio R:R = 1:{result.rr}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
        Un ratio R:R d'au moins 1:2 est généralement recommandé.
      </div>
    </div>
  )
}

export function PipValueCalculator() {
  const [pair, setPair] = useState('EUR/USD')
  const [lotSize, setLotSize] = useState(1.0)

  const pipValues = {
    'EUR/USD': 10, 'GBP/USD': 10, 'USD/JPY': 9.1, 'USD/CHF': 11, 'AUD/USD': 10,
    'USD/CAD': 7.5, 'NZD/USD': 10, 'EUR/GBP': 12.7, 'EUR/JPY': 9.1
  }

  const result = useMemo(() => {
    const baseValue = pipValues[pair] || 10
    return (baseValue * lotSize).toFixed(2)
  }, [pair, lotSize])

  return (
    <div className="calculator-box">
      <h4 style={{ marginBottom: 16 }}>🧮 Calculateur de valeur du pip</h4>
      <div className="calc-row">
        <span className="calc-label">Paire de devises</span>
        <select className="calc-input" value={pair} onChange={e => setPair(e.target.value)}>
          {Object.keys(pipValues).map(p => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="calc-row">
        <span className="calc-label">Taille de lot</span>
        <input className="calc-input" type="number" step="0.01" value={lotSize} onChange={e => setLotSize(+e.target.value)} />
      </div>
      <div className="calc-result">
        Valeur du pip : {result}$ par pip
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
        1 lot standard = 100 000 unités. 1 mini-lot = 0.1 lot = 10 000 unités. 1 micro-lot = 0.01 lot = 1 000 unités.
      </div>
    </div>
  )
}

export function DrawdownCalculator() {
  const [startCapital, setStartCapital] = useState(10000)
  const [lossPct, setLossPct] = useState(20)

  const result = useMemo(() => {
    const lostAmount = startCapital * (lossPct / 100)
    const remaining = startCapital - lostAmount
    const recoveryPct = remaining > 0 ? ((lostAmount / remaining) * 100).toFixed(1) : '∞'
    return { lostAmount: lostAmount.toFixed(2), remaining: remaining.toFixed(2), recoveryPct }
  }, [startCapital, lossPct])

  return (
    <div className="calculator-box">
      <h4 style={{ marginBottom: 16 }}>🧮 Calculateur de Drawdown</h4>
      <div className="calc-row">
        <span className="calc-label">Capital de départ ($)</span>
        <input className="calc-input" type="number" value={startCapital} onChange={e => setStartCapital(+e.target.value)} />
      </div>
      <div className="calc-row">
        <span className="calc-label">Perte subie (%)</span>
        <input className="calc-input" type="number" step="1" value={lossPct} onChange={e => setLossPct(+e.target.value)} />
      </div>
      <div className="calc-result">
        Perte : {result.lostAmount}$ | Capital restant : {result.remaining}$ | Gain nécessaire pour revenir : +{result.recoveryPct}%
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
        Une perte de 50% nécessite un gain de 100% pour revenir au capital initial. Plus le drawdown est profond, plus la récupération est difficile.
      </div>
    </div>
  )
}
