import FormLogin from "./components/FormLogin"
import Header from "../../components/Header"
import Container from "../../components/Container"

export default function LoginPage() {
  return (
    <Container>
      <div className="w-full md:max-w-sm">
        <Header
          title="Momentum POS"
          description="Potencia tu negocio con un punto de venta ágil y eficiente."
        />
        <FormLogin />
      </div>
    </Container>
  )
}
