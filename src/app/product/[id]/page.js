// src/app/product/[id]/page.js
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  Star,
  Heart,
  Share2,
  Truck,
  Store,
  ChevronRight,
  ShieldCheck,
  Minus,
  Plus,
  CheckCircle2,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Navbar from '@/components/home/Navbar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import productsData from '@/datas/Products.json'

export default function ProductPage() {
  const params = useParams()
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart()

  const product = productsData.find(p => p.id === parseInt(params.id))

  const [activeImage, setActiveImage] = useState(null)
  const [activeTab, setActiveTab] = useState('desc')

  useEffect(() => {
    if (product?.images?.length > 0) {
      setActiveImage(product.images[0].imageUrl)
    }
  }, [product])

  if (!product) {
    return (
      <div className='min-h-screen bg-gray-50'>
        <Navbar />
        <div className='flex flex-col items-center justify-center h-[60vh] text-center px-4'>
          <h1 className='text-2xl font-bold mb-4'>Mahsulot topilmadi 😕</h1>
          <Link href='/'>
            <Button>Bosh sahifaga qaytish</Button>
          </Link>
        </div>
      </div>
    )
  }

  const quantity = getItemQuantity(product.id)
  const formatPrice = price => new Intl.NumberFormat('uz-UZ').format(price)
  
  const breadcrumbs = product.category
    ? product.category.split(' / ')
    : ['Bosh sahifa', 'Mahsulot']

  return (
    <div className='min-h-screen bg-white pb-20'>
      <Navbar />

      <div className='container mx-auto px-4 py-6'>
        <div className='flex items-center text-xs text-gray-500 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide'>
          <Link href='/' className='hover:text-gray-900'>
            Bosh sahifa
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight className='w-3 h-3 mx-2 flex-shrink-0' />
              <span
                className={`${
                  index === breadcrumbs.length - 1
                    ? 'text-gray-900 font-medium'
                    : 'hover:text-gray-900 cursor-pointer'
                }`}
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          <div className='lg:col-span-5 flex gap-4 h-fit sticky top-24'>
            <div className='hidden md:flex flex-col gap-2'>
              {product.images.map(img => (
                <div
                  key={img.id}
                  onMouseEnter={() => setActiveImage(img.imageUrl)}
                  className={`w-16 h-16 border rounded-lg cursor-pointer overflow-hidden relative transition-all ${
                    activeImage === img.imageUrl
                      ? 'border-orange-500 ring-1 ring-orange-500'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={img.imageUrl}
                    alt='preview'
                    fill
                    className='object-contain p-1'
                  />
                </div>
              ))}
            </div>

            <div className='flex-1 relative bg-gray-50 rounded-xl aspect-square border overflow-hidden group'>
              <div className='absolute top-4 left-4 z-10 flex flex-col gap-2'>
                {product.discount > 0 && (
                  <Badge className='bg-red-500 hover:bg-red-600'>
                    -{product.discount}%
                  </Badge>
                )}
                {product.tags?.map(tag => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='bg-yellow-400 hover:bg-yellow-500 text-black border-none'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              {activeImage && (
                <Image
                  src={activeImage}
                  alt={product.nomi}
                  fill
                  className='object-contain p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-500'
                  priority
                />
              )}
            </div>
          </div>

          <div className='lg:col-span-4 space-y-6'>
            <div>
              <h1 className='text-xl md:text-2xl font-bold text-gray-900 leading-tight mb-2'>
                {product.nomi}
              </h1>

              <div className='flex items-center justify-between text-sm flex-wrap gap-2'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center text-orange-500 font-bold bg-orange-50 px-2 py-0.5 rounded-md'>
                    <Star className='w-4 h-4 fill-current mr-1' />
                    {product.rating}
                  </div>
                  <span
                    onClick={() => {
                      setActiveTab('reviews')
                      document
                        .getElementById('details-section')
                        .scrollIntoView({ behavior: 'smooth' })
                    }}
                    className='text-gray-500 text-xs flex items-center gap-1 hover:text-blue-600 cursor-pointer decoration-dotted underline'
                  >
                    {product.reviewsCount} sharh
                  </span>
                  <span className='text-gray-400 text-xs'>
                    {product.ordersCount} ta xarid
                  </span>
                </div>

                <div className='flex gap-3'>
                  <button className='text-gray-400 hover:text-red-500 transition tooltip'>
                    <Heart className='w-5 h-5' />
                  </button>
                  <button className='text-gray-400 hover:text-blue-500 transition'>
                    <Share2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>

            <Separator />

            {product.colors && product.colors.length > 0 && (
              <div>
                <p className='text-sm font-medium mb-2'>Mavjud ranglar:</p>
                <div className='flex gap-3'>
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className='w-8 h-8 rounded-full border-2 cursor-pointer ring-offset-2 hover:ring-2 ring-gray-200 transition-all shadow-sm'
                      style={{
                        backgroundColor: color,
                        borderColor: index === 0 ? '#f97316' : '#e5e7eb',
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}

            <div className='bg-gray-50 p-4 rounded-xl text-sm space-y-3'>
              <h3 className='font-bold text-gray-800'>Qisqa xususiyatlar:</h3>
              <div className='space-y-2'>
                {product.shortSpecs?.map((spec, idx) => (
                  <div
                    key={idx}
                    className='flex justify-between border-b border-gray-200 border-dashed pb-1 last:border-0'
                  >
                    <span className='text-gray-500'>{spec.key}</span>
                    <span className='font-medium text-gray-900'>
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  setActiveTab('specs')
                  document
                    .getElementById('details-section')
                    .scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-blue-600 text-xs font-medium hover:underline flex items-center gap-1 mt-2'
              >
                Barcha xususiyatlar <ChevronRight className='w-3 h-3' />
              </button>
            </div>
          </div>

          <div className='lg:col-span-3'>
            <div className='border rounded-2xl p-5 shadow-sm sticky top-24 bg-white'>
              <div className='mb-6'>
                <div className='flex items-center gap-2 mb-1'>
                  <span className='text-2xl font-bold text-gray-900'>
                    {formatPrice(product.newPrice)} so'm
                  </span>
                  {product.discount > 0 && (
                    <Badge variant='destructive' className='text-xs'>
                      -{product.discount}%
                    </Badge>
                  )}
                </div>
                {product.oldPrice && (
                  <div className='text-sm text-gray-400 line-through decoration-red-500'>
                    {formatPrice(product.oldPrice)} so'm
                  </div>
                )}
              </div>

              <div className='space-y-3 mb-6'>
                {quantity > 0 ? (
                  <div className='flex items-center justify-between border-2 border-orange-500 rounded-lg h-12 bg-orange-50 overflow-hidden'>
                    <button
                      onClick={() => decreaseCartQuantity(product.id)}
                      className='w-12 h-full flex items-center justify-center hover:bg-orange-200 text-orange-600 transition'
                    >
                      <Minus />
                    </button>
                    <span className='font-bold text-lg text-gray-800'>
                      {quantity}
                    </span>
                    <button
                      onClick={() => increaseCartQuantity(product.id)}
                      className='w-12 h-full flex items-center justify-center hover:bg-orange-200 text-orange-600 transition'
                    >
                      <Plus />
                    </button>
                  </div>
                ) : (
                  <Button
                    className='w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold h-12 text-base shadow-none border border-transparent transition-colors'
                    onClick={() => increaseCartQuantity(product.id)}
                  >
                    Savatga qo'shish
                  </Button>
                )}
                <Button
                  variant='outline'
                  className='w-full h-12 bg-gray-100 hover:bg-gray-200 border-none text-gray-900 font-medium'
                >
                  1 marta bosishda xarid qilish
                </Button>
              </div>

              <div className='bg-gray-50 rounded-xl p-4 space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <div className='bg-white p-2 rounded-full h-fit shadow-sm text-blue-600'>
                    <Truck className='w-5 h-5' />
                  </div>
                  <div>
                    <p className='font-bold text-gray-800'>
                      Market yetkazib xizmati
                    </p>
                    <p className='text-xs text-green-600 mt-0.5 font-medium'>
                      Ertaga, bepul
                    </p>
                    <p className='text-xs text-gray-500 mt-1'>
                      Buyurtma berishga shoshiling
                    </p>
                  </div>
                </div>
                <Separator />
                <div className='flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-1 -ml-1 rounded transition'>
                  <div className='bg-white p-2 rounded-full h-fit shadow-sm text-gray-600'>
                    <Store className='w-5 h-5' />
                  </div>
                  <div className='flex-1'>
                    <p className='font-medium text-xs text-gray-500'>
                      Sotuvchi:
                    </p>
                    <div className='flex items-center gap-1'>
                      <p className='font-bold text-gray-800'>
                        {product.seller?.name || 'Tech House'}
                      </p>
                      <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                      <span className='text-xs text-gray-500'>
                        {product.seller?.rating || '4.9'}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className='w-4 h-4 text-gray-400' />
                </div>
              </div>

              <div className='mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 bg-green-50 p-2 rounded border border-green-100'>
                <ShieldCheck className='w-4 h-4 text-green-600' />
                <span>Xavfsiz xarid kafolati</span>
              </div>
            </div>
          </div>
        </div>

        <div id='details-section' className='mt-16 bg-white rounded-xl'>
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className='w-full'
          >
            <TabsList className='w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-6 md:gap-8 overflow-x-auto'>
              <TabsTrigger
                value='desc'
                className='rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500'
              >
                Tovar haqida
              </TabsTrigger>
              <TabsTrigger
                value='specs'
                className='rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500'
              >
                Xususiyatlar
              </TabsTrigger>
              <TabsTrigger
                value='reviews'
                className='rounded-none border-b-2 border-transparent data-[state=active]:border-yellow-400 data-[state=active]:text-black py-3 px-0 text-base font-medium text-gray-500'
              >
                Sharhlar ({product.reviewsCount})
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value='desc'
              className='py-8 max-w-4xl animate-in fade-in-50'
            >
              <h2 className='text-xl font-bold mb-4 text-gray-900'>
                {product.nomi}
              </h2>
              <p className='text-gray-700 leading-relaxed mb-6 text-base whitespace-pre-line'>
                {product.description}
              </p>

              {product.advantages && (
                <div className='mb-6'>
                  <h3 className='font-bold text-lg mb-3'>
                    Asosiy afzalliklari:
                  </h3>
                  <ul className='space-y-2'>
                    {product.advantages.map((adv, i) => (
                      <li key={i} className='flex items-start gap-2'>
                        <CheckCircle2 className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                        <span className='text-gray-700'>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className='w-full h-32 md:h-48 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg'>
                Tech House - Sifat va Ishonch!
              </div>
            </TabsContent>

            <TabsContent
              value='specs'
              className='py-8 max-w-2xl animate-in fade-in-50'
            >
              <h3 className='text-lg font-bold mb-6'>Barcha xususiyatlar</h3>
              {product.fullSpecs ? (
                <div className='space-y-8'>
                  {product.fullSpecs.map((group, idx) => (
                    <div key={idx}>
                      <h4 className='font-semibold text-gray-900 mb-3 text-base'>
                        {group.group}
                      </h4>
                      <div className='space-y-0 border rounded-lg overflow-hidden'>
                        {group.items.map((item, i) => (
                          <div
                            key={i}
                            className='grid grid-cols-2 py-3 px-4 border-b last:border-0 hover:bg-gray-50 transition'
                          >
                            <span className='text-gray-500 text-sm'>
                              {item.label}
                            </span>
                            <span className='font-medium text-gray-900 text-sm'>
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='text-gray-500'>
                  Qo'shimcha xususiyatlar kiritilmagan.
                </p>
              )}
            </TabsContent>

            <TabsContent value='reviews' className='py-8 animate-in fade-in-50'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/3 bg-gray-50 p-6 rounded-2xl h-fit border border-gray-100'>
                  <div className='text-5xl font-extrabold text-gray-900 mb-2'>
                    {product.rating}
                  </div>
                  <div className='flex text-yellow-400 mb-2 gap-1'>
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star
                        key={s}
                        className={`w-5 h-5 ${
                          s <= Math.round(product.rating)
                            ? 'fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className='text-gray-500 text-sm mb-6 font-medium'>
                    {product.reviewsCount} ta sharh asosida
                  </p>
                  <Button className='w-full bg-blue-900 hover:bg-blue-800'>
                    Sharh qoldirish
                  </Button>
                </div>

                <div className='flex-1 space-y-6'>
                  {product.reviewsList && product.reviewsList.length > 0 ? (
                    product.reviewsList.map(review => (
                      <div
                        key={review.id}
                        className='border-b pb-6 last:border-0'
                      >
                        <div className='flex items-center gap-3 mb-3'>
                          <Avatar className='bg-gray-200'>
                            <AvatarFallback>
                              {review.user.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className='font-bold text-sm text-gray-900'>
                              {review.user}
                            </p>
                            <div className='flex gap-2 text-xs text-gray-500 items-center'>
                              <div className='flex text-yellow-400 gap-0.5'>
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < review.rating
                                        ? 'fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className='w-1 h-1 bg-gray-300 rounded-full'></span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className='text-sm text-gray-800 leading-relaxed mb-3'>
                          {review.comment}
                        </p>
                        {(review.pros || review.cons) && (
                          <div className='flex gap-4 text-xs'>
                            {review.pros && (
                              <div className='flex gap-1 text-green-700'>
                                <ThumbsUp className='w-3 h-3 mt-0.5' />
                                <span className='font-medium'>
                                  Afzalliklari: {review.pros}
                                </span>
                              </div>
                            )}
                            {review.cons && (
                              <div className='flex gap-1 text-red-700'>
                                <ThumbsDown className='w-3 h-3 mt-0.5' />
                                <span className='font-medium'>
                                  Kamchiliklari: {review.cons}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className='text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-dashed'>
                      <p>
                        Hozircha sharhlar yo'q. Birinchi bo'lib fikr bildiring!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}