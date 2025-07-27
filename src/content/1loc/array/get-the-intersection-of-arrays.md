---
layout: layouts/post.njk
title: Get the intersection of arrays
category: Array
---

**JavaScript version**

```js
const getIntersection = (a, ...arr) =>
	[...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

**TypeScript version**

```js
const getIntersection = <T,_>(a: T[], ...arr: T[][]): T[] => [...new Set(a)].filter((v) => arr.every((b) => b.includes(v)));
```

**Examples**

```js
getIntersection([1, 2, 3], [2, 3, 4, 5]); // [2, 3]
getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]); // [3]
```
