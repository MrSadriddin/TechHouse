/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'loremflickr.com', // <--- Yangi rasm manbasi
			},
			{
				protocol: 'https',
				hostname: 'images.uzum.uz', // <--- Yangi rasm manbasi
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'mini-io-api.texnomart.uz',
			}
		],
	},
}

export default nextConfig
