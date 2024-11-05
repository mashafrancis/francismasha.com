---
layout: layouts/post.njk
title: Curry a function
category: Function
---

**JavaScript version**

```js
const curry = (fn, ...args) =>
	fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
```

**Examples**

```js
const sum = (a, b, c) => a + b + c;
curry(sum)(1)(2)(3); // 6
curry(sum)(1, 2, 3); // 6
curry(sum, 1)(2, 3); // 6
curry(sum, 1)(2)(3); // 6
curry(sum, 1, 2)(3); // 6
curry(sum, 1, 2, 3); // 6
```
