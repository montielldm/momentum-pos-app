import { Download, EllipsisVertical, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import { Ticket } from "../models/ticket.models"

interface Props {
  ticket: Ticket
}

export default function ActionsTicket({ ticket }:Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon_sm"
          variant="outline"
          aria-label="Open edit menu"
        >
          <EllipsisVertical size={14} aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link to={`/app/tickets/${ticket.id}`}>
            <Maximize2 size={14} />
            Ver detalles
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Download size={14} />
            Descargar Factura
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
