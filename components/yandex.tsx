'use client'

import Script from 'next/script'

export default function Yandex() {
  return (
    <>
      <Script type="text/javascript" src="./script.js" />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/99246529"
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}
