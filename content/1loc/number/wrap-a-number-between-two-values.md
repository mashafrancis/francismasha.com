---
layout: layouts/post.njk
title: Wrap a number between two values
category: Number
---

**JavaScript version**

```js
const wrap = (num, min, max) =>
	((((num - min) % (max - min)) + (max - min)) % (max - min)) + min;
```

**TypeScript version**

```ts
const wrap = (num: number, min: number, max: number): number =>
	((((num - min) % (max - min)) + (max - min)) % (max - min)) + min;
```

**Examples**

```js
wrap(11, 10, 25); // 11
wrap(10, 10, 25); // 10
wrap(9, 10, 25); // 25
wrap(24, 10, 25); // 24
wrap(25, 10, 25); // 25
wrap(26, 10, 25); // 10
```

**See also**

- [Clamp a number between two values](/number/clamp-a-number-between-two-values)
