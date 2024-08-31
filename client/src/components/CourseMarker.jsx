import { useEffect } from 'react'
import { Marker } from 'react-map-gl'

export default function CourseMarker({ course }) {
  return (
    <>
      <Marker longitude={course.lng} latitude={course.lat} color="#4b0fff" />
    </>
  )
}
