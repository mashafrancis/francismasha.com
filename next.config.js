const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	runtimeCaching,
}); 

// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app www.googletagmanager.com www.google-analytics.com vitals.vercel-insights.com serve-cdn-assets.almond-froyo.workers.dev;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
  frame-src giscus.app www.youtube.com calendly.com drawsql.app
`;

const securityHeaders = [
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
	{
		key: 'Content-Security-Policy',
		value: ContentSecurityPolicy.replace(/\n/g, ''),
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
	{
		key: 'Referrer-Policy',
		value: 'strict-origin-when-cross-origin',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains',
	},
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
];

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withBundleAnalyzer(
	withPWA({
		output: 'standalone',
		swcMinify: true,
		reactStrictMode: true,
		pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
		// eslint: {
		// 	dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
		// },
		eslint: {
			ignoreDuringBuilds: true,
		},
		images: {
			domains: ['firebasestorage.googleapis.com', 'res.cloudinary.com'],
		},
		async headers() {
			return [
				{
					source: '/(.*)',
					headers: securityHeaders,
				},
			];
		},
		webpack: (config) => {
			config.module.rules.push({
				test: /\.(png|jpe?g|gif|mp4)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '/_next',
							name: 'static/media/[name].[hash].[ext]',
						},
					},
				],
			});

			config.module.rules.push({
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			});

			return config;
		},
	})
);
