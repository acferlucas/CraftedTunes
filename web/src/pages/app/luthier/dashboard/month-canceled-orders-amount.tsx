import { X } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Propostas canceladas (mês)
        </CardTitle>
        <X className="h-4 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tighter">99</span>
        <p className="text-xl text-muted-foreground">
          <span className="text-rose-500 dark:text-emerald-400">+14%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
