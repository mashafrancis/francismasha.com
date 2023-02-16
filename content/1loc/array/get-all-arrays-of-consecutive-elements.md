---
layout: layouts/post.njk
title: Get all arrays of consecutive elements
category: Array
---

**JavaScript version**

```js
const getConsecutiveArrays = (arr, size) =>
	size > arr.length
		? []
		: arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));
```

**TypeScript version**

```js
const getConsecutiveArrays = <T,_>(arr: T[], size: number): T[][] => (size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i)));
```

**Examples**

```js
getConsecutiveArrays([1, 2, 3, 4, 5], 2); // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3); // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6); // []
```
