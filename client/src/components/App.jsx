import { useContext, useEffect } from 'react'
import { CourseContext } from '../providers/courseProvider'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
  const { courses } = useContext(CourseContext)

  // get courses
  useEffect(() => {
    console.log(courses)
  }, [courses])

  return (
    <>
      <Header />
      <div className="mt-6">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
