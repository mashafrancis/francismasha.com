---
layout: layouts/post.njk
title: Convert rgb color to hex
category: Misc
---

**JavaScript version**

```js
const rgbToHex = (red, green, blue) =>
	`#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red, green, blue) =>
	`#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

**TypeScript version**

```js
const rgbToHex = (red: number, green: number, blue: number): string =>
	`#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;

// Or
const rgbToHex = (red: number, green: number, blue: number): string =>
	`#${[red, green, blue].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
```

**Examples**

```js
rgbToHex(0, 255, 255); // '#00ffff'
```
