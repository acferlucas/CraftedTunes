import { Star } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DealCard() {
  return (
    <Card className="grid grid-cols-2">
      <div>
        <CardHeader className="">
          <CardTitle>Proposta para Luthier Matheus Silva</CardTitle>
          <p className="text-sm text-muted-foreground">
            Publicado: <strong>há 34 min</strong>
          </p>
        </CardHeader>
        <CardContent className="">
          <div className="flex">
            <span className="text-sm text-muted-foreground">
              Estou procurando um luthier talentoso para construir um
              instrumento musical personalizado de alta qualidade. Quero um
              instrumento que reflita minhas especificações e necessidades
              musicais únicas.
              <Button variant="link" className="text-sm" asChild>
                <NavLink to="/luthier/deals/ae23csa23sa321">
                  ver mais detalhes
                </NavLink>
              </Button>
            </span>
          </div>

          <ul className="mt-4 flex gap-2 text-sm text-muted-foreground">
            <li>
              <Badge variant="outline">Violão</Badge>
            </li>
            <li>
              <Badge variant="outline">Classico</Badge>
            </li>
            <li>
              <Badge variant="outline">Madeira de Lei</Badge>
            </li>
            <li>
              <Badge variant="outline">Brilhantes</Badge>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">Lucas A.F</span>
            <span className="flex">
              <Star className="text-foreground text-yellow-500" /> 5.0
            </span>
          </div>
        </CardFooter>
      </div>
      <div className="ml-auto flex flex-col items-center space-y-1.5 p-6">
        <Button>Aceita Proposta</Button>
        <h1 className="p-2 text-2xl font-bold text-emerald-500">R$ 7.100</h1>
      </div>
    </Card>
  )
}
