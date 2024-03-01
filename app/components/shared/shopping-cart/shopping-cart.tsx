'use client'

import Link from 'next/link'
import ShoppingCartItem from './shopping-cart-item'
import { useShoppingCartState } from '@/app/context/shopping-cart-context'

type ShoppingCartProps = {
  handleCloseCart: () => void
}

export function ShoppingCart({ handleCloseCart }: ShoppingCartProps) {
  const { shoppingCart } = useShoppingCartState()

  return (
    <div
      className="relative w-screen max-w-sm border border-gray-600 bg-gray-900 px-4 py-8 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <button
        onClick={handleCloseCart}
        className="absolute end-4 top-4 text-gray-400 transition hover:scale-110"
      >
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {shoppingCart ? (
            shoppingCart?.items.map((cartItem) => (
              <ShoppingCartItem key={cartItem.product.id} cartItem={cartItem} />
            ))
          ) : (
            <li>No items in your cart</li>
          )}
        </ul>

        <div className="flex justify-between">
          <span className="text-gray-400">Total:</span>
          <span className="text-gray-100">
            ${shoppingCart?.totalPrice.toFixed(2)}
          </span>
        </div>
        <div className="space-y-4 text-center">
          <Link
            href="/checkout"
            onClick={handleCloseCart}
            className="block rounded bg-gray-500 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <Link
            href="/store"
            onClick={handleCloseCart}
            className="inline-block text-sm text-gray-400 underline underline-offset-4 transition hover:text-gray-500"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
