/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "cdn.jsdelivr.net" },
			{ hostname: "img.icons8.com" },
			{ hostname: "github.com" },
			{ hostname: "media.graphassets.com" },
			{hostname: "sa-east-1.graphassets.com"}
		],
	},
};

export default nextConfig;