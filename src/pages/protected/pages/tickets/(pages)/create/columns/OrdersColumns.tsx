import { ColumnDef } from "@tanstack/react-table"
import { Item } from "../models/ticket.models"
import { FormatCurrencyHelper } from "@/helpers/format.helpers"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTicketStore } from "../store/ticket.store"
import ResetQuantity from "../components/ResetQuantity"

export const OrdersColumns: ColumnDef<Item>[] = [
    {
        accessorKey: "product",
        header: "Product",
        cell: ({ row }) => <span className="font-medium">{row.original.product.name}</span>
    },
    {
        accessorKey: "discount",
        header: "Discount",
        cell: ({ row }) => <span className="px-1.5 py-0.5 rounded font-medium text-xs text-green-700 bg-green-200">{row.original.product.percentage_discount}%</span>
    },
    {
        accessorKey: "quantity",
        header: "Quantity",
        cell: ({ row }) => <span className="text-muted-foreground">{row.original.quantity}</span>
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => <span className="text-muted-foreground">{FormatCurrencyHelper(row.original.product.selling_price)}</span>
    },
    {
        accessorKey: "subtotal",
        header: "Subtotal",
        cell: ({ row }) => <span className="text-muted-foreground">{FormatCurrencyHelper(row.original.subtotal)}</span>
    },
    {
        accessorKey: "actions",
        header: ({ }) => <div className="text-right">Actions</div>,
        cell: ({ row }) => {
            const removeItem = useTicketStore(state => state.removeItem)
            return (
                <div className="flex items-center justify-end gap-2">
                    <ResetQuantity item={row.original} />
                    <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon_sm" onClick={() => removeItem(row.original.id)} >
                              <Trash size={14} className="text-muted-foreground" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent><span>Sacar producto</span></TooltipContent>
                    </Tooltip>
                </div>
            )
        }
    }
]
