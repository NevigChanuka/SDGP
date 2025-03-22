import React from 'react';
import Header from '../components/Header.tsx';
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';
import SinhalaTyping from '../components/SinhalaTyping.tsx';


const GrammarCheckerPage: React.FC = () => {

    const handleTextChange = (value: string) => {
        setText(value);
    };
    
    return (
        <div className='relative w-full flex flex-col'>
            <Header />
            <div>
                <Left_Sidebar/>
                <div className='mt-25'>
                    <div>
                        <section>
                            <div className='relative items-center w-[55%] mx-auto my-auto'>
                                <SinhalaTyping 
                                    placeholder='මෙතන ලියන්න....'
                                    onChange={handleTextChange}
                                    className='border-2 rounded-lg p-3 w-full resize-none bg-white md:h-70 xl:h-80 2xl:h-100'
                                    height='350px'
                                />  
                            </div>
                        </section>    
                    </div>
                </div>
                <Right_Sidebar/>
            </div>
        </div>
    )
}

export default GrammarCheckerPage;