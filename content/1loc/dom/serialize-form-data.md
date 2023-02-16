---
layout: layouts/post.njk
title: Serialize form data
category: DOM
---

**JavaScript version**

```js
const serialize = (formEle) =>
	Array.from(new FormData(formEle)).reduce(
		(p, [k, v]) =>
			Object.assign({}, p, {
				[k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v,
			}),
		{},
	);
```
