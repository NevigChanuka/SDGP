import { useState } from "react";
import robot from "../assets/my_robot.png";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "What is Vyakarana?", answer: "Vyakarana is a Sinhala grammar checker and paraphrasing tool." },
  { question: "How does it work?", answer: "It analyzes your text for grammar errors and suggests corrections with explanations." },
  { question: "Is Vyakarana free to use?", answer: "Yes, Vyakarana is free for basic grammar checking and paraphrasing suggestions." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
  <div className="flex flex-col items-center justify-center">
  <h2 className="text-white text-2xl font-bold mb-6">
    Got Questions? We’ve Got Answers!
  </h2>


<div className="flex items-start justify-center space-x-8 w-full px-6"> 
  {/* Left Image */}
  <img 
    src={robot} 
    alt="Robot" 
    className="w-1/3 max-w-sm"
  />

  {/* Right FAQ Section */}
  <div className="w-2/3 max-w-lg"> 
    <div className="space-y-4 pl-6"> 
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded-xl p-4 shadow-md">
          <button
            className="flex justify-between items-center w-full text-lg font-medium"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className={`transform transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`}>
              ▼
            </span>
          </button>
          {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  </div>
</div>
</div>
  );
};
