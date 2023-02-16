---
layout: layouts/post.njk
title: Get the length of a string in bytes
category: String
---

**JavaScript version**

```js
const bytes = (str) => new Blob([str]).size;
```

**TypeScript version**

```js
const bytes = (str: string): number => new Blob([str]).size;
```

**Examples**

```js
bytes('hello world'); // 11
bytes('🎉'); // 4
```
