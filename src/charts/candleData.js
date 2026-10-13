// Helper functions to generate synthetic candlestick data for educational charts

// Generate a bullish trend with higher highs and higher lows
export function bullTrend(count = 20, start = 1.0800, volatility = 0.0015) {
  const candles = []
  let price = start
  for (let i = 0; i < count; i++) {
    const trend = 0.0006
    const noise = (Math.sin(i * 0.8) + (Math.random() - 0.5) * 0.6) * volatility
    const o = price
    const c = price + trend + noise
    const h = Math.max(o, c) + Math.random() * volatility * 0.5
    const l = Math.min(o, c) - Math.random() * volatility * 0.5
    candles.push({ o: +o.toFixed(4), c: +c.toFixed(4), h: +h.toFixed(4), l: +l.toFixed(4) })
    price = c
  }
  return candles
}

// Generate a bearish trend with lower highs and lower lows
export function bearTrend(count = 20, start = 1.1200, volatility = 0.0015) {
  const candles = []
  let price = start
  for (let i = 0; i < count; i++) {
    const trend = -0.0006
    const noise = (Math.sin(i * 0.8) + (Math.random() - 0.5) * 0.6) * volatility
    const o = price
    const c = price + trend + noise
    const h = Math.max(o, c) + Math.random() * volatility * 0.5
    const l = Math.min(o, c) - Math.random() * volatility * 0.5
    candles.push({ o: +o.toFixed(4), c: +c.toFixed(4), h: +h.toFixed(4), l: +l.toFixed(4) })
    price = c
  }
  return candles
}

// Generate a ranging/consolidation pattern
export function ranging(count = 20, start = 1.1000, volatility = 0.001) {
  const candles = []
  let price = start
  for (let i = 0; i < count; i++) {
    const noise = (Math.sin(i * 0.5) + (Math.random() - 0.5) * 0.4) * volatility
    const o = price
    const c = price + noise
    const h = Math.max(o, c) + Math.random() * volatility * 0.4
    const l = Math.min(o, c) - Math.random() * volatility * 0.4
    candles.push({ o: +o.toFixed(4), c: +c.toFixed(4), h: +h.toFixed(4), l: +l.toFixed(4) })
    price = c
  }
  return candles
}

// Generate a BOS pattern: uptrend then break of previous high
export function bosPattern() {
  const candles = []
  let price = 1.0900
  // Uptrend forming HH/HL
  const moves = [
    { o: 1.0900, c: 1.0930, h: 1.0940, l: 1.0890 },
    { o: 1.0930, c: 1.0910, h: 1.0945, l: 1.0900 },
    { o: 1.0910, c: 1.0960, h: 1.0970, l: 1.0905 },
    { o: 1.0960, c: 1.0940, h: 1.0975, l: 1.0930 },
    { o: 1.0940, c: 1.0920, h: 1.0950, l: 1.0910 },
    { o: 1.0920, c: 1.0980, h: 1.0990, l: 1.0915 },
    { o: 1.0980, c: 1.1010, h: 1.1020, l: 1.0975 },
    { o: 1.1010, c: 1.0990, h: 1.1025, l: 1.0980 },
    { o: 1.0990, c: 1.1050, h: 1.1060, l: 1.0985 },
    { o: 1.1050, c: 1.1080, h: 1.1090, l: 1.1040 },
    { o: 1.1080, c: 1.1060, h: 1.1095, l: 1.1050 },
    { o: 1.1060, c: 1.1030, h: 1.1070, l: 1.1020 },
    { o: 1.1030, c: 1.1110, h: 1.1120, l: 1.1025 },
    { o: 1.1110, c: 1.1140, h: 1.1150, l: 1.1100 },
  ]
  return moves
}

// Generate a CHoCH pattern: uptrend then reversal
export function chochPattern() {
  const moves = [
    { o: 1.0900, c: 1.0940, h: 1.0950, l: 1.0890 },
    { o: 1.0940, c: 1.0920, h: 1.0955, l: 1.0910 },
    { o: 1.0920, c: 1.0970, h: 1.0980, l: 1.0915 },
    { o: 1.0970, c: 1.0950, h: 1.0985, l: 1.0940 },
    { o: 1.0950, c: 1.1000, h: 1.1010, l: 1.0945 },
    { o: 1.1000, c: 1.0980, h: 1.1015, l: 1.0970 },
    { o: 1.0980, c: 1.1030, h: 1.1040, l: 1.0975 },
    { o: 1.1030, c: 1.1010, h: 1.1045, l: 1.1000 },
    { o: 1.1010, c: 1.0960, h: 1.1020, l: 1.0950 },
    { o: 1.0960, c: 1.0990, h: 1.1000, l: 1.0950 },
    { o: 1.0990, c: 1.0940, h: 1.1000, l: 1.0930 },
    { o: 1.0940, c: 1.0880, h: 1.0950, l: 1.0870 },
    { o: 1.0880, c: 1.0850, h: 1.0890, l: 1.0840 },
    { o: 1.0850, c: 1.0820, h: 1.0860, l: 1.0810 },
  ]
  return moves
}

