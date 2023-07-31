import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import Home from './routes/Home.tsx'
import Festival from './routes/Festival.tsx'
import Yoga from './components/Yoga.tsx'
import Saree from './components/Saree.tsx'
import About from './routes/About.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

// Renders the routes in our app
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/festivals",
        element: <Festival />
      },
      {
        path: "/yoga",
        element: <Yoga />
      },
      {
        path: "/saree",
        element: <Saree />
      },
      {
        path: "/about",
        element: <About />
      }
    ],
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
