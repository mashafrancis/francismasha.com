import { notFound } from 'next/navigation'

import { Grid } from '@/components/Grid'
import { Mdx } from '@/components/Mdx'
import PageTitle from '@/components/PageTitle'
import ScrollProgressBar from '@/components/ScrollProgressBar'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { getAllOneLoc } from '@/lib/db/oneLoc'
import Balancer from 'react-wrap-balancer'

interface Props {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return getAllOneLoc().map((snippet) => ({
    slug: snippet.slug,
  }))
}

export default async function OneLoc({ params }: Props) {
  const snippet = getAllOneLoc().find(
    ({ slug }) => slug.split('/').at(-1) === params.slug,
  )

  if (!snippet) {
    notFound()
  }

  const { metadata, content } = snippet

  return (
    <section>
      <ScrollProgressBar />
      <ScrollTopAndComment />
      <Grid>
        <div className="col-span-full dark:prose-invert lg:col-span-10 lg:col-start-2">
          <PageTitle>
            <Balancer>{metadata.title}</Balancer>
          </PageTitle>
        </div>
      </Grid>
      <Grid>
        <Mdx code={content} />
      </Grid>
    </section>
  )
}
