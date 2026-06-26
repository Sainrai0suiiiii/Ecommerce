import { Link } from 'react-router-dom';
import Title from '../components/Title';

const Profile = () => {
  const profileStats = [
    { label: 'Orders', value: '12' },
    { label: 'Wishlist', value: '4' },
    { label: 'Points', value: '1,240' },
  ];

  const recentActivity = [
    { title: 'Order #1086 shipped', detail: 'Your latest order is on the way.' },
    { title: 'New drop added', detail: 'Fresh arrivals are now available in collection.' },
    { title: 'Profile updated', detail: 'Your contact preferences were saved successfully.' },
  ];

  return (
    <div className="space-y-6 border-t py-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <Title text1="MY" text2="PROFILE" />
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-black text-2xl font-semibold text-white">
              JS
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">John Smith</h2>
              <p className="text-sm text-gray-500">john.smith@example.com</p>
              <p className="mt-2 text-sm text-gray-600">Member since 2024 • Premium shopper</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {profileStats.map((item) => (
              <div key={item.label} className="rounded-2xl bg-gray-50 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
                <p className="mt-2 text-xl font-semibold text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">Account Settings</h3>
          <div className="mt-4 space-y-3 text-sm text-gray-600">
            <div className="rounded-2xl bg-white p-3">Shipping address: 12 New Street, London</div>
            <div className="rounded-2xl bg-white p-3">Payment method: Visa ending in 4242</div>
            <div className="rounded-2xl bg-white p-3">Notifications: Email & SMS enabled</div>
          </div>
          <Link to="/orders" className="mt-5 inline-block text-sm font-medium text-black underline-offset-4 hover:underline">
            View my orders
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <div className="mt-4 space-y-3">
          {recentActivity.map((item) => (
            <div key={item.title} className="flex items-start justify-between gap-3 rounded-2xl border border-gray-100 p-4">
              <div>
                <p className="font-medium text-gray-800">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500">{item.detail}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">Today</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
