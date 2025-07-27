---
layout: layouts/post.njk
title: Check if a value is a string
category: Validator
---

**JavaScript version**

```js
const isString = (value) =>
	Object.prototype.toString.call(value) === '[object String]';
```

**TypeScript version**

```js
const isString = (value: any): boolean =>
	Object.prototype.toString.call(value) === '[object String]';
```

**Examples**

```js
isString('hello world'); // true
isString(new String('hello world')); // true
isString(10); // false
```