// Generate FVG pattern (bullish): strong impulse creating a gap
export function fvgBullishPattern() {
  return [
    { o: 1.0900, c: 1.0910, h: 1.0920, l: 1.0890 },
    { o: 1.0910, c: 1.0950, h: 1.0960, l: 1.0905 },
    { o: 1.0950, c: 1.1030, h: 1.1040, l: 1.0945 },
    { o: 1.1030, c: 1.1060, h: 1.1070, l: 1.1025 },
    { o: 1.1060, c: 1.1040, h: 1.1075, l: 1.1030 },
    { o: 1.1040, c: 1.1020, h: 1.1050, l: 1.1010 },
    { o: 1.1020, c: 1.0990, h: 1.1030, l: 1.0980 },
    { o: 1.0990, c: 1.1010, h: 1.1020, l: 1.0985 },
    { o: 1.1010, c: 1.1050, h: 1.1060, l: 1.1005 },
    { o: 1.1050, c: 1.1080, h: 1.1090, l: 1.1045 },
  ]
}

// Generate FVG pattern (bearish)
export function fvgBearishPattern() {
  return [
    { o: 1.1100, c: 1.1090, h: 1.1110, l: 1.1080 },
    { o: 1.1090, c: 1.1050, h: 1.1095, l: 1.1040 },
    { o: 1.1050, c: 1.0970, h: 1.1060, l: 1.0960 },
    { o: 1.0970, c: 1.0940, h: 1.0980, l: 1.0930 },
    { o: 1.0940, c: 1.0960, h: 1.0970, l: 1.0935 },
    { o: 1.0960, c: 1.0980, h: 1.0990, l: 1.0950 },
    { o: 1.0980, c: 1.1010, h: 1.1020, l: 1.0975 },
    { o: 1.1010, c: 1.0990, h: 1.1025, l: 1.0980 },
    { o: 1.0990, c: 1.0950, h: 1.1000, l: 1.0940 },
    { o: 1.0950, c: 1.0920, h: 1.0960, l: 1.0910 },
  ]
}

// Generate order block pattern (bullish)
export function orderBlockBullishPattern() {
  return [
    { o: 1.0900, c: 1.0880, h: 1.0910, l: 1.0870 },
    { o: 1.0880, c: 1.0850, h: 1.0890, l: 1.0840 },
    { o: 1.0850, c: 1.0870, h: 1.0880, l: 1.0840 },
    { o: 1.0870, c: 1.0860, h: 1.0880, l: 1.0850 },
    { o: 1.0860, c: 1.0950, h: 1.0960, l: 1.0855 },
    { o: 1.0950, c: 1.0980, h: 1.0990, l: 1.0945 },
    { o: 1.0980, c: 1.0960, h: 1.0990, l: 1.0950 },
    { o: 1.0960, c: 1.0940, h: 1.0970, l: 1.0930 },
    { o: 1.0940, c: 1.0960, h: 1.0970, l: 1.0935 },
    { o: 1.0960, c: 1.0990, h: 1.1000, l: 1.0955 },
  ]
}

// Generate a liquidity sweep pattern (buy-side)
export function sweepBuySidePattern() {
  return [
    { o: 1.1000, c: 1.1010, h: 1.1020, l: 1.0990 },
    { o: 1.1010, c: 1.1000, h: 1.1025, l: 1.0995 },
    { o: 1.1000, c: 1.1015, h: 1.1025, l: 1.0990 },
    { o: 1.1015, c: 1.1005, h: 1.1025, l: 1.0995 },
    { o: 1.1005, c: 1.0990, h: 1.1015, l: 1.0980 },
    { o: 1.0990, c: 1.1000, h: 1.1010, l: 1.0980 },
    { o: 1.1000, c: 1.1005, h: 1.1015, l: 1.0990 },
    { o: 1.1005, c: 1.1030, h: 1.1035, l: 1.1000 },
    { o: 1.1030, c: 1.1010, h: 1.1035, l: 1.1000 },
    { o: 1.1010, c: 1.0970, h: 1.1020, l: 1.0960 },
    { o: 1.0970, c: 1.0950, h: 1.0980, l: 1.0940 },
    { o: 1.0950, c: 1.0930, h: 1.0960, l: 1.0920 },
  ]
}

