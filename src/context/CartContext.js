// src/context/CartContext.js
'use client'

import React, { createContext, useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const CartContext = createContext({})

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage('shopping-cart', [])

  const totalCartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  function getItemQuantity(id) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id) {
    setCartItems(currItems => currItems.filter(item => item.id !== id))
  }

  function clearCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        clearCart,
        cartItems,
        totalCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}