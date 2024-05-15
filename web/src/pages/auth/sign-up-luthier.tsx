import { Label } from '@radix-ui/react-label'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignUpluthier() {
  return (
    <div className="flex h-screen items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">Cadastro Luthier</h1>
          <p className="text-balance text-muted-foreground">
            formulario para o cadastro de Luthier
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="lucas Acfer" required />
          </div>

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Avatar</Label>
            <Input id="picture" type="file" />
          </div>

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
            <Label htmlFor="email">Senha</Label>
            <Input id="password" type="password" required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Confirmar Senha</Label>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  )
}
