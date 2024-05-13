import { AwardIcon, BadgePlus, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomeOrderCard() {
  return (
    <Card className="h-full border-none bg-transparent shadow-none">
      <CardHeader>
        <ul className="hidden gap-4 2xl:flex">
          <li className="flex items-center gap-2 text-sm">
            <BadgePlus className="h-4 w-4 text-gray-600" /> Construa seu
            instrumento
          </li>
          <li className="flex items-center gap-2 text-sm">
            <AwardIcon className="h-4 w-4 text-gray-600" /> Satisfação garantida
          </li>
          <li className="flex items-center gap-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-gray-600" /> Pagamentos
            Protegidos
          </li>
        </ul>
        <CardTitle className="text-5xl tracking-wide">
          {' '}
          Desenvolva seu som com os{' '}
          <span className="text-purple-700">melhores artesãos musicais</span> Do
          Brasil
        </CardTitle>
        <CardDescription>
          <p className="mt-4">
            Encontre talentosos luthiers prontos para transformar sua visão
            musical em realidade. Construa instrumentos musicais personalizados
            de forma rápida e segura. Conectamos você com uma comunidade de
            luthiers talentosos, garantindo uma comunicação fluida e resultados
            excepcionais.
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        <Button>Eu quero encomendar</Button>

        <Button variant="outline">Quero Trabalhar como luthier!</Button>
      </CardFooter>
    </Card>
  )
}
