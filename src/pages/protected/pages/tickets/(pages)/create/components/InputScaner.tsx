import { Input } from '@/components/ui/input'
import { ScanBarcode } from 'lucide-react'
import { useEffect, useState } from 'react';
import CustomToast from '@/components/custom-toast/CustomToast';
import { useTicketStore } from '../store/ticket.store';
import useProductByBarcode from '../hooks/useProductByBarcode';

export default function InputScaner() {
    const [ barcode, setBarcode ] = useState("")
    const [barcodeProduct, setBarcodeProduct] = useState("")
    const { isFetching, remove } = useProductByBarcode({barcode: barcodeProduct})
    const { findProductByBarcode, addItem } = useTicketStore(state => state)

    const handleKeyUpPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.code === "Enter"){
            const item = findProductByBarcode(barcode)

            if(item){
                addItem(item)
                CustomToast({
                    "type":"success",
                    "description": `Producto cargado correctamente.`,
                    "title": "El producto ha sido cargado correctamente"
                })
            }else{
                setBarcodeProduct(barcode)
                remove()
            }
            setBarcode("")
        }
    }

    useEffect(() => {
        if(isFetching){
            CustomToast({
                "type":"loading",
                "description": "Estamos buscando el producto",
                "title": "Buscanco producto"
            })
        }
    }, [isFetching])

    return (
        <div className="relative">
            <Input 
                className="peer pe-9"
                value={barcode}
                onChange={(e) => {
                    setBarcode(e.target.value)
                }}
                onKeyUp={handleKeyUpPress}
                placeholder="Scan product..."
                type="text"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                <ScanBarcode size={16} aria-hidden="true" />
            </div>
        </div>
    )
}
