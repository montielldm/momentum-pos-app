import Container from "@/components/container/Container"
import Header from "../../components/Header"
import TabListSettings from "./components/TabListSettings"

export default function SettingsPage() {
    return (
        <Container>
            <Header
                title="Settings"
                description="List of all the tickets created so far, in different states."
            />
            <TabListSettings />
        </Container>
    )
}
