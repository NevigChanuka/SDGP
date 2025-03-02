import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Method {
    id: number;
    title: string;
    description: string;
    img:string;
}

const methods: Method[] = [
    {
        id: 1,
        title: "Enter your text",
        description: "Type or paste your Sinhala text into the input box.",
        img: "",
    },
    {
        id: 2,
        title: "Tool checks your writing",
        description: "Our tool analyzes grammatical errors and suggests a correct version",
        img: "",
    },
    {
        id: 3,
        title: "Get similar word suggestions",
        description: "For highlighted words, we provide alternative word choices to refine your writing",
        img: "",
    },
    
]


const HowItWorks = () => {
  return (
    <div>HowItWorks</div>
  )
}

export default HowItWorks;