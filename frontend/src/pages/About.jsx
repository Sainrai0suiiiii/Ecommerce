import Title from '../components/Title';

const About = () => {
  return (
    <div className="py-10 border-t">
      <div className="max-w-5xl mx-auto space-y-8">
        <Title text1="OUR" text2="STORY" />

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-gray-600 leading-7">
            <p>
              Style Street brings together everyday essentials and fashion-forward pieces in one place.
            </p>
            <p>
              We believe shopping should feel effortless, inspiring, and personal. Every piece is selected to help you build a wardrobe that feels confident, modern, and timeless.
            </p>
          </div>

          <div className="rounded-2xl bg-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800">Why customers love us</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>• Carefully selected collections</li>
              <li>• Fast delivery and easy returns</li>
              <li>• Friendly support for every order</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;