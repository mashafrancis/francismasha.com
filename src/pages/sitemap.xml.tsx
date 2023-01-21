import { client as SanityClient } from '@/lib/sanity.client';
import { postSlugsQuery } from '@/lib/sanity.queries';

import siteMetadata from '../../data/siteMetadata';

const createSitemap = (slugs: any[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
	.map((slug) => {
		return `
                <url>
                    <loc>${siteMetadata.siteUrl}${slug}</loc>
                    <changefreq>hourly</changefreq>
                </url>
            `;
	})
	.join('')}
    </urlset>
`;

export async function getServerSideProps({ res }) {
	const allPosts = await SanityClient?.fetch(postSlugsQuery);
	const allPages = [
		...allPosts.map((slug: any) => `article/${slug}`),
		...['', 'about', 'article', 'newsletter'],
	];

	res.setHeader('Content-Type', 'text/xml');
	res.setHeader(
		'Cache-Control',
		'public, s-maxage=1200, stale-while-revalidate=600',
	);
	res.write(createSitemap(allPages));
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {
	return null;
}
