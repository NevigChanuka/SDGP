import React from "react";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const Features_des: React.FC<FeatureProps> = ({ image, title, description }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg h-145 w-120 flex flex-col items-center text-center p-4 ">
        {/*Responsive image*/}
      <img
        src={image}
        alt="Feature image"
        className="w-full h-full max-w-[600px] rounded-lg"
      />
      {/*Feature description*/}
      <div className="space-y-2 p-4 bg-white">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
        {/*Get Started button*/}
        <div className="text-center mt-4">
          <button className="btn-primary px-4 py-2 rounded-md bg-green-600 cursor-pointer hover:bg-green-500 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features_des;