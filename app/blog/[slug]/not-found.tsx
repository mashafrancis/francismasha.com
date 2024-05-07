import { Boundary } from '@/components/Boundary'

export default function NotFound() {
  return (
    <Boundary labels={['Post Not Found']} color="blue">
      <div className="space-y-4">
        <div className="text-vercel-blue">
          <p className="font-medium">Could not find the blog post requested</p>
        </div>
      </div>
    </Boundary>
  )
}
