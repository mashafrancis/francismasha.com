if (!self.define) {
  let e,
    a = {};
  const s = (s, c) => (
    (s = new URL(`${s}.js`, c).href),
    a[s] ||
      new Promise((a) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = s), (e.onload = a), document.head.appendChild(e);
        } else {
          (e = s), importScripts(s), a();
        }
      }).then(() => {
        const e = a[s];
        if (!e) {
          throw new Error(`Module ${s} didn’t register its module`);
        }
        return e;
      })
  );
  self.define = (c, i) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (a[n]) {
      return;
    }
    const t = {};
    const f = (e) => s(e, n),
      d = { module: { uri: n }, exports: t, require: f };
    a[n] = Promise.all(c.map((e) => d[e] || f(e))).then((e) => (i(...e), t));
  };
}
define(['./workbox-2e6be583'], (e) => {
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '1c6e9511f0951052cc06d1298fd600f5',
        },
        {
          url: '/_next/static/chunks/199-32fd68977588a397.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/37144445-6b333d1363893f68.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/402-2361fd073c21583f.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/4063730f-a95b8b673796dbbb.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/60-7e91a6144f6fd712.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/796-2f39181fd835119b.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/813-6758fcd9dd27998e.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/828-b263c942b32f3b28.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/906.f0edb3ea4adda3a7.js',
          revision: 'f0edb3ea4adda3a7',
        },
        {
          url: '/_next/static/chunks/932-5653b56d7366e3a7.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/1loc/%5Bslug%5D/not-found-e91e215056d190da.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/1loc/%5Bslug%5D/page-5f9b80ad0db0619c.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/1loc/page-30e5363586b08313.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/_not-found-d40c86d345bf6f5c.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/about/page-c41a861f15b5481d.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/blog/%5Bslug%5D/not-found-7afeb770d28104d1.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/blog/%5Bslug%5D/page-8931ae2690fd86cc.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/blog/page-1cbd973ae433100d.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/contact/page-aedec968210fa232.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/error-b2967be1e37db49e.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/layout-7668d674fafb310a.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/page-ca2e23cb74251c48.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/projects/%5Bslug%5D/page-b26a648ce8bdb471.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/app/projects/page-4e12519a4a65714a.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/framework-510ec8ffd65e1d01.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/main-app-fe1f460df1154ddd.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/main-c53851cf606613fc.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/pages/_app-69fe605c3cb2abef.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/pages/_error-b0fde915db1f9b5b.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-c928e12e9452dd34.js',
          revision: 'zsw6nvXIx0TQcPdaOxawP',
        },
        {
          url: '/_next/static/css/5b88450f9d6f5c35.css',
          revision: '5b88450f9d6f5c35',
        },
        {
          url: '/_next/static/css/df9a541cb8d4b6f0.css',
          revision: 'df9a541cb8d4b6f0',
        },
        {
          url: '/_next/static/media/0c363f1ded688116-s.p.woff2',
          revision: 'e03e98364e75779ca698734da0469cf3',
        },
        {
          url: '/_next/static/media/0de30c72378d3d79.p.woff2',
          revision: 'b4dd000fcb8ea5b60c63865d9d49a001',
        },
        {
          url: '/_next/static/media/0f693d3b5cf30f33-s.p.woff2',
          revision: 'd30caeebe7f71b7e82b5108da1516e1c',
        },
        {
          url: '/_next/static/media/1a4ab8f0c53030cf-s.p.woff2',
          revision: '5c409487e34b8738fcdcd8a011b838ad',
        },
        {
          url: '/_next/static/media/3adced0e2407ea7a-s.p.woff2',
          revision: '2fc1197cf8fce573234a690800de8355',
        },
        {
          url: '/_next/static/media/3c69bba0733f0e1d-s.p.woff2',
          revision: '1d5b62d8f59c01b22ce4e3b3de7aa78b',
        },
        {
          url: '/_next/static/media/430a50dd0593955c-s.p.woff2',
          revision: '793c44c57a90b6343a22d5cbcb4fcc66',
        },
        {
          url: '/_next/static/media/596d2588a9dffc8c-s.p.woff2',
          revision: 'cafb601c4c62dcc3cc022889275d2841',
        },
        {
          url: '/_next/static/media/5b469faa5c489f13.p.woff2',
          revision: '14bf4533becaa9e2b00ae6430bceeb9b',
        },
        {
          url: '/_next/static/media/6077329f2ce72120-s.p.woff2',
          revision: 'b2a1a5670ea258527f1d7af69fdb0ca8',
        },
        {
          url: '/_next/static/media/61e35ea2f001c95e-s.p.woff2',
          revision: 'd2a7798fbe6546c615ba096a15920e9b',
        },
        {
          url: '/_next/static/media/68a17b3f4bcd8ce7-s.p.woff2',
          revision: '39c808be0b10ca3a29aa58f278e8a642',
        },
        {
          url: '/_next/static/media/90475aac776488b6-s.p.woff2',
          revision: '183db31d6365283bef4914042be9dfab',
        },
        {
          url: '/_next/static/media/90ef01a0299272cf.p.woff2',
          revision: '3c26ec213b92fdc5d5120a503a4ad5a7',
        },
        {
          url: '/_next/static/media/a64ec0eae44cfe55-s.p.woff2',
          revision: '68c5a93f38f4c49ada1207ac8d0b55ed',
        },
        {
          url: '/_next/static/media/aab23ec6351d3577.p.woff2',
          revision: '2edd0ea21aff77ae9d3dc1d18e2eb060',
        },
        {
          url: '/_next/static/media/b1cebd62690e7516.p.woff2',
          revision: '1546a41edd378cc57157f4b0cd1e1bfd',
        },
        {
          url: '/_next/static/media/b5dc58e4e8f9ed2d.p.woff2',
          revision: 'eb3ec3a3f161aa3ee79454abbd478a1d',
        },
        {
          url: '/_next/static/media/b7c6dce1ff028469.p.woff2',
          revision: '3b71aa63a13a1a88dcc673f877f21697',
        },
        {
          url: '/_next/static/media/c8535d443466b72a-s.p.woff2',
          revision: '943d9ba8c41fcbf2b0a7a1c6319d8f93',
        },
        {
          url: '/_next/static/media/cbfec8a235a8471d-s.p.woff2',
          revision: '2e0f585754e4e20a7cde5c8ebe7ad3bd',
        },
        {
          url: '/_next/static/media/cdc978c5a2b5290e.p.woff2',
          revision: '13239d0c28af51e0874ebf81d4f8a022',
        },
        {
          url: '/_next/static/media/d545a468be54b468-s.p.otf',
          revision: '45b8d162c2cb6ada2b5d070c3df4fe1d',
        },
        {
          url: '/_next/static/media/eaf0659068e984d1.p.woff2',
          revision: 'ae42eb8d3d4247fd98e3cb30f4160763',
        },
        {
          url: '/_next/static/zsw6nvXIx0TQcPdaOxawP/_buildManifest.js',
          revision: '48a85bb4afabeaec50bdff1b78f2797a',
        },
        {
          url: '/_next/static/zsw6nvXIx0TQcPdaOxawP/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/favicon.ico', revision: '834b65a1627f7a4210fe74ecf4925c56' },
        { url: '/feed.xml', revision: 'e28ed947faf6ec693b5b8f382bc79c63' },
        {
          url: '/fonts/CalSans-SemiBold.ttf',
          revision: 'ea46d0b48797069c0d1d092a40988da0',
        },
        {
          url: '/fonts/CalSans-SemiBold.woff',
          revision: '589565468c8e6a89ff5f654de0f14391',
        },
        {
          url: '/fonts/CalSans-SemiBold.woff2',
          revision: '183db31d6365283bef4914042be9dfab',
        },
        {
          url: '/fonts/CircularStd-Black.woff2',
          revision: '94a505bb1e062b41273a8ea77777a3e7',
        },
        {
          url: '/fonts/CircularStd-Bold.woff2',
          revision: '97ca95083f8be0c5d7ee9907cfe28af1',
        },
        {
          url: '/fonts/CircularStd-Book.woff2',
          revision: 'c8ae3e93ae16983c73a68cf537557de2',
        },
        {
          url: '/fonts/CircularStd-Medium.woff2',
          revision: '029c2e0e19032f6cdbef9042552e79fa',
        },
        {
          url: '/fonts/CircularText-Book.woff2',
          revision: '16e9249f6fb1dbd99a363b793822cf7a',
        },
        {
          url: '/fonts/CircularText-Light.woff2',
          revision: '0c956ff3556bb6c2ba6251e77ead71df',
        },
        {
          url: '/fonts/GeistMono-Regular.otf',
          revision: '45b8d162c2cb6ada2b5d070c3df4fe1d',
        },
        {
          url: '/fonts/sf-pro-text-regular-webfont.woff',
          revision: '12df50fd21e7fed083babafd1950284b',
        },
        {
          url: '/fonts/sf-pro-text-regular-webfont.woff2',
          revision: '58673ca2ff2d3b647a08f1a78e046cae',
        },
        { url: '/manifest.json', revision: 'af6450a59cfe66383c1ef52e4d1b5e9e' },
        { url: '/og-bg.svg', revision: 'ab6290eaaf2fabcfdc703d61b70a3352' },
        { url: '/og.png', revision: '50967bae772b9598beac748f476623a7' },
        {
          url: '/static/avatar.jpg',
          revision: 'a4c5ac90c9e92d86ad601916a7771868',
        },
        {
          url: '/static/blogs/amazing-placeholder-blurhash.jpeg',
          revision: '83fe46074bc9cab4a7a13a6804218747',
        },
        {
          url: '/static/blogs/code-language.webp',
          revision: '4a147e3e6aa1e501ff26bb7ab87de1e3',
        },
        {
          url: '/static/blogs/elk-cluster.webp',
          revision: 'e140f353bb9f08a0533540f38bde0a10',
        },
        {
          url: '/static/blogs/introduction-to-zustand.png',
          revision: '3dcaab6d4ca936880239902bbbcba25c',
        },
        {
          url: '/static/blogs/kibana.png',
          revision: 'e2be410fac610162efbc609b67baed14',
        },
        {
          url: '/static/blogs/kubernetes-development-skaffold.png',
          revision: '024ea8764de383976edb17ccf3c4ef24',
        },
        {
          url: '/static/blogs/logstash.png',
          revision: '3862300990049ade17f6ca24e675b292',
        },
        {
          url: '/static/blogs/metricbeat.png',
          revision: 'c152903b19fbd1133feb3a96a859fe12',
        },
        {
          url: '/static/blogs/rust-for-iot.webp',
          revision: '3cbabff90d6ef06ebbf1f7ffcd2d230d',
        },
        {
          url: '/static/blogs/tips-code-review.png',
          revision: 'cb9155aa5f3f7bd5fec0497c241955e4',
        },
        {
          url: '/static/favicons/android-chrome-192x192.png',
          revision: 'd5e7c3e3e60cbe08e5b6c0b138dffc75',
        },
        {
          url: '/static/favicons/android-chrome-512x512.png',
          revision: '50967bae772b9598beac748f476623a7',
        },
        {
          url: '/static/favicons/android-chrome-96x96.png',
          revision: '62e2b88fc392f163da1438522ecbf9f0',
        },
        {
          url: '/static/favicons/apple-touch-icon.png',
          revision: '871a79337708e55da24ebc87a505a70f',
        },
        {
          url: '/static/favicons/browserconfig.xml',
          revision: 'b0df1d8364886483f481bc261ea8db4b',
        },
        {
          url: '/static/favicons/favicon-16x16.png',
          revision: '21c1bf5a599e43315e0e7ce291b243f0',
        },
        {
          url: '/static/favicons/favicon-32x32.png',
          revision: 'a7330915135424980cdf98d78fe20c99',
        },
        {
          url: '/static/favicons/favicon.ico',
          revision: '834b65a1627f7a4210fe74ecf4925c56',
        },
        {
          url: '/static/favicons/mstile-150x150.png',
          revision: '0cd21afeb2254dcfb511d977584b1d13',
        },
        {
          url: '/static/favicons/safari-pinned-tab.svg',
          revision: '53b6ad1d73b36294737c5738c5463150',
        },
        {
          url: '/static/favicons/site.webmanifest',
          revision: 'f9311fa22f43791e10456ac7474cd61e',
        },
        {
          url: '/static/logo.png',
          revision: '383d6f172a0c637e0b59de5ad3a80344',
        },
        {
          url: '/static/logo.svg',
          revision: '53b6ad1d73b36294737c5738c5463150',
        },
        {
          url: '/static/projects/almond/banner.png',
          revision: '5fdf608899a29284f6e913b7f046b4a8',
        },
        {
          url: '/static/projects/dt-edge/banner.png',
          revision: '824be7ca707252da0bd65927a99dc1bc',
        },
        {
          url: '/static/projects/heimdall/banner.png',
          revision: 'ece06529bc71bc8772a0c9a449763c8c',
        },
        {
          url: '/static/projects/portfolio/banner.png',
          revision: 'e716d8795b3b4daeb28622afb8bf9282',
        },
        {
          url: '/static/projects/sanctissima/banner.png',
          revision: '078b02023a87de8c9a33578fc8eaf699',
        },
        {
          url: '/static/sounds/open.mp3',
          revision: '5c52e23b38733ed6ddea61f9475c6c76',
        },
        {
          url: '/static/sounds/page-change.mp3',
          revision: '091709e7e474beb326cb9f67c15beb48',
        },
        {
          url: '/static/sounds/switch-on.mp3',
          revision: '74a6ecab29936556e36f7cd48f0dc12d',
        },
        {
          url: '/tags/beats/feed.xml',
          revision: '52574120e1dd9435203551fd7d4cb76a',
        },
        {
          url: '/tags/css/feed.xml',
          revision: '7657a613f415262de83ad070490f87f7',
        },
        {
          url: '/tags/devops/feed.xml',
          revision: '8ffe3f513f11a7f01f112d2ef53e12ca',
        },
        {
          url: '/tags/docker/feed.xml',
          revision: '996189df0612bab9939032c96f7898af',
        },
        {
          url: '/tags/elasticsearch/feed.xml',
          revision: '9ee5fee7b432e4fc83b5bc0613ed731a',
        },
        {
          url: '/tags/embedded/feed.xml',
          revision: '4e3240ec6b5bbeaf018288b632e25753',
        },
        {
          url: '/tags/git/feed.xml',
          revision: 'a3f42ccbba1db5ed12d5b0ba9ff3f9e0',
        },
        {
          url: '/tags/go/feed.xml',
          revision: '451b47e43fbfb3b98c119dfda29805aa',
        },
        {
          url: '/tags/iot/feed.xml',
          revision: '86fb24a5ce8c2b7464eaf0f5226ece7a',
        },
        {
          url: '/tags/javascript/feed.xml',
          revision: 'f386a77b7043ab71e9220d3ed6ca2630',
        },
        {
          url: '/tags/kibana/feed.xml',
          revision: '6aa0c01fa10f4771077d60a676902f80',
        },
        {
          url: '/tags/kubernetes/feed.xml',
          revision: '8720b5daa218ff3298613ecae19a35c6',
        },
        {
          url: '/tags/logstash/feed.xml',
          revision: '7757fbc500b9a5f4f4b2e77718c57e52',
        },
        {
          url: '/tags/monitoring/feed.xml',
          revision: '0433cd9677da91f2419e3f42ec3e6a94',
        },
        {
          url: '/tags/node/feed.xml',
          revision: 'f3edae26baec18a7d29a2797525e58c8',
        },
        {
          url: '/tags/productivity/feed.xml',
          revision: '716b0a2194c637b372190260ae020839',
        },
        {
          url: '/tags/random/feed.xml',
          revision: '2fbd53f82f8946697b3915832430b608',
        },
        {
          url: '/tags/react/feed.xml',
          revision: 'adbe579a53ea8babf13ee149ad8e7f19',
        },
        {
          url: '/tags/rust/feed.xml',
          revision: '1221e0ac5dd23cb58ef31c30fd69d7dd',
        },
        {
          url: '/tags/troubleshooting/feed.xml',
          revision: 'f10236163d11da3cc3340f10210386db',
        },
        {
          url: '/tags/typescript/feed.xml',
          revision: '74f403ba8dbb254dea5612f9f0b4db71',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: a,
              event: s,
              state: c,
            }) =>
              a && a.type === 'opaqueredirect'
                ? new Response(a.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: a.headers,
                  })
                : a,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31_536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604_800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604_800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) {
          return !1;
        }
        const a = e.pathname;
        return !a.startsWith('/api/auth/') && !!a.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) {
          return !1;
        }
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86_400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
