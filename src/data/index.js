import m01 from './modules/m01.js'
import m02 from './modules/m02.js'
import m03 from './modules/m03.js'
import m04 from './modules/m04.js'
import m05 from './modules/m05.js'
import m06 from './modules/m06.js'
import m07 from './modules/m07.js'
import m08 from './modules/m08.js'
import m09 from './modules/m09.js'
import m10 from './modules/m10.js'
import m11 from './modules/m11.js'
import m12 from './modules/m12.js'
import m13 from './modules/m13.js'
import m14 from './modules/m14.js'
import m15 from './modules/m15.js'
import m16 from './modules/m16.js'
import m17 from './modules/m17.js'

export const modules = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16, m17]

export const allLessons = modules.flatMap(m => m.lessons)

export const allLessonIds = allLessons.map(l => l.id)

export const moduleLevels = [
  {
    level: 1,
    title: 'Fondamentaux',
    description: 'Les bases essentielles du trading et des marchés financiers.',
    moduleIds: ['m1', 'm2', 'm3', 'm4'],
    color: '#3B82F6',
    icon: '◆'
  },
  {
    level: 2,
    title: 'Analyse technique',
    description: 'Graphiques, chandeliers, indicateurs, gestion du risque et psychologie.',
    moduleIds: ['m5', 'm6', 'm7', 'm8', 'm9'],
    color: '#8B5CF6',
    icon: '◈'
  },
  {
    level: 3,
    title: "Construction d'une méthode",
    description: 'Stratégie, backtesting, compte démo et projet final.',
    moduleIds: ['m10', 'm11', 'm12'],
    color: '#E8B864',
    icon: '◉'
  },
  {
    level: 4,
    title: 'Smart Money Concepts',
    description: 'Structure de marché, liquidités, FVG, Order Blocks, Breaker Blocks et PDH/PDL.',
    moduleIds: ['m13', 'm14', 'm15', 'm16', 'm17'],
    color: '#26A69A',
    icon: '◎'
  }
]

export function getModuleById(id) {
  return modules.find(m => m.id === id)
}

export function getModuleByLessonId(lessonId) {
  return modules.find(m => m.lessons.some(l => l.id === lessonId))
}

export function getLessonById(lessonId) {
  return allLessons.find(l => l.id === lessonId)
}

export function getModuleLevel(moduleId) {
  return moduleLevels.find(l => l.moduleIds.includes(moduleId))
}
