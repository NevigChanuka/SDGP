import React from "react";
import { Logo } from "../components/Logo";





const SignIn: React.FC = () => {
  return (
    <div className="w-[30%] h-[640px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
      <Logo />

      <h2 className="text-center text-lg font-medium mt-2">Sign In</h2>

      
    </div>
  );
};

export default SignIn;
