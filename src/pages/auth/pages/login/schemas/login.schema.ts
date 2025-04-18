import { z } from "zod"

export const loginSchema = z.object({
    document: z.string({required_error: "El documento es requerido."})
        .min(8, { message: "El documento debe tener al menos 8 caracteres"})
        .max(10, { message: "El documento no puede tener más de 10 caracteres"})
        .regex(/^\d+$/, { message: "El documento solo puede contener números" }),
    password: z.string({ required_error: "La contraseña es requerida."})
        .min(2, { message: "La contraseña debe tener al menos 6 caracteres" })
        .max(20, { message: "La contraseña no puede tener más de 20 caracteres" })
})