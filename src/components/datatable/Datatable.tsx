import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ColumnDef, flexRender, Table as ReactTable } from "@tanstack/react-table"

import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

interface DataTableProps<TData, TValue> {
  table: ReactTable<TData>
  columns: ColumnDef<TData, TValue>[] 
}

export default function Datatable<TData, TValue>({ table, columns }: DataTableProps<TData, TValue>) {
  return (
    <>
    <div className="rounded-md overflow-hidden border">
      <Table className="border-collapse">
        <TableHeader className="bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className={cn("font-semibold uppercase h-8 border border-t-0 last:border-r-0 first:border-l-0 text-xs", {
                    "first:pl-0": header.id === "select"
                  })} key={header.id} style={{ width: `${header.getSize()}px` }}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="bg-white">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className={cn("border border-t-0 border-b-0 last:border-r-0 first:border-l-0", {
                    "first:pl-0 " : cell.column.id === "select"
                  })}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
    <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </>
  )
}
