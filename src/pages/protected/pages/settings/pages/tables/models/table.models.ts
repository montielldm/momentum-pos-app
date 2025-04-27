export interface Table {
  id: string;
  created_at: string;
  number: number;
  seats: number;
  status: string;
  orientation: string;
  headquarter: string;
}

export interface CreateTable {
  seats: number;
}
