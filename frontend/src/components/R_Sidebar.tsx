import React from "react";
import { useNavigate } from 'react-router-dom';
import Feedback_img from "../assets/feedbackimage.png";

const R_Sidebar:React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-col w-25 items-center text-center top-110 right-0 z-40">
            <button className='flex flex-col border-2 rounded-lg m-2 p-3 items-center justify-center cursor-pointer border-green-600 bg-green-500 hover:bg-green-600 'onClick={() => navigate('/feedback')}>
                <img className='flex w-8 h-8' src={Feedback_img} alt="Paraphrase_picture"/>
                <p className='text-xs'>Feedback</p>
            </button>
        
        </div> 
    )
}

export default R_Sidebar;