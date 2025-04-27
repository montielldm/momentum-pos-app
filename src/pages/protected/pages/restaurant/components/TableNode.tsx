import { type Node, type NodeProps } from "@xyflow/react";
import ChairsNode from "./ChairsNode";
import { cn } from "@/lib/utils";
import StatusNode from "./StatusNode";

type TableRectNode = Node<
  {
    seats: number;
    number: number;
    customer: string;
    total: number;
    status: "AVAILABLE" | "BOOKED" | "BUSY" | "OUTOFSERVICE";
  },
  "rect"
>;

export default function CustomeNode({
  data,
  selected,
}: NodeProps<TableRectNode>) {
  return (
    <>
      <div className="relative">
        <div
          className={cn(
            "bg-white group h-24 w-28 p-3 border rounded-xl flex flex-col justify-between",
            {
              "border border-stone-500 ring-3 ring-stone-300": selected,
            },
          )}
        >
          <p className="text-xs text-muted-foreground">T{data.number}</p>
          <StatusNode status={data.status} />
        </div>
        <ChairsNode seats={data.seats} />
      </div>
    </>
  );
}
