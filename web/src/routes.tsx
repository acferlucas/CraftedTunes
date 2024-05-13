import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/_layout/home'
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
])
