export default function Loading({ message }) {
  return (
    <div className="my-24 w-screen flex justify-center items-center">
      {message ? message : 'Loading...'}
    </div>
  )
}
