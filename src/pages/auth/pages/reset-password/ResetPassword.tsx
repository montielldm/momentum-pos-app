import Container from "../../components/Container"
import Header from "../../components/Header"
import ResetForm from "./components/ResetForm"

export default function ResetPassword() {
  return (
    <Container>
        <div className="w-full md:max-w-sm">
            <Header
                title="Crea una nueva contraseña"
                description="Escribe tu nueva contraseña y confirma los cambios para acceder nuevamente."
            />
            <ResetForm />            
        </div>
    </Container>
  )
}
