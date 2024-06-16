import { Outlet } from 'react-router-dom'

import asideImage from '../../assets/example1.jpg'

export function AuthLayout() {
  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <Outlet />
      <div className="hidden bg-muted lg:block">
        <img
          src={asideImage}
          alt="Image"
          className="h-screen w-screen object-fill dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
