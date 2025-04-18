import { Product } from "@/pages/protected/pages/products/models/product.models"

export interface Item {
    id: string
    product:Product
    quantity: number
    discount: number
    subtotal: number
}
