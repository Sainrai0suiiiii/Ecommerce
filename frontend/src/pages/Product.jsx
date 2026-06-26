import { useContext, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productID } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item._id === productID);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((item) => item._id !== product._id && item.category === product.category).slice(0, 4);
  }, [product, products]);

  if (!product) {
    return (
      <div className="border-t py-10 text-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="space-y-10 border-t py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img className="h-full w-full object-cover" src={product.image?.[0]} alt={product.name} />
        </div>

        <div className="space-y-4">
          <Title text1="PRODUCT" text2="DETAILS" />
          <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-2xl font-semibold text-gray-800">{currency}{product.price}</p>
          <p className="leading-7 text-gray-600">
            {product.description || 'A stylish addition to your wardrobe with comfort and quality in mind.'}
          </p>

          <div className="flex flex-wrap gap-2">
            {product.sizes?.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`rounded-full border px-3 py-1 text-sm uppercase ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-700'}`}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center rounded-full border border-gray-300">
              <button className="px-3 py-2 text-lg" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                −
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button className="px-3 py-2 text-lg" onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </button>
            </div>
            <button className="bg-black px-5 py-2 text-sm text-white">Add to Cart</button>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">
            <p className="font-medium text-gray-800">Why you’ll love it</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Premium fabric with everyday comfort.</li>
              <li>Easy mix-and-match styling for any season.</li>
              <li>Free shipping and 30-day returns.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 p-6">
        <h3 className="mb-4 text-xl font-semibold text-gray-800">You might also like</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <Link key={item._id} to={`/product/${item._id}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <img className="h-48 w-full object-cover" src={item.image[0]} alt={item.name} />
              <div className="p-3">
                <p className="text-sm text-gray-800">{item.name}</p>
                <p className="mt-1 text-sm font-medium text-gray-600">{currency}{item.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;