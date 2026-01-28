// src/components/home/SubNavbar.js
'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import bannerData from '@/datas/SubNavbar.json'

const SubNavbar = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  if (!bannerData || bannerData.length === 0) return null

  return (
    <div className='w-full pt-4 pb-8 animate-in fade-in-50 slide-in-from-bottom-4 duration-700'>
      <div className='container mx-auto px-4'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full group relative'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            loop: true,
            align: 'start',
          }}
        >
          <div className='rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200'>
            <CarouselContent className='ml-0'>
              {bannerData.map(banner => (
                <CarouselItem key={banner.id} className='pl-0'>
                  <Link
                    href={banner.urlLink || '#'}
                    className='block relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[450px]'
                  >
                    <div className='relative w-full h-full'>
                      <Image
                        src={banner.imageUrl}
                        alt={`Banner ${banner.id}`}
                        fill
                        className='object-cover transition-transform duration-700 hover:scale-105'
                        priority={banner.id === 1}
                        quality={90}
                      />
                      <div className='absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-60'></div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          <CarouselPrevious className='absolute left-6 h-12 w-12 border-none bg-white/20 hover:bg-white/40 text-white backdrop-blur-md shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 disabled:opacity-0'>
            <ArrowLeft className='h-6 w-6' />
          </CarouselPrevious>

          <CarouselNext className='absolute right-6 h-12 w-12 border-none bg-white/20 hover:bg-white/40 text-white backdrop-blur-md shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 disabled:opacity-0'>
            <ArrowRight className='h-6 w-6' />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  )
}

export default SubNavbar