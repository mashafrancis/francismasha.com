---
layout: layouts/post.njk
title: Invert keys and values of an object
category: Object
---

**JavaScript version**

```js
const invert = (obj) =>
	Object.keys(obj).reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});

// Or
const invert = (obj) =>
	Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
```

**Examples**

```js
invert({ a: '1', b: '2', c: '3' }); // { 1: 'a', 2: 'b', 3: 'c' }
```
