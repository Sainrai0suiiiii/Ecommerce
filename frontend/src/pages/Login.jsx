import Title from '../components/Title';

const Login = () => {
  return (
    <div className="py-10 border-t">
      <div className="max-w-md mx-auto rounded-2xl border border-gray-200 p-6">
        <Title text1="WELCOME" text2="BACK" />
        <form className="space-y-4">
          <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Email" />
          <input className="w-full border border-gray-300 px-3 py-2 outline-none" placeholder="Password" type="password" />
          <button className="w-full bg-black px-5 py-2 text-sm text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;