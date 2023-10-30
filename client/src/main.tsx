import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import Home from './routes/Home.tsx'
import Festival from './routes/Festival.tsx'
import Yoga from './routes/Yoga.tsx'
import Saree from './routes/Saree.tsx'
import About from './routes/About.tsx'
import Routine from './components/Routine.tsx'
import Plan from './routes/Plan.tsx'
import { createStore } from 'jotai'
import formReducers from './reducers/form.tsx'
import FormResult from './components/FormResult.tsx'
import { Provider } from 'jotai';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';


const myStore = createStore();

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
        path: "/routine",
        element: <Routine />
      },
      {
        path: "/routine/plan",
        element: <Plan />
      },
      {
        path: "/routine/result",
        element: <FormResult />
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
    <Provider store={myStore}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
