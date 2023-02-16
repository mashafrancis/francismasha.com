---
layout: layouts/post.njk
title: Immutably rename object keys
category: Object
---

**JavaScript version**

```js
const renameKeys = (keysMap, obj) =>
	Object.keys(obj).reduce(
		(acc, key) => ({ ...acc, ...{ [keysMap[key] || key]: obj[key] } }),
		{},
	);
```

**Examples**

```js
const obj = { a: 1, b: 2, c: 3 };
const keysMap = { a: 'd', b: 'e', c: 'f' };
renameKeys(keysMap, obj); // { d: 1, e: 2, f: 3 }
```
