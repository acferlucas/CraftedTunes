import { CircleUser, Menu, Package2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export function Header() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">CraftTune</span>
        </NavLink>
        <NavLink
          to="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Encomendas
        </NavLink>
        <NavLink
          to="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Portfolio
        </NavLink>
        <NavLink
          to="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Clientes
        </NavLink>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <NavLink
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Encomendas
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Portfolio
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Clientes
            </NavLink>
            <NavLink to="#" className="hover:text-foreground">
              Settings
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4">
        <div className="ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>configurações</DropdownMenuItem>
              <DropdownMenuItem>suporte</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
