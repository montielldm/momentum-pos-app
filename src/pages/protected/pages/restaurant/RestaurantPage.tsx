import { ReactFlowProvider } from "@xyflow/react";
import Flow from "./components/Flow";
import Toolbar from "./components/Toolbar";

export default function RestaurantPage() {
  return (
    <ReactFlowProvider>
      <div className="w-full h-full bg-stone-100">
        <Flow />
        <Toolbar />
      </div>
    </ReactFlowProvider>
  );
}
