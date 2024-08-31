import { useState, useEffect, useContext } from 'react'
import Map, { Marker, NavigationControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Loading from './Loading'
import { CourseContext } from '../providers/courseProvider'
import CourseMarker from './CourseMarker'

export default function GolfMap({ height }) {
  const [mapHeight, setMapHeight] = useState('500px')
  const [initialViewState, setInitialViewState] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { courses } = useContext(CourseContext)

  useEffect(() => {
    console.log(courses)
  }, [courses])

  useEffect(() => {
    setMapHeight(height)
  }, [height])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setInitialViewState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude,
            zoom: 14,
          })
        },
        (error) => {
          console.error('Error getting location:', error)
          // Fallback to a default location if geolocation fails
          setInitialViewState({
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          })
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
      setInitialViewState({
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14,
      })
    }
  }, [])

  if (!initialViewState) {
    return <Loading message="Loading map..." /> // Show a loading message while the initial view state is being set
  }

  return (
    <div className={`w-screen`} style={{ height: mapHeight }}>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: initialViewState.longitude,
          latitude: initialViewState.latitude,
          zoom: 9,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {/* render markers */}
        {courses && courses.map((course) => <CourseMarker course={course} />)}
        <Marker longitude={-122.4} latitude={37.8} color="#4b0fff" />
        <NavigationControl position="top-right" />
      </Map>
    </div>
  )
}

// mapbox://styles/mapbox/streets-v11
