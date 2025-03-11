import React from "react";
import { useNavigate} from "react-router-dom";
import Logo_img from "../assets/logo.png";
import ProfileDropdown from "../components/ProfileDropdown";

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-row justify-between items-center w-full h-21 z-50 bg-white-200">
            <img
                className="w-26 cursor-pointer ml-5"
                onClick={() => navigate('/')}
                src={Logo_img} 
                alt="Logo"
            />
            <h1 className="text-center font-header text-4xl">Sinhala Grammar Checker</h1>
            <ProfileDropdown/>
        </div>
    );
};

export default Header;