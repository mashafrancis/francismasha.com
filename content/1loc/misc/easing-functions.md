---
layout: layouts/post.njk
title: Easing functions
category: Misc
---

**JavaScript version**

```js
// Some easing functions
// See https://gist.github.com/gre/1650294 and https://easings.net

const linear = (t) => t;

const easeInQuad = (t) => t * t;
const easeOutQuad = (t) => t * (2 - t);
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const easeInCubic = (t) => t * t * t;
const easeOutCubic = (t) => --t * t * t + 1;
const easeInOutCubic = (t) =>
	t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const easeInQuart = (t) => t * t * t * t;
const easeOutQuart = (t) => 1 - --t * t * t * t;
const easeInOutQuart = (t) =>
	t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

const easeInQuint = (t) => t * t * t * t * t;
const easeOutQuint = (t) => 1 + --t * t * t * t * t;
const easeInOutQuint = (t) =>
	t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

const easeInSine = (t) => 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t) => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t) => (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t) => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t) => ((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t) =>
	(t -= 0.5) < 0
		? (0.02 + 0.01 / t) * Math.sin(50 * t)
		: (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;
```

**TypeScript version**

```js
const linear = (t: number): number => t;

const easeInQuad = (t: number): number => t * t;
const easeOutQuad = (t: number): number => t * (2 - t);
const easeInOutQuad = (t: number): number =>
	t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const easeInCubic = (t: number): number => t * t * t;
const easeOutCubic = (t: number): number => --t * t * t + 1;
const easeInOutCubic = (t: number): number =>
	t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

const easeInQuart = (t: number): number => t * t * t * t;
const easeOutQuart = (t: number): number => 1 - --t * t * t * t;
const easeInOutQuart = (t: number): number =>
	t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

const easeInQuint = (t: number): number => t * t * t * t * t;
const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t;
const easeInOutQuint = (t: number): number =>
	t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;

const easeInSine = (t: number): number =>
	1 + Math.sin((Math.PI / 2) * t - Math.PI / 2);
const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t);
const easeInOutSine = (t: number): number =>
	(1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;

const easeInElastic = (t: number): number =>
	(0.04 - 0.04 / t) * Math.sin(25 * t) + 1;
const easeOutElastic = (t: number): number =>
	((0.04 * t) / --t) * Math.sin(25 * t);
const easeInOutElastic = (t: number): number =>
	(t -= 0.5) < 0
		? (0.02 + 0.01 / t) * Math.sin(50 * t)
		: (0.02 - 0.01 / t) * Math.sin(50 * t) + 1;
```
