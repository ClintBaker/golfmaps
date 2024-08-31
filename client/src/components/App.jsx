import { Outlet } from 'react-router-dom'
import Header from './Header'

function App() {
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
