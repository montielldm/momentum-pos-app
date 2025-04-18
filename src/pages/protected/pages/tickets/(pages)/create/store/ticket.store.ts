import { create } from "zustand"
import { Item } from "../models/ticket.models"

type State = {
    ticket_number: string
    subtotal: number
    discount: number
    total: number
    items: Item[]
}

type Actions = {
    findProductByBarcode: (barcode: string) => Item | undefined
    findProductById: (product_id: string) => Item | undefined
    addItem: (item:Item) => void
    getItem: (id: string) => Item | undefined
    getItems: () => Item[]
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    calculeteTotals: () => void
    resetState: () => void
}

const initialState: State = {
    ticket_number: "",
    subtotal: 0,
    discount: 0,
    total: 0,
    items: [],
}

export const useTicketStore = create<State & Actions>()((set, get) => ({
    ...initialState,
    findProductByBarcode: (barcode) => {
        const item = get().items.find((item) => item.product.barcode === barcode)
        return item
    },
    findProductById: (product_id) => {
        const items = get().items
        const product = items.find((item) => item.product.id === product_id)
        return product
    },
    getItem: (id: string) => {
        const items = get().items
        const item = items.find((item) => item.id === id)
        return item 
    },
    getItems: () => {
        return get().items
    },
    addItem: (item) => {
        const product = get().findProductById(item.product.id)
        if(product){
            const price = product.product.selling_price
            const discount = product.product.percentage_discount
            const quantity = product.quantity + 1
            
            const price_with_discount =  price - (price * (discount/100))
            
            product.subtotal = price_with_discount * quantity
            product.quantity = quantity

            const old_items = get().items.filter((item) => item.product.id !== product.product.id)
            console.log("Desde aqui.")
            get().calculeteTotals()
            return set(() => ({
                items: [...old_items, product]
            }))
        }else{
            return set((state) => ({
                items: [...state.items, item]
            }))
        }
    },
    removeItem: (id) => {
        const items = get().items.filter((item) => item.id !== id)
        
        get().calculeteTotals()

        return set(() => ({
            items: items
        }))
    },
    updateQuantity: (id, quantity) => {
        const items = get().items.filter((item) => item.id !== id)
        const item = get().getItem(id)!
        
        const price = item?.product.selling_price
        const discount = item?.product.percentage_discount
        const price_with_discount =  price - (price * (discount/100))
          
        item.quantity = quantity,
        item.subtotal = price_with_discount * quantity
        item.discount = discount

        get().calculeteTotals()

        return set(() => ({
            items: [...items, item]
        }))
    },
    calculeteTotals: () => {
        const items = get().items
        const subtotal = items.reduce((prev, current) => prev + (current.product.selling_price * current.quantity), 0)
        const total_discount =  items.reduce((prev, current) => prev + (current.product.selling_price * (current.discount/100) * current.quantity), 0)

        return set((state) => ({
            ...state,
            discount: total_discount,
            subtotal: subtotal,
            total: subtotal - total_discount,
        }))
    
    },
    resetState: () => {
        set(initialState)
    }
}))