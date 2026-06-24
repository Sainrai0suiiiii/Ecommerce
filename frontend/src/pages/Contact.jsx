import Title from '../components/Title';

const Contact = () => {
  return (
    <div className="py-10 border-t">
      <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <Title text1="GET" text2="IN TOUCH" />
          <p className="text-gray-600 leading-7">
            Need help with an order or want to learn more about our collections? Reach out and we will be happy to assist.
          </p>

          <div className="rounded-2xl bg-gray-100 p-5 space-y-2 text-sm text-gray-700">
            <p><span className="font-semibold text-gray-800">Email:</span> support@stylestreet.com</p>
            <p><span className="font-semibold text-gray-800">Phone:</span> +1 (555) 012-3456</p>
            <p><span className="font-semibold text-gray-800">Hours:</span> Mon to Fri, 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-gray-200 p-6">
          <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Your name" />
          <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Your email" />
          <textarea className="w-full min-h-32 border border-gray-300 px-3 py-2 outline-none" placeholder="Your message" />
          <button className="bg-black px-5 py-2 text-sm text-white">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;