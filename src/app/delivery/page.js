// src/app/delivery/page.js
'use client'

import React from 'react'
import Navbar from '@/components/home/Navbar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Truck, MapPin, Clock, CreditCard, Banknote, HelpCircle } from 'lucide-react'

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />

      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Yetkazib berish va To'lov</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Sizning xaridingizni tez va xavfsiz yetkazib berish — bizning ustuvor vazifamiz.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 space-y-16">
        
        {/* Yetkazib berish usullari */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Yetkazib berish usullari</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kuryer orqali yetkazish</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Toshkent shahri ichida:</span>
                    Buyurtma tasdiqlangandan so'ng 24 soat ichida.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Viloyatlar bo'ylab:</span>
                    BTS yoki Fargo pochtasi orqali 2-3 ish kuni davomida.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Narxi:</span>
                    Toshkent ichida 20,000 so'm. Oltin a'zolar uchun bepul.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Do'kondan olib ketish (Pickup)</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Tayyor bo'lish vaqti:</span>
                    Buyurtma rasmiylashtirilgandan so'ng 1 soat ichida.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Manzil:</span>
                    Toshkent sh., Chilonzor tumani, 5-mavze, Tech House binosi.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Banknote className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block">Narxi:</span>
                    Mutlaqo bepul.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* To'lov turlari */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">To'lov turlari</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <CreditCard className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">UzCard / Humo</h4>
              <p className="text-gray-500 text-sm">
                Sayt orqali onlayn yoki kuryer terminali orqali to'lov qilishingiz mumkin.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <Banknote className="w-10 h-10 text-green-600 mb-4" />
              <h4 className="text-xl font-bold mb-2">Naqd pul</h4>
              <p className="text-gray-500 text-sm">
                Mahsulotni qabul qilib olgandan so'ng kuryerga naqd pul shaklida to'lov.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition-shadow bg-white">
              <div className="w-10 h-10 bg-black text-white rounded flex items-center justify-center font-bold mb-4 text-xs">VISA</div>
              <h4 className="text-xl font-bold mb-2">Visa / Mastercard</h4>
              <p className="text-gray-500 text-sm">
                Xalqaro kartalar orqali xavfsiz onlayn to'lov tizimi mavjud.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ / Yordam */}
        <div className="bg-blue-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-blue-100">
          <div className="bg-white p-4 rounded-full shadow-md text-blue-600">
            <HelpCircle className="w-12 h-12" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Savollaringiz bormi?</h3>
            <p className="text-gray-600">
              Yetkazib berish holatini bilish yoki manzilni o'zgartirish bo'yicha yordam kerak bo'lsa, bizning qo'llab-quvvatlash markazimizga murojaat qiling.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="tel:+998901234567">
              <Button className="bg-blue-600 hover:bg-blue-700 h-12 px-8 rounded-xl font-bold">
                Qo'ng'iroq qilish
              </Button>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}