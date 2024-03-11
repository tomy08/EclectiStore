'use client'
import { useState, useEffect } from 'react'
import { ShoppingCart } from '../shopping-cart'
import { useShoppingCartState } from '@/app/context/shopping-cart-context'
export default function ShoppingCartBtn() {
  const { shoppingCart } = useShoppingCartState()
  const [changeCart, setChangeCart] = useState(false)
  const [showCart, setShowCart] = useState(false)

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  useEffect(() => {
    if (shoppingCart?.totalItems) {
      setChangeCart(true)
    }
  }, [shoppingCart?.totalItems])
  return (
    <div className="relative">
      {changeCart && (
        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          {shoppingCart?.totalItems}
        </span>
      )}
      <button
        onClick={toggleCart}
        className=" rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 576 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
        </svg>
      </button>
      {showCart && (
        <section className="fixed inset-0 flex items-center justify-center z-30 bg-black/90">
          <ShoppingCart handleCloseCart={toggleCart} />
        </section>
      )}
    </div>
  )
}
