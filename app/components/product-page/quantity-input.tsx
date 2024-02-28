'use client'

import { useState } from 'react'

export default function QuantityInput() {
  const [quantity, setQuantity] = useState(1)

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }
  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        Quantity
      </label>

      <div className="flex items-center rounded border border-gray-200 dark:border-gray-800">
        <button
          type="button"
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
          onClick={decrementQuantity}
        >
          &minus;
        </button>

        <input
          type="number"
          id="Quantity"
          value={quantity}
          className="h-12 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm dark:bg-gray-900 dark:text-white [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        />

        <button
          type="button"
          className="size-10 leading-10 text-gray-600 transition hover:opacity-75 dark:text-gray-300"
          onClick={incrementQuantity}
        >
          +
        </button>
      </div>
    </div>
  )
}
