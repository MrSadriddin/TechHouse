'use client'

import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Star, Truck, ArrowRight, Check, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LoyaltyProgram = () => {
  const tiers = [
    {
      name: 'Bronza',
      price: 'Bepul',
      color: 'from-orange-600 to-orange-800',
      shadow: 'shadow-orange-200',
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      features: [
        'Asosiy sodiqlik ballari',
        'Tanlangan chegirmalar',
        'Standart qo\'llab-quvvatlash',
        'Buyurtmalar tarixi'
      ]
    },
    {
      name: 'Kumush',
      price: '50 000 so\'m',
      color: 'from-slate-400 to-slate-600',
      shadow: 'shadow-slate-200',
      isPopular: true,
      icon: <Star className="w-8 h-8 text-white" />,
      features: [
        '1.5x sodiqlik ballari',
        'Ustuvor qo\'llab-quvvatlash',
        'Oylik maxsus takliflar',
        'Tug\'ilgan kunda sovg\'alar'
      ]
    },
    {
      name: 'Oltin',
      price: '100 000 so\'m',
      color: 'from-yellow-400 to-yellow-600',
      shadow: 'shadow-yellow-200',
      icon: <Truck className="w-8 h-8 text-white" />,
      features: [
        '2x sodiqlik ballari',
        'Bepul yetkazib berish',
        'Yangi mahsulotlarga erta kirish',
        'Shaxsiy menejer xizmati'
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>SODIQLIK DASTURI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Tech House <span className="text-blue-600">Imtiyozlari</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Biz bilan birga bo'ling va har bir xaridingizdan ko'proq foyda oling. 
            O'zingizga mos tarifni tanlang va maxsus imkoniyatlardan bahramand bo'ling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl ${tier.shadow} hover:-translate-y-2 transition-all duration-500`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  Eng ommabop
                </div>
              )}

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 shadow-lg`}>
                {tier.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-black text-blue-600">{tier.price}</span>
                {tier.price !== 'Bepul' && <span className="text-gray-400 text-sm">/ oyiga</span>}
              </div>

              <div className="space-y-4 mb-8">
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 bg-green-50 p-0.5 rounded-full">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/membership" className="block">
                <Button className={`w-full h-12 rounded-xl font-bold transition-all ${
                  tier.isPopular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200'
                }`}>
                  Tanlash
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/membership">
            <Button variant="link" className="text-blue-600 font-bold text-lg group">
              Barcha shartlar bilan tanishish
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LoyaltyProgram
