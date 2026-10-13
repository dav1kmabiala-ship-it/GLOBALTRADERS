import React, { useState } from 'react'
import { CandlestickChart } from '../charts/CandlestickChart.jsx'
import { bullTrend, bearTrend, ranging, bosPattern, chochPattern, fvgBullishPattern, orderBlockBullishPattern, sweepBuySidePattern, pdhPdlPattern } from '../charts/candleData.js'

const concepts = [
  {
    id: 'trend',
    name: 'Tendance',
    color: '#26A69A',
    def: 'Une tendance est une succession de sommets et creux dans la même direction. HH+HL = haussière, LH+LL = baissière.',
    candles: bullTrend(16, 1.0800, 0.0012),
    annotations: [
      { type: 'circle', candle: 3, price: 1.0825, color: '#00d4ff' },
      { type: 'label', candle: 3, price: 1.0825, offsetY: -15, text: 'SH', color: '#00d4ff' },
      { type: 'circle', candle: 6, price: 1.0815, color: '#ffa726' },
      { type: 'label', candle: 6, price: 1.0815, offsetY: 15, text: 'HL', color: '#ffa726' },
      { type: 'circle', candle: 10, price: 1.0855, color: '#00d4ff' },
      { type: 'label', candle: 10, price: 1.0855, offsetY: -15, text: 'HH', color: '#00d4ff' },
    ]
  },
  {
    id: 'bos',
    name: 'BOS',
    color: '#E8B864',
    def: 'Break of Structure : cassure du dernier sommet (haussier) ou creux (baissier) confirmant la continuation de la tendance.',
    candles: bosPattern(),
    annotations: [
      { type: 'label', candle: 5, price: 1.0980, offsetY: -15, text: 'Dernier SH', color: '#00d4ff' },
      { type: 'label', candle: 12, price: 1.1110, offsetY: -15, text: 'BOS ↑', color: '#E8B864' },
      { type: 'arrow', candle: 12, price: 1.1110, direction: 'up', color: '#E8B864' },
    ],
    lines: [
      { y1: 1.0980, y2: 1.0980, color: '#00d4ff', dashed: true, label: 'SH', labelX: 0.02, labelY: 1.0980 },
    ]
  },
  {
    id: 'choch',
    name: 'CHoCH',
    color: '#8B5CF6',
    def: 'Change of Character : cassure d\'un creux (tendance haussière) ou d\'un sommet (tendance baissière) indiquant un changement potentiel de tendance.',
    candles: chochPattern(),
    annotations: [
      { type: 'label', candle: 5, price: 1.1000, offsetY: -15, text: 'Dernier SH', color: '#00d4ff' },
      { type: 'label', candle: 10, price: 1.0940, offsetY: 15, text: 'Dernier HL', color: '#ffa726' },
      { type: 'label', candle: 11, price: 1.0940, offsetY: 25, text: 'CHoCH ↓', color: '#8B5CF6' },
      { type: 'arrow', candle: 11, price: 1.0940, direction: 'down', color: '#8B5CF6' },
    ],
    lines: [
      { y1: 1.0940, y2: 1.0940, color: '#ffa726', dashed: true, label: 'HL', labelX: 0.02, labelY: 1.0940 },
    ]
  },
  {
    id: 'fvg',
    name: 'FVG',
    color: '#3B82F6',
    def: 'Fair Value Gap : déséquilibre créé par une impulsion rapide, où le prix laisse un espace non comblé entre deux bougies.',
    candles: fvgBullishPattern(),
    zones: [
      { top: 1.0950, bottom: 1.0910, color: 'rgba(59,130,246,0.1)', label: 'FVG', labelColor: '#3B82F6' },
    ],
    annotations: [
      { type: 'label', candle: 2, price: 1.0950, offsetY: -15, text: 'Impulsion', color: '#3B82F6' },
    ]
  },
  {
    id: 'ob',
    name: 'Order Block',
    color: '#E8B864',
    def: 'Zone correspondant à la dernière bougie baissière avant une impulsion haussière (bullish OB) ou la dernière haussière avant une impulsion baissière (bearish OB).',
    candles: orderBlockBullishPattern(),
    zones: [
      { top: 1.0870, bottom: 1.0850, color: 'rgba(232,184,100,0.1)', label: 'Bullish OB', labelColor: '#E8B864' },
    ],
    annotations: [
      { type: 'label', candle: 1, price: 1.0850, offsetY: 15, text: 'Dernière bougie rouge', color: '#E8B864' },
      { type: 'arrow', candle: 4, price: 1.0950, direction: 'up', color: '#26A69A' },
    ]
  },
  {
    id: 'sweep',
    name: 'Liquidity Sweep',
    color: '#EF5350',
    def: 'Mouvement du prix au-delà d\'un niveau de liquidité suivi d\'un retour et potentiellement d\'un retournement.',
    candles: sweepBuySidePattern(),
    zones: [
      { top: 1.1035, bottom: 1.1020, color: 'rgba(239,83,80,0.08)', label: 'BSL', labelColor: '#EF5350' },
    ],
    annotations: [
      { type: 'label', candle: 7, price: 1.1035, offsetY: -15, text: 'Sweep', color: '#EF5350' },
      { type: 'arrow', candle: 9, price: 1.0970, direction: 'down', color: '#EF5350' },
    ]
  },
  {
    id: 'pdhpdl',
    name: 'PDH / PDL',
    color: '#26A69A',
    def: 'Previous Daily High / Low : plus haut et plus bas de la journée précédente, niveaux de référence pour la liquidité externe.',
    candles: pdhPdlPattern(),
    lines: [
      { y1: 1.1030, y2: 1.1030, color: '#26A69A', dashed: true, label: 'PDH', labelX: 0.95, labelY: 1.1030 },
      { y1: 1.0940, y2: 1.0940, color: '#EF5350', dashed: true, label: 'PDL', labelX: 0.95, labelY: 1.0940 },
    ],
    annotations: [
      { type: 'circle', candle: 2, price: 1.1020, color: '#26A69A' },
      { type: 'circle', candle: 12, price: 1.0950, color: '#EF5350' },
    ]
  },
  {
    id: 'liquidity',
    name: 'Liquidités',
    color: '#8B5CF6',
    def: 'BSL (Buy-Side) au-dessus des sommets, SSL (Sell-Side) sous les creux. Zones où des stops sont susceptibles d\'être concentrés.',
    candles: ranging(14, 1.1000, 0.0008),
    zones: [
      { top: 1.1020, bottom: 1.1010, color: 'rgba(38,166,154,0.08)', label: 'BSL', labelColor: '#26A69A' },
      { top: 1.0990, bottom: 1.0980, color: 'rgba(239,83,80,0.08)', label: 'SSL', labelColor: '#EF5350' },
    ],
    annotations: [
      { type: 'label', candle: 3, price: 1.1015, text: 'Acheteurs', color: '#26A69A' },
      { type: 'label', candle: 3, price: 1.0985, text: 'Vendeurs', color: '#EF5350' },
    ]
  },
]

export function MarketPreview() {
  const [selected, setSelected] = useState(0)
  const concept = concepts[selected]

  return (
    <div className="market-preview-layout">
      <div>
        <div className="concept-tabs">
          {concepts.map((c, i) => (
            <button
              key={c.id}
              className={`concept-tab ${i === selected ? 'active' : ''}`}
              onClick={() => setSelected(i)}
            >
              <span className="concept-tab-dot" style={{ background: c.color }} />
              {c.name}
            </button>
          ))}
        </div>
        <div className="concept-info-panel anim-fade-in" key={concept.id}>
          <div className="concept-info-name">{concept.name}</div>
          <div className="concept-info-def">{concept.def}</div>
        </div>
      </div>
      <div key={concept.id} className="anim-fade-in">
        <CandlestickChart
          candles={concept.candles}
          annotations={concept.annotations}
          zones={concept.zones || []}
          lines={concept.lines || []}
          width={560}
          height={360}
        />
      </div>
    </div>
  )
}
