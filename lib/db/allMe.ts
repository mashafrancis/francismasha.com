import fs from 'fs'
import path from 'path'

type Metadata = {
	name: string
	shortname: string
	avatar: string
	occupation: string
	company: string
	resume: string
	email: string
	twitter: string
	linkedin: string
	github: string
}

function parseFrontmatter(fileContent: string) {
	let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
	let match = frontmatterRegex.exec(fileContent)
	let frontMatterBlock = match![1]
	let content = fileContent.replace(frontmatterRegex, '').trim()
	let frontMatterLines = frontMatterBlock.trim().split('\n')
	let metadata: Partial<Metadata> = {}

	frontMatterLines.forEach((line) => {
		let [key, ...valueArr] = line.split(': ')
		let value = valueArr.join(': ').trim()
		value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
		metadata[key.trim() as keyof Metadata] = value
	})

	return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: fs.PathLike) {
	return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md')
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
	let rawContent = fs.readFileSync(filePath, 'utf-8')
	return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
	let mdxFiles = getMDXFiles(dir)
	return mdxFiles.map((file) => {
		let { metadata, content } = readMDXFile(path.join(dir, file))
		let slug = path.basename(file, path.extname(file))
		return {
			metadata,
			slug,
			content,
		}
	})
}

export function getAllMe() {
	return getMDXData(path.join(process.cwd(), 'content/me'))
}