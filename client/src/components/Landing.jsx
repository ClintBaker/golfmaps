import Hero from './Hero'
import GolfMap from './GolfMap'
import MapContainer from './MapContainer'

export default function () {
  return (
    <>
      <div className="flex flex-col">
        <Hero />
        <div className="mt-12">CENTER CONTENT</div>
        <div className="h-72">THIS IS THE FOOTER</div>
      </div>
    </>
  )
}
