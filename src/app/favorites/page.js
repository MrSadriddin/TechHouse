// src/app/favorites/page.js
'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import Navbar from '@/components/home/Navbar'
import Products from '@/components/home/Products'
import Loading from '@/components/common/Loading'
import productsData from '@/datas/Products.json'
import { useWishlist } from '@/context/WishlistContext'

function FavoritesContent() {
  const { wishlistItems } = useWishlist()

  const favoriteProducts = productsData.filter(p => wishlistItems.includes(p.id))

  return (
    <main className='min-h-screen bg-white'>
      <Navbar />

      <div className='container mx-auto px-4 mt-8 mb-8'>
        <div className='flex items-center justify-between border-b border-gray-100 pb-4 mb-6'>
          <div className='flex items-center gap-3'>
            <div className='bg-red-50 p-2 rounded-xl'>
              <Heart className='w-6 h-6 text-red-500 fill-current' />
            </div>
            <h2 className='text-2xl font-bold text-gray-800'>Sevimlilar</h2>
          </div>
          <span className='text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full font-medium'>
            {favoriteProducts.length} ta mahsulot
          </span>
        </div>

        {favoriteProducts.length > 0 ? (
          <Products products={favoriteProducts} />
        ) : (
          <div className='py-20 text-center animate-in fade-in-50'>
            <div className='bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'>
              <Heart className='w-12 h-12 text-gray-300' />
            </div>
            <h3 className='text-xl font-bold text-gray-700 mb-2'>
              Sevimlilar ro'yxati bo'sh
            </h3>
            <p className='text-gray-500 mb-8 max-w-xs mx-auto'>
              Sizga yoqqan mahsulotlarni yurakcha belgisini bosish orqali bu yerga qo'shishingiz mumkin
            </p>
            <Link
              href='/'
              className='inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-md shadow-blue-100'
            >
              Xaridni boshlash
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default function FavoritesPage() {
  return (
    <Suspense fallback={<Loading />}>
      <FavoritesContent />
    </Suspense>
  )
}