export interface Ticket {
  id: string;
  created_at: string;
  payment_method: string;
  quantity: number;
  subtotal: number;
  user: string;
  customer: string;
  ticket_number: string;
  status: string;
  discount: number;
  total: number;
}

export interface ItemConfirm {
  id: string
  product: string
  quantity: number
  discount: number
  subtotal: number
}

export interface ConfirmTicket {
  payment_method: string
  customer?: string
  subtotal: number
  total: number
  discount: number
  items: ItemConfirm[]
}