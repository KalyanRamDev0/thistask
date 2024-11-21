import { createRoot } from 'react-dom/client'
import App from './src/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Contact from './src/components/Contact'
import Home from './src/components/home'
import Error from './src/components/Error'
import CountryDetail from './src/components/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:country',
        element: <CountryDetail />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
])

const root = createRoot(document.querySelector('#root'))

root.render(<RouterProvider router={router} />)