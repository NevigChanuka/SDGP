import React from "react";
import { useNavigate } from 'react-router-dom';
import Feedback_img from "../assets/feedbackimage.png";
import Settings_img from "../assets/settingsimage.png";

const R_Sidebar:React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-col w-25 items-center text-center bottom-20 right-0 z-40">
            <button className='flex flex-col border-1 rounded-lg m-2 p-3 items-center justify-center cursor-pointer border-sky-600 bg-blue-400 hover:bg-sky-600' onClick={() => navigate('/settings')}>
                <img className='flex w-8 h-8' src={Settings_img} alt="Paraphrase_picture"/>
                <p className='text-xs ml-1 mr-1'>Settings</p>
            </button>
            <button className='flex flex-col border-1 rounded-lg m-2 p-3 items-center justify-center cursor-pointer border-sky-600 bg-blue-400 hover:bg-sky-600 'onClick={() => navigate('/feedback')}>
                <img className='flex w-8 h-8' src={Feedback_img} alt="Paraphrase_picture"/>
                <p className='text-xs'>Feedback</p>
            </button>
        
        </div> 
    )
}

export default R_Sidebar;