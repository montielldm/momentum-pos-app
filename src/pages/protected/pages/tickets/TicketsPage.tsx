import Container from "@/components/container/Container"
import Header from "../../components/Header"
import Datatable from "@/components/datatable/Datatable";
import { TicketColumns } from "./columns/TicketColumns";
import { useState } from "react";
import { Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  ColumnFiltersState,
  getFilteredRowModel
} from "@tanstack/react-table"
import FilterTicketNumber from "./components/FilterTicketNumber";
import FilterCustomer from "./components/FilterCustomer";
import FilterStatus from "./components/FilterStatus";
import FilterRangeDate from "./components/FilterRangeDate";
import ExportFiles from "./components/ExportFiles";
import { Link } from "react-router-dom";
import useTickets from "./hooks/useTickets";


export default function TicketsPage() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({})
  const { data:tickets = [] } = useTickets()

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10
  })

  const table = useReactTable({
    data: tickets,
    columns: TicketColumns,
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

  console.log(table.getState())
  console.log(table.getCoreRowModel().rows)

  return (
    <Container>
      <Header
        title="Tickets"
        description="List of all the tickets created so far, in different states."
      />
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FilterTicketNumber
              table={table}
            />
            <FilterCustomer
              table={table}
            />
            <FilterStatus
              table={table}
            />
            <FilterRangeDate
              table={table}
            />
          </div>
          <div className="flex items-center gap-2">
            <Link to={"/app/tickets/create"} className={buttonVariants({
              variant: "success",
              size: "sm"
            })} viewTransition>
               <Plus size={14} />
               Add ticket
            </Link>
            <ExportFiles />
          </div>
        </div>
        <Datatable
          table={table}
          columns={TicketColumns}
        />
      </div>
    </Container>
  )
}
