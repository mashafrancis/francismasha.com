---
layout: layouts/post.njk
title: Compare two arrays
category: Array
---

**JavaScript version**

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) =>
	a.length === b.length && a.every((v, i) => v === b[i]);
```

**TypeScript version**

```js
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = <T,_>(a: T[], b: T[]): boolean => a.length === b.length && a.every((v, i) => v === b[i]);
```

**Examples**

```js
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```
