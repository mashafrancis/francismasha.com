---
layout: layouts/post.njk
title: Sort an array of items by given key
category: Array
---

**JavaScript version**

```js
const sortBy = (arr, k) =>
	arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0));
```

**TypeScript version**

```js
const sortBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], k: K): T[] => (
    arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))
);
```

**Example**

```js
const people = [
	{ name: 'Foo', age: 42 },
	{ name: 'Bar', age: 24 },
	{ name: 'Fuzz', age: 36 },
	{ name: 'Baz', age: 32 },
];
sortBy(people, 'age');

//  [
//      { name: 'Bar', age: 24 },
//      { name: 'Baz', age: 32 },
//      { name: 'Fuzz', age: 36 },
//      { name: 'Foo', age: 42 },
//  ]
```
