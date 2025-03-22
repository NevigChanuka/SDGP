import React from 'react';
import Header from '../components/Header.jsx';
import Left_Sidebar from '../components/L_Sidebar.jsx';
import Right_Sidebar from '../components/R_Sidebar.jsx';

const Feedback: React.FC = () => {

    
  return (
        <div className='relative size-full flex flex-col'>
            <Header />
            <div >
                <Left_Sidebar/>
                
                <Right_Sidebar/>
            </div>
            
        </div>

  )
}

export default Feedback;
