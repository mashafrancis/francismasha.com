---
layout: layouts/post.njk
title: Check if all items in an array are equal
category: Validator
---

**JavaScript version**

```js
const areEqual = (arr) =>
	arr.length > 0 && arr.every((item) => item === arr[0]);

// Or
const areEqual = (arr) => new Set(arr).size === 1;
```

**TypeScript version**

```js
const areEqual = <T,_>(arr: T[]): boolean => arr.length > 0 && arr.every((item) => item === arr[0]);

// Or
const areEqual = <T,_>(arr: T[]): boolean => new Set(arr).size === 1;
```

**Examples**

```js
areEqual([1, 2, 3, 4]); // false
areEqual(['hello', 'hello', 'hello']); // true
```
