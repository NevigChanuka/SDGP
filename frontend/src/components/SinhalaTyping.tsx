import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { sinhalaMap } from './Sinhalaletter';

export interface SinhalaTypingProps {
  placeholder?: string;
  className?: string;
  rows?: number;
  onChange?: (value: string) => void;
  onSelect?: (selectedText: string) => void;
  value?: string;
  variant?: 'textarea' | 'input';
  size?: 'sm' | 'md' | 'lg';
}

const SinhalaTyping = forwardRef<HTMLTextAreaElement | HTMLInputElement, SinhalaTypingProps>(({ 
  placeholder = "Type in English to convert to Sinhala...", 
  className = "", 
  rows = 4,
  onChange,
  onSelect,
  value,
  variant = 'textarea',
  size = 'md',
}, ref) => {
  const [inputText, setInputText] = useState<string>(value || "");
  const [displayText, setDisplayText] = useState<string>("");
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const displayRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => inputRef.current as HTMLTextAreaElement | HTMLInputElement);

  const transliterateWord = (word: string): string => {
    let result = '';
    let i = 0;

    while (i < word.length) {
      let foundMatch = false;

      for (let len = 3; len > 0; len--) {
        if (i + len <= word.length) {
          const chunk = word.substring(i, i + len);

          if (sinhalaMap[chunk]) {
            result += sinhalaMap[chunk];
            i += len;
            foundMatch = true;
            break;
          }
        }
      }

      if (!foundMatch) {
        result += word[i];
        i++;
      }
    }

    return result;
  };

  const processText = (inputText: string) => {
    const words = inputText.split(/(\s+)/);
    const processedWords = words.map(word => (/^\s+$/.test(word) ? word : transliterateWord(word)));
    const newDisplayText = processedWords.join('');
    setDisplayText(newDisplayText);
    
    // Make sure to pass the new display text with Sinhala characters to onChange
    if (onChange) {
      onChange(newDisplayText);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newText = e.target.value;
    setInputText(newText);
    processText(newText);
    
    setCursorPosition(e.target.selectionStart || 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (inputText.length > 0) {
        const newText = inputText.slice(0, -1);
        setInputText(newText);
        processText(newText);
        setCursorPosition(prev => (prev > 0 ? prev - 1 : 0));
      }
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setInputText('');
      setDisplayText('');
      if (onChange) {
        onChange('');
      }
    }
  };

  const handleMouseUp = () => {
    if (onSelect && window.getSelection) {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        onSelect(selection.toString().trim());
      }
    }
  };

  useEffect(() => {
    processText(inputText);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = cursorPosition;
      inputRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition]);

  const sizeClasses = {
    sm: 'text-sm p-2',
    md: 'text-base p-3',
    lg: 'text-lg p-4'
  };

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

  const displayStyle = {
    width: '100%',
    height: '100%',
    whiteSpace: 'pre-wrap' as const,
    wordBreak: 'break-word' as const,
    fontFamily: 'Noto Sans Sinhala, sans-serif',
  };
  

  return (
    <div className={baseClasses}>
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