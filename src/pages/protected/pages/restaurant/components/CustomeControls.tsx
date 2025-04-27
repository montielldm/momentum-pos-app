import { Panel, useReactFlow, useViewport } from "@xyflow/react";
import { Button } from "@/components/ui/button";
import { Minus, Pencil, PencilOff, Plus, Scan, SquarePlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CreateTable from "../../settings/pages/tables/components/CreateTable";

interface Props {
  isLock: boolean;
  setIsLock: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CustomeControls({ isLock, setIsLock }: Props) {
  const { zoomIn, zoomOut, fitView } = useReactFlow();
  const { zoom } = useViewport();

  return (
    <Panel position="bottom-left">
      <div className="flex flex-col gap-3  bg-white p-2 shadow-sm rounded-md">
        <div className="flex flex-col items-start gap-2">
          <Button
            variant="outline"
            size="icon_xs"
            disabled={zoom === 2}
            aria-label="Flip Horizontal"
            onClick={() => zoomIn({ duration: 800 })}
          >
            <Plus size={14} aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon_xs"
            disabled={zoom === 0.5}
            aria-label="Flip Vertical"
            onClick={() => zoomOut({ duration: 800 })}
          >
            <Minus size={14} aria-hidden="true" />
          </Button>
          <Button
            size="icon_xs"
            variant="outline"
            onClick={() => fitView({ duration: 600 })}
          >
            <Scan size={14} aria-hidden="true" />
          </Button>
        </div>
        <Separator />
        <div className="flex flex-col items-start gap-2">
          <Button
            size="icon_xs"
            variant="outline"
            onClick={() => {
              setIsLock(!isLock);
            }}
          >
            {isLock ? (
              <PencilOff size={14} aria-hidden="true" />
            ) : (
              <Pencil size={14} aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
    </Panel>
  );
}
