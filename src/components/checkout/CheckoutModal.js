// src/components/checkout/CheckoutModal.js
'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import {
  MapPin,
  Truck,
  CreditCard,
  Banknote,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useOrders } from '@/context/OrderContext'

const CheckoutModal = ({ isOpen, onClose }) => {
  const router = useRouter()
  const { cartItems, totalCartCount, clearCart } = useCart()
  const { addOrder } = useOrders()

  const [step, setStep] = useState(1)
  const [deliveryType, setDeliveryType] = useState('delivery')
  const [paymentType, setPaymentType] = useState('card')

  const handleOrder = () => {
    const today = new Date()
    const dateString = today.toLocaleDateString('uz-UZ', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    const newOrder = {
      items: [...cartItems],
      totalCount: totalCartCount,
      deliveryType,
      paymentType,
      date: dateString,
      status: 'Jarayonda',
      totalPrice: 0,
    }

    addOrder(newOrder)
    clearCart()
    router.push('/orders')
    onClose()
    setTimeout(() => setStep(1), 500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[95vw] sm:w-full sm:max-w-[650px] p-0 overflow-hidden rounded-[1.5rem] sm:rounded-[2.5rem] border-none shadow-2xl bg-[#F8F9FA]'>
        
        {/* --- HEADER --- */}
        <div className='bg-white px-5 py-5 sm:px-8 sm:py-6 border-b border-gray-100'>
          <DialogHeader>
            <DialogTitle className='text-xl sm:text-2xl font-extrabold text-gray-900 flex items-center gap-2'>
              {step === 1 ? (
                <>
                  <span className='bg-blue-100 text-blue-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0'>
                    1
                  </span>
                  Buyurtmani rasmiylashtirish
                </>
              ) : (
                <>
                  <span className='bg-green-100 text-green-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm shrink-0'>
                    2
                  </span>
                  Tasdiqlash
                </>
              )}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* --- CONTENT --- */}
        <div className='p-5 sm:p-8 max-h-[60vh] sm:h-[60vh] overflow-y-auto scrollbar-hide'>
          {step === 1 ? (
            <div className='space-y-6 sm:space-y-8 animate-in slide-in-from-left-4 fade-in duration-300'>
              
              {/* Yetkazib berish usuli */}
              <div className='space-y-4'>
                <h3 className='text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wide'>
                  Yetkazib berish usuli
                </h3>
                <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                  <div
                    className={`group relative border-2 rounded-2xl p-3 sm:p-5 cursor-pointer flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-lg ${
                      deliveryType === 'delivery'
                        ? 'border-orange-500 bg-white shadow-md'
                        : 'border-transparent bg-white shadow-sm hover:border-gray-200'
                    }`}
                    onClick={() => setDeliveryType('delivery')}
                  >
                    {deliveryType === 'delivery' && (
                      <div className='absolute top-2 right-2 sm:top-3 sm:right-3 text-orange-500'>
                        <CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5 fill-orange-100' />
                      </div>
                    )}
                    <div
                      className={`p-2 sm:p-3 rounded-full ${
                        deliveryType === 'delivery'
                          ? 'bg-orange-50 text-orange-600'
                          : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <Truck className='w-6 h-6 sm:w-8 sm:h-8' />
                    </div>
                    <div className='text-center'>
                      <span
                        className={`block font-bold text-sm sm:text-lg ${
                          deliveryType === 'delivery'
                            ? 'text-gray-900'
                            : 'text-gray-500'
                        }`}
                      >
                        Kuryer
                      </span>
                      <span className='text-[10px] sm:text-xs text-gray-400'>
                        Eshikkacha
                      </span>
                    </div>
                  </div>

                  <div
                    className={`group relative border-2 rounded-2xl p-3 sm:p-5 cursor-pointer flex flex-col items-center gap-2 sm:gap-3 transition-all duration-300 hover:shadow-lg ${
                      deliveryType === 'pickup'
                        ? 'border-orange-500 bg-white shadow-md'
                        : 'border-transparent bg-white shadow-sm hover:border-gray-200'
                    }`}
                    onClick={() => setDeliveryType('pickup')}
                  >
                    {deliveryType === 'pickup' && (
                      <div className='absolute top-2 right-2 sm:top-3 sm:right-3 text-orange-500'>
                        <CheckCircle2 className='w-4 h-4 sm:w-5 sm:h-5 fill-orange-100' />
                      </div>
                    )}
                    <div
                      className={`p-2 sm:p-3 rounded-full ${
                        deliveryType === 'pickup'
                          ? 'bg-orange-50 text-orange-600'
                          : 'bg-gray-50 text-gray-400'
                      }`}
                    >
                      <MapPin className='w-6 h-6 sm:w-8 sm:h-8' />
                    </div>
                    <div className='text-center'>
                      <span
                        className={`block font-bold text-sm sm:text-lg ${
                          deliveryType === 'pickup'
                            ? 'text-gray-900'
                            : 'text-gray-500'
                        }`}
                      >
                        Olib ketish
                      </span>
                      <span className='text-[10px] sm:text-xs text-gray-400'>Bepul</span>
                    </div>
                  </div>
                </div>

                <div className='mt-4 p-1 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden relative'>
                  {deliveryType === 'delivery' ? (
                    <div className='flex items-center gap-3 sm:gap-4 p-3 sm:p-4'>
                      <div className='bg-blue-50 p-2 sm:p-3 rounded-full text-blue-600 shrink-0'>
                        <MapPin className='w-5 h-5 sm:w-6 sm:h-6' />
                      </div>
                      <div>
                        <p className='text-[10px] uppercase font-bold text-gray-400 mb-0.5'>
                          Sizning manzilingiz (Avtomatik):
                        </p>
                        <p className='font-bold text-gray-800 text-xs sm:text-base leading-tight'>
                          Toshkent sh, Yunusobod tumani, 12-mavze
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className='relative w-full h-28 sm:h-36 bg-gray-200'>
                      <div
                        className='absolute inset-0 opacity-50'
                        style={{
                          backgroundImage:
                            'radial-gradient(#cbd5e1 1px, transparent 1px)',
                          backgroundSize: '10px 10px',
                        }}
                      ></div>
                      <div className='absolute inset-0 flex items-center justify-center flex-col z-10'>
                        <MapPin className='w-6 h-6 sm:w-8 sm:h-8 text-red-500 mb-1 drop-shadow-md animate-bounce' />
                        <span className='bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-sm'>
                          Tech House Main
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* To'lov usuli */}
              <div className='space-y-4'>
                <h3 className='text-sm sm:text-base font-bold text-gray-700 uppercase tracking-wide'>
                  To'lov usuli
                </h3>
                <RadioGroup
                  value={paymentType}
                  onValueChange={setPaymentType}
                  className='grid grid-cols-1 gap-3'
                >
                  <div
                    onClick={() => setPaymentType('card')}
                    className={`flex items-center space-x-3 border-2 p-3 sm:p-4 rounded-2xl cursor-pointer transition-all ${
                      paymentType === 'card'
                        ? 'border-orange-500 bg-white shadow-md'
                        : 'border-transparent bg-white shadow-sm hover:border-gray-200'
                    }`}
                  >
                    <RadioGroupItem
                      value='card'
                      id='card'
                      className='text-orange-500 border-gray-300'
                    />
                    <Label
                      htmlFor='card'
                      className='flex items-center gap-3 cursor-pointer flex-1 font-semibold text-gray-700 text-sm sm:text-base'
                    >
                      <div className='bg-blue-50 p-2 rounded-lg text-blue-600'>
                        <CreditCard className='w-4 h-4 sm:w-5 sm:h-5' />
                      </div>
                      Karta orqali (Uzcard/Humo)
                    </Label>
                  </div>

                  <div
                    onClick={() => setPaymentType('cash')}
                    className={`flex items-center space-x-3 border-2 p-3 sm:p-4 rounded-2xl cursor-pointer transition-all ${
                      paymentType === 'cash'
                        ? 'border-orange-500 bg-white shadow-md'
                        : 'border-transparent bg-white shadow-sm hover:border-gray-200'
                    }`}
                  >
                    <RadioGroupItem
                      value='cash'
                      id='cash'
                      className='text-orange-500 border-gray-300'
                    />
                    <Label
                      htmlFor='cash'
                      className='flex items-center gap-3 cursor-pointer flex-1 font-semibold text-gray-700 text-sm sm:text-base'
                    >
                      <div className='bg-green-50 p-2 rounded-lg text-green-600'>
                        <Banknote className='w-4 h-4 sm:w-5 sm:h-5' />
                      </div>
                      Naqd pul orqali
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          ) : (
            <div className='space-y-6 sm:space-y-8 animate-in slide-in-from-right-4 fade-in duration-300 h-full flex flex-col'>
              {/* --- FIX BO'LGAN CHEK QISMI --- */}
              <div className='bg-white p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4 sm:space-y-6 relative overflow-hidden'>
                <div className='absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-50 rounded-bl-[3rem] sm:rounded-bl-[4rem] -z-0'></div>

                <div className='relative z-10'>
                  <h3 className='font-bold text-gray-500 text-[10px] sm:text-xs uppercase tracking-widest mb-2 sm:mb-4'>
                    Buyurtma cheki
                  </h3>

                  <div className='space-y-3 sm:space-y-4 text-sm sm:text-base'>
                    <div className='flex justify-between items-center py-2 sm:py-3 border-b border-dashed border-gray-200'>
                      <span className='text-gray-500 font-medium'>
                        Mahsulotlar
                      </span>
                      <span className='font-bold text-gray-900 bg-gray-100 px-2 py-1 rounded-lg text-xs sm:text-base'>
                        {totalCartCount} dona
                      </span>
                    </div>

                    <div className='flex justify-between items-start py-2 sm:py-3 border-b border-dashed border-gray-200'>
                      <span className='text-gray-500 font-medium'>
                        Yetkazib berish
                      </span>
                      <div className='text-right'>
                        <span className='block font-bold text-gray-900'>
                          {deliveryType === 'delivery'
                            ? "20 000 so'm"
                            : "0 so'm"}
                        </span>
                        <span className='text-[10px] sm:text-xs text-gray-400'>
                          {deliveryType === 'delivery'
                            ? 'Kuryer'
                            : 'Olib ketish'}
                        </span>
                      </div>
                    </div>

                    <div className='flex justify-between items-start py-2 sm:py-3 border-b border-dashed border-gray-200'>
                      <span className='text-gray-500 font-medium shrink-0 mr-4'>Manzil</span>
                      <span className='font-bold text-gray-900 text-right leading-tight break-words max-w-[200px] sm:max-w-none'>
                        {deliveryType === 'delivery'
                          ? 'Toshkent sh, Yunusobod tumani'
                          : 'Tech House Main'}
                      </span>
                    </div>

                    <div className='flex justify-between items-center py-2 sm:py-3'>
                      <span className='text-gray-500 font-medium'>
                        To'lov turi
                      </span>
                      <span className='font-bold text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap'>
                        {paymentType === 'card' ? 'Karta orqali' : 'Naqd pul'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-yellow-50 border border-yellow-200 rounded-xl p-3 sm:p-4 flex gap-3 items-start'>
                <div className='bg-yellow-100 p-1.5 rounded-full text-yellow-600 mt-0.5 shrink-0'>
                  <ArrowRight className='w-3 h-3 sm:w-4 sm:h-4' />
                </div>
                <p className='text-xs sm:text-sm text-yellow-800 leading-snug'>
                  Tasdiqlash tugmasini bosish orqali buyurtmangiz operatorlarga
                  yuboriladi va tez orada siz bilan bog'lanamiz.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* --- FOOTER BUTTONS --- */}
        <div className='bg-white p-4 sm:p-6 border-t border-gray-100 flex gap-3 sm:gap-4'>
          {step === 2 && (
            <Button
              variant='outline'
              onClick={() => setStep(1)}
              className='h-12 sm:h-14 px-4 sm:px-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-600 font-bold shrink-0'
            >
              <ChevronLeft className='w-5 h-5 mr-1 hidden sm:inline' /> 
              <ChevronLeft className='w-5 h-5 sm:hidden' /> 
              <span className="hidden sm:inline">Orqaga</span>
            </Button>
          )}

          <Button
            onClick={step === 1 ? () => setStep(2) : handleOrder}
            className='flex-1 bg-orange-500 hover:bg-orange-600 h-12 sm:h-14 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-orange-200 transition-all active:scale-95'
          >
            {step === 1 ? 'Davom etish' : 'Buyurtmani Tasdiqlash'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CheckoutModal