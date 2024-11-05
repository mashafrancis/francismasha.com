---
layout: layouts/post.njk
title: Sort an array of numbers
category: Array
---

**JavaScript version**

```js
const sort = (arr) => arr.sort((a, b) => a - b);
```

**TypeScript version**

```js
const sort = (arr: number[]): number[] => arr.sort((a, b) => a - b);
```

**Example**

```js
sort([1, 5, 2, 4, 3]); // [1, 2, 3, 4, 5]
```
