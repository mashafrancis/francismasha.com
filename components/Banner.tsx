'use client'

import Link from 'next/link'

import { ReactElement, memo, useState } from 'react'

import metadata from '@/app/metadata'
import LivingShapes from '@/components/LivingShapes'
import { useRandomColorPair } from '@/lib/hooks/useRandomColorPair'
import { RoughNotation } from 'react-rough-notation'

function Banner(): ReactElement {
  const [aboutColor, contactColor] = useRandomColorPair()
  const [clicked, setClicked] = useState(false)

  if (clicked) {
    throw new Error('Oh no! Something went wrong.')
  }

  return (
    <div className="grid min-h-[75vh] gap-2 xl:grid-cols-2 xl:items-center">
      <div className="fade-in col-span-1 flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-0">
        <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">
          Hi, I'm {metadata.shortname}.
        </h1>
        <p className="my-4 text-lg font-semibold text-gray-600 dark:text-gray-200 lg:my-4 lg:text-2xl">
          {metadata.occupation}.
        </p>
        <p className="text-gray-600 dark:text-gray-200 lg:text-xl">
          Read more on my
          <Link className="ml-2 mr-2 font-normal text-black" href="/projects">
            <RoughNotation
              show
              type="highlight"
              animationDelay={250}
              animationDuration={2000}
              color={contactColor}
            >
              projects,
            </RoughNotation>
          </Link>
          <Link className="ml-2 mr-2 font-normal text-black" href="/about">
            <RoughNotation
              show
              type="highlight"
              animationDelay={250}
              animationDuration={2000}
              color={aboutColor}
            >
              about me
            </RoughNotation>
          </Link>
          or you can
          <Link className="ml-2 font-normal text-black" href="/contact">
            <RoughNotation
              show
              type="highlight"
              animationDelay={250}
              animationDuration={2000}
              color={contactColor}
            >
              contact me
            </RoughNotation>
          </Link>
          .
        </p>
      </div>
      <LivingShapes />
    </div>
  )
}

export default memo(Banner)
