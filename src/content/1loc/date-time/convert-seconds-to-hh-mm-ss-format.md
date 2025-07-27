---
layout: layouts/post.njk
title: Convert seconds to hh:mm:ss format
category: Date Time
---

**JavaScript version**

```js
// `s` is number of seconds
const formatSeconds = (s) => new Date(s * 1000).toISOString().substr(11, 8);

// Or
const formatSeconds = (s) =>
	new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

// Or
const formatSeconds = (s) =>
	[parseInt(s / 60 / 60), parseInt((s / 60) % 60), parseInt(s % 60)]
		.join(':')
		.replace(/\b(\d)\b/g, '0$1');
```

**TypeScript version**

```js
const formatSeconds = (s: number): string => new Date(s * 1000).toISOString().substr(11, 8);

// Or
const formatSeconds = (s: number): string => (new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/) as string[])[0];

// Or
const formatSeconds = (s: number): string => (
    [parseInt(`${s / 3600}`), parseInt(`${(s / 60) % 60}`), parseInt(`${s % 60}`)].join(':').replace(/\b(\d)\b/g, '0$1')
);
```

**Examples**

```js
formatSeconds(200); // 00:03:20
formatSeconds(500); // 00:08:20
```
