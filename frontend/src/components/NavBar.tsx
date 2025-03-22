import React from "react";
import image from "../assets/newlogo.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState<string | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  
  // Function to show/hide the div when a button is clicked
  const toggleVisibility = (link: string) => {
    setTimeout(() => {
      setIsVisible((prev) => (prev === link ? null : link));
    }, 100); // 500ms delay before toggling visibility
  };

  // Hide the div when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // console.log("Event target:", (event.target as HTMLElement).localName);
      // console.log("Div ref:", divRef.current);
      console.log(isVisible);
      if (isVisible){
        console.log("Clicked outside the divvvvvvvv");
      }

      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsVisible(null); // Hide all divs
      } else {
        console.log("Clicked inside the div");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <nav className="backdrop-blur-xs backdrop-grayscale border-b-1 p-3  sticky top-0 z-1">
      <div className="flex justify-between items-center ">
        <div className="ml-5 w-25 h-10 cursor-pointer">
          <img className="" src={image} alt="Vyakarana logo" onClick={() =>navigate('/')}/>
        </div>

        {/* Navigation Links */}
        <div className="relative">
          <div className="font-sandaru text-zinc-950 text-2xl">
            <ul className="flex space-x-10">
            
              <li>
                <button className="">
                  <span className="font-semibold border-b-emerald-700  hover:border-b-3 p-1">uq,a msgqj</span>
                </button>
              </li>

              <li>
                <button className="" onClick={() => toggleVisibility("link1")}>
                  <span className="font-semibold border-emerald-700  hover:border-b-3 p-1">fuj,ï</span>
                </button>
                  {isVisible === "link1" && (
                    <div
                      ref={divRef}
                      className="flex flex-col justify-evenly left-20 top-11 mt-4 p-3 h-30 w-65 shadow-lg  border-1 bg-white  absolute"
                    >
                      <span className="hover:text-emerald-700 hover:font-semibold">jHdlrk mÍlaIlh</span>
                      <span className="hover:text-emerald-700 hover:font-semibold">iudk mo fiùu</span>
                    </div>
                  )}
              </li>

              <li>
                <button className="" onClick={() => toggleVisibility("link3")}>
                  <span className="font-semibold border-emerald-700 hover:border-b-3 p-1">bf.kSu</span>
                </button>
                  {isVisible === "link3" && (
                    <div 
                      ref={divRef}
                      className="flex flex-col justify-evenly left-50 top-11 mt-4 p-3 h-30 w-65 border-1 shadow-lg  bg-white absolute"
                    >
                      <span className="hover:text-emerald-700 hover:font-semibold">jHdlrk Wmfoia </span>
                      <span className="hover:text-emerald-700 hover:font-semibold">jpk iuQyh </span>
                    </div>
                  )}
              </li>

              <li>
                <button className="" onClick={() => toggleVisibility("link4")}>
                  <span className="font-semibold border-emerald-700  hover:border-b-3 p-1">woyia yd fhdackd</span>
                </button>
              </li>

            </ul>
          </div>
        </div>

        <div>
          <button className="font-CCWelikala border-4 border-emerald-700 w-30 h-10 rounded-full hover:bg-emerald-700 hover:text-white hover:scale-110  transition duration-400">
            <span>msúfikak</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
