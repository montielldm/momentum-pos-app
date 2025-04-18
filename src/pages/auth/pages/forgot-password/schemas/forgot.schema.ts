import { z } from "zod"

export const forgotSchema = z.object({
    email: z.string({ required_error: "El correo es requerido"}).email({message: "No es un correo valido"})
})