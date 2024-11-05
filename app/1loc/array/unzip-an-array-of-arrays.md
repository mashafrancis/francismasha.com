---
layout: layouts/post.njk
title: Unzip an array of arrays
category: Array
---

**JavaScript version**

```js
const unzip = (arr) =>
	arr.reduce(
		(acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc),
		Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_) => []),
	);
```

**Example**

```js
unzip([
	['a', 1],
	['b', 2],
	['c', 3],
	['d', 4],
	['e', 5],
]); // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]

/*
    a     1
     b   2
      c 3
      d 4
      e 5
*/
```
