import React from "react";
import Feedback_img from "../assets/feedbackimage.png";
import { useNavigate } from 'react-router-dom';

const R_Sidebar:React.FC = () => {

    const navigate = useNavigate();

    return (
        <div className="fixed flex flex-col w-25 items-center text-center top-110 right-1 z-40">
            <button className='flex flex-col w-22 h-22 border-3 rounded-lg m-2 p-3 items-center justify-center cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400' onClick={()=> navigate('/feedback')} >
                <img className='flex w-8 h-8 mb-3' src={Feedback_img} alt="Paraphrase_picture"/>
                <p className='text-xs '>m%;spdr</p>
            </button>
        
        </div> 
    )
}

export default R_Sidebar;