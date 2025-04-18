import { z } from "zod"

export const resetSchema = z
    .object({
        password: z.string({
            required_error: "Contraseña requerida"
        }),
        confirm: z.string({
            required_error: "Campo requerido"
        }),
    })
    .refine((data) => data.password === data.confirm, {
        message: "La contraseña no coincide",
        path: ["confirm"], // path of error
    });