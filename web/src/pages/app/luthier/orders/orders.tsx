import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilter } from './order-table-filter'
import { OrderTableRow } from './order-table-row'

export function Orders() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Card x-chunk="">
        <CardHeader>
          <CardTitle>Encomendas</CardTitle>
          <CardDescription>
            Gerencie suas encomendas e acompanhe seu desempenho na plataforma.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <OrderTableFilter />
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="hidden md:table-cell">Preço</TableHead>
                <TableHead className="hidden md:table-cell">
                  Total Sales
                </TableHead>
                <TableHead className="hidden md:table-cell">
                  Realizado há
                </TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <OrderTableRow />
              <OrderTableRow />
              <OrderTableRow />
              <OrderTableRow />
              <OrderTableRow />
            </TableBody>
          </Table>

          <Pagination>
            <PaginationContent className="ml-auto">
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>
    </div>
  )
}
