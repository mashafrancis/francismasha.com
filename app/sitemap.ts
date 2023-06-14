import { allBlogs } from 'contentlayer/generated';

export default async function sitemap() {
	const blogs = allBlogs.map((post) => ({
		url: `https://francismasha.com/blog/${post.slug}`,
		lastModified: post.date,
	}));

	const routes = ['', '/about', '/blog', '/guestbook', '/uses'].map(
		(route) => ({
			url: `https://francismasha.com${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		}),
	);

	return [...routes, ...blogs];
}
