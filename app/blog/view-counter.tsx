export default function ViewCounter({
  slug,
  allViews,
}: {
  slug: string
  allViews: {
    slug: string
    count: number
  }[]
}) {
  const viewsForSlug = allViews?.find((view) => view.slug === slug)
  const views = Number(viewsForSlug?.count || 0)

  return <>{`${views.toLocaleString()} views`}</>
}
