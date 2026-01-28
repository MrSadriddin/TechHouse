// src/context/AuthContext.js
'use client'

import React, { createContext, useContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorage('tech-house-user', null)

  const login = phone => {
    setUser({ phone })
  }

  const logout = () => {
    setUser(null)
  }

  const isLoggedIn = !!user

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}