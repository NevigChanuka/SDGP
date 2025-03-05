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
  { question: "Do I need to create an account to use this?", answer: "No, you can use Vyakarana without creating an account." },
  { question: "Is my data secure and private?", answer: "Yes, Vyakarana priorotize user privacy and data security." },

];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Centered Heading */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Got Questions? We’ve Got Answers!
      </h2>

      {/* Image and FAQ Section in the Same Row */}
      <div className="flex items-start justify-center space-x-8">
        {/* Left Side - Image */}
        <div className="flex-shrink-0">
          <img src={robot} alt="Robot" className="w-64 max-w-sm self-start mt-30" />
        </div>

        {/* Right Side - FAQ Blocks */}
        <div className="w-full max-w-md">
          <div className="space-y-4">
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
}
