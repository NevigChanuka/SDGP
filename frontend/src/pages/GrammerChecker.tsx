import React, { useState, useRef } from 'react'; // Import React and hooks
import Header from '../components/Header.tsx'; // Import the Header component
import Left_Sidebar from '../components/L_Sidebar.tsx'; // Import the Left_Sidebar component
import Right_Sidebar from '../components/R_Sidebar.tsx'; // Import the Right_Sidebar component
import SinhalaTyping from '../components/SinhalaTyping.tsx'; // Import the SinhalaTyping component
import Paste_text from "../assets/textpaste_img.png"; // Import the paste text image
import Upload_doc from "../assets/uploadfile_img.png"; // Import the upload document image
import axios from 'axios'; // Import axios for making HTTP requests

// Define the GrammarCheckerPage component
const GrammarCheckerPage: React.FC = () => {
  // State to manage the text input
  const [text, setText] = useState<string>('');
  // Ref to access the textarea element
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handler for text change (currently empty, can be implemented as needed)
  const handleTextChange = (value: string) => {
    setText(value); // Update the text state with the new value
    // This function can be used to handle text changes in the SinhalaTyping component
  };

  // Handler for pasting text from clipboard
  const handlePasteText = () => {
    if (textareaRef.current) {
      // Read text from clipboard
      navigator.clipboard.readText()
        .then(clipText => {
          setText(clipText); // Set the pasted text to the state
        })
        .catch(err => {
          console.error('Failed to read clipboard: ', err); // Log errors
        });
    }
  };

  // Handler for uploading a document
  const handleUploadDoc = () => {
    // Create a file input element dynamically
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt,.doc,.docx'; // Accept text and Word documents
    fileInput.style.display = 'none'; // Hide the file input
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0]; // Get the selected file
      if (file) {
        // Handle text files using FileReader
        if (file.type === 'text/plain') {
          const reader = new FileReader();
          reader.onload = (e) => {
            const content = e.target?.result as string; // Read file content
            setText(content); // Set the file content to the state
          };
          reader.readAsText(file); // Read the file as text
        } else {
          console.log('File selected:', file.name); // Log other file types
        }
      }
    };
    document.body.appendChild(fileInput); // Append the file input to the DOM
    fileInput.click(); // Trigger the file input dialog
    document.body.removeChild(fileInput); // Remove the file input from the DOM
  };

  // Handler for sending text to the backend
  const sendTextToBackend = async () => {
    try {
      // Send the text to the backend using axios
      const response = await axios.post<{ message: string }>('#', { text });
      console.log('Response:', response.data); // Log the response
    } catch (error) {
      console.error('Error', error); // Log errors
    }
  };

  return (
    // Main container for the GrammarCheckerPage
    <div className='relative w-full flex flex-col'>
      {/* Render the Header component */}
      <Header />
      <div>
        {/* Render the Left_Sidebar component */}
        <Left_Sidebar />
        <div className='mt-25'>
          <div>
            <section>
              {/* Container for the SinhalaTyping component and buttons */}
              <div className='relative items-center w-[55%] mx-auto my-auto'>
                {/* SinhalaTyping component for text input */}
                <SinhalaTyping
                  placeholder='මෙතන ලියන්න....' // Placeholder text
                  onChange={handleTextChange} // Handler for text changes
                  onSelect={handleTextChange} // Handler for text selection
                  className='border-2 rounded-lg p-3 w-full resize-none bg-white md:h-70 xl:h-90 2xl:h-100' // Styling
                />
                {/* Buttons for paste and upload (visible only when text is empty) */}
                {!text && (
                  <div className='absolute inset-0 flex mt-15 justify-center flex-col sm:flex-row gap-1 md:gap-20 xl:gap-50 pointer-events-none'>
                    {/* Paste Text Button */}
                    <button
                      onClick={handlePasteText} // Handler for paste text
                      className='flex flex-row w-55 h-9 p-[4px] border-3 rounded-lg gap-5 pl-8 pr-8 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400 bg-white pointer-events-auto'
                    >
                      <img className='w-6 h-6 md:w-5 md:h-6' src={Paste_text} alt="Paste text image" />
                      <p>mdG w,jkak</p> {/* Button text */}
                    </button>
                    {/* Upload Document Button */}
                    <button
                      onClick={handleUploadDoc} // Handler for upload document
                      className='flex flex-row w-55 h-9 p-[4px] border-3 rounded-lg gap-3 cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400 bg-white pointer-events-auto'
                    >
                      <img className='w-6 h-6 md:w-5 md:h-5' src={Upload_doc} alt="Upload doc image" />
                      <p>f,aLkh Wvq.; lrkak</p> {/* Button text */}
                    </button>
                  </div>
                )}
                {/* Button to send text to the backend */}
                <button
                  className='absolute right-0 mt-4 px-6 py-2 border-3 rounded-lg cursor-pointer font-CCWelikala border-[#0d8065] hover:bg-[#0d8065] hover:text-white hover:scale-110 transition duration-400'
                  onClick={sendTextToBackend} // Handler for sending text
                >
                  mÍlaId lrkak' {/* Button text */}
                </button>
              </div>
            </section>
          </div>
        </div>
        {/* Render the Right_Sidebar component */}
        <Right_Sidebar />
      </div>
    </div>
  );
};

export default GrammarCheckerPage; // Export the GrammarCheckerPage component