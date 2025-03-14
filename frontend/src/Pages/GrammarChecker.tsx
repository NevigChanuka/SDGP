import { useState } from 'react';
import axios from 'axios';

import Header from '../components/Header.jsx';
import Left_Sidebar from '../components/L_Sidebar.jsx';
import Right_Sidebar from '../components/R_Sidebar.jsx';


import Paste_text from "../assets/textpaste_img.png";
import Upload_doc from "../assets/uploadfile_img.png";

const GrammarCheckerPage: React.FC = () => {
    const[text,setText] = useState<string>('');

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const sendTextToBackend = async () => {
        try{
            const response = await axios.post<{message:String}>('#',{text});
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error',error);
        }
        
    };

    return (
        <div className='relative w-full h-1/12 flex flex-col'>
        <Header />
        <div >
            <Left_Sidebar/>
            <div className='mt-20 lg:mt-20 items-center text-center'>
                <div>
                    <h1 className='text-[18px] md:text-[24px]'>Grammar Check</h1>
                    <div>
                        <section className='flex flex-col sm:flex-row items-center justify-center text-center gap-1 mt-10 mb-6 md:mt-5 md:gap-20 xl:gap-50'>
                            <button className='flex flex-row p-[4px] border-2 rounded-lg gap-5 pl-8 pr-8 cursor-pointer border-green-600 bg-green-500 hover:bg-green-600'>
                                <img className ='w-6 h-6 md:w-5 md:h-6' src={Paste_text} alt="Paste text image" />
                                <p>Paste Text</p>
                            </button>
                            <button className='flex flex-row p-[4px] border-2 rounded-lg gap-5 cursor-pointer border-green-600 bg-green-500 hover:bg-green-600'>
                                <img className ='w-6 h-6 md:w-5 md:h-5' src={Upload_doc} alt="Upload doc image" />
                                <p>Upload Document</p>
                            </button>
                        </section>
                        <section>
                            <textarea className='border-2 rounded-lg p-3 w-[55%] h-70 resize-none bg-white md:h-70 xl:h-80 2xl:h-100'
                                placeholder='මෙතන ලියන්න....' 
                                value={text}
                                onChange={handleTextChange}
                            ></textarea>
                        </section>    
                        <button 
                            className='mt-4 px-6 py-2 border-2 border-green-600 bg-green-500 rounded-lg hover:bg-green-600' 
                            onClick={sendTextToBackend}
                        >
                            Check Grammar
                        </button> 
                    </div>
                </div>
            </div>
            <Right_Sidebar/>
        </div>
    </div>
    )
}

export default GrammarCheckerPage;
