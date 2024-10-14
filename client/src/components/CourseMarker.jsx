import { useEffect, useState } from 'react'
import { Marker } from 'react-map-gl'
import GolfBallIcon from './GolfBallIcon'

export default function CourseMarker({ course }) {
  return (
    <>
      <Marker
        longitude={course.lng}
        latitude={course.lat}
        color="#4b0fff"
        anchor="bottom"
      >
        <GolfBallIcon course={course} />
      </Marker>
    </>
  )
}
