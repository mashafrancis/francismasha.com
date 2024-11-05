---
layout: layouts/post.njk
title: Round a number to the nearest multiple of a given value
category: Math
---

**JavaScript version**

```js
const roundNearest = (value, nearest) => Math.round(value / nearest) * nearest;
```

**TypeScript version**

```js
const roundNearest = (value: number, nearest: number): number =>
	Math.round(value / nearest) * nearest;
```

**Examples**

```js
roundNearest(100, 30); // 90
roundNearest(200, 30); // 210
roundNearest(200, 40); // 200
```
