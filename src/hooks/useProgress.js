import { useState, useEffect, useCallback } from 'react'

const STORAGE_KEY = 'gt_academy_progress'
const NOTES_KEY = 'gt_academy_notes'
const FAV_KEY = 'gt_academy_favs'

export function useProgress() {
  const [completed, setCompleted] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    } catch { return {} }
  })

  const [notes, setNotes] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(NOTES_KEY) || '{}')
    } catch { return {} }
  })

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(FAV_KEY) || '[]')
    } catch { return [] }
  })

  const save = useCallback((data) => {
    setCompleted(data)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [])

  const markComplete = useCallback((lessonId) => {
    setCompleted(prev => {
      const next = { ...prev, [lessonId]: true }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const markIncomplete = useCallback((lessonId) => {
    setCompleted(prev => {
      const next = { ...prev }
      delete next[lessonId]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const saveNote = useCallback((lessonId, text) => {
    setNotes(prev => {
      const next = { ...prev, [lessonId]: text }
      localStorage.setItem(NOTES_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const toggleFavorite = useCallback((lessonId) => {
    setFavorites(prev => {
      const next = prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
      localStorage.setItem(FAV_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const getProgress = useCallback((lessonIds) => {
    if (!lessonIds || lessonIds.length === 0) return 0
    const done = lessonIds.filter(id => completed[id]).length
    return Math.round((done / lessonIds.length) * 100)
  }, [completed])

  const getTotalProgress = useCallback((allLessonIds) => {
    if (!allLessonIds || allLessonIds.length === 0) return 0
    const done = allLessonIds.filter(id => completed[id]).length
    return Math.round((done / allLessonIds.length) * 100)
  }, [completed])

  return {
    completed,
    notes,
    favorites,
    markComplete,
    markIncomplete,
    saveNote,
    toggleFavorite,
    getProgress,
    getTotalProgress
  }
}
