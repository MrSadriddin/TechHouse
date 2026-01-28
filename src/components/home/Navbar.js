'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Search,
  ShoppingCart,
  LayoutGrid,
  Package,
  LogOut,
  X,
  Menu,
  Heart,
  Phone,
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { useOrders } from '@/context/OrderContext'
import { useWishlist } from '@/context/WishlistContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import AuthModal from '@/components/auth/AuthModal'

const categories = [
  'Barcha mahsulotlar',
  'Oshxona jihozlari',
  'Tozalash texnikasi',
  'Isitish va sovutish',
  'Shaxsiy parvarish',
  'Aqlli uy',
]

const Navbar = () => {
  const { isLoggedIn, user, logout } = useAuth()
  const { totalCartCount } = useCart()
  const { orders } = useOrders()
  const { wishlistItems } = useWishlist()
  const router = useRouter()

  const [isAuthModalOpen, setAuthModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const ordersCount = orders.length

  const handleCategoryClick = category => {
    router.push(`/?action=catalog&value=${encodeURIComponent(category)}`)
    setIsMobileMenuOpen(false)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/?action=search&value=${encodeURIComponent(searchQuery)}`)
      setIsMobileMenuOpen(false)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter') handleSearch()
  }

  const goHome = () => {
    setSearchQuery('')
    router.push('/')
  }

  return (
    <>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={() => setAuthModalOpen(false)}
      />

      <div className='bg-slate-900 border-b border-gray-800 hidden md:block text-white'>
        <div className='container mx-auto px-4 h-10 flex items-center justify-between text-[12px] font-medium'>
          <div className='flex gap-6'>
            <Link href='/about' className='hover:text-orange-400 transition'>
              Biz haqimizda
            </Link>
            <Link href='/delivery' className='hover:text-orange-400 transition'>
              Yetkazib berish
            </Link>
            <Link href='/membership' className='text-yellow-400 hover:text-yellow-300 transition flex items-center gap-1'>
              Sodiqlik Dasturi
            </Link>
          </div>
          <div className='flex gap-6 items-center'>
            <a
              href='tel:+998901234567'
              className='flex items-center gap-1.5 hover:text-orange-400 transition'
            >
              <Phone className='w-3 h-3' /> +998 90 123 45 67
            </a>
            <span className='text-gray-400'>|</span>
            <span className='hover:text-white cursor-pointer'>Toshkent sh.</span>
          </div>
        </div>
      </div>

      <header className='sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'>
        <div className='container mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-8'>
          <div
            onClick={goHome}
            className='shrink-0 cursor-pointer hover:opacity-90 transition-opacity'
          >
            <Image
              src='/logo.png'
              alt='Tech House'
              width={160}
              height={55}
              className='object-contain h-9 w-auto md:h-11'
              priority
            />
          </div>

          <div className='hidden md:block'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='bg-blue-600 hover:bg-blue-700 text-white border-none h-11 px-6 rounded-xl flex items-center gap-2 font-semibold shadow-md shadow-blue-200 transition-all active:scale-95'>
                  <LayoutGrid className='h-5 w-5' />
                  Katalog
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-64 mt-3 p-2 rounded-xl shadow-xl border-gray-100 animate-in fade-in-50 zoom-in-95'>
                <DropdownMenuLabel className='text-gray-400 text-xs uppercase tracking-wider ml-2 my-1'>
                  Kategoriyalar
                </DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-100' />
                {categories.map((cat, index) => (
                  <DropdownMenuItem
                    key={index}
                    className='cursor-pointer py-2.5 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium text-sm'
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className='hidden md:flex flex-1 max-w-2xl relative group'>
            <div className='relative w-full flex items-center'>
              <Input
                type='text'
                placeholder='Mahsulot va toifalarni qidirish...'
                className='w-full pl-5 pr-14 h-11 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-100 transition-all shadow-inner'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                onClick={handleSearch}
                className='absolute right-1 top-1 h-9 w-12 rounded-lg bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors'
                size='icon'
              >
                <Search className='h-5 w-5' />
              </Button>
            </div>
          </div>

          <div className='hidden md:flex items-center gap-2 lg:gap-6'>
            <Link
              href='/orders'
              className='group flex flex-col items-center gap-1 min-w-[70px] cursor-pointer'
            >
              <div className='p-2 rounded-xl group-hover:bg-gray-100 transition-colors relative'>
                <Package className='h-6 w-6 text-gray-700 group-hover:text-blue-900 transition-colors' />
                {ordersCount > 0 && (
                  <span className='absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-blue-600 text-white text-[10px] font-bold rounded-full ring-2 ring-white animate-bounce-in'>
                    {ordersCount}
                  </span>
                )}
              </div>
              <span className='text-[11px] font-medium text-gray-500 group-hover:text-blue-900'>
                Buyurtmalar
              </span>
            </Link>

            <Link
              href='/favorites'
              className='group flex flex-col items-center gap-1 min-w-[70px] cursor-pointer'
            >
              <div className='p-2 rounded-xl group-hover:bg-gray-100 transition-colors relative'>
                <Heart className='h-6 w-6 text-gray-700 group-hover:text-red-500 transition-colors' />
                {wishlistItems.length > 0 && (
                  <span className='absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white animate-bounce-in'>
                    {wishlistItems.length}
                  </span>
                )}
              </div>
              <span className='text-[11px] font-medium text-gray-500 group-hover:text-red-500'>
                Sevimlilar
              </span>
            </Link>

            <Link
              href='/cart'
              className='group flex flex-col items-center gap-1 min-w-[70px] cursor-pointer'
            >
              <div className='p-2 rounded-xl group-hover:bg-gray-100 transition-colors relative'>
                <ShoppingCart className='h-6 w-6 text-gray-700 group-hover:text-orange-500 transition-colors' />
                {totalCartCount > 0 && (
                  <span className='absolute top-0 right-0 h-5 w-5 flex items-center justify-center bg-orange-500 text-white text-[10px] font-bold rounded-full ring-2 ring-white animate-bounce-in'>
                    {totalCartCount}
                  </span>
                )}
              </div>
              <span className='text-[11px] font-medium text-gray-500 group-hover:text-orange-500'>
                Savat
              </span>
            </Link>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className='flex items-center gap-2 cursor-pointer bg-gray-50 hover:bg-gray-100 py-1.5 px-3 rounded-full border border-gray-100 transition-colors'>
                    <Avatar className='h-8 w-8 border border-white shadow-sm'>
                      <AvatarImage src='https://github.com/shadcn.png' />
                      <AvatarFallback className='bg-blue-100 text-blue-700 font-bold'>
                        TH
                      </AvatarFallback>
                    </Avatar>
                    <span className='text-xs font-semibold text-gray-700 max-w-[80px] truncate hidden lg:block'>
                      {user?.phone}
                    </span>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='w-56 p-2 rounded-xl shadow-xl'
                >
                  <DropdownMenuLabel>Mening Kabinetim</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    asChild
                    className='rounded-lg cursor-pointer'
                  >
                    <Link
                      href='/orders'
                      className='w-full flex items-center justify-between'
                    >
                      <div className='flex items-center'>
                        <Package className='w-4 h-4 mr-2 text-gray-500' />
                        Buyurtmalarim
                      </div>
                      {ordersCount > 0 && (
                        <Badge className='bg-blue-600 h-5 px-1.5'>
                          {ordersCount}
                        </Badge>
                      )}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='rounded-lg cursor-pointer text-red-500 focus:text-red-600 focus:bg-red-50'
                    onClick={logout}
                  >
                    <LogOut className='mr-2 h-4 w-4' /> Chiqish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setAuthModalOpen(true)}
                className='bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold shadow-none rounded-xl h-10 px-6 transition-all'
              >
                Kirish
              </Button>
            )}
          </div>

          <div className='md:hidden flex items-center gap-3'>
            <Link href='/cart' className='relative p-2'>
              <ShoppingCart className='h-6 w-6 text-gray-800' />
              {totalCartCount > 0 && (
                <span className='absolute top-0 right-0 h-4 w-4 bg-orange-500 text-white text-[10px] flex items-center justify-center font-bold rounded-full'>
                  {totalCartCount}
                </span>
              )}
            </Link>

            <Button
              variant='ghost'
              size='icon'
              className='text-gray-800'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className='md:hidden fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-white z-50 overflow-y-auto animate-in slide-in-from-right-10'>
            <div className='p-4 space-y-6'>
              <div className='relative'>
                <Input
                  type='text'
                  placeholder='Qidirish...'
                  className='w-full h-12 rounded-xl bg-gray-50 border-gray-200 pl-11'
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                <Search className='absolute left-4 top-3.5 h-5 w-5 text-gray-400' />
                <Button
                  onClick={handleSearch}
                  className='absolute right-2 top-2 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4'
                >
                  Izlash
                </Button>
              </div>

              <div className='bg-gray-50 p-4 rounded-2xl border border-gray-100'>
                {isLoggedIn ? (
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Avatar className='h-12 w-12 border-2 border-white shadow-sm'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>TH</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className='font-bold text-gray-900'>
                          Xush kelibsiz!
                        </p>
                        <p className='text-xs text-gray-500'>{user?.phone}</p>
                      </div>
                    </div>
                    <Button
                      variant='ghost'
                      size='icon'
                      onClick={() => {
                        logout()
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <LogOut className='text-red-500' />
                    </Button>
                  </div>
                ) : (
                  <div className='text-center'>
                    <p className='text-sm text-gray-500 mb-3'>
                      Buyurtmalarni kuzatish uchun kiring
                    </p>
                    <Button
                      onClick={() => {
                        setAuthModalOpen(true)
                        setIsMobileMenuOpen(false)
                      }}
                      className='w-full bg-orange-500 text-white rounded-xl h-11 font-bold'
                    >
                      Kirish / Ro'yxatdan o'tish
                    </Button>
                  </div>
                )}
              </div>

              <div className='space-y-1'>
                <Link
                  href='/orders'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors'
                >
                  <div className='bg-blue-50 p-2 rounded-lg text-blue-600'>
                    <Package className='w-5 h-5' />
                  </div>
                  <span className='font-semibold text-gray-700'>
                    Buyurtmalarim
                  </span>
                  {ordersCount > 0 && (
                    <Badge className='ml-auto bg-blue-600'>{ordersCount}</Badge>
                  )}
                </Link>
                <Link
                  href='/cart'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors'
                >
                  <div className='bg-orange-50 p-2 rounded-lg text-orange-600'>
                    <ShoppingCart className='w-5 h-5' />
                  </div>
                  <span className='font-semibold text-gray-700'>Savat</span>
                  {totalCartCount > 0 && (
                    <Badge className='ml-auto bg-orange-500'>
                      {totalCartCount}
                    </Badge>
                  )}
                </Link>
                <Link
                  href='/favorites'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors'
                >
                  <div className='bg-red-50 p-2 rounded-lg text-red-600'>
                    <Heart className='w-5 h-5' />
                  </div>
                  <span className='font-semibold text-gray-700'>
                    Sevimlilar
                  </span>
                  {wishlistItems.length > 0 && (
                    <Badge className='ml-auto bg-red-500'>
                      {wishlistItems.length}
                    </Badge>
                  )}
                </Link>
                <Link
                  href='/membership'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors'
                >
                  <div className='bg-yellow-50 p-2 rounded-lg text-yellow-600'>
                    <Package className='w-5 h-5' />
                  </div>
                  <span className='font-semibold text-gray-700'>
                    Sodiqlik Dasturi
                  </span>
                </Link>
              </div>

              <div className='border-t pt-6'>
                <p className='font-bold text-gray-900 mb-4 px-2'>Katalog</p>
                <div className='grid grid-cols-2 gap-3'>
                  {categories.map((cat, idx) => (
                    <Button
                      key={idx}
                      variant='outline'
                      className='justify-start h-auto py-3 px-4 rounded-xl border-gray-200 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 whitespace-normal text-left'
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar