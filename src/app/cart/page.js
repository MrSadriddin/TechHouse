// src/app/cart/page.js
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  Lock,
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import productsData from '@/datas/Products.json'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Navbar from '@/components/home/Navbar'
import AuthModal from '@/components/auth/AuthModal'
import CheckoutModal from '@/components/checkout/CheckoutModal'

export default function CartPage() {
  const {
    cartItems,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useCart()
  const { isLoggedIn } = useAuth()
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false)

  const cartProducts = cartItems.map(cartItem => {
    const item = productsData.find(p => p.id === cartItem.id)
    return { ...item, quantity: cartItem.quantity }
  })

  const totalPrice = cartProducts.reduce(
    (total, item) => total + item.newPrice * item.quantity,
    0
  )
  const totalOldPrice = cartProducts.reduce(
    (total, item) => total + (item.oldPrice || item.newPrice) * item.quantity,
    0
  )
  const totalSavings = totalOldPrice - totalPrice

  const formatPrice = price => new Intl.NumberFormat('uz-UZ').format(price)

  const handleCheckoutClick = () => {
    if (isLoggedIn) {
      setCheckoutModalOpen(true)
    } else {
      setAuthModalOpen(true)
    }
  }

  const handleLoginSuccess = () => {
    setTimeout(() => setCheckoutModalOpen(true), 500)
  }

  if (!isLoggedIn) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <div className='flex flex-col items-center justify-center h-[70vh] text-center px-4'>
          <div className='bg-white p-8 rounded-[2rem] shadow-xl mb-6'>
            <Lock className='w-16 h-16 text-orange-500' />
          </div>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>
            Savatni ko'rish uchun kiring
          </h1>
          <p className='text-gray-500 mb-6'>
            Siz tanlagan mahsulotlar faqat o'zingizga ko'rinishi uchun tizimga
            kiring.
          </p>
          <Button
            onClick={() => setIsAuthOpen(true)}
            className='bg-orange-500 rounded-xl px-8 h-12'
          >
            Kirish / Ro'yxatdan o'tish
          </Button>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className='min-h-screen bg-gray-50 pb-20'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-[70vh] text-center px-4 animate-in fade-in-50 zoom-in-95'>
          <div className='bg-white p-8 rounded-[2rem] shadow-xl mb-6 border border-gray-100'>
            <ShoppingBag className='w-20 h-20 text-orange-400' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-3'>
            Savatingiz hozircha bo‘sh
          </h1>
          <p className='text-gray-500 mb-8 max-w-md text-lg'>
            Bosh sahifaga o'ting va o'zingizga yoqqan mahsulotlarni tanlang.
            Bizda ajoyib takliflar bor!
          </p>
          <Link href='/'>
            <Button className='bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg rounded-2xl shadow-lg shadow-blue-200 transition-transform active:scale-95'>
              Xarid qilishga qaytish
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#F9FAFB] pb-20'>
      <Navbar />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
      />

      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center justify-between mb-8'>
          <h1 className='text-3xl font-bold text-gray-900 flex items-center gap-3'>
            Savat
            <span className='bg-gray-200 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full'>
              {cartItems.length}
            </span>
          </h1>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <div className='lg:col-span-8 space-y-4'>
            <Card className='border-none shadow-sm rounded-[1.5rem] overflow-hidden bg-white'>
              <CardContent className='p-0'>
                {cartProducts.map((item, index) => (
                  <div key={item.id}>
                    <div className='p-4 sm:p-6 flex gap-4 sm:gap-6 group hover:bg-gray-50/50 transition-colors'>
                      <Link
                        href={`/product/${item.id}`}
                        className='block relative w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-2xl border border-gray-100 flex-shrink-0 overflow-hidden'
                      >
                        <Image
                          src={item.images[0].imageUrl}
                          alt={item.nomi}
                          fill
                          className='object-contain p-2 hover:scale-105 transition-transform duration-500'
                        />
                      </Link>

                      <div className='flex-1 flex flex-col justify-between py-1'>
                        <div className='flex justify-between items-start gap-3'>
                          <div className='space-y-1'>
                            <p className='text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-wide'>
                              {item.brand}
                            </p>
                            <Link
                              href={`/product/${item.id}`}
                              className='hover:text-blue-600 transition-colors'
                            >
                              <h3 className='text-sm sm:text-lg font-semibold text-gray-900 line-clamp-2 leading-tight'>
                                {item.nomi}
                              </h3>
                            </Link>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className='text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-xl transition-all'
                            title="Savatdan o'chirish"
                          >
                            <Trash2 className='w-5 h-5' />
                          </button>
                        </div>

                        <div className='flex flex-wrap items-end justify-between gap-4 mt-4'>
                          <div className='flex items-center bg-gray-50 border border-gray-200 rounded-xl h-10'>
                            <button
                              onClick={() => decreaseCartQuantity(item.id)}
                              className='w-10 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-l-xl transition-colors active:scale-90'
                            >
                              <Minus className='w-4 h-4' />
                            </button>
                            <span className='w-10 text-center text-sm font-bold text-gray-900'>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => increaseCartQuantity(item.id)}
                              className='w-10 h-full flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-r-xl transition-colors active:scale-90'
                            >
                              <Plus className='w-4 h-4' />
                            </button>
                          </div>

                          <div className='text-right'>
                            <div className='font-bold text-gray-900 text-lg sm:text-xl'>
                              {formatPrice(item.newPrice * item.quantity)} so'm
                            </div>
                            {item.oldPrice && (
                              <div className='text-xs sm:text-sm text-gray-400 line-through'>
                                {formatPrice(item.oldPrice * item.quantity)}{' '}
                                so'm
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index !== cartProducts.length - 1 && (
                      <Separator className='bg-gray-100 mx-6' />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className='lg:col-span-4 space-y-4'>
            <Card className='border-none shadow-lg shadow-gray-200/50 rounded-[1.5rem] sticky top-24 bg-white overflow-hidden'>
              <CardContent className='p-6'>
                <h2 className='text-xl font-bold mb-6 text-gray-900'>
                  Buyurtma tafsilotlari
                </h2>

                <div className='space-y-4 text-sm mb-6'>
                  <div className='flex justify-between text-gray-600'>
                    <span>
                      Mahsulotlar (
                      {cartItems.reduce((a, b) => a + b.quantity, 0)}):
                    </span>
                    <span className='font-medium'>
                      {formatPrice(totalOldPrice)} so'm
                    </span>
                  </div>

                  <div className='flex justify-between text-red-500 bg-red-50 p-3 rounded-lg'>
                    <span className='font-medium'>Tejab qolindi:</span>
                    <span className='font-bold'>
                      - {formatPrice(totalSavings)} so'm
                    </span>
                  </div>

                  <div className='flex justify-between text-gray-600'>
                    <span>Yetkazib berish:</span>
                    <span className='text-blue-600 font-medium cursor-pointer hover:underline'>
                      Hisoblash
                    </span>
                  </div>
                </div>

                <Separator className='mb-6 bg-gray-100' />

                <div className='flex justify-between items-center mb-6'>
                  <span className='font-bold text-xl text-gray-900'>Jami:</span>
                  <div className='text-right'>
                    <span className='font-bold text-2xl text-blue-900 block'>
                      {formatPrice(totalPrice)} so'm
                    </span>
                    <span className='text-[10px] text-gray-400'>QQS bilan</span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckoutClick}
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-base rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-95 group'
                >
                  Rasmiylashtirish{' '}
                  <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
                </Button>

                <p className='text-[11px] text-gray-400 mt-4 text-center leading-tight'>
                  "Rasmiylashtirish" tugmasini bosish orqali siz ommaviy oferta
                  shartlariga rozilik bildirasiz.
                </p>
              </CardContent>
            </Card>

            <div className='flex justify-center gap-4 text-gray-400 grayscale opacity-60 mt-4'>
              <div className='border px-2 py-1 rounded text-xs font-bold'>
                UzCard
              </div>
              <div className='border px-2 py-1 rounded text-xs font-bold'>
                Humo
              </div>
              <div className='border px-2 py-1 rounded text-xs font-bold'>
                Visa
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}