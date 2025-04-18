import { cn } from "@/lib/utils"
import { IconCircleCheckFilled, IconCircleDashed, IconCircleDot, IconCircleHalf2 } from "@tabler/icons-react"

interface Props {
    status: "reserved" | "open" | "completed" | "inactive"
}

export default function StatusNode({ status }: Props) {
    return (
        <div className={cn("flex items-center justify-center capitalize gap-1 absolute -top-2 -right-0 text-xs rounded-full size-4", {
            "text-amber-600 bg-amber-500/20": status === "open",
            "text-violet-600 bg-violet-500/20": status === "reserved",
            "text-green-600 bg-green-500/20": status === "completed",
            "text-neutral-600 bg-neutral-500/20": status === "inactive",
        })}>
            {
                status === "open" ? (
                    <IconCircleDashed size={12} />
                ) : status === "reserved" ? (
                    <IconCircleHalf2 size={12} />
                ) : status === "inactive" ? (
                    <IconCircleDot size={12} />
                ) : (
                    <IconCircleCheckFilled size={12} />
                )
            }
        </div>
    )
}
