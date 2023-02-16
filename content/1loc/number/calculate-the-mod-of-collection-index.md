---
layout: layouts/post.njk
title: Calculate the mod of collection index
category: Number
---

**JavaScript version**

```js
const mod = (a, b) => ((a % b) + b) % b;
```

**TypeScript version**

```js
const mod = (a: number, b: number): number => ((a % b) + b) % b;
```

**Examples**

```js
mod(-1, 5); // 4
mod(3, 5); // 3
mod(6, 5); // 1
```
