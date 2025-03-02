import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


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
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
        <Slider {...settings}>
          {methods.map(({ id, title, description, img }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl">
                <img
                  src={img}
                  alt=""
                  className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-black xl:pr-40">{description}</p>
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