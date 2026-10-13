import React, { useEffect, useRef, useState } from 'react'
import { bullTrend, bearTrend, ranging, bosPattern, chochPattern, fvgBullishPattern, orderBlockBullishPattern, sweepBuySidePattern, pdhPdlPattern } from '../charts/candleData.js'

const BULL = '#26A69A'
const BEAR = '#EF5350'

export function HeroChart() {
  const [mounted, setMounted] = useState(false)
  const candlesRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  // Generate a rich market scene with structure, FVG, liquidity, PDH/PDL
  const candles = [
    ...ranging(4, 1.0900, 0.0005),
    ...bullTrend(6, 1.0900, 0.0012),
    ...ranging(3, 1.0970, 0.0006),
    ...bearTrend(4, 1.0980, 0.001),
    ...bullTrend(5, 1.0940, 0.001),
  ]

  const width = 540
  const height = 340
  const padding = { top: 16, right: 56, bottom: 24, left: 50 }
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom

  const allPrices = candles.flatMap(c => [c.h, c.l])
  const minPrice = Math.min(...allPrices) - 0.001
  const maxPrice = Math.max(...allPrices) + 0.001
  const priceRange = maxPrice - minPrice || 1

  const candleWidth = chartW / candles.length
  const bodyWidth = candleWidth * 0.55

  const yScale = (price) => padding.top + chartH - ((price - minPrice) / priceRange) * chartH
  const xCenter = (i) => padding.left + i * candleWidth + candleWidth / 2

  const gridLines = Array.from({ length: 5 }, (_, i) => minPrice + (priceRange * i) / 4)

  // PDH and PDL levels
  const pdh = Math.max(...candles.map(c => c.h))
  const pdl = Math.min(...candles.map(c => c.l))

  // FVG zone (between candle 8 and 10)
  const fvgTop = candles[10]?.l || 1.094
  const fvgBottom = candles[8]?.h || 1.092

  return (
    <div className="hero-chart-wrap">
      <div className="hero-chart-header">
        <span className="hero-chart-pair">EUR/USD · M15</span>
        <span className="hero-chart-price">▲ 1.0982 <span style={{ color: 'var(--text-muted)', fontSize: 11 }}>+0.32%</span></span>
      </div>
      <svg className="hero-chart-svg" viewBox={`0 0 ${width} ${height}`} width="100%">
        <defs>
          <linearGradient id="heroFvg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(59,130,246,0.15)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
          </linearGradient>
          <linearGradient id="heroBsl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(38,166,154,0.12)" />
            <stop offset="100%" stopColor="rgba(38,166,154,0.02)" />
          </linearGradient>
          <linearGradient id="heroSsl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(239,83,80,0.02)" />
            <stop offset="100%" stopColor="rgba(239,83,80,0.12)" />
          </linearGradient>
        </defs>

        {/* Grid */}
        {gridLines.map((p, i) => (
          <g key={i} className={mounted ? 'anim-fade-in' : ''} style={{ opacity: 0 }}>
            <line x1={padding.left} y1={yScale(p)} x2={width - padding.right} y2={yScale(p)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <text x={padding.left - 8} y={yScale(p) + 4} fill="rgba(136,146,166,0.5)" fontSize="9" textAnchor="end" fontFamily="var(--font-mono)">{p.toFixed(3)}</text>
          </g>
        ))}

        {/* BSL zone (above PDH) */}
        {mounted && (
          <rect x={padding.left} y={yScale(pdh + 0.001)} width={chartW} height={Math.abs(yScale(pdh) - yScale(pdh + 0.002))} fill="url(#heroBsl)" className="zone-anim" />
        )}
        {/* SSL zone (below PDL) */}
        {mounted && (
          <rect x={padding.left} y={yScale(pdl)} width={chartW} height={Math.abs(yScale(pdl) - yScale(pdl - 0.002))} fill="url(#heroSsl)" className="zone-anim" />
        )}

        {/* FVG zone */}
        {mounted && (
          <rect x={padding.left} y={yScale(fvgTop)} width={chartW} height={Math.abs(yScale(fvgBottom) - yScale(fvgTop))} fill="url(#heroFvg)" className="zone-anim" style={{ animationDelay: '0.3s' }} />
        )}

        {/* PDH line */}
        {mounted && (
          <g className="line-draw" style={{ animationDelay: '0.4s' }}>
            <line x1={padding.left} y1={yScale(pdh)} x2={width - padding.right} y2={yScale(pdh)} stroke="#26A69A" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
            <text x={width - padding.right + 4} y={yScale(pdh) + 3} fill="#26A69A" fontSize="9" fontWeight="600">PDH</text>
          </g>
        )}
        {/* PDL line */}
        {mounted && (
          <g className="line-draw" style={{ animationDelay: '0.5s' }}>
            <line x1={padding.left} y1={yScale(pdl)} x2={width - padding.right} y2={yScale(pdl)} stroke="#EF5350" strokeWidth="1" strokeDasharray="4,4" opacity="0.6" />
            <text x={width - padding.right + 4} y={yScale(pdl) + 3} fill="#EF5350" fontSize="9" fontWeight="600">PDL</text>
          </g>
        )}

        {/* Candles */}
        {candles.map((c, i) => {
          const cx = xCenter(i)
          const isBull = c.c >= c.o
          const color = isBull ? BULL : BEAR
          const bodyTop = yScale(Math.max(c.o, c.c))
          const bodyBottom = yScale(Math.min(c.o, c.c))
          const bodyH = Math.max(Math.abs(bodyBottom - bodyTop), 1)
          return (
            <g key={i} className={mounted ? 'candle-anim' : ''} style={{ opacity: 0, animationDelay: `${0.05 * i}s`, transformOrigin: `${cx}px ${bodyBottom}px` }}>
              <line x1={cx} y1={yScale(c.h)} x2={cx} y2={yScale(c.l)} stroke={color} strokeWidth="1" opacity="0.7" />
              <rect x={cx - bodyWidth / 2} y={bodyTop} width={bodyWidth} height={bodyH} fill={color} rx="0.5" />
            </g>
          )
        })}

        {/* Structure markers */}
        {mounted && (
          <g style={{ opacity: 0, animation: 'fadeIn 0.5s ease 1.2s forwards' }}>
            <circle cx={xCenter(9)} cy={yScale(candles[9]?.h || 1.098)} r="4" fill="none" stroke="#E8B864" strokeWidth="1.5" />
            <text x={xCenter(9) + 8} y={yScale(candles[9]?.h || 1.098) - 4} fill="#E8B864" fontSize="9" fontWeight="600">BOS</text>
          </g>
        )}
        {mounted && (
          <g style={{ opacity: 0, animation: 'fadeIn 0.5s ease 1.4s forwards' }}>
            <circle cx={xCenter(14)} cy={yScale(candles[14]?.l || 1.094)} r="4" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
            <text x={xCenter(14) + 8} y={yScale(candles[14]?.l || 1.094) + 12} fill="#8B5CF6" fontSize="9" fontWeight="600">CHoCH</text>
          </g>
        )}

        {/* Glowing points following price */}
        {mounted && [5, 12, 18].map((i, idx) => (
          <circle key={`glow-${i}`} cx={xCenter(i)} cy={yScale(candles[i]?.c || 1.09)} r="3" fill="#E8B864" className="glow-point" style={{ color: '#E8B864', animationDelay: `${1.6 + idx * 0.3}s` }} />
        ))}
      </svg>
    </div>
  )
}
