import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import  Logo  from "../assets/logobru.png";
import GoogleIcon from "../assets/Google.png";
import FacebookIcon from "../assets/Facebook.png";
import AppleIcon from "../assets/Apple.png";
import { useNavigate } from "react-router-dom";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("නම අවශ්‍ය වේ"),
  email: yup.string().email("වලංගු නොවන ඊමේල් ආකෘතිය").required("විද්‍යුත් තැපෑල අවශ්‍ය වේ"),
  password: yup.string().min(6, "මුරපදය අවම වශයෙන් අක්ෂර 6 ක් විය යුතුය").required("මුරපදය අවශ්‍ය වේ"),
  confirmPassword: yup.string()
    .oneOf([yup.ref("password"), undefined], "මුරපද ගැළපිය යුතුයි")
    .required("මුරපදය තහවුරු කිරීම අවශ්‍ය වේ"),
});

const SignUp: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  const navigate = useNavigate();
  
  const onSubmit = (data: any) => {
    localStorage.setItem("registeredEmail", data.email); // Store email in localStorage
    localStorage.setItem("registeredPassword", data.password); // Store password in localStorage
    alert("ගිණුම සාර්ථකව නිර්මාණය කරන ලදී! දැන් පුරනය වන්න.");
  };

  return (
    <div className="w-[30%] h-[680px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
          <div className="w-full flex flex-col items-center cusrsor-pointer">
            <img className="w-40" src={Logo} alt="Vyakarana logo" onClick={() =>navigate('/')} />
            <h2 className="text-center text-lg font-medium mt-2 font-sinhasithumina">.sKqula ;kkak</h2>
          </div>  

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full p-4">
        <div className="flex flex-col items-center w-full max-w-sm">
          {/* Name Input */}
          <input type="text" {...register("name")} placeholder="නම" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.name?.message}</p>

          {/* Email Input */}
          <input type="text" {...register("email")} placeholder="විද්‍යුත් තැපෑල" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>

          {/* Password Input */}
          <input type="password" {...register("password")} placeholder="මුරපදය ඇතුළත් කරන්න" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.password ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>

          {/* Confirm Password Input */}
          <input type="password" {...register("confirmPassword")} placeholder="නැවත මුරපදය ඇතුළත් කරන්න" autoComplete="off"
            className={`mt-4 rounded border h-8 px-3 w-full ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`} />
          <p className="text-red-500 text-xs">{errors.confirmPassword?.message}</p>

          {/* Submit Button */}
          <button type="submit" className="mt-3 px-4 py-2 font-CCWelikala rounded-full border-3 border-[#0d8065] hover:scale-105 transition duration-400 hover:bg-[#0d8065] hover:text-white cursor-pointer">
          ks¾udKh lrkak
          </button>
        </div>
      </form>

      {/* Divider */}
      <div className="flex items-center justify-center w-full">
        <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
        <span className="mx-2 text-sm font-bold sm:text-base font-CCWelikala">fyda</span>
        <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex flex-col items-center justify-center w-full mt-3">
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold font-CCWelikala text-black bg-white rounded-full border-3 border-[#0d8065] hover:scale-105 transition duration-400 hover:bg-[#0d8065] hover:text-white cursor-pointer">
          <img src={GoogleIcon} alt="Google" className="w-4 h-4 mr-5"/>
          iu.ska mqrkak
        </button>
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold font-CCWelikala text-black bg-white rounded-full border-3 border-[#0d8065] hover:scale-105 transition duration-400 hover:bg-[#0d8065] hover:text-white cursor-pointer">
          <img src={FacebookIcon} alt="Facebook" className="w-5 h-5 mr-2.5"/>
          iu.ska mqrkak
        </button>
        <button className="flex items-center justify-center w-4/5 h-8 px-4 my-1 text-sm font-bold font-CCWelikala text-black bg-white rounded-full border-3 border-[#0d8065] hover:scale-105 transition duration-400 hover:bg-[#0d8065] hover:text-white cursor-pointer">
          <img src={AppleIcon} alt="Apple" className="w-3.5 h-3.5 mr-7"/>
          iu.ska mqrkak
        </button>
      </div>

      {/* Sign In Link */}
      <p className="mt-2 text-xs sm:text-sm text-center font-CCWelikala">
        oekgu;a .sKqula ;sfío@
        <a className="text-green-900 hover:underline" onClick={() => navigate('/sign-in')}>mqrkak</a>
      </p>
    </div>
  );
};

export default SignUp;

