import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { DealCard } from './deal-card'

export function Deals() {
  return (
    <Card x-chunk="">
      <CardHeader>
        <CardTitle>Propostas</CardTitle>
        <CardDescription>
          Gerencie suas propostas e as acompanhe na aba de encomendas.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DealCard />
      </CardContent>
    </Card>
  )
}
