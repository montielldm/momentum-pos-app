import { useQuery } from "@tanstack/react-query"
import { GetProductByBarcode } from "../services/ticket.services"
import CustomToast from "@/components/custom-toast/CustomToast"
import { useTicketStore } from "../store/ticket.store"
import { nanoid } from "nanoid"

export default function useProductByBarcode({barcode}:{barcode: string}) {
  const { addItem, calculeteTotals } = useTicketStore(state => state)

  const queryProduct = useQuery({
    queryKey: ["products", barcode],
    queryFn: () => GetProductByBarcode(barcode),
    enabled: !!barcode,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 1,
    onSuccess: (data) => {
      CustomToast({
        "type":"success",
        "description": `Producto cargado correctamente.`,
        "title": "El producto ha sido cargado correctamente"
      })

      const price = data.selling_price
      const discount = data.percentage_discount
      const quantity = 1
      const price_with_discount = price - (price * (discount/100))

      addItem({
        product: data,
        id: nanoid(12),
        quantity: quantity,
        discount: data.percentage_discount,
        subtotal: price_with_discount * quantity,
      })

      calculeteTotals()
      
    },
    onError: (error) => {
      CustomToast({
        "type":"error",
        "description": `${error}`,
        "title": "Error al cargar producto"
      })
    }
  })

  return queryProduct
}
