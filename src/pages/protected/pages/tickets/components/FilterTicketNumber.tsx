import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"
import { CircleXIcon } from "lucide-react"
import { useId, useRef } from "react"

interface Props<TData> {
    table: Table<TData>
}

export default function FilterTicketNumber<TData>({ table }: Props<TData>) {
    const id = useId()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClearInput = () => {
        table.getColumn("ticket_number")?.setFilterValue("")
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return (
        <div className="relative">
            <Input
                id={id}
                ref={inputRef}
                className="pe-9"
                placeholder="Type ticket..."
                type="text"
                value={(table.getColumn("ticket_number")?.getFilterValue() as string) ?? ""}
                onChange={(e) => table.getColumn("ticket_number")?.setFilterValue(e.target.value)}
            />
            {(table.getColumn("ticket_number")?.getFilterValue() as string) && (
                <button
                    className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                    aria-label="Clear input"
                    onClick={handleClearInput}
                >
                    <CircleXIcon size={16} aria-hidden="true" />
                </button>
            )}
        </div>
    )
}
