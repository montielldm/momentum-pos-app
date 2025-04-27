import { GetAllTablesService } from "../services/table.services";
import { useQuery } from "@tanstack/react-query";

export default function useTables() {
  const queryTables = useQuery({
    queryKey: ["tables"],
    queryFn: GetAllTablesService,
  });

  return queryTables;
}
