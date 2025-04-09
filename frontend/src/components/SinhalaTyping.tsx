import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { sinhalaMap } from './Sinhalaletter'; // Import the Sinhala transliteration map

// Define the props interface for the SinhalaTyping component
export interface SinhalaTypingProps {
  placeholder?: string; // Placeholder text for the input/textarea
  className?: string; // Custom CSS class for styling
  rows?: number; // Number of rows for the textarea (if variant is 'textarea')
  onChange?: (value: string) => void; // Callback function triggered on input change
  onSelect?: (selectedText: string) => void; // Callback function triggered when text is selected
  value?: string; // Controlled value for the input/textarea
  variant?: 'textarea' | 'input'; // Determines if the component is a textarea or input
  size?: 'sm' | 'md' | 'lg'; // Size of the component
}

// Define the SinhalaTyping component using forwardRef to allow ref forwarding
const SinhalaTyping = forwardRef<HTMLTextAreaElement | HTMLInputElement, SinhalaTypingProps>(({ 
  placeholder = "Type in English to convert to Sinhala...", // Default placeholder text
  className = "", // Default empty className
  rows = 4, // Default number of rows for textarea
  onChange, // Optional onChange callback
  onSelect, // Optional onSelect callback
  value, // Optional controlled value
  variant = 'textarea', // Default variant is textarea
  size = 'md', // Default size is medium
}, ref) => {
  // State to manage the raw input text
  const [inputText, setInputText] = useState<string>(value || "");
  // State to manage the processed Sinhala display text
  const [displayText, setDisplayText] = useState<string>("");
  // State to manage the cursor position in the input/textarea
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  // State to track if the input/textarea is focused
  const [isFocused, setIsFocused] = useState<boolean>(false);
  // Ref to access the input/textarea DOM element
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  // Ref to access the display div DOM element
  const displayRef = useRef<HTMLDivElement>(null);

  // Use useImperativeHandle to expose the input/textarea ref to parent components
  useImperativeHandle(ref, () => inputRef.current as HTMLTextAreaElement | HTMLInputElement);

  // Function to transliterate a single word from English to Sinhala
  const transliterateWord = (word: string): string => {
    let result = '';
    let i = 0;

    // Loop through the word and transliterate chunks of characters
    while (i < word.length) {
      let foundMatch = false;

      // Try to match the longest possible chunk (3 characters, then 2, then 1)
      for (let len = 4; len > 0; len--) {
        if (i + len <= word.length) {
          const chunk = word.substring(i, i + len);

          // Check if the chunk exists in the Sinhala map
          if (sinhalaMap[chunk]) {
            result += sinhalaMap[chunk]; // Append the Sinhala character
            i += len; // Move the index forward by the length of the chunk
            foundMatch = true;
            break;
          }
        }
      }

      // If no match is found, append the character as is
      if (!foundMatch) {
        result += word[i];
        i++;
      }
    }

    return result;
  };

  // Function to process the entire input text and convert it to Sinhala
  const processText = (inputText: string) => {
    // Split the input text into words and spaces
    const words = inputText.split(/(\s+)/);
    // Transliterate each word (skip spaces)
    const processedWords = words.map(word => (/^\s+$/.test(word) ? word : transliterateWord(word)));
    // Join the processed words to form the final Sinhala text
    const newDisplayText = processedWords.join('');
    setDisplayText(newDisplayText);
    
    // Trigger the onChange callback with the new Sinhala text
    if (onChange) {
      onChange(newDisplayText);
    }
  };

  // Handler for input/textarea change events
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText); // Update the raw input text
    processText(newText); // Process the text to convert it to Sinhala
    
    // Update the cursor position
    setCursorPosition(e.target.selectionStart || 0);
  };

  // Handler for keydown events (e.g., Backspace, Escape)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (inputText.length > 0) {
        // Remove the last character from the input text
        const newText = inputText.slice(0, -1);
        setInputText(newText);
        processText(newText);
        setCursorPosition(prev => (prev > 0 ? prev - 1 : 0));
      }
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      // Clear the input and display text
      setInputText('');
      setDisplayText('');
      if (onChange) {
        onChange('');
      }
    }
  };

  // Handler for mouseup events (to detect text selection)
  const handleMouseUp = () => {
    if (onSelect && window.getSelection) {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        // Trigger the onSelect callback with the selected text
        onSelect(selection.toString().trim());
      }
    }
  };

  // Effect to process the initial input text when the component mounts
  useEffect(() => {
    processText(inputText);
  }, []);

  // Effect to update the cursor position in the input/textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = cursorPosition;
      inputRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition]);

  // Define size-based CSS classes
  const sizeClasses = {
    sm: 'text-sm p-2',
    md: 'text-base p-3',
    lg: 'text-lg p-4'
  };

  // Base CSS classes for the container
  const baseClasses = `
    sinhala-typing-container
    relative
    ${className}
    ${isFocused ? '' : ''}
    ${sizeClasses[size]}
    transition-all
    duration-200
    ease-in-out
  `.trim();

  // Style for the display div (shows the Sinhala text)
  const displayStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'pre-wrap' as const,
    wordBreak: 'break-word' as const,
    fontFamily: 'Noto Sans Sinhala, sans-serif', // Use a Sinhala font
  };
  

  return (
    <div className={baseClasses}>
      {/* Render either a textarea or input based on the variant prop */}
      {variant === 'textarea' ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={inputText}
          onChange={handleChange as any}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="absolute top-0 left-0 w-full h-full opacity-0 resize-none"
          placeholder={placeholder}
          rows={rows}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type="text"
          value={inputText}
          onChange={handleChange as any}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="absolute top-0 left-0 w-full h-full opacity-0"
          placeholder={placeholder}
        />
      )}

      {/* Display div to show the Sinhala text */}
      <div 
        ref={displayRef}
        className={`sinhala-display ${!displayText && 'text-gray-400'}`}
        style={displayStyle}
        onMouseUp={handleMouseUp}
      >
        {displayText || placeholder}
      </div>
    </div>
  );
});

export default SinhalaTyping;