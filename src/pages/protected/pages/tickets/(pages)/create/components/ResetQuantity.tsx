import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TextCursorInput } from "lucide-react"
import { Item } from "../models/ticket.models"
import { setQuantitySchema } from "../schemas/set-quantity.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useTicketStore } from "../store/ticket.store"
import CustomToast from "@/components/custom-toast/CustomToast"
import { useState } from "react"

interface Props {
  item: Item
}

export default function ResetQuantity({ item }:Props) {
  const [open, setOpen] = useState(false)
  const { updateQuantity } = useTicketStore(state => state)

  const form = useForm<z.infer<typeof setQuantitySchema>>({
    resolver: zodResolver(setQuantitySchema),
    defaultValues: {
      quantity: item.quantity,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof setQuantitySchema>) {
    updateQuantity(item.id, values.quantity)
    CustomToast({
      "type":"success",
      "title": `Cantidad actualizada correctamente.`,
      "description": "La cantidad del producto ha sido actualizada correctamente"
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon_sm">
              <TextCursorInput size={14} className="text-muted-foreground" />
            </Button>
          </TooltipTrigger>
          <TooltipContent><span>Cambiar cantidad</span></TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar Cantidad</DialogTitle>
          <DialogDescription>
            Cambia la cantidad del producto: <span className="font-semibold">{item.product.name}</span>.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field,  }) => (
                  <FormItem>
                    <FormControl>
                      <Input 
                        type="text"
                        placeholder="Digite cantidad" 
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
