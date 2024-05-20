import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TableCell, TableRow } from '@/components/ui/table'

import guitaImg from '../../../../assets/guitar.jpg'

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <img
          alt="Product image"
          className="aspect-square rounded-md object-fill"
          height="64"
          src={guitaImg}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">Guitarra Explorer</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          pendente
        </div>
      </TableCell>
      <TableCell className="hidden md:table-cell">$1299.99</TableCell>
      <TableCell className="hidden md:table-cell">25</TableCell>
      <TableCell className="hidden md:table-cell">
        2023-07-12 10:42 AM
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Aprovar</DropdownMenuItem>
            <DropdownMenuItem>Cancelar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
