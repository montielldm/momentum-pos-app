import { useMutation } from "@tanstack/react-query";
import { SignIn } from "../services/login.services";
import { useAuth } from "@/context/auth.context";
import { useNavigate } from "react-router-dom";
import CustomeToast from "@/components/custom-toast/CustomToast";

export default function useSignInMutation() {
  const { saveUser } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: SignIn,
    onMutate: () => {
      CustomeToast({
        title: "Iniciando sesión...",
        description: "Estamos iniciando sesión, espera un poco.",
        type: "loading",
      });
    },
    onSuccess(data) {
      saveUser(data);
      CustomeToast({
        title: "Bienvenido a Momentum",
        description: "Nuevamente bienvenido.",
        type: "success",
      });
      navigate("/app/");
    },
    onError: () => {
      CustomeToast({
        title: "Ha ocurrido un error.",
        description:
          "Hemos tenido un problema con las credenciales, intenta de nuevo.",
        type: "error",
      });
    },
  });

  return mutation;
}
