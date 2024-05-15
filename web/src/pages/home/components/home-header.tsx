import { Guitar } from 'lucide-react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function HomeHeader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <>
      <header className="flex w-full items-center justify-center bg-white p-4">
        <div className="flex w-4/5 items-center gap-6 px-2">
          <figure className="flex items-center">
            <Guitar className="h-12 w-12 text-purple-700" />
            <figcaption className="text- text-2xl font-medium text-foreground text-purple-700">
              CraftTunes
            </figcaption>
          </figure>

          <nav className="mt-1 flex w-full justify-between">
            <section className="flex gap-4">
              <NavLink
                data-current={pathname === '/'}
                to="/"
                className="flex items-center font-medium text-foreground text-gray-400 hover:text-foreground data-[current=true]:text-black"
              >
                Quero encomendar
              </NavLink>
              <NavLink
                data-current={pathname === '/job'}
                to="/job"
                className="flex items-center font-medium text-foreground text-gray-400  hover:text-foreground data-[current=true]:text-black"
              >
                Quero trabalhar
              </NavLink>
            </section>
            <Button variant="ghost" onClick={() => navigate('/sign-in')}>
              Entrar
            </Button>
          </nav>
        </div>
      </header>
      <Separator />
    </>
  )
}
