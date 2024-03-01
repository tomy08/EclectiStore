'use client'
import React, { createContext, useState, useContext, useEffect } from 'react'
import type { ShoppingCart } from '../types/ShoopingCart'

type GlobalState = {
  shoppingCart: ShoppingCart | null
  setShoppingCart: React.Dispatch<React.SetStateAction<ShoppingCart | null>>
}

const GlobalStateContext = createContext<GlobalState | null>(null)

export const useShoppingCartState = (): GlobalState => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    throw new Error(
      'useShoppingCartState must be used within a ShoppingCartProvider'
    )
  }
  return context
}

export function ShoppingCartProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCart | null>(() => {
    const savedCart = localStorage.getItem('shoppingCart')
    if (savedCart) {
      return JSON.parse(savedCart)
    }
    return null
  })

  useEffect(() => {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
  }, [shoppingCart])

  const value = { shoppingCart, setShoppingCart }

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  )
}
