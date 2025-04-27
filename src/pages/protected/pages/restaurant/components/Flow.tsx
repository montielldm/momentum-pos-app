import { useState } from "react";
import {
  ReactFlow,
  type FitViewOptions,
  type OnNodeDrag,
  type DefaultEdgeOptions,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomeControls from "./CustomeControls";
import CustomeNode from "./TableNode";
import { useShallow } from "zustand/react/shallow";
import useSavePosition from "../hooks/useSavePosition";

const fitViewOptions: FitViewOptions = {
  padding: 0.1,
  maxZoom: 2,
  minZoom: 0.1,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
};

const onNodeDrag: OnNodeDrag = (_, node) => {
  // console.log("drag event", node.data);
};

const nodeTypes = {
  tableNode: CustomeNode,
};

import useFlowStore, { AppNode, AppState } from "../stores/flow.store";
import useTablesRestaurant from "../hooks/useTablesRestaurant";
import DrawerOrders from "./DrawerOrders";

const selector = (state: AppState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export default function Flow() {
  const [isLock, setIsLock] = useState<boolean>(true);
  const {} = useTablesRestaurant();
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useFlowStore(useShallow(selector));
  const { mutate } = useSavePosition();
  const [nodeSelected, setNodeSelected] = useState<AppNode | undefined>(
    undefined,
  );
  const [isOpen, setIsOpen] = useState(false);

  const onNodeDragStop: OnNodeDrag = (_, node) => {
    mutate({
      table_id: node.id,
      position_x: node.position.x,
      position_y: node.position.y,
    });
  };

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodesDraggable={!isLock}
        onNodeClick={(_, node) => {
          setNodeSelected(node);
          setIsOpen(true);
        }}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        fitView
        fitViewOptions={fitViewOptions}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <CustomeControls isLock={isLock} setIsLock={setIsLock} />
        <Background variant={BackgroundVariant.Dots} />
      </ReactFlow>
      <DrawerOrders
        node={nodeSelected!}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
