import React from "react";
import { Logo } from "../components/Logo";





const SignIn: React.FC = () => {
  return (
    <div className="w-[30%] h-[640px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
      <Logo />

      <h2 className="text-center text-lg font-medium mt-2">Sign In</h2>

      <form className="mt-4">
        <div className="flex flex-col space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              id="email"
              autoComplete="off"
              className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:ring focus:ring-green-300 outline-none"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700"
            >
              Email
            </label>
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              id="password"
              autoComplete="off"
              className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-2 focus:ring focus:ring-green-300 outline-none"
              placeholder=" "
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700"
            >
              Password
            </label>
          </div>

          

        

       
        </div>
      </form>

    </div>
  );
};

export default SignIn;
