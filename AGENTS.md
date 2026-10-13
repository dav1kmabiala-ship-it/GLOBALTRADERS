# GlobalTraders Academy

## Overview
A complete trading academy web application built with React + Vite. Features 17 modules (12 original + 5 SMC advanced), interactive SVG charts, quizzes, exercises, calculators, glossary, and progress tracking via localStorage.

## Tech Stack
- React 18 + Vite 5
- React Router 6 for navigation
- No backend — all data is static, progress stored in localStorage
- SVG-based candlestick charts (synthetic educational data)

## Development
```bash
docker compose -f docker-compose.base44.yml up -d
```
App runs on port 3000 with hot reload.

## Project Structure
- `src/data/modules/m01.js` through `m17.js` — module content (lessons, quizzes, exercises)
- `src/data/glossary.js` — trading glossary
- `src/charts/` — SVG chart components and synthetic candle data
- `src/components/` — LessonView, Interactive (Quiz, Checklist, Exercise), Calculators
- `src/pages/` — GlossaryPage
- `src/hooks/useProgress.js` — progress tracking via localStorage

## Key Notes
- All chart data is synthetic/educational — not real market data
- The app is fully client-side, no API or database needed
- Content is in French
- 17 modules: 12 original + 5 SMC (Market Structure, Liquidity, FVG, Order Blocks, PDH/PDL)
