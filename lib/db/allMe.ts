import path from 'node:path'
import { getMDXData } from '@/lib/db/mdxData'

export function getAllMe() {
  return getMDXData(path.join(process.cwd(), 'content/me'))
}
