import React from 'react'

// ============ CANDLESTICK CHART COMPONENT ============
// Renders synthetic candlestick charts with annotations for educational purposes

const BULL = '#26a69a'
const BEAR = '#ef5350'
const WICK = '#888'

export function CandlestickChart({ candles = [], width = 600, height = 320, annotations = [], zones = [], lines = [], labels = [], title }) {
  const padding = { top: 20, right: 50, bottom: 30, left: 50 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  if (candles.length === 0) return null

  const allPrices = candles.flatMap(c => [c.h, c.l])
  const minPrice = Math.min(...allPrices) - (Math.max(...allPrices) - Math.min(...allPrices)) * 0.05
  const maxPrice = Math.max(...allPrices) + (Math.max(...allPrices) - Math.min(...allPrices)) * 0.05
  const priceRange = maxPrice - minPrice || 1

  const candleWidth = chartW / candles.length
  const bodyWidth = candleWidth * 0.6

  const yScale = (price) => padding.top + chartH - ((price - minPrice) / priceRange) * chartH
  const xCenter = (i) => padding.left + i * candleWidth + candleWidth / 2

  const priceSteps = 5
  const gridLines = Array.from({ length: priceSteps + 1 }, (_, i) => minPrice + (priceRange * i) / priceSteps)

  return (
    <div className="chart-container">
      {title && <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>{title}</div>}
      <svg className="svg-chart" viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width }}>
        {/* Grid */}
        {gridLines.map((p, i) => (
          <g key={i}>
            <line x1={padding.left} y1={yScale(p)} x2={width - padding.right} y2={yScale(p)} stroke="#2a3650" strokeWidth="0.5" strokeDasharray="2,4" />
            <text x={padding.left - 8} y={yScale(p) + 4} fill="#6b7689" fontSize="10" textAnchor="end">{p.toFixed(2)}</text>
          </g>
        ))}

        {/* Zones (FVG, order blocks, etc.) */}
        {zones.map((z, i) => (
          <g key={`zone-${i}`}>
            <rect
              x={padding.left}
              y={yScale(z.top)}
              width={chartW}
              height={Math.abs(yScale(z.bottom) - yScale(z.top))}
              fill={z.color || 'rgba(0,212,255,0.1)'}
              stroke={z.stroke || z.color || 'rgba(0,212,255,0.3)'}
              strokeWidth="1"
              strokeDasharray={z.dashed ? "4,4" : "none"}
            />
            {z.label && (
              <text x={width - padding.right - 4} y={yScale(z.top) + 14} fill={z.labelColor || "#9ca8b8"} fontSize="10" textAnchor="end" fontWeight="600">
                {z.label}
              </text>
            )}
          </g>
        ))}

        {/* Lines (trendlines, supports, resistances) */}
        {lines.map((l, i) => (
          <g key={`line-${i}`}>
            <line
              x1={l.x1 !== undefined ? padding.left + l.x1 * chartW : padding.left}
              y1={yScale(l.y1)}
              x2={l.x2 !== undefined ? padding.left + l.x2 * chartW : width - padding.right}
              y2={yScale(l.y2)}
              stroke={l.color || '#ffa726'}
              strokeWidth={l.width || 1.5}
              strokeDasharray={l.dashed ? "5,5" : "none"}
            />
            {l.label && (
              <text
                x={l.labelX !== undefined ? padding.left + l.labelX * chartW : width - padding.right}
                y={yScale(l.labelY) + (l.labelOffset || -6)}
                fill={l.color || '#ffa726'}
                fontSize="10"
                fontWeight="600"
                textAnchor={l.labelAnchor || "end"}
              >
                {l.label}
              </text>
            )}
          </g>
        ))}

        {/* Candles */}
        {candles.map((c, i) => {
          const cx = xCenter(i)
          const isBull = c.c >= c.o
          const color = isBull ? BULL : BEAR
          const bodyTop = yScale(Math.max(c.o, c.c))
          const bodyBottom = yScale(Math.min(c.o, c.c))
          const bodyH = Math.max(Math.abs(bodyBottom - bodyTop), 1)
          return (
            <g key={i}>
              <line x1={cx} y1={yScale(c.h)} x2={cx} y2={yScale(c.l)} stroke={color} strokeWidth="1" />
              <rect
                x={cx - bodyWidth / 2}
                y={bodyTop}
                width={bodyWidth}
                height={bodyH}
                fill={color}
                rx="1"
              />
            </g>
          )
        })}

        {/* Annotations (arrows, text markers) */}
        {annotations.map((a, i) => (
          <g key={`ann-${i}`}>
            {a.type === 'arrow' && (
              <>
                <line x1={xCenter(a.candle)} y1={yScale(a.price) + (a.direction === 'up' ? 30 : -30)} x2={xCenter(a.candle)} y2={yScale(a.price) + (a.direction === 'up' ? 5 : -5)} stroke={a.color || '#fff'} strokeWidth="1.5" />
                <polygon
                  points={a.direction === 'up'
                    ? `${xCenter(a.candle)},${yScale(a.price) + 5} ${xCenter(a.candle) - 5},${yScale(a.price) + 12} ${xCenter(a.candle) + 5},${yScale(a.price) + 12}`
                    : `${xCenter(a.candle)},${yScale(a.price) - 5} ${xCenter(a.candle) - 5},${yScale(a.price) - 12} ${xCenter(a.candle) + 5},${yScale(a.price) - 12}`
                  }
                  fill={a.color || '#fff'}
                />
              </>
            )}
            {a.type === 'circle' && (
              <circle cx={xCenter(a.candle)} cy={yScale(a.price)} r={a.radius || 8} fill="none" stroke={a.color || '#fff'} strokeWidth="1.5" />
            )}
            {a.type === 'label' && (
              <text x={xCenter(a.candle) + (a.offsetX || 0)} y={yScale(a.price) + (a.offsetY || 0)} fill={a.color || '#fff'} fontSize="10" fontWeight="700" textAnchor={a.anchor || "middle"}>
                {a.text}
              </text>
            )}
            {a.type === 'line' && (
              <line x1={xCenter(a.candle1)} y1={yScale(a.price1)} x2={xCenter(a.candle2)} y2={yScale(a.price2)} stroke={a.color || '#fff'} strokeWidth="1" strokeDasharray="3,3" />
            )}
          </g>
        ))}

        {/* Labels */}
        {labels.map((l, i) => (
          <text key={`lbl-${i}`} x={padding.left + (l.x || 0) * chartW} y={padding.top + (l.y || 0) * chartH} fill={l.color || '#9ca8b8'} fontSize="11" fontWeight={l.bold ? "700" : "400"} textAnchor={l.anchor || "start"}>
            {l.text}
          </text>
        ))}
      </svg>
      <div className="chart-label">Exemple pédagogique — données synthétiques illustratives</div>
    </div>
  )
}

