import { Badge } from "@/components/ui/badge";

interface Props {
  status: "AVAILABLE" | "BOOKED" | "BUSY" | "OUTOFSERVICE";
}

export default function StatusNode({ status }: Props) {
  return (
    <Badge variant="secondary">
      {status === "BUSY" ? (
        <>
          <span
            className="size-1.5 rounded-full bg-pink-500"
            aria-hidden="true"
          ></span>
          Busy
        </>
      ) : status === "BOOKED" ? (
        <>
          <span
            className="size-1.5 rounded-full bg-violet-500"
            aria-hidden="true"
          ></span>
          Reserved
        </>
      ) : status === "OUTOFSERVICE" ? (
        <>
          <span
            className="size-1.5 rounded-full bg-neutral-50"
            aria-hidden="true"
          ></span>
          Disabled
        </>
      ) : (
        <>
          <span
            className="size-1.5 rounded-full bg-green-500"
            aria-hidden="true"
          ></span>
          Available
        </>
      )}
    </Badge>
  );
}
