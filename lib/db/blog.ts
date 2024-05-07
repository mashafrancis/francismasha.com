import path from 'node:path'
import { getMDXData } from '@/lib/db/mdxData'

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'content/blog'))
}
