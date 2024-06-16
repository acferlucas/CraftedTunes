import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function FilterDeals() {
  return (
    <Card className="col-span-1 hidden h-[300px] lg:block">
      <CardHeader>
        <CardTitle>Filtrar Propostas:</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-medium text-foreground">Preço:</h1>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                placeholder="De"
                className="w-full rounded-md border border-muted-foreground p-2"
              />
              <Input
                type="number"
                placeholder="Até"
                className="w-full rounded-md border border-muted-foreground p-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Button variant="outline" className="w-full">
              Limpar Filtros
            </Button>
            <Button className="w-full">Aplicar Filtros</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
