// src/components/common/Footer.js
'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Tech House</h3>
            <p className="text-sm leading-relaxed text-gray-400 mb-6">
              Bizning maqsadimiz — har bir xonadonga sifatli va zamonaviy texnologiyalarni olib kirish. 
              Eng yaxshi brendlar va ishonchli xizmat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Ma'lumotlar</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-orange-500 transition">Biz haqimizda</Link></li>
              <li><Link href="/delivery" className="hover:text-orange-500 transition">Yetkazib berish va to'lov</Link></li>
              <li><Link href="/membership" className="hover:text-orange-500 transition">Sodiqlik dasturi</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-500 transition">Maxfiylik siyosati</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Kategoriyalar</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/?action=catalog&value=Oshxona jihozlari" className="hover:text-orange-500 transition">Oshxona jihozlari</Link></li>
              <li><Link href="/?action=catalog&value=Tozalash texnikasi" className="hover:text-orange-500 transition">Tozalash texnikasi</Link></li>
              <li><Link href="/?action=catalog&value=Isitish va sovutish" className="hover:text-orange-500 transition">Isitish va sovutish</Link></li>
              <li><Link href="/?action=catalog&value=Shaxsiy parvarish" className="hover:text-orange-500 transition">Shaxsiy parvarish</Link></li>
              <li><Link href="/?action=catalog&value=Aqlli uy" className="hover:text-orange-500 transition">Aqlli uy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold mb-6">Bog'lanish</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Toshkent sh., Chilonzor tumani, 5-mavze</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:+998901234567" className="hover:text-white transition">+998 90 123 45 67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@techhouse.uz" className="hover:text-white transition">info@techhouse.uz</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <div>
                  <p>Dushanba - Shanba</p>
                  <p className="text-gray-500">09:00 - 20:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 Tech House. Barcha huquqlar himoyalangan.</p>
          <p>Assignment Unit 6: Website Development</p>
        </div>
      </div>
    </footer>
  )
}