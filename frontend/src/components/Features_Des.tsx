import React from "react";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const Features_des: React.FC<FeatureProps> = ({ image, title, description }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg ">
      <img
        src={image}
        alt="Feature image"
        className="h-[300px] group-hover:scale-105 duration-300"
      />
      <div className="space-y-2 p-4 bg-white">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-gray-500 text-sm">{description}</p>
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