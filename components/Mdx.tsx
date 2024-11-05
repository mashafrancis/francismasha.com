import { Link } from 'next-view-transitions'
import Image from 'next/image'

import { createElement } from 'react'

import { slugify } from '@/lib/utils/misc'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'

import Pre from './Pre'

function CustomLink(props) {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Callout(props) {
  return (
    <div className="my-8 flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  )
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }) => {
    const slug = slugify(children)
    return createElement(
      `h${level}`,
      { id: slug },
      [
        createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children,
    )
  }
}

function Code({ children, ...props }) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  code: Code,
  Callout,
}

export function Mdx(props) {
  return (
    <article className="prose prose-neutral prose-quoteless col-span-full dark:prose-invert lg:col-span-10 lg:col-start-2">
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </article>
  )
}
