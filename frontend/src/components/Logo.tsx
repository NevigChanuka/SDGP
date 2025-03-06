import React from "react";
import logo from "../assets/logo.png";

export const Logo:React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-[130px] h-[60px]"/>
        </div>
    )
}