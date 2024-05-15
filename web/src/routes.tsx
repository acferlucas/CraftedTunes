import { createBrowserRouter } from 'react-router-dom'

import { AuthLayout } from './pages/_layout/auth'
import { Home } from './pages/_layout/home'
import { Signin } from './pages/auth/sign-in'
import { SignUpClient } from './pages/auth/sign-up'
import { SignUpluthier } from './pages/auth/sign-up-luthier'
import { ClientOrder } from './pages/home/client-order'
import { LuthierJob } from './pages/home/luthier-job'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <ClientOrder />,
      },
      {
        path: '/job',
        element: <LuthierJob />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <Signin /> },
      { path: '/sign-up/client', element: <SignUpClient /> },
      { path: '/sign-up/luthier', element: <SignUpluthier /> },
    ],
  },
])
