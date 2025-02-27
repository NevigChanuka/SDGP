import React from "react";
import {Logo}  from "../components/Logo";

const SignUp: React.FC = () => {
  return (
    <div className="w-[30%] h-[640px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
        <Logo/>
      <h2 className="text-center text-lg font-medium mt-2">Create an account</h2>

      <form className="flex flex-col items-center w-full p-4">
            <div className="flex flex-col items-center w-full max-w-sm">

            
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-10 px-3 w-full"
                />

                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-10 px-3 w-full"
                />

                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-10 px-3 w-full"
                />

                <input
                    type="password"
                    id="Confirm password"
                    placeholder="Confirm password"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-10 px-3 w-full"
                />

                <button type="submit" className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                    Create
                </button>

            </div>

        </form>

        <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
            <span className="mx-2 text-sm font-bold sm:text-base">OR</span>
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
        </div>

      
    </div>
  );
};

export default SignUp;