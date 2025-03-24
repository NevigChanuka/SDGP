import React from "react"; // Import React
import Feedback_img from "../assets/feedbackimage.png"; // Import the feedback image
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

// Define the R_Sidebar component
const R_Sidebar: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing

  return (
    // Sidebar container with fixed positioning and styling
    <div className="fixed flex flex-col w-25 items-center text-center top-110 right-1 z-40">
      {/* Feedback Button */}
      <button
        className='flex flex-col w-22 h-22 border-3 rounded-lg m-2 p-3 items-center justify-center cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
        onClick={() => navigate('/feedback')} // Navigate to the feedback page on click
      >
        {/* Feedback Image */}
        <img className='flex w-8 h-8 mb-3' src={Feedback_img} alt="Feedback_picture" />
        {/* Feedback Text */}
        <p className='text-xs'>m%;spdr</p>
      </button>
    </div>
  );
};

export default R_Sidebar; // Export the R_Sidebar component