import { api } from "@/helpers/axios.instance";
import { SavePosition } from "../models/restaurant.model";
import { Table } from "../../settings/pages/tables/models/table.models";

export const SavePositionService = async (
  save_position: SavePosition,
): Promise<Table> => {
  const { data } = await api.post<Table>(
    "/tables/save-positions",
    save_position,
  );
  return data;
};
