// src/app/membership/page.js
'use client'

import React from 'react'
import Navbar from '@/components/home/Navbar'
import { Check, ShieldCheck, Truck, Star, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MembershipPage() {
  const tiers = [
    {
      name: 'Bronza',
      price: "Bepul",
      color: 'bg-orange-700',
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      features: [
        'Asosiy sodiqlik ballari',
        'Tanlangan chegirmalarga kirish',
        'Standart qo\'llab-quvvatlash',
        'Buyurtmalar tarixi'
      ]
    },
    {
      name: 'Kumush',
      price: "Oyiga 50 000 so'm",
      color: 'bg-gray-400',
      icon: <Star className="w-8 h-8 text-white" />,
      features: [
        'Ko\'proq sodiqlik ballari (x1.5)',
        'Ustuvor mijozlarni qo\'llab-quvvatlash',
        'Oylik maxsus takliflar',
        'Tug‘ilgan kunda sovg‘alar'
      ]
    },
    {
      name: 'Oltin',
      price: "Oyiga 100 000 so'm",
      color: 'bg-yellow-500',
      icon: <Truck className="w-8 h-8 text-white" />,
      features: [
        'Eng yuqori sodiqlik mukofotlari (x2)',
        'O\'zbekiston bo\'ylab bepul yetkazib berish',
        'Yangi mahsulotlarga erta kirish',
        'Shaxsiy menejer xizmati'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Sodiqlik Dasturi</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tech House mijozlari uchun maxsus imkoniyatlar. Qancha ko'p xarid qilsangiz, shuncha ko'p imtiyozlarga ega bo'lasiz.
        </p>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className={`${tier.color} p-6 flex items-center justify-between`}>
                <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                  {tier.icon}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full h-12 font-bold ${index === 2 ? 'bg-yellow-500 hover:bg-yellow-600 text-black' : 'bg-slate-900 hover:bg-slate-800'}`}>
                  A'zo bo'lish
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl">
            <Briefcase className="w-12 h-12 text-blue-600" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Biznes / Ulgurji Paketlar</h3>
            <p className="text-gray-600 mb-4">
              Katta hajmdagi xaridlar uchun maxsus shartlar. Korxonalar uchun individual narxlar va shartnoma asosida ishlash.
            </p>
            <ul className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="w-4 h-4 text-blue-600" /> Katta chegirmalar
              </li>
              <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="w-4 h-4 text-blue-600" /> QQS to'lovlari
              </li>
              <li className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Check className="w-4 h-4 text-blue-600" /> Shaxsiy hisobchi
              </li>
            </ul>
          </div>
          <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-8 h-12">
            Bog'lanish
          </Button>
        </div>
      </div>
    </div>
  )
}