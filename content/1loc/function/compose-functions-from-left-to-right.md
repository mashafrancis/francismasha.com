---
layout: layouts/post.njk
title: Compose functions from left to right
category: Function
---

**JavaScript version**

```js
// Compose functions from left to right
const pipe =
	(...fns) =>
	(x) =>
		fns.reduce((y, f) => f(y), x);
```

**Examples**

```js
const lowercase = (str) => str.toLowerCase();
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
const reverse = (str) => str.split('').reverse().join('');

const fn = pipe(lowercase, capitalize, reverse);

// We will execute `lowercase`, `capitalize` and `reverse` in order
fn('Hello World') === 'dlrow olleH';
```
