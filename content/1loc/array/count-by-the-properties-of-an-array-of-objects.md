---
layout: layouts/post.njk
title: Count by the properties of an array of objects
category: Array
---

**JavaScript version**

```js
const countBy = (arr, prop) =>
	arr.reduce(
		(prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev),
		{},
	);
```

**TypeScript version**

```js
const countBy = <T extends Record<string, string>, K extends keyof T>(arr: T[], prop: K): Record<string, number> => (
    arr.reduce((prev, curr) => ((prev[curr[prop]] = ++prev[curr[prop]] || 1), prev), {} as Record<string, number>)
);
```

**Example**

```js
countBy(
	[
		{ branch: 'audi', model: 'q8', year: '2019' },
		{ branch: 'audi', model: 'rs7', year: '2020' },
		{ branch: 'ford', model: 'mustang', year: '2019' },
		{ branch: 'ford', model: 'explorer', year: '2020' },
		{ branch: 'bmw', model: 'x7', year: '2020' },
	],
	'branch',
);

// { 'audi': 2, 'ford': 2, 'bmw': 1 }
```
