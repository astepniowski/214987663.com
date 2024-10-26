import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from "./pages/HomePage"
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GalleryPage from './pages/GalleryPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/gallery',
    element: <GalleryPage/>,
    errorElement: <NotFoundPage/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/> 
  </StrictMode>,
)
