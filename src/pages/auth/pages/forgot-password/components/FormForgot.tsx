import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { forgotSchema } from "../schemas/forgot.schema"
import { Mail } from "lucide-react"

export default function FormForgot() {
    const form = useForm<z.infer<typeof forgotSchema>>({
        resolver: zodResolver(forgotSchema),
        defaultValues: {
            email: undefined,
        }
    })

    function onSubmit(values: z.infer<typeof forgotSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Correo</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input className="peer ps-9" placeholder="example@example.com" type="text" {...field} />
                                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                        <Mail size={16} strokeWidth={2} aria-hidden="true" />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="space-y-1">
                    <Button type="submit" variant="success"  className="w-full">Continuar</Button>
                    <Link to={"/auth/login"} className="font-medium text-muted-foreground underline-offset-4 hover:underline text-sm">¿Ya te acuerdas? Volver</Link>
                </div>
            </form>
        </Form>
    )
}
