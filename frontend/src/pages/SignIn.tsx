import React, { useState } from "react";
import GoogleIcon from "../assets/Google.png";
import FacebookIcon from "../assets/Facebook.png";
import AppleIcon from "../assets/Apple.png";
import  Logo  from "../assets/logobru.png";
import { useNavigate } from "react-router-dom";


const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (email !== registeredEmail) {
      setError("අවලංගු ආදානයකි. කරුණාකර නැවත උත්සාහ කරන්න.");
    } else if (password !== registeredPassword) {
      setError("අවලංගු ආදානයකි. කරුණාකර නැවත උත්සාහ කරන්න.");
    } else {
      setError("");
      alert("පුරනය වීම සාර්ථකයි");
    }
  };

  return (
     
       <div className="w-[30%] h-[680px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
          <div className="w-full flex flex-col items-center cusrsor-pointer">
            <img className="w-40" src={Logo} alt="Vyakarana logo" onClick={() =>navigate('/')} />
            <h2 className="text-center text-lg font-normal mt-2 font-CCWelikala">mqrkak</h2>
          </div>  
      

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoComplete="off"
              className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-1 focus:ring focus:ring-black-300 outline-none"
              placeholder=" "
            />
            <label htmlFor="B ;emE,"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700 font-CCWelikala">
              B ;eme,
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              autoComplete="off"
              className="peer w-full border border-gray-300 rounded px-3 pt-5 pb-1 focus:ring focus:ring-black-300 outline-none"
              placeholder=" "
            />
            <label htmlFor="uqrmoh"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-700 font-CCWelikala">
              uqrmoh                   
            </label>
          </div>

          {error && <p className="text-red-500 text-xs text-center">{error}</p>}

          <button type="submit" className="mt-1 w-24 py-2 rounded-full border-3 border-[#0d8065] hover:scale-105 transition duration-400 hover:bg-[#0d8065] hover:text-white cursor-pointer mx-auto font-CCWelikala">
          mqrkak           
          </button>

          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
            <span className="mx-2 text-sm font-bold sm:text-base font-CCWelikala">fyda</span>
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-4" />
        </div>

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

          <p className="text-center text-sm font-CCWelikala">
             kj mßYS,lfhlao 
            <a className="text-green-900 hover:underline" onClick={() => navigate('/sign-up')}>
            .sKqula idokak 
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
