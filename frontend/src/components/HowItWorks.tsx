import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pic1 from "../assets/robo1.jpg";
import Pic2 from "../assets/robo2.jpg";
import Pic3 from "../assets/robo3.jpg";


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
        img: Pic1,
    },
    {
        id: 2,
        title: "Tool checks your writing",
        description: "Our tool analyzes grammatical errors and suggests a correct version.",
        img:Pic2,
    },
    {
        id: 3,
        title: "Get similar word suggestions",
        description: "For highlighted words, we provide alternative word choices to refine your writing.",
        img:Pic3,
    },
    
]


const HowItWorks:React.FC = () => {

    const settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,  
    };

  return (
    <div className="py-10">
    <div className="container">
      
      <h1 className="mb-8 border-l-8 border-green-500 py-2 pl-4 text-3xl font-semibold text-left">
          How it works
        </h1>
      
        
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
        <Slider {...settings}>
          {methods.map(({ id, title, description, img }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-5 md:gap-14 p-4 mx-auto max-w-screen-lg w-full">
            
                    <img
                    src={img}
                    alt=""
                    className="h-auto max-h-[300px] w-auto max-w-full sm:max-w-[520px] object-cover"
                    />
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <h1 className="text-xl font-bold py-1">{title}</h1>
                <p className="text-black max-w-2xl">{description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  )
}

export default HowItWorks;