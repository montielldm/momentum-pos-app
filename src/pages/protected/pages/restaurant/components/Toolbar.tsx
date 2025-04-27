import { useViewport } from "@xyflow/react";
import { LandPlot, Map } from "lucide-react";

export default function Toolbar() {
  const { zoom, y, x } = useViewport();

  return (
    <div className="px-4 py-3 text-xs flex items-center gap-4 border-t">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-muted-foreground font-semibold">
          <Map size={12} />
          <p>Zoom:</p>
        </div>
        <p className="font-semibold">{zoom.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 text-muted-foreground font-semibold">
          <LandPlot size={12} />
          <p>Location:</p>
        </div>
        <p className="font-semibold">
          {x.toFixed(0)} pt - {y.toFixed(0)} pt
        </p>
      </div>
    </div>
  );
}
