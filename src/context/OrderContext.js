// src/context/OrderContext.js
'use client'

import React, { createContext, useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { useAuth } from './AuthContext'

const OrderContext = createContext({})

export function useOrders() {
  return useContext(OrderContext)
}

export function OrderProvider({ children }) {
  const { user } = useAuth()
  const [allOrders, setAllOrders] = useLocalStorage('order-history', [])

  const addOrder = orderData => {
    if (!user) return

    const newOrder = {
      id: Math.floor(100000 + Math.random() * 900000),
      userPhone: user.phone,
      ...orderData,
    }
    setAllOrders(prev => [newOrder, ...prev])
  }

  const userOrders = user
    ? allOrders.filter(order => order.userPhone === user.phone)
    : []

  return (
    <OrderContext.Provider value={{ orders: userOrders, addOrder }}>
      {children}
    </OrderContext.Provider>
  )
}