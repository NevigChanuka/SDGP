import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Logo } from "../components/Logo";
import GoogleIcon from "../assets/Google.png";
import FacebookIcon from "../assets/Facebook.png";
import AppleIcon from "../assets/Apple.png";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    localStorage.setItem("registeredEmail", data.email); // Store email in localStorage
    localStorage.setItem("registeredPassword", data.password); // Store password in localStorage
    alert("Account created successfully! Now sign in.");
  };

  return (
    <div className="w-[30%] h-[680px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
      <Logo />
      <h2 className="text-center text-lg font-medium mt-2">.sKqula ;kkak</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full p-4">
        <div className="flex flex-col items-center w-full max-w-sm">
          {/* Name Input */}
          <input type="text" {...register("name")} placeholder="ku" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.name?.message}</p>

          {/* Email Input */}
          <input type="text" {...register("email")} placeholder="B-;emE," autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>

          {/* Password Input */}
          <input type="password" {...register("password")} placeholder="uqrmoh" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.password ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>

          {/* Confirm Password Input */}
          <input type="password" {...register("confirmPassword")} placeholder=";yjqre l< uqrmoh " autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>

          {/* Submit Button */}
          <button type="submit" className="mt-3 px-5 py-2 bg-green-900 text-white rounded-md hover:bg-green-800 cursor-pointer">
          ks¾udKh lrkak
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center w-full">
        <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
        <span className="mx-2 text-sm font-bold sm:text-base">fyda</span>
        <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-col items-center justify-center w-full mt-3">
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
          <img src={GoogleIcon} alt="Google" className="w-4 h-4 mr-5"/>
          Google iu.ska mqrkak
        </button>
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
          <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 mr-2.5"/>
          Facebook iu.ska mqrkak
        </button>
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold text-black bg-white border border-black rounded-lg cursor-pointer">
          <img src={AppleIcon} alt="Apple" className="w-3.5 h-3.5 mr-7"/>
          Apple iu.ska mqrkak
        </button>
      </div>

      {/* Sign In Link */}
      <p className="mt-2 text-xs sm:text-sm text-center">
        oekgu;a .sKqula ;sfío@
        <a href="/SignIn" className="text-green-900 hover:underline">mqrkak</a>
      </p>
    </div>
  );
};

export default SignUp;

