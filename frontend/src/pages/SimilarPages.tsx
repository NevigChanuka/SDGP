import React from 'react';
import {useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.js'
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';
import SinhalaTyping from '../components/SinhalaTyping';


const SimilarWords: React.FC = () => {

    const [text, setText] = useState("");
    const [paraphrasedText, setParaphrasedText] = useState("");

    return (
        <div className='relative w-full flex flex-col'>
            <Header />
            <div>
                <Left_Sidebar/>
                <div className='items-center size-full'>
                    <div className="flex justify-center items-center mt-25">
                        <div className="border-2 rounded-lg p-4 w-[65%] bg-white shadow-lg">
                            <div>
                                <SinhalaTyping
                                    placeholder="මෙතන ලියන්න...."
                                    className="w-[50%] h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100 p-2 border-r outline-none resize-none"
                                />
                                <textarea
                                    className="p-2 outline-none resize-none"
                                    value={paraphrasedText}
                                    readOnly
                                />
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