---
layout: layouts/post.njk
title: Swap the rows and columns of a matrix
category: Array
---

**JavaScript version**

```js
const transpose = (matrix) =>
	matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = (matrix) =>
	matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = (matrix) =>
	matrix.reduce(
		(prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])),
		[],
	);
```

**TypeScript version**

```js
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, i) => matrix.map((row) => row[i]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => matrix[0].map((col, c) => matrix.map((row, r) => matrix[r][c]));

// Or
const transpose = <T,>(matrix: T[][]): T[][] => (
    matrix.reduce((prev, next) => next.map((item, i) => (prev[i] || []).concat(next[i])), [] as T[][])
);
```

**Examples**

```js
transpose([
	// [
	[1, 2, 3], //      [1, 4, 7],
	[4, 5, 6], //      [2, 5, 8],
	[7, 8, 9], //      [3, 6, 9],
]); //  ]
```
