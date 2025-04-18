import { ColumnDef } from "@tanstack/react-table"
import { Ticket } from "../models/ticket.models"
import { Checkbox } from "@/components/ui/checkbox"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { ArrowUpDown } from "lucide-react"
import { DateRange } from "react-day-picker"
import ActionsTicket from "../components/ActionsTicket"

export const formattedMoney = (money: number) => {
    const formatted = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(money);
    return formatted
}

export const TicketColumns: ColumnDef<Ticket>[] = [
    {
        accessorKey: "select",
        header: ({ table }) => {
            return (
                <div className="flex items-center justify-center">
                    <Checkbox
                        checked={
                            table.getIsAllPageRowsSelected() ||
                            (table.getIsSomePageRowsSelected() && "indeterminate")
                        }
                        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                        aria-label="Select all"
                    />
                </div>
            )
        },
        cell: ({ row }) => (
            <div className="flex items-center justify-center">
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={(value) => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            </div>
        ),
        size: 30,
        minSize: 30,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "ticket_number",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Ticket</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => <span className="font-medium hover:li">#{row.original.ticket_number}</span>,
        size: 80
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Date</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => (
            <span className="text-muted-foreground">{format(row.original.created_at, "MMM d yyyy, p")}</span>
        ),
        filterFn: (row, columnId, value: DateRange | undefined) => {
            if (!value) return true;

            const rowDate = new Date(row.getValue(columnId))
            const { from, to } = value
            return (!from || rowDate >= from) && (!to || rowDate <= to)
        }
    },
    {
        accessorKey: "customer",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Customer</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => (
            <span className="text-muted-foreground">{row.original.customer}</span>
        )
    },
    {
        accessorKey: "payment_method"
    },
    {
        accessorKey: "subtotal",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Subtotal</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => <span className="text-muted-foreground">{formattedMoney(row.original.subtotal)}</span>
    },
    {
        accessorKey: "total",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Total</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => <span className="text-muted-foreground">{formattedMoney(row.original.total)}</span>
    },
    {
        accessorKey: "discount",
        header: ({ column }) => {
            return (
                <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    <span>Discount</span>
                    <ArrowUpDown size={14} />
                </div>
            )
        },
        cell: ({ row }) => <span className="text-muted-foreground">{formattedMoney(row.original.discount)}</span>
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const status = row.original.status
            return (
                <div className="flex items-center gap-2 bg-neutral-100/70 text-muted-foreground font-medium pl-1.5 pr-2 pt-0.5 rounded-md w-fit ">
                    <div className={cn("size-2 shrink-0 rounded-full", {
                        "bg-green-600": status.toLowerCase() === "paid",
                        "bg-violet-600": status.toLowerCase() === "pending",
                        "bg-red-600": status.toLowerCase() === "cancelled",
                        "bg-sky-600": status.toLowerCase() === "refunded"
                    })} />
                    {status}
                </div>
            )
        }
    },
    {
        accessorKey: "actions",
        header: ({ }) => <span className="flex items-center justify-end">actions</span>,
        size: 80,
        cell: ({ row }) => {
            const ticket = row.original
            return (
                <div className="flex gap-2 items-center justify-end">
                    <ActionsTicket
                        ticket={ticket}
                    />
                </div>
            )
        }
    }
]