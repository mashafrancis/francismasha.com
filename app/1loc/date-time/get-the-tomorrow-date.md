---
layout: layouts/post.njk
title: Get the tomorrow date
category: Date Time
---

**JavaScript version**

```js
const tomorrow = ((d) => new Date(d.setDate(d.getDate() + 1)))(new Date());

// Or
const tomorrow = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
```

**TypeScript version**

```js
const tomorrow: Date = ((d) => new Date(d.setDate(d.getDate() + 1)))(
	new Date(),
);

// Or
const tomorrow: Date = new Date(new Date().valueOf() + 1000 * 60 * 60 * 24);
```

**See also**

- [Determine one year from now](/date-time/determine-one-year-from-now)
- [Get the yesterday date](/date-time/get-the-yesterday-date)
