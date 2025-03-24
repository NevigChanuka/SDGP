import React from "react"; // Import React
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import Paraphrase_img from "../assets/Paraphrasing image.png"; // Import image for paraphrasing
import G_check_img from "../assets/grammarcheckerimage.png"; // Import image for grammar checker
import Rules_img from "../assets/Rulesimage.png"; // Import image for rules

// Define the L_Sidebar component
const L_Sidebar: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate function for routing

  return (
    // Sidebar container with fixed positioning and styling
    <div className="fixed flex flex-col items-center text-center w-25 z-40 left-1 gap-3">
      {/* Grammar Checker Button */}
      <button
        className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 lg:mt-25 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
        onClick={() => navigate('/grammar-checker')} // Navigate to the grammar checker page on click
      >
        {/* Grammar Checker Image */}
        <img className='flex w-9 h-11' src={G_check_img} alt="Paraphrase_picture" />
        {/* Grammar Checker Text */}
        <p className='text-[12px] ml-2 mr-2'>jHdlrK mÍlaIlh</p>
      </button>

      {/* Similar Words Button */}
      <button
        className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
        onClick={() => navigate('/similar-words')} // Navigate to the similar words page on click
      >
        {/* Similar Words Image */}
        <img className='flex max-w-full h-9 mt-2' src={Paraphrase_img} alt="Paraphrase_picture" />
        {/* Similar Words Text */}
        <p className='text-[12px] mb-2 mt-2'>iudk mo</p>
      </button>

      {/* Words Set Button */}
      <button
        className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
        onClick={() => navigate('/words-set')} // Navigate to the words set page on click
      >
        {/* Words Set Image */}
        <img className='flex max-w-full h-9 mt-2' src={Paraphrase_img} alt="Paraphrase_picture" />
        {/* Words Set Text */}
        <p className='text-[12px] mb-2 mt-2'>jpk iuQyh</p>
      </button>

      {/* Rules Button */}
      <button
        className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
        onClick={() => navigate('/rules')} // Navigate to the rules page on click
      >
        {/* Rules Image */}
        <img className='flex max-w-full h-9 mt-2' src={Rules_img} alt="Rules_picture" />
        {/* Rules Text */}
        <p className='text-[12px] mb-2 mt-2'>jHdlrK kS;s</p>
      </button>
    </div>
  );
};

export default L_Sidebar; // Export the L_Sidebar component