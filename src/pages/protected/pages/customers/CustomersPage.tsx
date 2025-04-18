import Container from '@/components/container/Container'
import Header from '../../components/Header'

export default function CustomersPage() {
    return (
        <Container>
            <Header
                title="Customers"
                description="List of all the tickets created so far, in different states."
            />
        </Container>
    )
}
