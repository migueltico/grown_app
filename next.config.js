/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},		
	//add meta with viewport
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'viewport',
						value: 'width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0',
					},
				],
			},
		]
	}
	
}

module.exports = nextConfig
