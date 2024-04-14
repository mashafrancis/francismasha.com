import { getMDXData } from '@/lib/db/mdxData'
import path from 'node:path'

export function getAllOneLoc() {
  return getMDXData(path.join(process.cwd(), "content/1loc"));
}
