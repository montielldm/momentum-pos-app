import { useState, useCallback } from 'react';
import {
    ReactFlow,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    type Node,
    type Edge,
    type FitViewOptions,
    type OnConnect,
    type OnNodesChange,
    type OnEdgesChange,
    type OnNodeDrag,
    type DefaultEdgeOptions,
    Background,
    BackgroundVariant
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomeControls from './CustomeControls';
import CustomeNode from './TableNode';
import ToolsControls from './ToolsControls';

const initialNodes: Node[] = [
    {
        id: '3', 
        type: 'tableNode', 
        position: { x: 5, y: 200 },
        data: {
            chairs: 2, 
            name: "cdsc",
            status: "inactive",
            table: 2
        }
    },
    {
        id: '4',
        type: 'tableNode',
        position: { 
            x: 10, 
            y: 100 
        }, data: {
            chairs: 2, 
            name: "cdsc",
            status: "completed"
        }
    },
    {
        id: '5',
        type: 'tableNode',
        position: {
            x: 10,
            y: 100
        }, data: {
            chairs: 4,
            name: "cdsc",
            status: "open"
        }
    },
    {
        id: '6', type: 'tableNode', position: { x: 10, y: 100 }, data: {
            chairs: 4, name: "cdsc", table: 1, status: "reserved", customer: "Donal Sim"
        }
    }
];

const initialEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const fitViewOptions: FitViewOptions = {
    padding: 0.2,
    maxZoom: 2,
    minZoom: 0.1
};

const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
};

const onNodeDrag: OnNodeDrag = (_, node) => {
    console.log('drag event', node.data);
};

const nodeTypes = {
    tableNode: CustomeNode
}

export default function Flow() {
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
    const [isLock, setIsLock] = useState<boolean>(false)

    const onNodesChange: OnNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes],
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((eds) => addEdge(connection, eds)),
        [setEdges],
    );

    return (
        <div className='w-full h-full'>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodesDraggable={!isLock}
                onNodeDrag={onNodeDrag}
                nodeTypes={nodeTypes}
                proOptions={{ hideAttribution: true }}
                fitView
                fitViewOptions={fitViewOptions}
                defaultEdgeOptions={defaultEdgeOptions}
            >
                <CustomeControls
                    isLock={isLock}
                    setIsLock={setIsLock}
                />
                <ToolsControls />
                <Background variant={BackgroundVariant.Dots} />
            </ReactFlow>
        </div>
    );
}
