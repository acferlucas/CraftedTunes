import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function DealCard() {
  return (
    <Card className="w-[750px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Proposta para Luthier Matheus Silva</CardTitle>
          <Button>Aceita Proposta</Button>
        </div>
        <span className="flex gap-2">
          <p className="text-sm text-muted-foreground">Publicado: há 34 min</p>
          <p className="text-sm text-muted-foreground">Proposta: 4</p>
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex">
          <span className="text-sm text-muted-foreground">
            Estou procurando um luthier talentoso para construir um instrumento
            musical personalizado de alta qualidade. Quero um instrumento que
            reflita minhas especificações e necessidades musicais únicas.
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold">Especificações</h4>
            <ul className="text-sm text-muted-foreground">
              <li>Instrumento: Violão</li>
              <li>Modelo: Clássico</li>
              <li>Material: Madeira de Lei</li>
              <li>Acabamento: Brilhante</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Orçamento</h4>
            <ul className="text-sm text-muted-foreground">
              <li>Preço: R$ 2.500,00</li>
              <li>Prazo de entrega: 30 de agosto de 2024</li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">Lucas A.F</span>
        </div>
      </CardFooter>
    </Card>
  )
}
