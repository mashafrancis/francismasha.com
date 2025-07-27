---
layout: layouts/post.njk
title: Get the number of a character in a string
category: String
---

**JavaScript version**

```js
const characterCount = (str, char) => str.split(char).length - 1;

// Or
const characterCount = (str, char) =>
	str.replace(new RegExp(String.raw`[^${char}]`, 'g'), '').length;
```

**TypeScript version**

```js
const characterCount = (str: string, char: string): number =>
	str.split(char).length - 1;

// Or
const characterCount = (str: string, char: string): number =>
	str.replace(new RegExp(String.raw`[^${char}]`, 'g'), '').length;
```

**Examples**

```js
characterCount('192.168.1.1', '.'); // 3
characterCount('star wars', 's'); // 2
```
