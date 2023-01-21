import { slug } from 'github-slugger';
import { toString } from 'mdast-util-to-string';
//@ts-nocheck
import { Parent } from 'unist';
import { visit } from 'unist-util-visit';

export default function remarkTocHeadings(options) {
	return (tree: Parent) =>
		visit(tree, 'heading', (node) => {
			const textContent = toString(node);
			options.exportRef.push({
				heading: textContent,
				url: '#' + slug(textContent),
				// @ts-expect-error
				level: node.depth,
			});
		});
}
