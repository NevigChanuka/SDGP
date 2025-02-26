import React from "react";
import { useNavigate } from 'react-router-dom';
import Paraphrase_img from "../assets/Paraphrasing image.png";
import G_check_img from "../assets/grammarcheckerimage.png";

const L_Sidebar:React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-col items-center text-center w-25 z-40">
            <button className='flex flex-col border-1  items-center justify-center rounded-lg m-4 p-2 mt-50 cursor-pointer border-sky-600 bg-blue-400 hover:bg-sky-600' onClick={() => navigate('/grammar-checker')}>
                <img className='flex w-9 h-9 ' src={G_check_img} alt="Paraphrase_picture"/>
                <p className='text-[12px] ml-2 mr-2'>Grammar Checker</p>
            </button>
            <button className='flex flex-col border-1 items-center justify-center rounded-lg m-4 p-2 cursor-pointer border-sky-600 bg-blue-400 hover:bg-sky-600'onClick={() => navigate('/paraphrase')}>
                <img className='flex max-w-full h-9 mt-2 ' src={Paraphrase_img} alt="Paraphrase_picture"/>
                <p className='text-[12px] mb-2'>Pharaphaser</p>
            </button>
        
        </div>   
    )
}

export default L_Sidebar;