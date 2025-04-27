import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../models/table.models";

export const TableColumns: ColumnDef<Table>[] = [
  {
    accessorKey: "created_at",
    header: "Date",
  },
  {
    accessorKey: "number",
    header: "Number",
  },
];
