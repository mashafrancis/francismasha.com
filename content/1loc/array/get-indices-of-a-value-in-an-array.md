---
layout: layouts/post.njk
title: Get indices of a value in an array
category: Array
---

**JavaScript version**

```js
const indices = (arr, value) =>
	arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), []);

// Or
const indices = (arr, value) =>
	arr.map((v, i) => (v === value ? i : false)).filter(Boolean);
```

**TypeScript version**

```js
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.reduce((acc, v, i) => (v === value ? [...acc, i] : acc), [] as number[])
);

// Or
const indices = <T,>(arr: T[], value: T): number[] => (
    arr.map((v, i) => (v === value ? i : false)).filter(Boolean) as number[]
);
```

**Examples**

```js
indices(['h', 'e', 'l', 'l', 'o'], 'l'); // [2, 3]
indices(['h', 'e', 'l', 'l', 'o'], 'w'); // []
```
