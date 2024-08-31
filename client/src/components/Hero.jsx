import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div
      className="mx-0 relative h-[340px] xl:h-[380px] bg-cover bg-center lg:mx-12 lg:rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/golfers.jpg')" }}
    >
      <div className="absolute inset-0 bg-neutral-800 bg-opacity-5"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-36 md:max-w-72 mx-auto">
          <h3 className="text-lg mb-4">Find your favorite course</h3>
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Discover your next round
          </h1>
          <Link
            to="/map"
            className="bg-neutral-800 text-white font-bold py-3 px-6 rounded-full text-2xl"
          >
            Let's go
          </Link>
        </div>
      </div>
    </div>
  )
}

// find quality courses
// discover your favorite round
