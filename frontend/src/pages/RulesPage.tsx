import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Header from "../components/Header";
import Left_Sidebar from "../components/L_Sidebar";
import Right_Sidebar from "../components/R_Sidebar";

const BACKEND_URL = 'http://127.0.0.1:5000';
const RULE_IMAGES = ['rule1.png', 'rule2.png', 'rule3.png', 'rule4.png', 'rule5.png'];
const AUTO_SWITCH_INTERVAL = 5000; 


const RulesPage: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    let intervalId: number | undefined;

    if (isPlaying) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === RULE_IMAGES.length - 1 ? 0 : prevIndex + 1
        );
      }, AUTO_SWITCH_INTERVAL);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? RULE_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === RULE_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleAutoPlay = () => {
    setIsPlaying(prev => !prev);
  };



  return (
    <div className="relative size-full flex flex-col">
      <Header />
      <div>
        <Left_Sidebar />
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">ව්‍යාකරණ රීති</h2>
          <div className="relative bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center justify-between">
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Previous rule"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
          
              <div className="w-full">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h3 className="text-lg font-semibold">
                  රීති {currentIndex + 1} / {RULE_IMAGES.length}
                  </h3>
                  
                </div>
                <img
                  src={`${BACKEND_URL}/api/grammar-rules/${RULE_IMAGES[currentIndex]}`}
                  alt={`Grammar Rule ${currentIndex + 1}`}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Next rule"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {RULE_IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#0d8065] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to rule ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <Right_Sidebar />
      </div>
    </div>
  );
}

export default RulesPage;