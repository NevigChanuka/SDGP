import React from 'react';
import {useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.js'
import Left_Sidebar from '../components/L_Sidebar.tsx';
import Right_Sidebar from '../components/R_Sidebar.tsx';
import SinhalaTyping from '../components/SinhalaTyping';


const SimilarWords: React.FC = () => {

    // Create an Axios instance with default settings
    const api = axios.create({
        baseURL: "http://127.0.0.1:5000/api", // Change to your backend URL
        headers: {
        "Content-Type": "application/json",
        },
    });

    // State to store the transliterated Sinhala text
    const [responseData, setResponseData] = useState<any>(null);

    // Callback function to handle changes in the SinhalaTyping component
    const handleChange = async (value: string) => {
         

 // Send the transliterated text to the backend
        try {
            const payload = { word: value }; // Send the actual transliterated word
            const response = await api.post("/synonym-words", payload);

            // Handle response
            console.log('Backend response:', response.data);
            setResponseData(response.data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

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
                                    onChange={handleChange}
                                />
                                {/* <textarea
                                    className="p-2 outline-none resize-none"
                                    
                                    readOnly
                                /> */}


                                {responseData && (
                                    <div className=" mt-4 p-2 border rounded-lg bg-gray-100">
                                        <h3 className="font-semibold">Response Data:</h3>
                                        <pre>{JSON.stringify(responseData, null, 2)}</pre>
                                    </div>)}


                                
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