import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import remarkCollapse from 'remark-collapse';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc) => doc._raw.flattenedPath,
	},
};

export const Blog = defineDocumentType(() => ({
	name: 'Blog',
	filePathPattern: `blog/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'string',
			required: true,
		},
		summary: {
			type: 'string',
			required: true,
		},
		image: {
			type: 'string',
		},
		draft: {
			type: 'boolean',
		},
		tags: {
			type: 'list',
			of: { type: 'string' },
		},
	},
	computedFields,
}));

export const Me = defineDocumentType(() => ({
	name: 'Me',
	filePathPattern: `me/me.md`,
	contentType: 'mdx',
	fields: {
		name: {
			type: 'string',
			required: true,
		},
		shortname: {
			type: 'string',
			required: true,
		},
		avatar: {
			type: 'string',
			required: true,
		},
		occupation: {
			type: 'string',
			required: true,
		},
		company: {
			type: 'string',
			required: true,
		},
		resume: {
			type: 'string',
			required: true,
		},
		email: {
			type: 'string',
			required: true,
		},
		twitter: {
			type: 'string',
			required: true,
		},
		linkedin: {
			type: 'string',
			required: true,
		},
		github: {
			type: 'string',
			required: true,
		},
	},
}));

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Blog, Me],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			[
				rehypePrettyCode,
				{
					theme: 'one-dark-pro',
					wrap: true,
					onVisitLine(node) {
						// Prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: 'text', value: ' ' }];
						}
					},
					onVisitHighlightedLine(node) {
						node.properties.className.push('line--highlighted');
					},
					onVisitHighlightedWord(node) {
						node.properties.className = ['word--highlighted'];
					},
				},
			],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['anchor'],
					},
				},
			],
			remarkToc,
			[
				remarkCollapse,
				{
					test: 'Table of contents',
				},
			],
		],
	},
});
