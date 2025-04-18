import { Table } from "@tanstack/react-table"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface Props<TData> {
    table: Table<TData>
}

function StatusDot({ className }: { className?: string }) {
    return (
        <svg
            width="2"
            height="2"
            fill="currentColor"
            viewBox="0 0 4 4"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <circle cx="2" cy="2" r="1" />
        </svg>
    )
}


export default function FilterStatus<TData>({ table }: Props<TData>) {
    return (
        <Select defaultValue="All"
            onValueChange={(e) => {
                if(e === "All"){
                    table.getColumn("status")?.setFilterValue("")
                }else{
                    table.getColumn("status")?.setFilterValue(e)
                    console.log("e: ", e)
                }
            }}
        >
            <SelectTrigger
                className="[&>span]:flex [&>span]:items-center [&>span]:gap-2 [&>span_svg]:shrink-0"
            >
                <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2 [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]>span>svg]:shrink-0">
                <SelectItem value="All">
                    <span className="flex items-center gap-2">
                        <StatusDot className="text-neutral-200" />
                        <span className="truncate">All</span>
                    </span>
                </SelectItem>
                <SelectItem value="PAID">
                    <span className="flex items-center gap-2">
                        <StatusDot className="text-emerald-600" />
                        <span className="truncate">Paid</span>
                    </span>
                </SelectItem>
                <SelectItem value="OPEN">
                    <span className="flex items-center gap-2">
                        <StatusDot className="text-blue-600" />
                        <span className="truncate">Open</span>
                    </span>
                </SelectItem>
                <SelectItem value="CANCELLED">
                    <span className="flex items-center gap-2">
                        <StatusDot className="text-red-600" />
                        <span className="truncate">Cancelled</span>
                    </span>
                </SelectItem>
            </SelectContent>
        </Select>
    )
}
