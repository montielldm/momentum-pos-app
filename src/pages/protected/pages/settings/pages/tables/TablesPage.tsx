import useTables from "./hooks/useTables";
import ContentTables from "./components/ContentTables";
import { TableColumns } from "./columns/TableColumns";
import CreateTable from "./components/CreateTable";

export default function TablesPage() {
  const { data } = useTables();

  return (
    <>
      <div className="mt-4 flex items-center justify-end">
        <CreateTable />
      </div>
      <ContentTables columns={TableColumns} data={data || []} />
    </>
  );
}
