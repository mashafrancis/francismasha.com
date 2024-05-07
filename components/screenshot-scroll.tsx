'use client'

import Image from 'next/image'

import { CSSProperties, Children, useCallback } from 'react'

import { defaultDimensions } from '@/config/projects'
import ScrollContainer from 'react-indiana-drag-scroll'

interface Props {
  dimensions?: [number, number]
  screenshots: string[]
}

export default function ScreenshotScroll({ dimensions, screenshots }: Props) {
  const [height, width] = dimensions ?? defaultDimensions

  const renderScreenShotList = useCallback(
    (screenshot: string) => {
      const style: CSSProperties = {
        height,
        width,
      }

      return (
        <div
          className="bg-placeholder-light dark:bg-placeholder-dark mr-2 flex-shrink-0 overflow-hidden rounded"
          style={style}
        >
          <Image
            loading="eager"
            src={screenshot}
            height={height}
            width={width}
            // objectFit='cover'
            alt=""
            priority
            placeholder="blur"
            blurDataURL="data:..."
          />
        </div>
      )
    },
    [height, width],
  )

  return (
    <ScrollContainer
      className="list mb-1 mt-4 flex overflow-auto"
      hideScrollbars={false}
    >
      {Children.toArray(screenshots.map(renderScreenShotList))}
    </ScrollContainer>
  )
}
