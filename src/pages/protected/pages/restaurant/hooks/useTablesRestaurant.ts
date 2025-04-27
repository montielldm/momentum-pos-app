import { GetAllTablesService } from "../../settings/pages/tables/services/table.services";
import { useQuery } from "@tanstack/react-query";
import useFlowStore from "../stores/flow.store";
import { Node } from "@xyflow/react";

export default function useTablesRestaurant() {
  const { setNodes, nodes: nodeslist } = useFlowStore((state) => state);
  const queryTables = useQuery({
    queryKey: ["tables"],
    queryFn: GetAllTablesService,
    onSuccess: (data) => {
      const nodes: Node[] = [];

      const existingNodesId = new Set(nodeslist.map((node) => node.id));
      const missingTables = data.filter(
        (table) => !existingNodesId.has(table.id),
      );

      // Crear nodos nuevos para las tablas que faltan
      const newNodes: Node[] = missingTables.map((table, index) => ({
        id: table.id,
        type: "tableNode",
        position: {
          x: 0,
          y: 0,
        },
        data: {
          seats: table.seats,
          number: table.number,
          customer: "",
          total: 0,
          status: table.status,
        },
      }));
      setNodes([...nodeslist, ...newNodes]);
    },
  });

  return queryTables;
}
