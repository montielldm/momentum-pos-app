import { api } from "@/helpers/axios.instance";
import { Product } from "@/pages/protected/pages/products/models/product.models";

export const GetProductByBarcode = async (barcode: string):Promise<Product> => {
    const { data } = await api.get<Product>(`/products/barcode/${barcode}`)
    return data
}

export const ConfirmSale = async () => {
    
}