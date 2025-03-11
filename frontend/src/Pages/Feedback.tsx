import React,{ useState } from 'react'
import Header from '../components/Header.jsx'
import Left_Sidebar from '../components/L_Sidebar.jsx'
import Right_Sidebar from '../components/R_Sidebar.jsx'
import Footer from '../components/Footer.jsx'


const Feedback: React.FC = () => {

    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      console.log("Feedback Submitted:", feedback);
      setFeedback("");
    }
  return (
        <div className='relative size-full flex flex-col'>
            <Header />
            <div >
                <Left_Sidebar/>
                <div className='mt-20  items-center text-center'>
                    <div>
                        <h1 className='text-[18px] md:text-[24px]'>Feedback</h1>
                        <div className="flex flex-col items-center justify-center">
                            <form 
                                onSubmit={handleSubmit} 
                                className="w-[70%] max-w-3xl  p-6 rounded-lg"
                            >
                            <textarea
                                className="w-[100%] h-70 border-2  p-3 rounded-lg resize-none bg-white md:h-80 lg:h-90 2xl:h-100"
                                placeholder="Put here your Questions and Comments."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                required
                            />
                                <div className="flex justify-end mt-3">
                                    <button 
                                        type="submit"
                                        className=" px-6 py-2 rounded-lg border-2 border-green-600 bg-green-400 hover:bg-green-600"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Right_Sidebar/>
            </div>
            
        </div>

  )
}

export default Feedback;
