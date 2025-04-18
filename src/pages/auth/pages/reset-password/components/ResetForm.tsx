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
import { resetSchema } from "../schemas/reset.schema"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function ResetForm() {
    const [ isVisible, setIsVisible ] = useState<boolean>(false)

    const form = useForm<z.infer<typeof resetSchema>>({
        resolver: zodResolver(resetSchema),
        defaultValues: {
            password: undefined,
            confirm: undefined
        }
    })

    function onSubmit(values: z.infer<typeof resetSchema>) {
        console.log(values)
    }

    const toggleVisibility = () => setIsVisible((prevState) => !prevState);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className="pe-9"
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
                <FormField
                    control={form.control}
                    name="confirm"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmar Contraseña</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className="pe-9"
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
                    <Button type="submit" className="w-full">Cambiar contraseña</Button>
                </div>
            </form>
        </Form>
    )
}
