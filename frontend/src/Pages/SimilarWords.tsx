import Header from '../components/Header.jsx'
import Left_Sidebar from '../components/L_Sidebar.jsx'
import Right_Sidebar from '../components/R_Sidebar.jsx'



const SimilarWords: React.FC = () => {

  return (
    <>
        <div className='relative size-full flex flex-col'>
            <Header />
            <div >
                <Left_Sidebar/>
                <div className='items-center text-center size-full'>
                    <div className='mt-20'>
                        <h1 className='text-[18px] md:text-[24px]'>Paraphraser</h1>
                            <div className="flex justify-center items-center mt-10">
                                <div className="border-2 rounded-lg p-4 w-[65%] bg-white shadow-lg">
                                    <div>
                                        <textarea
                                            className="w-[50%] h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100 p-2 border-r outline-none resize-none "
                                            placeholder="Enter text..."
                                            
                                        />
                                        <textarea
                                            className="w-[50%] h-50 sm:h-60 lg:h-70 xl:h-80 2xl:h-100 p-2 outline-none resize-none"
                                            
                                        />
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm text-gray-500">/200 Words</span>
                                            <button
                                                className="px-4 py-2 rounded border-2 border-green-600 bg-green-400 hover:bg-green-600"
                                                
                                            >
                                                Paraphrase
                                            </button>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <Right_Sidebar/>
            </div>

        </div>
    </>
  )
}

export default SimilarWords;
