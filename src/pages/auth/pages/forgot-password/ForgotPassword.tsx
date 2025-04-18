import Container from "../../components/Container"
import Header from "../../components/Header"
import FormForgot from "./components/FormForgot"

export default function ForgotPassword() {
  return (
    <Container>
      <div className="w-full md:max-w-sm">
        <Header
          title="¿Olvidaste tu contraseña?"
          description="Escribe tu correo y te enviaremos un email para recuperarla."
        />
        <FormForgot />
      </div>
    </Container>
  )
}
