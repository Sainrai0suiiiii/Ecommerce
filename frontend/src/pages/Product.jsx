import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productID } = useParams();
  const { products, currency } = useContext(ShopContext);

  const product = products.find((item) => item._id === productID);

  if (!product) {
    return (
      <div className="py-10 border-t text-center text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <div className="py-10 border-t">
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
          <button className="bg-black px-5 py-2 text-sm text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;