import { Search } from 'lucide-react'

import { Input } from '@/components/ui/input'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

import { DealCard } from './deal-card'
import { FilterDeals } from './filter-deals'

export function Deals() {
  return (
    <div className="">
      <header className="flex flex-col space-y-1.5 px-6 py-2">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Propostas
        </h1>
        <p className="text-sm text-muted-foreground">
          Gerencie suas propostas e as acompanhe na aba de encomendas.
        </p>
      </header>
      <div className="mt-4 grid grid-cols-6 gap-5 px-6">
        <FilterDeals />
        <div className="col-span-5 flex flex-col gap-4">
          <div className="flex w-full items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground">
            <Input
              placeholder="pesquisar"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Search />
          </div>
          <DealCard />

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
        </div>
      </div>
    </div>
  )
}
