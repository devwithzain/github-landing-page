/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "github.githubassets.com" }],
	},
};

module.exports = nextConfig;
