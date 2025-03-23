import React,{useState, useRef} from 'react';
import Header from '../components/Header.tsx';
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';
import SinhalaTyping from '../components/SinhalaTyping.tsx';
import Paste_text from "../assets/textpaste_img.png";
import Upload_doc from "../assets/uploadfile_img.png";


const GrammarCheckerPage: React.FC = () => {
    const [text, setText] = useState<string>('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTextChange = (value: string) => {
        
    };

    const handlePasteText = () => {
        // Handle paste functionality here
        if (textareaRef.current) {
            navigator.clipboard.readText()
                .then(clipText => {
                    setText(clipText);
                })
                .catch(err => {
                    console.error('Failed to read clipboard: ', err);
                });
        }
    };
    const handleUploadDoc = () => {
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.txt,.doc,.docx';
        fileInput.style.display = 'none';
        fileInput.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (file) {
                // Handle file reading logic here
                // For text files, you can use FileReader
                if (file.type === 'text/plain') {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const content = e.target?.result as string;
                        setText(content);
                    };
                    reader.readAsText(file);
                } else {
                    // For other file types, you might need a server-side solution
                    console.log('File selected:', file.name);
                }
            }
        };
        document.body.appendChild(fileInput);
        fileInput.click();
        document.body.removeChild(fileInput);
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
                                {!text && (
                                    <div className='absolute inset-0 flex mt-15 justify-center flex-col sm:flex-row gap-1 md:gap-20 xl:gap-50 pointer-events-none'>
                                        <button 
                                            onClick={handlePasteText}
                                            className='flex flex-row w-55 h-9 p-[4px] border-3 rounded-lg gap-5 pl-8 pr-8 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400 bg-white pointer-events-auto'
                                        >
                                            <img className='w-6 h-6 md:w-5 md:h-6' src={Paste_text} alt="Paste text image" />
                                            <p>mdG w,jkak</p>
                                        </button>
                                        <button 
                                            onClick={handleUploadDoc}
                                            className='flex flex-row w-55 h-9 p-[4px] border-3 rounded-lg gap-3 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400 bg-white pointer-events-auto'
                                        >
                                            <img className='w-6 h-6 md:w-5 md:h-5' src={Upload_doc} alt="Upload doc image" />
                                            <p>f,aLkh Wvq.; lrkak</p>
                                        </button>
                                    </div>
                                )}
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