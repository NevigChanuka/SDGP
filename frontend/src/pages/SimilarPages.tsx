import React from 'react'; // Import React
import { useState, useRef } from 'react'; // Import React hooks
import axios from 'axios'; // Import axios for making HTTP requests
import Header from '../components/Header.js'; // Import the Header component
import Left_Sidebar from '../components/L_Sidebar.tsx'; // Import the Left_Sidebar component
import Right_Sidebar from '../components/R_Sidebar.tsx'; // Import the Right_Sidebar component
import SinhalaTyping from '../components/SinhalaTyping'; // Import the SinhalaTyping component
import { JSX } from 'react/jsx-runtime'; // Import JSX type for TypeScript

// Define the SimilarWords component
const SimilarWords: React.FC = () => {
  // Create an Axios instance with default settings
  const api = axios.create({
    baseURL: "http://127.0.0.1:5000/api", // Backend API base URL
    headers: {
      "Content-Type": "application/json", // Set default headers
    },
  });

  // State to store the input text
  const [inputText, setInputText] = useState('');
  // State to store the selected word
  const [selectedWord, setSelectedWord] = useState('');
  // State to store the response data from the backend
  const [responseData, setResponseData] = useState<any>(null);
  // State to store the position of the popup
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  // State to control the visibility of the popup
  const [, setShowPopup] = useState(false);

  // Ref to access the SinhalaTyping container
  const typingContainerRef = useRef<HTMLDivElement>(null);

  // Handler for text input change
  const handleChange = (value: string) => {
    setInputText(value); // Update the input text
    setSelectedWord(''); // Clear the selected word
    setResponseData(null); // Clear the response data
    setShowPopup(false); // Hide the popup
  };

  // Handler for word click events
  const handleWordClick = async (word: string, event: React.MouseEvent) => {
    // Get the position of the clicked word
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const containerRect = typingContainerRef.current?.getBoundingClientRect() || { top: 0, left: 0 };

    // Calculate the position of the popup relative to the container
    const x = rect.left - containerRect.left + (rect.width / 2);
    const y = rect.bottom - containerRect.top;

    // Update the popup position and selected word
    setPopupPosition({ x, y });
    setSelectedWord(word);

    try {
      // Send the selected word to the backend to fetch synonyms
      const payload = { word };
      const response = await api.post("/synonym-words", payload);
      setResponseData(response.data); // Update the response data
      setShowPopup(true); // Show the popup
    } catch (error) {
      console.error('Error fetching similar words:', error); // Log errors
    }
  };

  // Enhanced SinhalaTyping component with clickable words
  const EnhancedSinhalaTyping = () => {
    // Function to render clickable text
    const renderClickableText = () => {
      if (!inputText) return <p className="text-gray-400">මෙතන ලියන්න....</p>; // Placeholder text

      // Split the input text into words
      const words = inputText.split(/\s+/);
      const textElements: JSX.Element[] = []; // Array to hold JSX elements

      // Loop through each word and make it clickable
      words.forEach((word, index) => {
        textElements.push(
          <span
            key={`word-${index}`}
            onClick={(e) => handleWordClick(word, e)} // Handle word click
            className={`cursor-pointer ${
              word === selectedWord 
                ? 'bg-blue-200 hover:bg-blue-300' // Highlight the selected word
                : 'hover:bg-gray-100' // Default hover effect
            }`}
          >
            {word}
          </span>
        );

        // Add a space after each word except the last one
        if (index < words.length - 1) {
          textElements.push(
            <span key={`space-${index}`} className="whitespace-pre"> </span>
          );
        }
      });

      return textElements;
    };

    return (
      <div 
        ref={typingContainerRef} // Ref to the container
        className="w-full h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100 p-4 border-r-2 outline-none relative overflow-auto"
      >
        {/* Render the clickable text */}
        <div className="text-lg leading-relaxed">
          {renderClickableText()}
        </div>
        
        {/* SinhalaTyping component for input */}
        <SinhalaTyping
          placeholder=""
          className="absolute w-full h-max opacity-0"
          onChange={handleChange} // Handle text changes
          value={inputText} // Controlled value
        />
      </div>
    );
  };

  return (
    // Main container for the SimilarWords page
    <div className='relative w-full flex flex-col'>
      {/* Render the Header component */}
      <Header />
      <div>
        {/* Render the Left_Sidebar component */}
        <Left_Sidebar/>
        <div className='items-center size-full'>
          <div className="flex justify-center items-center mt-25">
            {/* Container for the input and output sections */}
            <div className="flex border-2 rounded-lg p-4 w-[65%] bg-white shadow-lg">
              {/* Input section */}
              <div className="w-[50%] relative">
                {EnhancedSinhalaTyping()} {/* Render the enhanced SinhalaTyping component */}
              </div>
              
              {/* Output section */}
              <div className='w-[50%] ml-4'>
                <div className="font-semibold mb-2 text-center">සමාන පද</div>
                <div className="w-full p-4 rounded-lg h-full">
                  {selectedWord ? (
                    <div className="text-center">
                      {/* Display the selected word */}
                      <h3 className="font-semibold mb-3">Selected: <span className="bg-blue-200 px-2 py-1 rounded">{selectedWord}</span></h3>
                      {responseData && responseData.response ? (
                        // Display the list of similar words
                        <div className="bg-white p-3 rounded-md grid grid-cols-2 gap-2">
                          {responseData.response.map((word: string, index: number) => (
                            <div 
                              key={index} 
                              className="py-2 px-3 bg-gray-50 rounded-lg text-lg hover:bg-gray-100 transition-colors"
                            >
                              {word}
                            </div>
                          ))}
                        </div>
                      ) : (
                        // Loading message
                        <p className="text-gray-500">සමාන වචන පූරණය කරමින්...</p>
                      )}
                    </div>
                  ) : (
                    // Prompt to select a word
                    <p className="text-gray-500 text-center">සමාන වචන බැලීමට ඔබේ පෙළෙන් වචනයක් තෝරන්න.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Render the Right_Sidebar component */}
        <Right_Sidebar/>
      </div>
    </div>
  );
};

export default SimilarWords; // Export the SimilarWords component