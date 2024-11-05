---
layout: layouts/post.njk
title: Convert a date to YYYY-MM-DD format
category: Date Time
---

**JavaScript version**

```js
// `date` is a `Date` object
const formatYmd = (date) => date.toISOString().slice(0, 10);
```

**TypeScript version**

```js
const formatYmd = (date: Date): string => date.toISOString().slice(0, 10);
```

**Example**

```js
formatYmd(new Date()); // 2020-05-06
```
