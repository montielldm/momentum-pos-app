import Container from "@/components/container/Container"
import Header from "@/pages/protected/components/Header"
import { useParams } from "react-router-dom"
import useTicketById from "../../hooks/useTicketById"

export default function DetailsPage() {
    const { id } = useParams<{ id: string }>()
    const { data } = useTicketById(id!)

    return (
        <Container>
            <div>
                <Header
                    title={`Ticket - ${data?.ticket_number}`}
                    description={"Below you will find the complete detail of the invoiced items, including values, dates and specific descriptions of each product."}
                />
            </div>
        </Container>
    )
}
