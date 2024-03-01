import { Product } from './Product'

export interface CartItem {
  product: Product
  quantity: number
}

export interface ShoppingCart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}
