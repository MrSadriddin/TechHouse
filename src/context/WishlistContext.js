// src/context/WishlistContext.js
'use client'

import React, { createContext, useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const WishlistContext = createContext({})

export function useWishlist() {
  return useContext(WishlistContext)
}

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useLocalStorage('wishlist', [])

  function toggleWishlist(id) {
    setWishlistItems(currItems => {
      if (currItems.includes(id)) {
        return currItems.filter(itemId => itemId !== id)
      } else {
        return [...currItems, id]
      }
    })
  }

  function isInWishlist(id) {
    return wishlistItems.includes(id)
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}