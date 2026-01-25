// src/components/common/Loading.js
'use client'

import React from 'react'
import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[400px] w-full py-20'>
      <div className='relative flex items-center justify-center'>
        <div className='absolute w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse'></div>
        <Loader2 className='w-12 h-12 text-blue-600 animate-spin relative z-10' />
      </div>
      
      <div className='mt-6 flex flex-col items-center gap-2'>
        <h3 className='text-lg font-semibold text-gray-800 animate-pulse'>
          Yuklanmoqda...
        </h3>
        <p className='text-sm text-gray-500 max-w-[200px] text-center'>
          Eng yaxshi mahsulotlarni siz uchun tayyorlayapmiz
        </p>
      </div>
      
      <div className='mt-8 w-48 h-1 bg-gray-100 rounded-full overflow-hidden'>
        <div className='h-full bg-blue-600 rounded-full animate-[loading_2s_ease-in-out_infinite] w-1/3'></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  )
}