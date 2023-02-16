---
layout: layouts/post.njk
title: Repeat an array
category: Array
---

**JavaScript version**

```js
// `arr` is an array
const repeat = (arr, n) => [].concat(...Array(n).fill(arr));

// Or
const repeat = (arr, n) => Array(n).fill(arr).flat();

// Or
const repeat = (arr, n) =>
	Array(arr.length * n)
		.fill(0)
		.map((_, i) => arr[i % arr.length]);

// Or
const repeat = (arr, n) =>
	Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

**TypeScript version**

```js
const repeat = <T,_>(arr: T[], n: number): T[] => [].concat(...Array(n).fill(arr));

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array(n).fill(arr).flat();

// Or
const repeat = <T,_>(arr: T[], n: number): T[] =>
    Array(arr.length * n)
        .fill(0)
        .map((_, i) => arr[i % arr.length]);

// Or
const repeat = <T,_>(arr: T[], n: number): T[] => Array.from({ length: arr.length * n }, (_, i) => arr[i % arr.length]);
```

**Example**

```js
repeat([1, 2, 3], 3); // [1, 2, 3, 1, 2, 3, 1, 2, 3]
```
