// src/app/products/page.js
import React, { Suspense } from 'react'
import HomeClient from '@/components/home/HomeClient'

import Loading from '@/components/common/Loading'

export default function ProductsPage() {
	return (
		<Suspense fallback={<Loading />}>
			<HomeClient limit={false} />
		</Suspense>
	)
}
