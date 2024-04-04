import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentGrid from '../components/ContentGrid';
import Footer from '../components/Footer';

export default function Home() {
	const [combinedData, setCombinedData] = useState([]);

	useEffect(() => {
		async function loadData() {
			try {
				const response = await fetch('/api/fetchData');
				const data = await response.json();
				if (!response.ok) throw new Error(data.error || 'Failed to fetch');
				setCombinedData(data);
			} catch (error) {
				console.error('Error loading data:', error);
			}
		}

		loadData();
	}, []);

	return (
		<div>
			<Header />
			<Hero />
			<main className='bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
				{combinedData.map((category) => (
					<ContentGrid
						key={category.id}
						title={category.category_name}
						emoji={category.emoji}
						items={category.items}
					/>
				))}
			</main>
			<Footer />
		</div>
	);
}
