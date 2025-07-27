---
layout: layouts/post.njk
title: Check if a string is a hexadecimal number
category: Validator
---

**JavaScript version**

```js
const isHexadecimal = (str) => /^[A-F0-9]+$/i.test(str);

// Or
const isHexadecimal = (str) =>
	str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

**TypeScript version**

```js
const isHexadecimal = (str: string): boolean => /^[A-F0-9]+$/i.test(str);

// Or
const isHexadecimal = (str: string): boolean =>
	str.split('').every((c) => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```

**Examples**

```js
isHexadecimal('123'); // true
isHexadecimal('A1B2C3'); // true
isHexadecimal('#123'); // false
```
