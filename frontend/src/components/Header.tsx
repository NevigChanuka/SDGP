import React from "react";
import { useNavigate} from "react-router-dom";
import Logo_img from "../assets/logo.jpg";
import Login_img from "../assets/login.jpg";

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-row justify-between items-center w-full h-21 z-50">
            <img
                className="rounded-full w-12 h-12 m-5 cursor-pointer"
                onClick={() => navigate('/')}
                src={Logo_img} 
                alt="Logo"
            />
            <h1 className="text-center font-header text-4xl">Sinhala Grammar Checker</h1>
            <img
                className="rounded-full w-12 h-12 m-5 cursor-pointer"
                src={Login_img} 
                alt="Login"
            />
        </div>
    );
};

export default Header;