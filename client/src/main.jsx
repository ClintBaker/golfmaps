import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { CourseProvider } from './providers/courseProvider.jsx'
import router from './routes/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseProvider>
      <RouterProvider router={router} />
    </CourseProvider>
  </StrictMode>
)
