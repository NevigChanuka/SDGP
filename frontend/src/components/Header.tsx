import React from "react";
import image from "../assets/newlogo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  
  const navigate = useNavigate();    

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className="backdrop-blur-xs backdrop-grayscale border-b-1 p-3  sticky top-0 z-1">
      <div className="flex justify-between items-center">
        <div className="absolute ml-5 w-25 h-10  cursor-pointer z-10">
          <img className="" src={image} alt="Vyakarana logo" onClick={() =>navigate('/')} />
        </div>

        {/* Navigation Links  */}
        <div className="relative  w-full">
          <div className="font-sinhasithumina text-zinc-950 text-5xl text-center">
            <h2> isxy, jHdlrK mÍlaIl</h2>
          </div>
        </div>

        
        <div className="relative">

            </div>
        </div>
    </nav>
  );
};

export default NavBar;
