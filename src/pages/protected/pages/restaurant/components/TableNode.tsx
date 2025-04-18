import { type Node, type NodeProps } from "@xyflow/react"
import StatusNode from "./StatusNode"
import ChairsNode from "./ChairsNode"

type TableRectNode = Node<{
  chairs: number
  table: number
  customer: string
  total: number
  status: "reserved" | "open" | "completed" | "inactive"
}, 'rect'>

type AppNode = TableRectNode

export default function CustomeNode({ data }: NodeProps<AppNode>) {
  return (
    <div className="relative">
      <div className="bg-white group size-24 flex p-2 flex-col gap-1 items-center justify-center border rounded-xl">
        <p className="text-xs font-medium text-muted-foreground">M{data.table}</p>
      </div>
      <ChairsNode
        chairs={data.chairs}
      />
      <StatusNode
        status={data.status}
      />
    </div>
  )
}