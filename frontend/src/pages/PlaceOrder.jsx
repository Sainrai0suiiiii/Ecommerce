import React from 'react';
import Title from '../components/Title';

const PlaceOrder = () => {
  return (
    <div className="py-10 border-t">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <Title text1="CHECKOUT" text2="DETAILS" />
          <div className="space-y-3">
            <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Full name" />
            <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Address" />
            <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="City" />
            <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Phone number" />
          </div>
        </div>

        <div className="rounded-2xl bg-gray-100 p-6 space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Subtotal</span>
            <span>$120</span>
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Delivery</span>
            <span>$10</span>
          </div>
          <div className="flex items-center justify-between border-t border-gray-300 pt-3 text-base font-semibold text-gray-800">
            <span>Total</span>
            <span>$130</span>
          </div>
          <button className="w-full bg-black px-5 py-2 text-sm text-white">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;