---
layout: layouts/post.njk
title: Clone an array
category: Array
---

**JavaScript version**

```js
// `arr` is an array
const clone = (arr) => arr.slice(0);

// Or
const clone = (arr) => [...arr];

// Or
const clone = (arr) => Array.from(arr);

// Or
const clone = (arr) => arr.map((x) => x);

// Or
const clone = (arr) => JSON.parse(JSON.stringify(arr));

// Or
const clone = (arr) => arr.concat([]);

// Or
const clone = (arr) => structuredClone(arr);
```

**TypeScript version**

```js
// `arr` is an array
const clone = <T,_>(arr: T[]): T[] => arr.slice(0);

// Or
const clone = <T,_>(arr: T[]): T[] => [...arr];

// Or
const clone = <T,_>(arr: T[]): T[] => Array.from(arr);

// Or
const clone = <T,_>(arr: T[]): T[] => arr.map((x) => x);

// Or
const clone = <T,_>(arr: T[]): T[] => JSON.parse(JSON.stringify(arr));

// Or
const clone = <T,_>(arr: T[]): T[] => arr.concat([]);

// Or
const clone = <T,_>(arr: T[]): T[] => structuredClone(arr);
```
