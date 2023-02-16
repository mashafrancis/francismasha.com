---
layout: layouts/post.njk
title: Zip multiple arrays
category: Array
---

**JavaScript version**

```js
const zip = (...arr) =>
	Array.from({ length: Math.max(...arr.map((a) => a.length)) }, (_, i) =>
		arr.map((a) => a[i]),
	);
```

**Example**

```js
zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]); // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]

/*
Does it look like a zipper?
        a 1
        b 2
       c   3
      d     4
     e       5
*/
```
