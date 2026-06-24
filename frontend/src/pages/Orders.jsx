import React from 'react';
import Title from '../components/Title';

const Orders = () => {
  const orders = [
    { id: 'ORD-1001', status: 'Delivered', date: 'June 20, 2026' },
    { id: 'ORD-1002', status: 'Processing', date: 'June 24, 2026' },
  ];

  return (
    <div className="py-10 border-t">
      <div className="max-w-5xl mx-auto space-y-4">
        <Title text1="YOUR" text2="ORDERS" />

        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="flex flex-col gap-2 rounded-2xl border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-gray-800">{order.id}</p>
                <p className="text-sm text-gray-500">Placed on {order.date}</p>
              </div>
              <p className="text-sm font-medium text-gray-700">Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;