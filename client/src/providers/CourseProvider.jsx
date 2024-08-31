import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CourseContext = createContext()

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getCourses() {
      try {
        setLoading(true)
        const res = await axios.get('/api/course')
        setCourses(res.data)
        setLoading(false)
      } catch (e) {
        console.log('error getting courses')
        setError(e)
      }
    }
    getCourses()
  }, [])

  return (
    <CourseContext.Provider value={{ courses, loading, error }}>
      {children}
    </CourseContext.Provider>
  )
}
