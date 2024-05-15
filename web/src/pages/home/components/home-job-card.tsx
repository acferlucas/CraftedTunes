import { BadgePlus, DollarSign, PanelTop } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function HomeJobCard() {
  const navigate = useNavigate()
  return (
    <Card className="h-full border-none bg-transparent shadow-none">
      <CardHeader>
        <ul className="hidden gap-4 2xl:flex">
          <li className="flex items-center gap-2 text-sm">
            <BadgePlus className="h-4 w-4 text-gray-600" />
            Cadastro gratuito
          </li>
          <li className="flex items-center gap-2 text-sm">
            <PanelTop className="h-4 w-4 text-gray-600" /> Portfolio online
          </li>
          <li className="flex items-center gap-2 text-sm">
            <DollarSign className="h-4 w-4 text-gray-600" /> Várias Opções de
            saque
          </li>
        </ul>
        <CardTitle className="text-5xl tracking-wide">
          Junte-se ao CraftedTunes:{' '}
          <span className="text-purple-700">
            A Plataforma para os Melhores Luthiers do Brasil.
          </span>{' '}
        </CardTitle>
        <CardDescription>
          <span className="mt-4 block">
            Amplie seu alcance e atinja novos clientes com CraftedTunes.
            Cadastre-se e faça parte de uma comunidade de luthiers talentosos
            prontos para transformar visões musicais em realidade. Construa
            instrumentos personalizados de forma rápida e segura, enquanto
            conectamos você com músicos apaixonados por qualidade e
            exclusividade. Garanta uma comunicação fluida e entregue resultados
            excepcionais ao se juntar ao CraftedTunes hoje mesmo.
          </span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-4">
        <Button onClick={() => navigate('/sign-up/luthier')}>
          Eu quero Trabalhar
        </Button>

        <Button onClick={() => navigate('/')} variant="outline">
          Quero Encomendar{' '}
        </Button>
      </CardFooter>
    </Card>
  )
}
