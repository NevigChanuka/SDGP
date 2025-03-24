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

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  

  return (
    <nav className="backdrop-blur-xs backdrop-grayscale border-b-1 p-3  sticky top-0 z-1">
      <div className="flex justify-between items-center">
        <div className="ml-5 w-25 h-10  cursor-pointer">
          <img className="" src={image} alt="Vyakarana logo" onClick={() =>navigate('/')} />
        </div>

        {/* Navigation Links  */}
        <div className="relative">
          <div className="font-sinhasithumina text-zinc-950 text-5xl">
            <h2> isxy, jHdlrK mÍlaIl</h2>
          </div>
        </div>

        
        <div className="relative" ref={dropdownRef}>
            <button 
                className="flex items-center focus:outline-none"
                onClick={toggleDropdown}
            >
                <img 
                    src="https://i.pravatar.cc/150?img=32" 
                    alt="Profile" 
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                />
            </button>

      
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg overflow-hidden z-10">
                    <div className="px-4 py-3 text-center border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-800">####</p>
                        <p className="text-xs text-gray-500">####</p>
                    </div>

                    <ul className="py-1">
                        <li>
                            <a 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-CCWelikala"
                            >
                                WmlrK mqjrej
                            </a>
                        </li>
                        <li>
                            <a 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-CCWelikala" onClick={() => navigate('/sign-in')}
                            >
                                mqrkak
                            </a>
                        </li>
                        <li>
                            <a 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-CCWelikala" onClick={() => navigate('/sign-up')}
                            >
                                ,shdmÈxÑ jkak
                            </a>
                        </li>
                        <li className="border-t border-gray-100">
                            <a 
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-CCWelikala"
                            >
                                jrkak
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            </div>
        </div>
    </nav>
  );
};

export default NavBar;