// ============ HELPER: Generate synthetic candle data ============
export function genCandles(pattern, count = 30) {
  const candles = []
  let price = 1.1000
  for (let i = 0; i < count; i++) {
    const trend = pattern === 'bull' ? 0.0008 : pattern === 'bear' ? -0.0008 : 0
    const volatility = pattern === 'ranging' ? 0.0005 : 0.001
    const change = (Math.sin(i / 3) + (Math.random() - 0.5)) * volatility + trend
    const o = price
    const c = price + change
    const h = Math.max(o, c) + Math.abs((Math.random() - 0.3)) * volatility * 0.8
    const l = Math.min(o, c) - Math.abs((Math.random() - 0.3)) * volatility * 0.8
    candles.push({ o: +o.toFixed(4), c: +c.toFixed(4), h: +h.toFixed(4), l: +l.toFixed(4) })
    price = c
  }
  return candles
}

// ============ SIMPLE DIAGRAM COMPONENT ============
// For non-candlestick diagrams (supply/demand, sessions, etc.)
export function Diagram({ children, title }) {
  return (
    <div className="chart-container">
      {title && <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>{title}</div>}
      {children}
      <div className="chart-label">Schéma pédagogique illustratif</div>
    </div>
  )
}

// ============ COMPARISON TABLE COMPONENT ============
export function ComparisonTable({ headers, rows }) {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((h, i) => <th key={i}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => <td key={j} dangerouslySetInnerHTML={{ __html: cell }} />)}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
