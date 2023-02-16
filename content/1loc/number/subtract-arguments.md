---
layout: layouts/post.njk
title: Subtract arguments
category: Number
---

**JavaScript version**

```js
const subtract = (...args) => args.reduce((a, b) => a - b);
```

**TypeScript version**

```js
const subtract = (...args: number[]): number => args.reduce((a, b) => a - b);
```

**Examples**

```js
subtract(1, 2, 3, 4); // -8
```
