import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'zjHdlrKz hkq l=ulao@',
      answer: "zjHdlrKZ isxy, ,sùu myiq lrk fuj,uls'",
    },
    {
      question: 'th l%shd lrkafka flfia o@',
      answer:  'th Tfí fmf<ys jHdlrK fodaI úYaf,aIKh lr ksjerÈ lsÍï ,ndfoa. ;jo"' +" iudk mo fhdackd lrhs'",
    },
    {
      question: 'zjHdlrKz fkdñf,a Ndú;d yelso@',
      answer: 'Tõ"'+ " zjHdlrKz uq¿ukskau fkdñf,a Ndú;d l< yel'",
    },
    {
      question: 'th Ndú;d lsÍug .sKqula iEÈh hq;=o@',
      answer: 'ke;"' + " Tng .sKqula fkdue;sj jqjo th Ndú;d l< yel'",
    },
    {
      question: 'uf.a o;a; wdrlaIs; yd mqoa.,sl o@',
      answer: 'Tõ"' + " wm Tnf.a o;a; wdrËdjg m%uqL;ajh fokq ,nhs'",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-25 mb-20">
        <h2 className="font-sandaru text-3xl font-semibold text-gray-900 text-center mb-8">
        Tfí m%Yak i|yd wfma ms&lt;s;=reæ
        </h2>
        <div className="text-[20px] font-CCWelikala space-y-4 ">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2 border-[#0d8065] shadow overflow-hidden"
            >
              <button
                className={`w-full flex justify-between items-center p-4 text-left ${
                  activeIndex === index ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="text-black">{item.question}</span>
                <svg
                  className={`h-6 w-6 transform transition-transform duration-200 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;