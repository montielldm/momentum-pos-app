import { api } from "@/helpers/axios.instance";
import { Ticket, ConfirmTicket } from "../models/ticket.models";

export const GetAllTickets = async ():Promise<Ticket[]> => {
    const { data } = await api.get<Ticket[]>("/tickets")
    return data
}

export const ConfirmTicketService = async (content: ConfirmTicket):Promise<Ticket> => {
    const { data } = await api.post<Ticket>("/tickets/confirm-ticket", content)
    return data
}

export const GetTicketDetailsById = async (id: string):Promise<Ticket> => {
    const { data } = await api.get<Ticket>(`/tickets/${id}`)
    return data
}