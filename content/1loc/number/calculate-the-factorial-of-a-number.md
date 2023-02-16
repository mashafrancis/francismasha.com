---
layout: layouts/post.njk
title: Calculate the factorial of a number
category: Number
---

**JavaScript version**

```js
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
```

**TypeScript version**

```js
const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
```

**Examples**

```js
factorial(2); // 2
factorial(3); // 6
factorial(4); // 24
factorial(5); // 120
factorial(6); // 720
```
