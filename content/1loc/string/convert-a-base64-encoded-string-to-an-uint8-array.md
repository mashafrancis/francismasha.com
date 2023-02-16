---
layout: layouts/post.njk
title: Convert a base64 encoded string to an uint8 array
category: String
---

**JavaScript version**

```js
const base64ToUint8 = (str) =>
	Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

**TypeScript version**

```js
const base64ToUint8 = (str: string): Uint8Array =>
	Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
```

**See also**

- [Convert an uint8 array to a base64 encoded string](/string/convert-an-uint8-array-to-a-base64-encoded-string)
