import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileDropdown: React.FC = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      {/* Profile Icon */}
      <button onClick={toggleDropdown} className="focus:outline-none">
        <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-white-800 shadow-lg rounded-lg overflow-hidden border dark:border-white-700">
          <ul className="text-white-700 dark:text-white-300">
            <li className="px-4 py-2 hover:bg-green-200 dark:hover:bg-green-500 cursor-pointer">
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-green-200 dark:hover:bg-green-500 cursor-pointer" onClick={()=> navigate('/signin')}>
              Sign In
            </li>
            <li className="px-4 py-2 hover:bg-green-200 dark:hover:bg-green-500 cursor-pointer" onClick={()=> navigate('/signup')}>
              Sign up
            </li>
            <li className="px-4 py-2 hover:bg-green-200 dark:hover:bg-green-500 cursor-pointer">
              Logout
            </li>
            {/* Dark Mode Toggle */}
            <li
              className="px-4 py-2 flex items-center justify-between hover:bg-green-200 dark:hover:bg-green-500 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
