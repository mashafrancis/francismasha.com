---
layout: layouts/post.njk
title: Intersperse element between elements
category: Array
---

**JavaScript version**

```js
const intersperse = (a, s) =>
	[...Array(2 * a.length - 1)].map((_, i) => (i % 2 ? s : a[i / 2]));
```

**TypeScript version**

```ts
const intersperse = <T>(a: T[], s: T): T[] =>
	[...Array(2 * a.length - 1)].map((_, i) => (i % 2 ? s : a[i / 2]));
```

**Examples**

```tsx
intersperse(['A', 'B', 'C'], '/'); // ['A', '/', 'B', '/', 'C']
intersperse([<li>A</li>, <li>B</li>, <li>C</li>], <li>/</li>); // [<li>A</li>, <li>/</li>, <li>B</li>, <li>/</li>, <li>C</li>]
```
