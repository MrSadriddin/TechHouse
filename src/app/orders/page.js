// src/app/orders/page.js
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Package,
  Calendar,
  CreditCard,
  Truck,
  MapPin,
  Banknote,
  LockKeyhole,
} from 'lucide-react'
import { useOrders } from '@/context/OrderContext'
import { useAuth } from '@/context/AuthContext'
import Navbar from '@/components/home/Navbar'
import AuthModal from '@/components/auth/AuthModal'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import productsData from '@/datas/Products.json'

export default function OrdersPage() {
  const { orders } = useOrders()
  const { isLoggedIn } = useAuth()
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  const formatPrice = price => new Intl.NumberFormat('uz-UZ').format(price)

  if (!isLoggedIn) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        <div className='flex flex-col items-center justify-center h-[70vh] text-center px-4'>
          <div className='bg-white p-8 rounded-[2rem] shadow-xl mb-6'>
            <LockKeyhole className='w-16 h-16 text-blue-500' />
          </div>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>
            Buyurtmalarni ko'rish uchun kiring
          </h1>
          <p className='text-gray-500 mb-6'>
            Shaxsiy kabinetingizga kirib, buyurtmalar holatini kuzatib
            borishingiz mumkin.
          </p>
          <Button
            onClick={() => setIsAuthOpen(true)}
            className='bg-blue-600 rounded-xl px-8 h-12'
          >
            Tizimga kirish
          </Button>
        </div>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className='min-h-screen bg-[#F9FAFB] pb-20'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-[70vh] text-center px-4 animate-in fade-in-50 zoom-in-95'>
          <div className='bg-white p-8 rounded-[2rem] shadow-xl mb-6 border border-gray-100'>
            <Package className='w-20 h-20 text-blue-500' />
          </div>
          <h1 className='text-3xl font-bold text-gray-900 mb-3'>
            Buyurtmalar tarixi bo'sh
          </h1>
          <p className='text-gray-500 mb-8 max-w-md text-lg'>
            Siz hali hech qanday buyurtma bermagansiz.
          </p>
          <Link href='/'>
            <Button className='bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 text-lg rounded-2xl shadow-lg shadow-orange-200 transition-transform active:scale-95'>
              Xaridni boshlash
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-[#F9FAFB] pb-20'>
      <Navbar />
      <div className='container mx-auto px-4 py-8'>
        <div className='flex items-center gap-3 mb-8'>
          <h1 className='text-3xl font-bold text-gray-900'>
            Mening Buyurtmalarim
          </h1>
          <span className='bg-gray-200 text-gray-600 text-sm font-semibold px-3 py-1 rounded-full'>
            {orders.length}
          </span>
        </div>

        <div className='space-y-6 max-w-4xl mx-auto'>
          {orders.map(order => {
            let orderTotal = 0

            return (
              <Card
                key={order.id}
                className='border-none shadow-sm hover:shadow-md transition-all duration-300 rounded-[2rem] overflow-hidden bg-white'
              >
                <CardContent className='p-0'>
                  <div className='bg-gray-50/80 p-6 border-b border-gray-100 flex flex-wrap gap-4 justify-between items-center'>
                    <div className='flex gap-4 items-center'>
                      <div className='bg-white p-3 rounded-2xl shadow-sm border border-gray-100'>
                        <Package className='w-6 h-6 text-blue-600' />
                      </div>
                      <div>
                        <p className='text-xs text-gray-400 font-bold uppercase tracking-wider'>
                          Buyurtma ID
                        </p>
                        <h3 className='font-bold text-lg text-gray-900'>
                          #{order.id}
                        </h3>
                      </div>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1.5 rounded-xl border border-gray-100'>
                        <Calendar className='w-4 h-4' />
                        {order.date}
                      </div>
                      <Badge className='bg-blue-100 text-blue-700 hover:bg-blue-200 border-none px-3 py-1.5 rounded-lg text-sm'>
                        {order.status}
                      </Badge>
                    </div>
                  </div>

                  <div className='p-6 space-y-4'>
                    {order.items.map(item => {
                      const productInfo = productsData.find(
                        p => p.id === item.id
                      )
                      if (!productInfo) return null

                      orderTotal += productInfo.newPrice * item.quantity

                      return (
                        <div key={item.id} className='flex gap-4 group'>
                          <div className='relative w-20 h-20 bg-white rounded-xl border border-gray-100 overflow-hidden flex-shrink-0'>
                            <Image
                              src={productInfo.images[0].imageUrl}
                              alt={productInfo.nomi}
                              fill
                              className='object-contain p-2 group-hover:scale-105 transition-transform'
                            />
                          </div>

                          <div className='flex-1 flex flex-col justify-center'>
                            <p className='font-bold text-gray-900 line-clamp-2 text-sm sm:text-base leading-tight mb-1'>
                              {productInfo.nomi}
                            </p>
                            <div className='flex items-center justify-between mt-1'>
                              <p className='text-gray-500 text-xs bg-gray-100 px-2 py-1 rounded-lg'>
                                {item.quantity} dona
                              </p>
                              <p className='font-bold text-blue-900 text-sm'>
                                {formatPrice(
                                  productInfo.newPrice * item.quantity
                                )}{' '}
                                so'm
                              </p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className='bg-gray-50 p-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                    <div className='flex items-start gap-3'>
                      <div
                        className={`p-2 rounded-lg ${
                          order.paymentType === 'card'
                            ? 'bg-blue-100 text-blue-600'
                            : 'bg-green-100 text-green-600'
                        }`}
                      >
                        {order.paymentType === 'card' ? (
                          <CreditCard className='w-5 h-5' />
                        ) : (
                          <Banknote className='w-5 h-5' />
                        )}
                      </div>
                      <div>
                        <p className='text-xs text-gray-400 font-bold uppercase'>
                          To'lov turi
                        </p>
                        <p className='font-semibold text-gray-800 text-sm'>
                          {order.paymentType === 'card'
                            ? 'Karta orqali'
                            : 'Naqd pul'}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3'>
                      <div
                        className={`p-2 rounded-lg ${
                          order.deliveryType === 'delivery'
                            ? 'bg-orange-100 text-orange-600'
                            : 'bg-purple-100 text-purple-600'
                        }`}
                      >
                        {order.deliveryType === 'delivery' ? (
                          <Truck className='w-5 h-5' />
                        ) : (
                          <MapPin className='w-5 h-5' />
                        )}
                      </div>
                      <div>
                        <p className='text-xs text-gray-400 font-bold uppercase'>
                          Yetkazib berish
                        </p>
                        <p className='font-semibold text-gray-800 text-sm'>
                          {order.deliveryType === 'delivery'
                            ? 'Kuryer orqali'
                            : 'Olib ketish'}
                        </p>
                      </div>
                    </div>

                    <div className='flex items-start gap-3 sm:col-span-2 md:col-span-1 md:justify-end'>
                      <div className='text-right w-full'>
                        <p className='text-xs text-gray-400 font-bold uppercase'>
                          Jami to'lov
                        </p>
                        <p className='font-bold text-xl text-blue-900'>
                          {formatPrice(orderTotal)} so'm
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}