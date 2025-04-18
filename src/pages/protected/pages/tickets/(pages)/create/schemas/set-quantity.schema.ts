import { z } from "zod"

export const setQuantitySchema = z.object({
    quantity: z.number().min(1),
})
  