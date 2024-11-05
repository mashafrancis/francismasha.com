---
layout: layouts/post.njk
title: Count the occurrences of array elements
category: Array
---

**JavaScript version**

```js
const countOccurrences = (arr) =>
	arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
```

**TypeScript version**

```js
const countOccurrences = <T extends string | number,>(arr: T[]): Record<T, number> => (
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {}as Record<T, number>)
);
```

**Examples**

```js
countOccurrences([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']); // { 'a': 3, 'b': 2, 'c': 1 }
```
