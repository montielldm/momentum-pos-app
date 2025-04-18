import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { loginSchema } from '../schemas/login.schema'
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
import { EyeOff, Eye, IdCard } from "lucide-react"
import { useState } from "react"
import useSignInMutation from "../hooks/useSignInMutation"
import { cn } from "@/lib/utils"

export default function FormLogin() {
    const [ isVisible, setIsVisible ] = useState<boolean>(false)
    const { mutate } = useSignInMutation()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            document: undefined,
            password: undefined
        }
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        const formData = new FormData()

        formData.append('document', values.document)
        formData.append('password', values.password)

        mutate(formData)
    }

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="document"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Documento</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input 
                                        className={cn("peer ps-9", {
                                            "border-red-600": fieldState.error
                                        })} 
                                        placeholder="123456789" 
                                        type="number" 
                                        {...field} 
                                        />
                                    <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                                        <IdCard size={16} strokeWidth={2} aria-hidden="true" />
                                    </div>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className={cn("pe-9", {
                                            "border-red-500": fieldState.error
                                        })}
                                        type={isVisible ? "text" : "password"}
                                        placeholder="••••••••••"
                                        {...field}
                                    />
                                    <button
                                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                                        type="button"
                                        onClick={toggleVisibility}
                                        aria-label={isVisible ? "Hide password" : "Show password"}
                                        aria-pressed={isVisible}
                                        aria-controls="password"
                                    >
                                    {isVisible ? (
                                        <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                                    ) : (
                                        <Eye size={16} strokeWidth={2} aria-hidden="true" />
                                    )}
                                    </button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="space-y-1">
                    <Button type="submit" variant="success" className="w-full">Iniciar sesión</Button>
                    <Link to={"/auth/forgot-password"} className="text-muted-foreground font-medium underline-offset-4 hover:underline text-sm">¿Olvidaste tu contraseña?</Link>
                </div>

                <div>
                    <p className="text-xs text-muted-foreground">
                        Al continuar, confirmas que has leído, comprendido y estás de acuerdo con nuestros <span className="font-semibold">Términos y Condiciones</span>, así como con nuestra <span className="font-semibold">Política de Privacidad</span>.
                    </p>
                </div>
            </form>
        </Form>
    )
}
