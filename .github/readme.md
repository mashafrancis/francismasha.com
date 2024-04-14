<h1 align="center">
  francismasha.com
</h1>
<p align="center">
  My portfolio built with <a href="https://nextjs.org/" target="_blank">Nextjs</a> and hosted with <a href="https://www.vercel.com/" target="_blank">Vercel</a>
</p>

## Make it your own!

This portfolio was built on top
of [Tailwind Next JS Starter Index](https://github.com/timlrx/tailwind-nextjs-starter-blog)
template which comes with built-in blogs functionality and much more!

## Database Schema

```sql
CREATE TABLE redirects
(
    id          SERIAL PRIMARY KEY,
    source      VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    permanent   BOOLEAN      NOT NULL
);

CREATE TABLE views
(
    slug  VARCHAR(255) PRIMARY KEY,
    count INT NOT NULL
);
```
