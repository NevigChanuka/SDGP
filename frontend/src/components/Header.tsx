import React from "react"; // Import React
import image from "../assets/newlogo.png"; // Import the logo image
import { useState, useEffect, useRef } from "react"; // Import React hooks
import { useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Define the NavBar component
const NavBar: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing

  // State to manage the dropdown's open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Ref to track the dropdown element for handling clicks outside
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the dropdown if the click is outside the dropdown element
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener for mouse clicks
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // Navigation bar container with styling
    <nav className="backdrop-blur-xs backdrop-grayscale border-b-1 p-3 sticky top-0 z-1">
      {/* Flex container for logo, navigation links, and other elements */}
      <div className="flex justify-between items-center">
        {/* Logo container */}
        <div className="absolute ml-5 w-25 h-10 cursor-pointer z-10">
          {/* Logo image with click handler to navigate to the home page */}
          <img className="" src={image} alt="Vyakarana logo" onClick={() => navigate('/')} />
        </div>

        {/* Navigation links container */}
        <div className="relative w-full">
          {/* Centered heading with Sinhala text */}
          <div className="font-sinhasithumina text-zinc-950 text-5xl text-center">
            <h2> isxy, jHdlrK mÍlaIl</h2>
          </div>
        </div>

        {/* Placeholder for additional elements (e.g., dropdown, buttons) */}
        <div className="relative">
          {/* Additional elements can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar; // Export the NavBar component