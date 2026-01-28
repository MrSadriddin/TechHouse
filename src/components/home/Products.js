'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useWishlist } from '@/context/WishlistContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'

const Products = ({ products = [] }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  const formatPrice = price => {
    return new Intl.NumberFormat('uz-UZ').format(price)
  }

  if (!products || products.length === 0) {
    return (
      <div className='py-20 text-center animate-in fade-in-50'>
        <div className='bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
          <ShoppingCart className='w-10 h-10 text-gray-400' />
        </div>
        <h3 className='text-xl font-bold text-gray-700'>
          Hech narsa topilmadi
        </h3>
      </div>
    )
  }

  return (
    <section className='pb-10 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6'>
          {products.map(product => {
            const quantity = getItemQuantity(product.id)

            return (
              <Card
                key={product.id}
                className='group flex flex-col justify-between border border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white hover:-translate-y-1'
              >
                <div className='relative w-full bg-white'>
                  {product.discount > 0 && (
                    <div className='absolute bottom-2 left-2 z-10'>
                      <Badge className='bg-red-600 text-white border-none px-1.5 py-0.5 text-[10px] md:text-xs font-bold rounded'>
                        -{product.discount}%
                      </Badge>
                    </div>
                  )}

                  <button
                    className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 ${
                      isInWishlist(product.id)
                        ? 'bg-red-50 text-red-500 opacity-100'
                        : 'bg-gray-100/50 hover:bg-white text-gray-400 hover:text-red-500'
                    }`}
                    onClick={() => toggleWishlist(product.id)}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isInWishlist(product.id) ? 'fill-current' : ''
                      }`}
                    />
                  </button>

                  <Carousel className='w-full'>
                    <CarouselContent className='ml-0'>
                      {product.images.map(img => (
                        <CarouselItem key={img.id} className='pl-0'>
                          <Link
                            href={`/product/${product.id}`}
                            className='block relative w-full aspect-square'
                          >
                            <Image
                              src={img.imageUrl}
                              alt={product.nomi}
                              fill
                              className='object-contain p-2 hover:scale-105 transition-transform duration-500'
                              sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw'
                            />
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className='left-1 h-8 w-8 bg-white/90 hover:bg-white border shadow-md opacity-0 group-hover:opacity-100 transition-opacity' />
                    <CarouselNext className='right-1 h-8 w-8 bg-white/90 hover:bg-white border shadow-md opacity-0 group-hover:opacity-100 transition-opacity' />
                  </Carousel>
                </div>

                <CardContent className='p-3 grow flex flex-col gap-2'>
                  <div className='text-[11px] text-gray-400 font-medium truncate uppercase tracking-wider'>
                    {product.brand}
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className='group-hover:text-blue-600 transition-colors'
                  >
                    <h3
                      className='text-[13px] md:text-sm text-gray-800 font-medium line-clamp-2 leading-snug h-[40px]'
                      title={product.nomi}
                    >
                      {product.nomi}
                    </h3>
                  </Link>

                  <div className='flex items-center gap-1.5 mt-auto'>
                    <Star className='w-3.5 h-3.5 text-yellow-400 fill-current' />
                    <span className='text-xs text-gray-500 font-semibold'>
                      {product.rating}
                    </span>
                    <span className='text-xs text-gray-300'>•</span>
                    <span className='text-xs text-gray-400'>
                      {product.reviewsCount} ta sharh
                    </span>
                  </div>

                  <div className='pt-1'>
                    {product.oldPrice && (
                      <div className='text-xs text-gray-400 line-through'>
                        {formatPrice(product.oldPrice)} so'm
                      </div>
                    )}
                    <div className='text-sm md:text-base font-bold text-gray-900'>
                      {formatPrice(product.newPrice)} so'm
                    </div>
                  </div>
                </CardContent>

                <CardFooter className='p-3 pt-0'>
                  {quantity === 0 ? (
                    <Button
                      className='w-full bg-white border border-gray-200 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black text-gray-900 font-medium h-10 rounded-xl transition-all shadow-sm'
                      onClick={() => increaseCartQuantity(product.id)}
                    >
                      <ShoppingCart className='w-4 h-4 mr-2' />
                      Savatga
                    </Button>
                  ) : (
                    <div className='w-full flex items-center justify-between border border-yellow-400 rounded-xl h-10 overflow-hidden bg-white'>
                      <button
                        onClick={() => decreaseCartQuantity(product.id)}
                        className='w-10 h-full flex items-center justify-center hover:bg-yellow-100 transition-colors active:bg-yellow-200'
                      >
                        <Minus className='w-4 h-4 text-gray-800' />
                      </button>
                      <span className='flex-1 text-center text-sm font-bold text-gray-900'>
                        {quantity}
                      </span>
                      <button
                        onClick={() => increaseCartQuantity(product.id)}
                        className='w-10 h-full flex items-center justify-center hover:bg-yellow-100 transition-colors active:bg-yellow-200'
                      >
                        <Plus className='w-4 h-4 text-gray-800' />
                      </button>
                    </div>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Products