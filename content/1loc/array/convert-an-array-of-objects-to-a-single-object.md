---
layout: layouts/post.njk
title: Convert an array of objects to a single object
category: Array
---

**JavaScript version**

```js
const toObject = (arr, key) =>
	arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// Or
const toObject = (arr, key) =>
	Object.fromEntries(arr.map((it) => [it[key], it]));
```

**TypeScript version**

```js
const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})
);

const toObject = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): Record<string, T> => (
    Object.fromEntries(arr.map((it) => [it[key], it]))
);
```

**Example**

```js
toObject(
	[
		{ id: '1', name: 'Alpha', gender: 'Male' },
		{ id: '2', name: 'Bravo', gender: 'Male' },
		{ id: '3', name: 'Charlie', gender: 'Female' },
	],
	'id',
);
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```
