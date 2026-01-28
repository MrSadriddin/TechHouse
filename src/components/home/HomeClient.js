// src/components/home/HomeClient.js
'use client'

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation' // <--- URLni kuzatish uchun eng muhimi
import Navbar from '@/components/home/Navbar'
import SubNavbar from '@/components/home/SubNavbar'
import Products from '@/components/home/Products'
import productsData from '@/datas/Products.json'
import Link from 'next/link'
import Footer from './Footer'
import LoyaltyProgram from './LoyaltyProgram'

export default function HomeClient({ limit = true }) {
	const searchParams = useSearchParams()

	// URL dan parametrlarni o'qish
	const action = searchParams.get('action') // 'catalog' yoki 'search'
	const value = searchParams.get('value') // qiymat

	const [filteredProducts, setFilteredProducts] = useState(productsData)
	const [title, setTitle] = useState('Mashhur Mahsulotlar')

	// Har safar URL o'zgarganda ishlaydi
	useEffect(() => {
		if (action === 'catalog' && value) {
			// 1. KATALOG BO'YICHA FILTR
			if (value === 'Barcha mahsulotlar') {
				setFilteredProducts(productsData)
				setTitle('Barcha mahsulotlar')
			} else {
				const filtered = productsData.filter(p => p.catalog === value)
				setFilteredProducts(filtered)
				setTitle(`${value} bo'limi`)
			}
		} else if (action === 'search' && value) {
			// 2. QIDIRUV BO'YICHA FILTR
			const lowerValue = value.toLowerCase()
			const filtered = productsData.filter(
				p =>
					p.nomi.toLowerCase().includes(lowerValue) ||
					(p.brand && p.brand.toLowerCase().includes(lowerValue)) ||
					(p.category && p.category.toLowerCase().includes(lowerValue))
			)
			setFilteredProducts(filtered)
			setTitle(`"${value}" bo'yicha qidiruv natijalari`)
		} else {
			// 3. ODDIY HOLAT (Bosh sahifa)
			setFilteredProducts(productsData)
			setTitle('Mashhur Mahsulotlar')
		}
	}, [action, value]) // action yoki value o'zgarsa qayta ishlaydi

	// SubNavbar faqat "action" bo'lmaganda VA "limit" true bo'lganda (bosh sahifada) chiqadi
	const showSubNavbar = !action && limit

	// Mahsulotlarni cheklash (faqat bosh sahifada va limit true bo'lganda)
	const displayProducts =
		limit && !action ? filteredProducts.slice(0, 10) : filteredProducts
	const isLimited = limit && !action && filteredProducts.length > 10

	return (
		<main className='min-h-screen bg-white'>
			{/* Navbar har doim turadi */}
			<Navbar />

			{/* SubNavbar faqat kerak bo'lganda chiqadi */}
			{showSubNavbar && <SubNavbar />}

			{/* Sarlavha va Soni */}
			<div className='container mx-auto px-4 mt-8 mb-4'>
				<div className='flex items-center justify-between'>
					<h2 className='text-2xl font-bold text-gray-800'>{title}</h2>
					{action && (
						<span className='text-gray-500 text-sm bg-gray-100 px-3 py-1 rounded-full'>
							{filteredProducts.length} ta mahsulot
						</span>
					)}
				</div>
			</div>

			{/* Mahsulotlar */}
			<Products products={displayProducts} />

			

			{/* Barchasini ko'rish tugmasi */}
			{isLimited && (
				<div className='container mx-auto px-4 pb-12 text-center'>
					<Link
						href='/products'
						className='inline-flex items-center justify-center px-8 py-3 border border-gray-200 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm'
					>
						Barchasini ko'rish
						<svg
							className='w-4 h-4 ml-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M9 5l7 7-7 7'
							/>
						</svg>
					</Link>
				</div>
			)}

			{/* Loyalty Program Section */}
			<LoyaltyProgram />

			{/* Footer */}
			<Footer />
		</main>
	)
}
