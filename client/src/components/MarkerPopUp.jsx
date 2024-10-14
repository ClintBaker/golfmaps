export default function MarkerPopUp({ course }) {
  return (
    <div className="w-64 h-auto absolute flex flex-col justify-center items-center -translate-y-[106px] -translate-x-[108px] bg-white shadow-2xl border-2 border-neutral-300 rounded-md text-sm p-4 ">
      <h1 className="text-md font-semibold">{course.name}</h1>
      <div>Rating out of 5 stars</div>
      <button className="mt-2 w-24 text-xs rounded-full border-[1px] text-neutral-500 border-neutral-500 p-1">
        Get tee times
      </button>
    </div>
  )
}
