import Header from '../pages/components/Header'; 
import Hero from '../pages/components/Hero';     
import ContentGrid from '../pages/components/ContentGrid'; 
import Footer from '../pages/components/Footer'; 


export default function Home() {
  
  const beachItems = [
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Promenade Beach' },
    { href: 'https://maps.app.goo.gl/wrNHiVZnvLXdGtUW8', text: 'Serenity Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Mahe Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Auroville Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Paradise Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Reppo Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Veerampattinam Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Karaikal Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Mahabalipuram Beach' },
    { href: 'https://maps.app.goo.gl/Qdvraok1mphzcGRu6', text: 'Quiet Beach' },
    
  ];

  return (
    <div>
      <Header />
      <Hero />
      <main className="bg-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
        <ContentGrid title="Beaches" emoji="⛱️" items={beachItems} />
        <ContentGrid title="AirBnB" emoji="🛖" items={beachItems} />
        <ContentGrid title="Bike Rentals" emoji="🛵" items={beachItems} />
        <ContentGrid title="Surf Schools" emoji="🏄🏻‍♂️" items={beachItems} />
        <ContentGrid title="Breakfast" emoji="🍞" items={beachItems} />
        <ContentGrid title="Lunch" emoji="🍽️" items={beachItems} />
        <ContentGrid title="Coffee" emoji="☕" items={beachItems} />
        <ContentGrid title="Dinner" emoji="🍲" items={beachItems} />
        {}
      </main>
      <Footer />
    </div>
  );
}
