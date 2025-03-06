import React from "react";
import { useForm } from "react-hook-form"; {/*importing useForm from react-hook-form for validation*/}
import { yupResolver } from "@hookform/resolvers/yup"; {/*importing yupResolver from @hookform/resolvers/yup for validation*/}
import * as yup from "yup"; {/*importing yup for validation*/}
import {Logo}  from "../components/Logo";
import GoogleIcon from "../assets/Google.png";
import FacebookIcon from "../assets/Facebook.png";
import AppleIcon from "../assets/Apple.png";

{/*creating a schema for validation*/}
const schema = yup.object().shape( 
    {
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
    }
);

const SignUp: React.FC = () => {

    {/*using useForm hook to register the form and handle the submit*/}
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    {/*function to handle the submit*/}
    const onSubmit = (data: any) => {
        console.log("Form data", data);
    };
  return (
    <div className="w-[30%] h-[640px] mx-auto mt-12 bg-white p-10 rounded-2xl shadow-2xl border border-green-900">
        <Logo/>
      <h2 className="text-center text-lg font-medium mt-2">Create an account</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full p-4"> {/*onSubmit function is called when the form is submitted*/}

            {/*input fields for name, email, password and confirm password*/}
            <div className="flex flex-col items-center w-full max-w-sm">

            
                {/*if there is an error in the name field, border color will be red, otherwise it will be gray*/}   
                <input
                    type="text"
                    {...register("name")}
                    id="name"
                    placeholder="Name"
                    autoComplete="off"
                    className={`mt-4 rounded border h-8 px-3 w-full ${errors.name ? "border-red-500" : "border-gray-300"}`} 
                    
                />
                {/*if there is an error in the name field, display the error message*/}
                <p className="text-red-500 text-xs">{errors.name?.message}</p>


                {/* if there is an error in the email field, border color will be red, otherwise it will be gray */}
                <input
                    type="text"
                    {...register("email")}
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    className={`mt-4 rounded border h-8 px-3 w-full ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    
                />
                {/*if there is an error in the email field, display the error message*/}
                <p className="text-red-500 text-xs">{errors.email?.message}</p>


                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-8 px-3 w-full"
                />

                <input
                    type="password"
                    id="Confirm password"
                    placeholder="Confirm password"
                    autoComplete="off"
                    className="mt-4 rounded border border-gray-300 h-8 px-3 w-full"
                />

                <button type="submit" className="mt-3 px-5 py-2 bg-green-400 text-white rounded-md hover:bg-green-500 cursor-pointer">
                    Create
                </button>

            </div>

        </form>

        <div className="flex items-center justify-center w-full">
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-3"/>
            <span className="mx-2 text-sm font-semibold sm:text-base">OR</span>
            <hr className="flex-grow h-[2px] bg-black border-none mx-2 sm:mx-3"/>
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

        <p className="mt-2 text-xs sm:text-sm text-center">
            Already have an account? 
            <a href="#" className="text-purple-700 hover:underline"> Sign in</a>
        </p>

      
    </div>
  );
};

export default SignUp;