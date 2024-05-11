export interface IOrdersTableRow {
  id: string;
  quantity: string;
  name: string;
  date: string;
  price: string;
  status: EStatusFilter;
}
export enum EStatusFilter {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}
