import { db } from '@/lib/planetscale';
import * as z from 'zod';

const routeContextSchema = z.object({
	params: z.object({
		slug: z.string(),
	}),
});

export async function POST(
	req: Request,
	context: z.infer<typeof routeContextSchema>,
) {
	const { params } = routeContextSchema.parse(context);
	const slug = params.slug;
	if (!slug) {
		return new Response('Not Found', { status: 400 });
		// return res.status(400).json({error: 'Missing slug'});
	}

	const data = await db
		.selectFrom('views')
		.where('slug', '=', slug)
		.select(['count'])
		.execute();

	const views = !data.length ? 0 : Number(data[0].count);

	await db
		.insertInto('views')
		.values({ slug, count: 1 })
		.onDuplicateKeyUpdate({ count: views + 1 })
		.execute();

	return new Response(null, { status: 200 });
}
