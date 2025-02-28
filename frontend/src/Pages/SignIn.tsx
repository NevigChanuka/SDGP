import React from "react";
import { Logo } from "../components/Logo";
import GoogleIcon from "../assets/Google.png";
import FacebookIcon from "../assets/Facebook.png";
import AppleIcon from "../assets/Apple.png";


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

          <button
            type="submit"
            className="mt-4 w-28 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mx-auto"
          >
            Sign In
          </button>
        

          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
            <span className="mx-2 text-sm font-bold sm:text-base">OR</span>
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
        </div>

        <div className="flex flex-col items-center justify-center w-full mt-3">
            <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
                <img src={GoogleIcon} alt="Google" className="w-4 h-4 mr-5"/>
                Continue with Google
            </button>
            <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
                <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 mr-2.5"/>
                Continue with Facebook
            </button>
            <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
                <img src={AppleIcon} alt="Apple" className="w-3.5 h-3.5 mr-7"/>
                Continue with Apple
            </button>
        </div>

        <p className="text-center text-sm ">
        New User? 
        <a href="/SignUp" className="text-purple-700 hover:underline ml-1">
        Create an account
        </a>
        </p>
 
        </div>
      </form>

    </div>
  );
};

export default SignIn;
