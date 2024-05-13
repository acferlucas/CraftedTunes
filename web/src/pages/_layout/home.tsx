import { Outlet } from 'react-router-dom'

import { HomeHeader } from '../home/components/home-header'

export function Home() {
  return (
    <div className="min-h-screen bg-gray-100 antialiased">
      <HomeHeader />
      <div className="mt-10 grid grid-cols-2 p-4">
        <Outlet />
      </div>
    </div>
  )
}
