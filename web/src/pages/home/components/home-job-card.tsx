import { AwardIcon, BadgePlus, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomeJobCard() {
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
          Junte-se ao CraftedTunes:{' '}
          <span className="text-purple-700">
            A Plataforma para os Melhores Luthiers do Brasil.
          </span>{' '}
        </CardTitle>
        <CardDescription>
          <p className="mt-4">
            Amplie seu alcance e atinja novos clientes com CraftedTunes.
            Cadastre-se e faça parte de uma comunidade de luthiers talentosos
            prontos para transformar visões musicais em realidade. Construa
            instrumentos personalizados de forma rápida e segura, enquanto
            conectamos você com músicos apaixonados por qualidade e
            exclusividade. Garanta uma comunicação fluida e entregue resultados
            excepcionais ao se juntar ao CraftedTunes hoje mesmo.
          </p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        <Button>Eu quero Trabalhar</Button>

        <Button variant="outline">Quero Encomendar </Button>
      </CardFooter>
    </Card>
  )
}
