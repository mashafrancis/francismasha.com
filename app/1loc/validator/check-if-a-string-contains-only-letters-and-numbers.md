---
layout: layouts/post.njk
title: Check if a string contains only letters and numbers
category: Validator
---

**JavaScript version**

```js
const isAlphanumeric = (str) => /^[0-9A-Z]+$/i.test(str);
```

**TypeScript version**

```js
const isAlphanumeric = (str: string): boolean => /^[0-9A-Z]+$/i.test(str);
```

**Examples**

```js
isAlphanumeric('helloworld'); // true
isAlphanumeric('HelloWorld'); // true
isAlphanumeric('hello world'); // false
isAlphanumeric('hello123'); // true
isAlphanumeric('hello 123'); // false
```
