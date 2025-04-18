import { useQuery } from "@tanstack/react-query";
import { GetAllTickets } from "../services/ticket.services";

export default function useTickets() {
    const queryTickets = useQuery({
        queryKey: ["tickets"],
        queryFn: GetAllTickets
    })

    return queryTickets
}
