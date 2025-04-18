import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
    DialogHeader,
    DialogDescription,
    DialogTitle
} from "@/components/ui/dialog"
import { Button as ButtonSahdcn } from "@/components/ui/button";
import { useTicketStore } from "../store/ticket.store";
import { useId } from "react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Banknote, CreditCard, QrCode } from "lucide-react";
import { useState } from "react";
import useConfirmTicket from "../../../hooks/useConfirmTicket";
import { ConfirmTicket, ItemConfirm } from "../../../models/ticket.models";
import CustomToast from "@/components/custom-toast/CustomToast";

export default function DialogConfirmSale() {
    const [open, setOpen] = useState(false)
    const [paymentType, setPaymentType] = useState("CASH")
    const { getItems, subtotal, total, discount } = useTicketStore(state => state)
    const { mutate } = useConfirmTicket()
    const id = useId()

    const onSubmit = () => {
        const items = getItems()
        if (items.length === 0) {
            CustomToast({
                type: "warning",
                title: "There are problems",
                description: "You cannot confirm a ticket without information."
            })
            return
        }
        const confirmItems: ItemConfirm[] = []
        items.forEach((item) => {
            confirmItems.push({
                id: item.id,
                product: item.product.id,
                quantity: item.quantity,
                discount: (item.product.selling_price * (item.discount / 100) * item.quantity),
                subtotal: item.subtotal
            })
        })
        const content: ConfirmTicket = {
            payment_method: paymentType,
            subtotal: subtotal,
            total: total,
            discount: discount,
            items: confirmItems
        }
        mutate(content)
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                <ButtonSahdcn
                    size="sm"
                    variant="success"
                    className="w-full"
                    disabled={getItems()!.length === 0}
                >Pay Now</ButtonSahdcn>
            </DialogTrigger>
            <DialogContent className="p-0">
                <div className="px-4 py-4 border-b">
                    <DialogHeader>
                        <DialogTitle>Confirm ticket for print</DialogTitle>
                        <DialogDescription className="sr-only"></DialogDescription>
                    </DialogHeader>
                </div>
                <div className="px-4">
                    <RadioGroup className="gap-2" defaultValue={paymentType} onValueChange={(e) => {
                        setPaymentType(e)
                    }}>
                        <div className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:ring-[3px] has-data-[state=checked]:ring-primary/20 relative flex w-full items-start gap-2 rounded-md border p-4 outline-none">
                            <RadioGroupItem
                                value="CASH"
                                id={`${id}-1`}
                                aria-describedby={`${id}-1-description`}
                                className="order-1 after:absolute after:inset-0 "
                            />
                            <div className="flex grow items-start gap-3">
                                <div className="bg-white size-10 rounded-full border flex items-center justify-center">
                                    <Banknote size={16} />
                                </div>
                                <div className="grid grow gap-2">
                                    <Label htmlFor={`${id}-1`}>
                                        Cash{" "}
                                        <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
                                            (Cash)
                                        </span>
                                    </Label>
                                    <p id={`${id}-1-description`} className="text-muted-foreground text-xs">The user made a payment to you with cash.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:ring-[3px] has-data-[state=checked]:ring-primary/20 relative flex w-full items-start gap-2 rounded-md border p-4 outline-none">
                            <RadioGroupItem
                                value="CARD"
                                id={`${id}-1`}
                                aria-describedby={`${id}-1-description`}
                                className="order-1 after:absolute after:inset-0 "
                            />
                            <div className="flex grow items-start gap-3">
                                <div className="bg-white size-10 rounded-full border flex items-center justify-center">
                                    <CreditCard size={16} />
                                </div>
                                <div className="grid grow gap-2">
                                    <Label htmlFor={`${id}-1`}>
                                        Card{" "}
                                        <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
                                            (Debit/Credit Card)
                                        </span>
                                    </Label>
                                    <p id={`${id}-1-description`} className="text-muted-foreground text-xs">The user made a payment to you with a credit/debit card.</p>
                                </div>
                            </div>
                        </div>
                        <div className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:ring-[3px] has-data-[state=checked]:ring-primary/20 relative flex w-full items-start gap-2 rounded-md border p-4 outline-none">
                            <RadioGroupItem
                                value="QR"
                                id={`${id}-1`}
                                aria-describedby={`${id}-1-description`}
                                className="order-1 after:absolute after:inset-0 "
                            />
                            <div className="flex grow items-start gap-3">
                                <div className="bg-white size-10 rounded-full border flex items-center justify-center">
                                    <QrCode size={16} />
                                </div>
                                <div className="grid grow gap-2">
                                    <Label htmlFor={`${id}-1`}>
                                        QR{" "}
                                        <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
                                            (Qr Code)
                                        </span>
                                    </Label>
                                    <p id={`${id}-1-description`} className="text-muted-foreground text-xs">The user made a payment by qr.</p>
                                </div>
                            </div>
                        </div>
                    </RadioGroup>
                </div>
                <DialogFooter className="p-2">
                    <ButtonSahdcn
                        type="submit"
                        size="sm"
                        variant="success"
                        onClick={onSubmit}
                    >Confirm Payment</ButtonSahdcn>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
