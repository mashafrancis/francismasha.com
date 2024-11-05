---
layout: layouts/post.njk
title: Truncate a number to a given number of decimal places without rounding
category: Number
---

**JavaScript version**

```js
const toFixed = (n, fixed) =>
	`${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

// Or
const toFixed = (n, fixed) => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

**TypeScript version**

```js
const toFixed = (n: number, fixed: number): number => +(`${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`)) as string[])[0];

// Or
const toFixed = (n: number, fixed: number): number => ~~(Math.pow(10, fixed) * n) / Math.pow(10, fixed);
```

**Examples**

```js
toFixed(25.198726354, 1); // 25.1
toFixed(25.198726354, 2); // 25.19
toFixed(25.198726354, 3); // 25.198
toFixed(25.198726354, 4); // 25.1987
toFixed(25.198726354, 5); // 25.19872
toFixed(25.198726354, 6); // 25.198726
```
