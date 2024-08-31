import { createBrowserRouter } from 'react-router-dom'
import App from '../components/App'
import Landing from '../components/Landing'
import MapContainer from '../components/MapContainer'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: '/map',
        element: <MapContainer />,
      },
    ],
    errorElement: <>404 NOT FOUND</>,
  },
])

export default router
