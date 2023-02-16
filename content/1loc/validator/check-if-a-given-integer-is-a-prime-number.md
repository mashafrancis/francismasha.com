---
layout: layouts/post.njk
title: Check if a given integer is a prime number
category: Validator
---

**JavaScript version**

```js
const isPrime = (n) =>
	n > 1 &&
	Array(Math.floor(Math.sqrt(n)) - 1)
		.fill(0)
		.map((_, i) => i + 2)
		.every((i) => n % i !== 0);
```

**TypeScript version**

```js
const isPrime = (n: number): boolean =>
	n > 1 &&
	Array(Math.floor(Math.sqrt(n)) - 1)
		.fill(0)
		.map((_, i) => i + 2)
		.every((i) => n % i !== 0);
```
