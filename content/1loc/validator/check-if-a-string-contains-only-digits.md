---
layout: layouts/post.njk
title: Check if a string contains only digits
category: Validator
---

**JavaScript version**

```js
const isNumeric = (str) => !/[^0-9]/.test(str);
```

**TypeScript version**

```js
const isNumeric = (str: string): boolean => !/[^0-9]/.test(str);
```

**Examples**

```js
isNumeric(2); // true
isNumeric('23'); // true
isNumeric('00123'); // true

isNumeric('1.23'); // false
isNumeric('-Infinity'); // false
isNumeric('Infinity'); // false
isNumeric('NaN'); // false
```
