import React, { useState, useEffect } from 'react'; // Import React and hooks
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'; // Import icons from lucide-react
import Header from "../components/Header"; // Import the Header component
import Left_Sidebar from "../components/L_Sidebar"; // Import the Left_Sidebar component
import Right_Sidebar from "../components/R_Sidebar"; // Import the Right_Sidebar component

// Define constants for the backend URL, rule images, and auto-switch interval
const BACKEND_URL = 'http://127.0.0.1:5000'; // Backend URL for fetching rule images
const RULE_IMAGES = ['rule1.png', 'rule2.png', 'rule3.png', 'rule4.png', 'rule5.png']; // List of rule image filenames
const AUTO_SWITCH_INTERVAL = 5000; // Interval for auto-switching rules (5 seconds)

// Define the RulesPage component
const RulesPage: React.FC = () => {
  // State to track the current rule index
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to track if auto-play is enabled
  const [isPlaying, setIsPlaying] = useState(true);

  // Effect to handle auto-switching of rules
  useEffect(() => {
    let intervalId: number | undefined;

    // Set up an interval to switch rules automatically if auto-play is enabled
    if (isPlaying) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === RULE_IMAGES.length - 1 ? 0 : prevIndex + 1 // Loop back to the first rule after the last one
        );
      }, AUTO_SWITCH_INTERVAL);
    }

    // Cleanup the interval when the component unmounts or auto-play is disabled
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]); // Dependency array ensures the effect runs when `isPlaying` changes

  // Function to go to the previous rule
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? RULE_IMAGES.length - 1 : prevIndex - 1 // Loop to the last rule if at the first rule
    );
  };

  // Function to go to the next rule
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === RULE_IMAGES.length - 1 ? 0 : prevIndex + 1 // Loop to the first rule if at the last rule
    );
  };

  // Function to toggle auto-play on/off
  const toggleAutoPlay = () => {
    setIsPlaying(prev => !prev); // Toggle the `isPlaying` state
  };

  return (
    // Main container for the RulesPage
    <div className="relative size-full flex flex-col">
      {/* Render the Header component */}
      <Header />
      <div>
        {/* Render the Left_Sidebar component */}
        <Left_Sidebar />
        {/* Container for the rules content */}
        <div className="max-w-4xl mx-auto p-6">
          {/* Page heading */}
          <h2 className="text-2xl font-bold mb-6 text-center">ව්‍යාකරණ රීති</h2>
          {/* Container for the rule image and controls */}
          <div className="relative bg-white rounded-lg shadow-md p-4">
            {/* Flex container for navigation buttons and rule content */}
            <div className="flex items-center justify-between">
              {/* Previous button */}
              <button
                onClick={goToPrevious} // Go to the previous rule on click
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Previous rule"
              >
                <ChevronLeft className="w-6 h-6" /> {/* Previous icon */}
              </button>
          
              {/* Rule content */}
              <div className="w-full">
                {/* Rule counter */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h3 className="text-lg font-semibold">
                    රීති {currentIndex + 1} / {RULE_IMAGES.length} {/* Display current rule number */}
                  </h3>
                </div>
                {/* Rule image */}
                <img
                  src={`${BACKEND_URL}/api/grammar-rules/${RULE_IMAGES[currentIndex]}`} // Fetch the current rule image from the backend
                  alt={`Grammar Rule ${currentIndex + 1}`} // Alt text for accessibility
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto" // Styling for the image
                />
              </div>

              {/* Next button */}
              <button
                onClick={goToNext} // Go to the next rule on click
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Next rule"
              >
                <ChevronRight className="w-6 h-6" /> {/* Next icon */}
              </button>
            </div>

            {/* Rule navigation dots */}
            <div className="flex justify-center gap-2 mt-4">
              {RULE_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)} // Go to the specific rule on click
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#0d8065] scale-110' // Highlight the current rule dot
                      : 'bg-gray-300 hover:bg-gray-400' // Default styling for other dots
                  }`}
                  aria-label={`Go to rule ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Render the Right_Sidebar component */}
        <Right_Sidebar />
      </div>
    </div>
  );
}

export default RulesPage; // Export the RulesPage component