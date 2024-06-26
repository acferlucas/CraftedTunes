import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'
import { Home } from './pages/_layout/home'
import { Dashboard } from './pages/app/luthier/dashboard/dashboard'
import { DealDetails } from './pages/app/luthier/deals/deal-details'
import { Deals } from './pages/app/luthier/deals/deals'
import { Orders } from './pages/app/luthier/orders/orders'
import { Signin } from './pages/auth/sign-in'
import { SignUpClient } from './pages/auth/sign-up-client'
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
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/luthier',
        element: <Dashboard />,
      },
      {
        path: '/luthier/orders',
        element: <Orders />,
      },
      {
        path: '/luthier/deals',
        element: <Deals />,
      },
      {
        path: '/luthier/deals/:dealId',
        element: <DealDetails />,
      },
    ],
  },
])
