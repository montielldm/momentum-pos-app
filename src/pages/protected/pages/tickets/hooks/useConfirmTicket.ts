import { useMutation } from "@tanstack/react-query"
import { ConfirmTicketService } from "../services/ticket.services"
import CustomToast from "@/components/custom-toast/CustomToast"
import { queryClient } from "@/App"
import { useTicketStore } from "../(pages)/create/store/ticket.store"

export default function useConfirmTicket() {
    const { resetState } = useTicketStore(state => state)
    
    const mutation = useMutation({
        mutationFn: ConfirmTicketService,
        onMutate: () => {
            CustomToast({
                type: "loading",
                title: "Confirming ticket",
                description: "The ticket is being confirmed."
            })
        },
        onSuccess: () => {
            CustomToast({
                type: "success",
                title: "Ticket confirmed",
                description: "The ticket has been successfully confirmed."
            })
            resetState()
        },
        onError: () => {
            CustomToast({
                type: "error",
                title: "An error has occurred ",
                description: "The ticket could not be confirmed."
            })
        },
        onSettled: () => {
            queryClient.invalidateQueries({
                queryKey: ["tickets"]
            })
        }
    })

    return mutation
}
