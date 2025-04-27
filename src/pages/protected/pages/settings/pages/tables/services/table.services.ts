import { api } from "@/helpers/axios.instance";
import { Table, CreateTable } from "../models/table.models";

export const GetAllTablesService = async (): Promise<Table[]> => {
  const { data } = await api.get<Table[]>("/tables/");
  return data;
};

export const CreateTableService = async (
  createTable: CreateTable,
): Promise<Table> => {
  const { data } = await api.post<Table>("/tables/", createTable);
  return data;
};
