import React from 'react';
import Background from '../components/Background.tsx';
import Header from '../components/Header.tsx';
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';

const Grammar_checker_pages:React.FC = () => {

  return (
    <>
      <Background>
        <div className='relative w-full h-full flex flex-col'>
            <Header />
            <div>
                <Left_Sidebar />

                <Right_Sidebar />
            </div>
        </div>
      </Background>
    </>
  )
}

export default Grammar_checker_pages;
