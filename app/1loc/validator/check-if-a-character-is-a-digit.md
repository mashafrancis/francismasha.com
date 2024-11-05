---
layout: layouts/post.njk
title: Check if a character is a digit
category: Validator
---

**JavaScript version**

```js
const isDigit = (char) => char < 10;

// Or
const isDigit = (char) => char.length === 1 && c >= '0' && c <= '9';

// Or
const isDigit = (char) =>
	Boolean([true, true, true, true, true, true, true, true, true, true][char]);
```

**TypeScript version**

```js
const isDigit = (char: string): boolean => char < 10;

// Or
const isDigit = (char: string): boolean =>
	char.length === 1 && c >= '0' && c <= '9';

// Or
const isDigit = (char: string): boolean =>
	Boolean([true, true, true, true, true, true, true, true, true, true][char]);
```

**Examples**

```js
isDigit('a'); // false
isDigit('abc'); // false
isDigit(10); // false
isDigit('10'); // false

isDigit('2'); // true
isDigit(2); // true
```
