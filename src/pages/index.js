// pages/index.js
import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import Header from './components/Header';
import Hero from './components/Hero';
import ContentGrid from './components/ContentGrid';
import Footer from './components/Footer';

export default function Home() {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: categories, error: categoriesError } = await supabase
          .from('categories')
          .select('id, category_name, emoji');
        if (categoriesError) throw categoriesError;

        const { data: items, error: itemsError } = await supabase
          .from('items')
          .select('name, url, relation');
        if (itemsError) throw itemsError;

        // Combine categories and items
        const combinedData = categories.map(category => ({
          ...category,
          items: items.filter(item => item.relation === category.id),
        }));

        setCombinedData(combinedData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    }

    loadData();
  }, []);
  console.log(combinedData);


  return (
    <div>
      <Header />
      <Hero />
      <main className="bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
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