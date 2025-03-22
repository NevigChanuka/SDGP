import React from 'react';
import Header from '../components/Header.tsx';
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';


const GrammarCheckerPage: React.FC = () => {
    
    return (
        <div className='relative w-full flex flex-col'>
            <Header />
            <div>
                <Left_Sidebar/>
                <Right_Sidebar/>
            </div>
        </div>
    )
}

export default GrammarCheckerPage;