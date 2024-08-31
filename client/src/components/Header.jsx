import { Link } from 'react-router-dom'
import logo from '../assets/gm.png'

export default function Header() {
  return (
    <div className="flex flex-wrap justify-around w-full text-neutral-700 border-b-[1px] border-b-neutral-100">
      <div className="flex justify-between items-center gap-4">
        <Link to="/">
          <img src={logo} className="h-24 w-auto" />
        </Link>
        <div className="flex flex-col">
          <input
            className="bg-neutral-200 h-10 rounded-[4px] p-2"
            placeholder="Search courses     |     Find your next spot"
          />
          <ul className="flex justify-around gap-4 md:gap-24 text-sm mt-1 font-medium">
            <Link
              to="/map"
              className="text-center w-16 cursor-pointer hover:font-semibold hover:text-neutral-500"
            >
              Courses
            </Link>
            <Link
              to="/"
              className="text-center w-16 cursor-pointer hover:font-semibold hover:text-neutral-500"
            >
              Ranks
            </Link>
            <Link
              to="/"
              className="text-center w-36 cursor-pointer hover:font-semibold hover:text-neutral-500"
            >
              Suggest a course
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 text-sm">
        <button className="font-bold">Log in</button>
        <button className="rounded-full border-neutral-800 border-[1px] p-2 hover:bg-neutral-50">
          Sign up
        </button>
      </div>
    </div>
  )
}
