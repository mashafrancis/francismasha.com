---
layout: layouts/post.njk
title: Generate an array of random integers in a given range
category: Random
---

**JavaScript version**

```js
const randomArrayInRange = (min, max, n) =>
	Array.from(
		{ length: n },
		() => Math.floor(Math.random() * (max - min + 1)) + min,
	);
```

**TypeScript version**

```js
const randomArrayInRange = (min: number, max: number, n: number): number[] =>
	Array.from(
		{ length: n },
		() => Math.floor(Math.random() * (max - min + 1)) + min,
	);
```

**Examples**

```js
randomArrayInRange(1, 100, 10); // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
```
