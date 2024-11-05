---
layout: layouts/post.njk
title: Sort an object by its properties
category: Object
---

**JavaScript version**

```js
const sort = (obj) =>
	Object.keys(obj)
		.sort()
		.reduce((p, c) => ((p[c] = obj[c]), p), {});
```

**Examples**

```js
const colors = {
	white: '#ffffff',
	black: '#000000',
	red: '#ff0000',
	green: '#008000',
	blue: '#0000ff',
};
sort(colors);
/*
{
    black: '#000000',
    blue: '#0000ff',
    green: '#008000',
    red: '#ff0000',
    white: '#ffffff',
}
*/
```
