import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableCover from "@/assets/table-cover.png";
import { Table } from "../models/table.models";

interface DataTableProps {
  columns: ColumnDef<Table>[];
  data: Table[];
}

export default function ContentTables({ columns, data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-5 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {table.getRowModel().rows.length ? (
        table.getRowModel().rows.map((row) => {
          const item = row.original;

          return (
            <div
              key={row.id}
              className="border border-accent rounded-md overflow-hidden"
            >
              <div className="bg-white border-b border-accent flex items-center justify-center rounded-lg">
                <img
                  src={TableCover}
                  className="size-44"
                  alt="imagenes de mesas"
                />
              </div>
              <div className="mt-2 px-2 bg-white flex flex-col pb-2">
                <p className="text-sm font-medium">
                  Mesa {item.number} ⟶
                  <span className="font-normal text-muted-foreground">
                    (Interior)
                  </span>
                </p>
                <span className="capitalize text-xs italic text-muted-foreground">
                  Seats {item.seats}, {item.status}
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <div>
          <p className="text-muted-foreground text-sm">Tables not found</p>
        </div>
      )}
    </div>
  );
}
