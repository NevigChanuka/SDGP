import React from "react";
import { useNavigate } from 'react-router-dom';
import Paraphrase_img from "../assets/Paraphrasing image.png";
import G_check_img from "../assets/grammarcheckerimage.png";
import Rules_img from "../assets/Rulesimage.png";

const L_Sidebar:React.FC = () => {

    const navigate = useNavigate();
    return (
        <div className="fixed flex flex-col items-center  text-center w-25 z-40 left-1 gap-3">
            <button className='flex flex-col w-22 h-22 border-3  items-center justify-center rounded-lg p-1 lg:mt-25 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400' onClick={() => navigate('/grammar-checker')}>
                <img className='flex w-9 h-11 ' src={G_check_img} alt="Paraphrase_picture"/>
                <p className='text-[12px] ml-2 mr-2'>jHdlrK mÍlaIlh</p>
            </button>
            <button className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400'onClick={() => navigate('/')}>
                <img className='flex max-w-full h-9 mt-2  ' src={Paraphrase_img} alt="Paraphrase_picture"/>
                <p className='text-[12px] mb-2 mt-2'>iudk mo</p>
            </button>
            <button className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400'onClick={() => navigate('/')}>
                <img className='flex max-w-full h-9 mt-2  ' src={Paraphrase_img} alt="Paraphrase_picture"/>
                <p className='text-[12px] mb-2 mt-2'>jpk iuQyh</p>
            </button>
            <button className='flex flex-col w-22 h-22 border-3 items-center justify-center rounded-lg p-1 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110  transition duration-400'onClick={() => navigate('/')}>
                <img className='flex max-w-full h-9 mt-2  ' src={Rules_img} alt="Rules_picture"/>
                <p className='text-[12px] mb-2 mt-2'>jHdlrK kS;s</p>
            </button>
        
        </div>   
    )
}

export default L_Sidebar;