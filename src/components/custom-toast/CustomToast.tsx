import { cn } from "@/lib/utils";
import { toast as SonnerToast } from "sonner";
import { Button } from "../ui/button";
import { Loader, X } from "lucide-react";

interface ToastProps {
    id: string | number
    type: "success" | "info" | "warning" | "error" | "loading"
    title: string
    description: string
}

function Toast({ id, title, description, type }: ToastProps){
    return (
        <div className={cn("flex rounded-md border-l-[7px] bg-white ring-1 ring-black/5 w-full items-center p-4", {
            "border-green-500": type === "success",
            "border-red-500": type === "error",
            "border-violet-500": type === "info",
            "border-amber-500": type === "warning",
            "border-neutral-300": type === "loading",
        })}>
            <div className="flex flex-1 items-center gap-2">
                <div className="w-full">
                    <span className="flex items-start gap-1">
                    {
                        type === "loading" ? (
                            <>
                                <Loader size={12} className="animate-spin" />   
                            </>
                        ) : ""
                    }
                    <p className="text-sm font-medium text-neutral-900">{title}</p>
                    </span>
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                </div>
                <div>
                    <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => SonnerToast.dismiss(id)}
                    >
                        <X size={14} />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default function CustomToast(toast: Omit<ToastProps, "id">){
    return SonnerToast.custom((id) => (
        <Toast
            id={id}
            title={toast.title}
            description={toast.description}
            type={toast.type}
        />
    ), { className: "w-full "})
}