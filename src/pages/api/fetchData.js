import { supabase } from '@/lib/supabaseClient';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const { data: categories, error: categoriesError } = await supabase
				.from('categories')
				.select('id, category_name, emoji');
			if (categoriesError) throw categoriesError;

			const { data: items, error: itemsError } = await supabase
				.from('items')
				.select('name, url, relation');
			if (itemsError) throw itemsError;

			const combinedData = categories.map((category) => ({
				...category,
				items: items.filter((item) => item.relation === category.id),
			}));

			res.status(200).json(combinedData);
		} catch (error) {
			console.error('Error loading data:', error);
			res.status(500).json({ error: 'Failed to fetch data' });
		}
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
