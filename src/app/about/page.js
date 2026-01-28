'use client'

import React from 'react'
import Navbar from '@/components/home/Navbar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ShieldCheck, 
  Truck, 
  Headphones, 
  Users, 
  Trophy, 
  History 
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Navbar />

      <div className="bg-slate-900 text-white py-20 px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Tech House Haqida</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Biz shunchaki do'kon emasmiz. Biz har bir xonadonga innovatsiya, qulaylik va sifat olib kiruvchi ishonchli hamkormiz.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-12 space-y-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-orange-100 text-orange-600 w-fit px-4 py-1 rounded-full font-bold text-sm">
              Bizning Tarix
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              10 yildan ortiq tajriba va ishonch
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Tech House 2015-yilda kichik maishiy texnika do'koni sifatida o'z faoliyatini boshlagan. Bugungi kunga kelib, biz O'zbekiston bo'ylab 50 dan ortiq hamkorlarga va minglab mamnun mijozlarga ega yirik tarmoqqa aylandik.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bizning asosiy maqsadimiz — mijozlarga jahon standartlariga mos, original va kafolatlangan texnikalarni hamyonbop narxlarda yetkazib berishdir.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">50K+</h3>
              <p className="text-sm text-gray-500">Mamnun mijozlar</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
              <Trophy className="w-10 h-10 text-yellow-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">100%</h3>
              <p className="text-sm text-gray-500">Original mahsulot</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
              <History className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">10 yil</h3>
              <p className="text-sm text-gray-500">Bozordagi tajriba</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
              <Truck className="w-10 h-10 text-orange-500 mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
              <p className="text-sm text-gray-500">Tezkor yetkazuv</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            Nega aynan Tech House?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rasmiy Kafolat</h3>
              <p className="text-gray-500">
                Biz sotadigan har bir mahsulot ishlab chiqaruvchi tomonidan rasmiy kafolatga ega. Nosozlik yuz berganda bepul servis xizmati ko'rsatiladi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="bg-orange-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Konsultatsiya</h3>
              <p className="text-gray-500">
                Bizning mutaxassislarimiz sizga to'g'ri tanlov qilishda yordam beradi. Texnik xususiyatlar bo'yicha bepul maslahat oling.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform">
              <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qulay Yetkazib Berish</h3>
              <p className="text-gray-500">
                O'zbekistonning istalgan nuqtasiga tezkor yetkazib berish xizmati. Toshkent shahri ichida buyurtmangizni 24 soat ichida qabul qilasiz.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Texnologiyalar olamiga marhamat!</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Hoziroq katalogimizni ko'zdan kechiring va o'zingiz uchun eng mos keladigan maishiy texnikani tanlang.
          </p>
          <Link href="/">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12 text-lg rounded-xl font-bold">
              Katalogni ko'rish
            </Button>
          </Link>
        </div>

      </div>
    </div>
  )
}