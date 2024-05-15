import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Signin() {
  return (
    <div className="flex h-screen items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-balance text-muted-foreground">
            Digite seu e-mail abaixo para acessar sua conta
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="lucas@gmail.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <span className="ml-auto inline-block text-sm underline">
                Esqueceu sua senha ?
              </span>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
          <Button variant="outline" className="w-full">
            Entrar com Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Não tem uma conta ?{' '}
          <NavLink to="/" className="underline">
            criar conta
          </NavLink>
        </div>
      </div>
    </div>
  )
}
