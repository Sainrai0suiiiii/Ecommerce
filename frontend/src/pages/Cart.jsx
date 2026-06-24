import { Link } from 'react-router-dom';
import Title from '../components/Title';

const Cart = () => {
  return (
    <div className="py-10 border-t">
      <div className="max-w-4xl mx-auto text-center">
        <Title text1="YOUR" text2="CART" />

        <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-gray-600">
          <p className="text-xl font-semibold text-gray-800">Your cart is empty</p>
          <p className="mt-3">Add a few favorites to see them here.</p>
          <Link to="/collection" className="mt-5 inline-block bg-black px-5 py-2 text-sm text-white">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;