// Generate a liquidity sweep pattern (sell-side)
export function sweepSellSidePattern() {
  return [
    { o: 1.1000, c: 1.0990, h: 1.1010, l: 1.0980 },
    { o: 1.0990, c: 1.1000, h: 1.1010, l: 1.0985 },
    { o: 1.1000, c: 1.0985, h: 1.1005, l: 1.0975 },
    { o: 1.0985, c: 1.0995, h: 1.1005, l: 1.0980 },
    { o: 1.0995, c: 1.1010, h: 1.1020, l: 1.0990 },
    { o: 1.1010, c: 1.1000, h: 1.1020, l: 1.0995 },
    { o: 1.1000, c: 1.0995, h: 1.1005, l: 1.0985 },
    { o: 1.0995, c: 1.0970, h: 1.1000, l: 1.0960 },
    { o: 1.0970, c: 1.0990, h: 1.1000, l: 1.0965 },
    { o: 1.0990, c: 1.1030, h: 1.1040, l: 1.0985 },
    { o: 1.1030, c: 1.1050, h: 1.1060, l: 1.1025 },
    { o: 1.1050, c: 1.1070, h: 1.1080, l: 1.1045 },
  ]
}

// Generate PDH/PDL pattern
export function pdhPdlPattern() {
  return [
    { o: 1.0950, c: 1.0980, h: 1.0990, l: 1.0940 },
    { o: 1.0980, c: 1.1000, h: 1.1010, l: 1.0970 },
    { o: 1.1000, c: 1.1020, h: 1.1030, l: 1.0995 },
    { o: 1.1020, c: 1.1010, h: 1.1030, l: 1.1000 },
    { o: 1.1010, c: 1.0990, h: 1.1020, l: 1.0980 },
    { o: 1.0990, c: 1.0970, h: 1.1000, l: 1.0960 },
    { o: 1.0970, c: 1.0980, h: 1.0990, l: 1.0960 },
    { o: 1.0980, c: 1.1000, h: 1.1010, l: 1.0970 },
    { o: 1.1000, c: 1.1020, h: 1.1030, l: 1.0995 },
    { o: 1.1020, c: 1.1010, h: 1.1030, l: 1.1000 },
    { o: 1.1010, c: 1.0990, h: 1.1020, l: 1.0980 },
    { o: 1.0990, c: 1.0970, h: 1.1000, l: 1.0960 },
    { o: 1.0970, c: 1.0950, h: 1.0980, l: 1.0940 },
    { o: 1.0950, c: 1.0960, h: 1.0970, l: 1.0940 },
  ]
}

// Doji pattern
export function dojiPattern() {
  return [
    { o: 1.1000, c: 1.1010, h: 1.1020, l: 1.0990 },
    { o: 1.1010, c: 1.1020, h: 1.1030, l: 1.1000 },
    { o: 1.1020, c: 1.1020, h: 1.1035, l: 1.1005 },
    { o: 1.1020, c: 1.1000, h: 1.1030, l: 1.0990 },
    { o: 1.1000, c: 1.0980, h: 1.1010, l: 1.0970 },
  ]
}

// Hammer pattern
export function hammerPattern() {
  return [
    { o: 1.1000, c: 1.0980, h: 1.1010, l: 1.0970 },
    { o: 1.0980, c: 1.0960, h: 1.0990, l: 1.0950 },
    { o: 1.0960, c: 1.0965, h: 1.0975, l: 1.0930 },
    { o: 1.0965, c: 1.0990, h: 1.1000, l: 1.0960 },
    { o: 1.0990, c: 1.1010, h: 1.1020, l: 1.0985 },
  ]
}

// Engulfing bullish pattern
export function engulfingBullishPattern() {
  return [
    { o: 1.1000, c: 1.1010, h: 1.1020, l: 1.0990 },
    { o: 1.1010, c: 1.0990, h: 1.1015, l: 1.0980 },
    { o: 1.0990, c: 1.0970, h: 1.1000, l: 1.0960 },
    { o: 1.0970, c: 1.0950, h: 1.0980, l: 1.0940 },
    { o: 1.0950, c: 1.0980, h: 1.0990, l: 1.0945 },
    { o: 1.0980, c: 1.1010, h: 1.1020, l: 1.0975 },
    { o: 1.1010, c: 1.1030, h: 1.1040, l: 1.1005 },
  ]
}

// Pin bar pattern
export function pinBarPattern() {
  return [
    { o: 1.1000, c: 1.1010, h: 1.1020, l: 1.0990 },
    { o: 1.1010, c: 1.1020, h: 1.1030, l: 1.1000 },
    { o: 1.1020, c: 1.1025, h: 1.1050, l: 1.1015 },
    { o: 1.1025, c: 1.1015, h: 1.1030, l: 1.1005 },
    { o: 1.1015, c: 1.0990, h: 1.1020, l: 1.0980 },
  ]
}
