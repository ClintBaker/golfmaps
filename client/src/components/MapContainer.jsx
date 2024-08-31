import GolfMap from './GolfMap'

export default function MapContainer() {
  return (
    <div>
      <div className="m-8">
        <h3 className="font-medium text-sm my-8 text-neutral-400">Courses</h3>
        <h1 className="font-semibold text-neutral-700 text-3xl">
          Golf courses{' '}
          <span className="font-thin text-neutral-500">in your area</span>
        </h1>
      </div>
      <GolfMap height="500px" />
    </div>
  )
}
