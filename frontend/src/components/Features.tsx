import React from "react";
import Features_des from "./Features_Des";
import image1 from "../assets/grammar_check.png"
import image2 from "../assets/similar_words.png";

interface Feature {
  id: number;
  image: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    image: image1,
    title: "Correcting Grammatical errors",
    description:
      "Automatically detects and corrects grammatical mistakes in Sinhala text. Highlights errors and provides suggestions for improvement.",
  },
  {
    id: 2,
    image:image2,
    title: "Suggest similar words",
    description:
      "Provides alternative words with similar meanings to enhance vocabulary. Helps users refine their writing by suggesting more suitable words.",
  },
];

const Features: React.FC = () => {
  return (
    <div className="bg-gray-100 py-10 pb-14 flex justify-center">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="mb-8 border-l-8 border-green-500 py-2 pl-4 text-3xl font-semibold">
          Features
        </h1>
        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {features.map((feature) => (
            <Features_des key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;