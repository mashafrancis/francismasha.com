---
layout: layouts/post.njk
title: Create an object from the pairs of key and value
category: Object
---

**JavaScript version**

```js
const toObj = (arr) => Object.fromEntries(arr);

// Or
const toObj = (arr) => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});
```

**Examples**

```js
toObj([
	['a', 1],
	['b', 2],
	['c', 3],
]); // { a: 1, b: 2, c: 3 }
```
