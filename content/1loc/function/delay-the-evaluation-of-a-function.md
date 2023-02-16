---
layout: layouts/post.njk
title: Delay the evaluation of a function
category: Function
---

**JavaScript version**

```js
// returns a new version of `fn` that returns values as lazy evaluable
const thunkfy =
	(fn) =>
	(...args) =>
	() =>
		fn(...args);
```

**Examples**

```js
const heavyComputation = (x) => doStuff(x);
const unnecessarySlow = manyThings
	.map(heavyComputation)
	.find((result) => result.criteria);
const probablyFaster = manyThings
	.map(thunkfy(heavyComputation))
	.find((thunk) => thunk().criteria);
```
