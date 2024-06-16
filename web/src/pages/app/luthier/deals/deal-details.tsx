import { Star } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import { DealDetailsContent } from './deal-details-content'

export function DealDetails() {
  return (
    <Card className="grid grid-cols-4">
      <div className="col-span-3">
        <CardHeader>
          <CardTitle>Proposta para Luthier Matheus Silva</CardTitle>
          <CardDescription>Publicado em 16 de Junho de 2024</CardDescription>
          <Separator />
        </CardHeader>
        <CardContent>
          <DealDetailsContent />
        </CardContent>
      </div>

      <div>
        <div className="flex h-full">
          <Separator orientation="vertical" />
          <div className="flex w-full flex-col p-6">
            <Button>Aceitar Proposta</Button>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">Lucas A.F</span>
                <span className="flex">
                  <Star className="text-foreground text-yellow-500" /> 5.0
                </span>
              </div>
            </div>
            <div className="mt-2">
              <ul>
                <li className="leading-relaxed text-muted-foreground">
                  Projetos Publicados: 4
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  Projetos finalizados: 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
