import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BestSeller from '../components/BestSeller';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import { ShopContext } from '../context/ShopContext';

const Home = () => {
  const { products, currency } = useContext(ShopContext);
  const featuredProducts = products.slice(0, 4);

  const highlights = [
    { title: 'Fast Delivery', text: 'Free shipping on orders above $150.', icon: '🚚' },
    { title: 'Premium Quality', text: 'Thoughtfully curated fabrics built for everyday comfort.', icon: '✨' },
    { title: 'Easy Returns', text: '30-day hassle-free returns on all featured styles.', icon: '↩️' },
  ];

  return (
    <div className="space-y-8 pb-8">
      <Hero />

      <section className="grid gap-4 rounded-3xl border border-gray-200 bg-gray-50 p-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div key={item.title} className="rounded-2xl bg-white p-4 shadow-sm">
            <div className="mb-2 text-2xl">{item.icon}</div>
            <h3 className="font-semibold text-gray-800">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </section>

      <LatestCollection />

      <section className="rounded-3xl border border-gray-200 p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Featured Picks</p>
            <h3 className="text-2xl font-semibold text-gray-800">Fresh drops curated for the season</h3>
          </div>
          <Link to="/collection" className="text-sm font-medium text-black underline-offset-4 hover:underline">
            View all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((item) => (
            <Link
              key={item._id}
              to={`/product/${item._id}`}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <img className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" src={item.image[0]} alt={item.name} />
              <div className="p-4">
                <p className="text-sm font-medium text-gray-800">{item.name}</p>
                <p className="mt-1 text-sm text-gray-600">{currency}{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <BestSeller />
    </div>
  );
};

export default Home;