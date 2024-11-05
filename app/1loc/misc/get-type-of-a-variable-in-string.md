---
layout: layouts/post.njk
title: Get type of a variable in string
category: Misc
---

**JavaScript version**

```js
const getTypeOf = (obj) =>
	Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1];
```

**TypeScript version**

```js
const getTypeOf = (obj: any): string => (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1];
```

**Examples**

```js
getTypeOf('hello world'); // String
getTypeOf(1000); // Number
getTypeOf(Infinity); // Number
getTypeOf(true); // Boolean
getTypeOf(Symbol()); // Symbol
getTypeOf(null); // Null
getTypeOf(undefined); // Undefined
getTypeOf({}); // Object
getTypeOf([]); // Array
getTypeOf(/[a-z]/g); // RegExp
getTypeOf(new Date(2021)); // Date
getTypeOf(new Error()); // Error
getTypeOf(function () {}); // Function
getTypeOf((a, b) => a + b); // Function
getTypeOf(async () => {}); // AsyncFunction
getTypeOf(document); // HTMLDocument
```
