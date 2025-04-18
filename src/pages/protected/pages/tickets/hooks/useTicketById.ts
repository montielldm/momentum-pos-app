import { useQuery } from "@tanstack/react-query";
import { GetTicketDetailsById } from "../services/ticket.services";

export default function useTicketById(id: string) {
    const queryTickets = useQuery({
        queryKey: ["tickets", id],
        queryFn: () => GetTicketDetailsById(id)
    })

    return queryTickets
}
