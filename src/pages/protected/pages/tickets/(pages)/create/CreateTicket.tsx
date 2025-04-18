import { useTicketStore } from "./store/ticket.store"
import { ColumnFiltersState, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table'
import { useState } from 'react'
import { OrdersColumns } from "./columns/OrdersColumns"
import Container from "@/components/container/Container"
import { Separator } from "@/components/ui/separator"
import { FormatCurrencyHelper } from "@/helpers/format.helpers"
import Datatable from "@/components/datatable/Datatable"
import InputScaner from "./components/InputScaner"
import DialogConfirmSale from "./components/DialogConfirmSale"
import Header from "@/pages/protected/components/Header"

export default function CreateTicket() {
  const { getItems, total, subtotal, discount } = useTicketStore(state => state)
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  })
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data: getItems(),
    columns: OrdersColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      pagination,
      rowSelection,
      sorting,
      columnFilters
    }
  })

  return (
    <Container>
      <Header
        title="Create Ticket"
        description="List of all the tickets created so far, in different states."
      />
      <div className='mt-5 grid grid-cols-1 md:grid-cols-12 gap-2'>
        <div className='col-span-13 md:col-start-1 md:col-end-8 lg:col-end-10 border bg-white rounded-lg h-fit'>
          <div>
            <div className='p-2'>
              <InputScaner />
            </div>
            <Separator orientation='horizontal' />
            <div className='p-2 space-y-3'>
              <Datatable
                columns={OrdersColumns}
                table={table}
              />
            </div>
          </div>
        </div>
        <div className='col-span-13 md:col-start-8 lg:col-start-10 md:col-end-13 border bg-white rounded-md h-fit'>
          <div className='py-2 px-2 border-b'>
            <p className='font-semibold'>MomentumPOS</p>
            <p className='text-xs text-muted-foreground'>NIT 890507890-4</p>
          </div>

          {/* <div className="p-2 flex gap-2 items-center">
            <CustomerSelect />
            <Button variant="outline" className="shrink-0" size="icon">
              <UserPlus size={14} />
            </Button>
            <Separator />
          </div> */}
          <div className="p-2">
            <div className='p-4 space-y-2 text-sm bg-neutral-50 rounded-md'>
              <div className='flex items-center justify-between'>
                <p>Subtotal</p>
                <p className="text-muted-foreground">{FormatCurrencyHelper(subtotal)}</p>
              </div>
              <Separator />
              <div className='flex items-center justify-between'>
                <p>Descuento</p>
                <p className="px-2 py-0.5 rounded font-semibold text-xs text-neutral-700 bg-neutral-200"> -{FormatCurrencyHelper(discount)}</p>
              </div>
              <Separator />
              <div className='flex items-center justify-between'>
                <p>Total</p>
                <p className="text-muted-foreground">{FormatCurrencyHelper(total)}</p>
              </div>
              <Separator />
            </div>
          </div>
          {/* <div className="p-2">
            <RadioGroup className="grid-cols-2" defaultValue="cash">
              <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
                <RadioGroupItem id={`${id}-2`} value="cash" className="sr-only" />
                <Banknote className="opacity-60" size={20} aria-hidden="true" />
                <label
                  htmlFor={`${id}-2`}
                  className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                >
                  Cash
                </label>
              </div>
              <div className="border-input has-data-[state=checked]:border-ring focus-within:border-ring focus-within:ring-ring/50 relative flex cursor-pointer flex-col items-center gap-3 rounded-md border px-2 py-3 text-center shadow-xs transition-[color,box-shadow] outline-none focus-within:ring-[3px]">
                <RadioGroupItem id={`${id}-1`} value="card" className="sr-only" />
                <WalletCards className="opacity-60" size={20} aria-hidden="true" />
                <label
                  htmlFor={`${id}-1`}
                  className="text-foreground cursor-pointer text-xs leading-none font-medium after:absolute after:inset-0"
                >
                  Credit/Debit Card
                </label>
              </div>
            </RadioGroup>
          </div> */}
          <div className='p-2 flex items-center gap-2'>
            <DialogConfirmSale />
          </div>
        </div>
      </div>
    </Container>
  )
}
