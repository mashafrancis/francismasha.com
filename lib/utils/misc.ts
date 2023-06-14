const removeDuplicate = <T, _>(arr: T[]): T[] =>
	arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

const slugify = (str) =>
	str
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, '')
		.replace(/[\s_-]+/g, '-')
		.replace(/^-+|-+$/g, '');

const fancyId = (): string => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substr(2, 9);
	return `_${head}${tail}`;
};

export { removeDuplicate, slugify, fancyId };
