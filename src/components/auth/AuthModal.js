// src/components/auth/AuthModal.js
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useAuth } from '@/context/AuthContext'
import {
  Phone,
  Loader2,
  ArrowRight,
  ShieldCheck,
  TimerReset,
} from 'lucide-react'

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const { login } = useAuth()
  const [step, setStep] = useState(1)
  const [phone, setPhone] = useState('+998 ')
  const [code, setCode] = useState('')
  const [timer, setTimer] = useState(120)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let interval
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000)
    }
    return () => clearInterval(interval)
  }, [step, timer])

  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setPhone('+998 ')
      setCode('')
      setError('')
      setLoading(false)
    }
  }, [isOpen])

  const formatTime = seconds => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  const handlePhoneChange = e => {
    let value = e.target.value
    const digits = value.replace(/\D/g, '')

    let coreDigits = digits
    if (!digits.startsWith('998')) {
      coreDigits = '998' + digits
    }

    coreDigits = coreDigits.slice(0, 12)

    let formatted = '+998'
    if (coreDigits.length > 3) formatted += ' ' + coreDigits.slice(3, 5)
    if (coreDigits.length > 5) formatted += ' ' + coreDigits.slice(5, 8)
    if (coreDigits.length > 8) formatted += ' ' + coreDigits.slice(8, 10)
    if (coreDigits.length > 10) formatted += ' ' + coreDigits.slice(10, 12)

    setPhone(formatted)
    setError('')
  }

  const handlePhoneSubmit = e => {
    e.preventDefault()
    const rawPhone = phone.replace(/\s/g, '')
    if (rawPhone.length < 13) {
      setError("Raqamni to'liq kiriting")
      return
    }
    setLoading(true)
    setError('')

    setTimeout(() => {
      setLoading(false)
      setStep(2)
      setTimer(120)
      setCode('')
    }, 1500)
  }

  const handleCodeSubmit = e => {
    if (e) e.preventDefault()

    if (code.length !== 6) return

    if (code === '123456') {
      setLoading(true)
      const rawPhone = phone.replace(/\s/g, '')
      setTimeout(() => {
        login(rawPhone)
        setLoading(false)
        if (onLoginSuccess) onLoginSuccess()
        onClose()
      }, 1000)
    } else {
      setError("Kod noto'g'ri! Qaytadan urinib ko'ring.")
      setCode('')
    }
  }

  useEffect(() => {
    if (code.length === 6) {
      handleCodeSubmit()
    }
  }, [code])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='w-[95vw] sm:w-full sm:max-w-[420px] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl bg-white'>
        <div className='bg-gradient-to-b from-orange-50/50 to-white pt-8 pb-6 flex flex-col items-center justify-center px-6'>
          <div className='relative w-36 h-12 mb-4'>
            <Image
              src='/logo.png'
              alt='Tech House'
              fill
              className='object-contain'
              priority
            />
          </div>
          <DialogHeader>
            <DialogTitle className='text-center text-2xl font-extrabold text-gray-900'>
              {step === 1 ? 'Xush kelibsiz!' : 'Tasdiqlash'}
            </DialogTitle>
          </DialogHeader>
          <p className='text-center text-gray-500 mt-2 text-sm'>
            {step === 1 ? (
              'Davom etish uchun telefon raqamingizni kiriting.'
            ) : (
              <span className='font-medium text-gray-800'>{phone}</span>
            )}
            {step === 2 && ' raqamiga yuborilgan kodni kiriting.'}
          </p>
        </div>

        <div className='px-6 sm:px-8 pb-8'>
          {step === 1 ? (
            <form
              onSubmit={handlePhoneSubmit}
              className='space-y-6 animate-in slide-in-from-left-4 fade-in duration-500'
            >
              <div className='space-y-2'>
                <div className='relative group'>
                  <div className='absolute left-4 top-1/2 -translate-y-1/2 bg-orange-100 p-2 rounded-xl text-orange-500 group-focus-within:bg-orange-500 group-focus-within:text-white transition-all duration-300'>
                    <Phone className='h-5 w-5' />
                  </div>
                  <Input
                    value={phone}
                    onChange={handlePhoneChange}
                    className='pl-16 h-14 text-lg sm:text-xl font-semibold rounded-2xl border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 transition-all'
                    placeholder='+998 00 000 00 00'
                    inputMode='tel'
                    autoFocus
                  />
                </div>
                {error && (
                  <p className='text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded-xl flex items-center justify-center gap-2 animate-in fade-in'>
                    <span>⚠️</span> {error}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                className='w-full bg-orange-500 hover:bg-orange-600 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-orange-500/30 transition-all active:scale-95'
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className='animate-spin w-6 h-6' />
                ) : (
                  <span className='flex items-center gap-2'>
                    Kod olish <ArrowRight className='w-5 h-5' />
                  </span>
                )}
              </Button>

              <div className='flex justify-center items-center gap-2 text-[10px] sm:text-[11px] text-gray-400'>
                <ShieldCheck className='w-4 h-4 text-green-500' />
                <span>Sizning ma'lumotlaringiz xavfsiz himoyalangan.</span>
              </div>
            </form>
          ) : (
            <div className='space-y-6 animate-in slide-in-from-right-4 fade-in duration-500 pt-2'>
              <div className='flex justify-center py-4'>
                <InputOTP
                  maxLength={6}
                  value={code}
                  onChange={value => {
                    setCode(value)
                    setError('')
                  }}
                >
                  <InputOTPGroup className='gap-1 sm:gap-2'>
                    <InputOTPSlot
                      index={0}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                    <InputOTPSlot
                      index={1}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                    <InputOTPSlot
                      index={2}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                  </InputOTPGroup>
                  <InputOTPSeparator className='mx-1 sm:mx-2 text-gray-300'>
                    -
                  </InputOTPSeparator>
                  <InputOTPGroup className='gap-1 sm:gap-2'>
                    <InputOTPSlot
                      index={3}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                    <InputOTPSlot
                      index={4}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                    <InputOTPSlot
                      index={5}
                      className='w-10 h-12 sm:w-12 sm:h-14 text-xl sm:text-2xl font-bold rounded-lg sm:rounded-xl border-gray-200 bg-gray-50 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/20 focus:bg-white transition-all'
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <p className='text-red-500 text-xs text-center font-medium bg-red-50 py-2 rounded-xl animate-in fade-in'>
                  {error}
                </p>
              )}

              <div className='flex flex-col items-center justify-center gap-3 text-sm text-gray-600 bg-gray-50/80 p-4 rounded-2xl border border-gray-100'>
                <div className='flex items-center gap-2'>
                  <TimerReset className='w-4 h-4 text-orange-500' />
                  <span>Kod kelmadimi?</span>
                </div>
                {timer > 0 ? (
                  <span className='font-mono text-lg font-bold text-orange-600'>
                    {formatTime(timer)}
                  </span>
                ) : (
                  <button
                    type='button'
                    onClick={() => setTimer(120)}
                    className='text-blue-600 font-bold hover:underline hover:text-blue-700 transition-colors'
                  >
                    Kodni qayta yuborish
                  </button>
                )}
              </div>

              <Button
                onClick={handleCodeSubmit}
                className='w-full bg-orange-500 hover:bg-orange-600 h-14 text-lg font-bold rounded-2xl shadow-lg shadow-orange-500/30 transition-all active:scale-95 disabled:opacity-70'
                disabled={loading || code.length < 6}
              >
                {loading ? (
                  <Loader2 className='animate-spin w-6 h-6' />
                ) : (
                  'Tasdiqlash'
                )}
              </Button>

              <Button
                type='button'
                variant='ghost'
                onClick={() => setStep(1)}
                className='w-full h-12 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-2xl font-medium'
              >
                Raqamni o'zgartirish
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal