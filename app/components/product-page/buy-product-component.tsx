'use client'

import { useState } from 'react'
import { useShoppingCartState } from '@/app/context/shopping-cart-context'
import { Product } from '@/app/types/Product'

export default function BuyProductComponent({ product }: { product: Product }) {
  const { shoppingCart, setShoppingCart } = useShoppingCartState()
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    if (!shoppingCart) {
      setShoppingCart({
        items: [{ product, quantity }],
        totalItems: quantity,
        totalPrice: Number(product.price) * quantity,
      })
    } else {
      let updatedCart
      if (shoppingCart.items.some((item) => item.product.id === product.id)) {
        updatedCart = {
          items: shoppingCart.items.map((item) => {
            if (item.product.id === product.id) {
              return {
                product,
                quantity: item.quantity + quantity,
              }
            }
            return item
          }),
          totalItems: shoppingCart.totalItems + quantity,
          totalPrice:
            shoppingCart.totalPrice + Number(product.price) * quantity,
        }
      } else {
        updatedCart = {
          items: [...shoppingCart.items, { product, quantity }],
          totalItems: shoppingCart.totalItems + quantity,
          totalPrice:
            shoppingCart.totalPrice + Number(product.price) * quantity,
        }
      }
      setShoppingCart(updatedCart)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div className="flex gap-2 mt-8">
      <div>
        <label htmlFor="Quantity" className="sr-only">
          Quantity
        </label>
        <div className="flex items-center rounded border border-gray-200 dark:border-gray-800">
          <button
            type="button"
            className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
            onClick={decreaseQuantity}
          >
            &minus;
          </button>
          <input
            type="number"
            id="Quantity"
            value={quantity}
            className="h-12 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm dark:bg-gray-900 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button
            type="button"
            className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      </div>
      <button
        type="button"
        className="w-full max-w-60 h-12 bg-cyan-600 text-white rounded transition hover:bg-cyan-700"
        onClick={addToCart}
      >
        Add to my cart
      </button>
    </div>
  )
}
