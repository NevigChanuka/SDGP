import React from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import Header from '../components/Header.js'
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';
import SinhalaTyping from '../components/SinhalaTyping';
import { JSX } from 'react/jsx-runtime';

const SimilarWords: React.FC = () => {
    // Create an Axios instance with default settings
    const api = axios.create({
        baseURL: "http://127.0.0.1:5000/api", // Change to your backend URL
        headers: {
          "Content-Type": "application/json",
        },
    });

    // State to store the transliterated Sinhala text
    const [inputText, setInputText] = useState('');
    const [selectedWord, setSelectedWord] = useState('');
    const [responseData, setResponseData] = useState<any>(null);
    const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
    const [, setShowPopup] = useState(false);
    
    // Reference to the SinhalaTyping component container
    const typingContainerRef = useRef<HTMLDivElement>(null);
    
    // Handle text input change from SinhalaTyping
    const handleChange = (value: string) => {
        setInputText(value);
        setSelectedWord(''); // Clear selected word when text changes
        setResponseData(null); // Clear response data
        setShowPopup(false); // Hide popup
    };

    // Function to handle word selection and find synonyms
    const handleWordClick = async (word: string, event: React.MouseEvent) => {
        // Get the position of the clicked word
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const containerRect = typingContainerRef.current?.getBoundingClientRect() || { top: 0, left: 0 };
        
        // Calculate position relative to the container
        const x = rect.left - containerRect.left + (rect.width / 2);
        const y = rect.bottom - containerRect.top;
        
        setPopupPosition({ x, y });
        setSelectedWord(word);
        
        try {
            const payload = { word };
            const response = await api.post("/synonym-words", payload);
            setResponseData(response.data);
            setShowPopup(true);
        } catch (error) {
            console.error('Error fetching similar words:', error);
        }
    };

    // Custom SinhalaTyping wrapper with word selection capability
    const EnhancedSinhalaTyping = () => {
        // Split the text into words and make them clickable
        const renderClickableText = () => {
            if (!inputText) return <p className="text-gray-400">මෙතන ලියන්න....</p>;
            
            // Create an array to hold all elements (words and spaces)
            const textElements: JSX.Element[] = [];
            const words = inputText.split(/\s+/);
            
            words.forEach((word, index) => {
                // Add the word
                textElements.push(
                    <span
                        key={`word-${index}`}
                        onClick={(e) => handleWordClick(word, e)}
                        className={`cursor-pointer ${
                            word === selectedWord 
                                ? 'bg-blue-200 hover:bg-blue-300' 
                                : 'hover:bg-gray-100'
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
                ref={typingContainerRef}
                className="w-full h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100 p-4 border-r-2 outline-none relative overflow-auto"
            >
                <div className="text-lg leading-relaxed">
                    {renderClickableText()}
                </div>
                
                <SinhalaTyping
                    placeholder=""
                    className="absolute w-full h-max opacity-0"
                    onChange={handleChange}
                    value={inputText}
                />
            </div>
        );
    };

    return (
        <div className='relative w-full flex flex-col'>
            <Header />
            <div>
                <Left_Sidebar/>
                <div className='items-center size-full'>
                    <div className="flex justify-center items-center mt-25">
                        <div className="flex border-2 rounded-lg p-4 w-[65%] bg-white shadow-lg">
                            <div className="w-[50%] relative">
                                <div className="font-semibold mb-2 text-center">Write Text</div>
                                {EnhancedSinhalaTyping()}
                            </div>
                            
                            <div className='w-[50%] ml-4'>
                                <div className="font-semibold mb-2 text-center">සමාන පද</div>
                                <div className="w-full p-4 rounded-lg h-full">
                                    {selectedWord ? (
                                        <div className="text-center">
                                            <h3 className="font-semibold mb-3">Selected: <span className="bg-blue-200 px-2 py-1 rounded">{selectedWord}</span></h3>
                                            {responseData && responseData.response ? (
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
                                                <p className="text-gray-500">සමාන වචන පූරණය කරමින්...</p>
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-gray-500 text-center">සමාන වචන බැලීමට ඔබේ පෙළෙන් වචනයක් තෝරන්න.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Right_Sidebar/>
            </div>
        </div>
    )
}

export default SimilarWords;