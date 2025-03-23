import React,{useState} from 'react';
import Header from '../components/Header.jsx';
import Left_Sidebar from '../components/L_Sidebar.jsx';
import Right_Sidebar from '../components/R_Sidebar.jsx';
import SinhalaTyping from '../components/SinhalaTyping.js';

const Feedback: React.FC = () => {

  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Feedback Submitted:", feedback);
    setFeedback("");
  }
    
  return (
        <div className='relative size-full flex flex-col'>
            <Header />
            <div >
                <Left_Sidebar/>
                <div className='mt-20  items-center'>
                    <div className="flex flex-col items-center justify-center">
                        <form 
                            onSubmit={handleSubmit} 
                            className="w-[70%] max-w-3xl  p-6 rounded-lg"
                        >
                            <SinhalaTyping
                                className="border-2  p-3 rounded-lg resize-none bg-white h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100"
                                placeholder="මෙතන ලියන්න...."
                                value={feedback}
                            />
                            <div className="flex justify-end mt-3">
                                <button 
                                    type="submit"
                                    className=" px-6 py-2 rounded-lg border-2 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400"
                                >
                                    bÈßm;a lrkak
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <Right_Sidebar/>
            </div>
            
        </div>

  )
}

export default Feedback;
