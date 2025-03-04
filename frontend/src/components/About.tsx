import React from "react";
import video1 from "../assets/video1.mp4";

const About: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* About Section */}
      <section
        id="about"
        className="flex text-center p-5 bg-gradient-to-r from-green-500 to-green-100 gap-30 items-center justify-center"
      >
        <div className="mt-5"> {/* Added margin-top to move text downward */}
          <h1 className="text-5xl font-bold">
            Say Goodbye{" "}
            <span aria-hidden="true" role="img">
              👋
            </span>{" "}
            to <br /> Grammar Mistakes!
          </h1>
          <p className="mt-8 text-black-500 text-2xl max-w-3xl mx-auto font-normal">
            Struggling with Sinhala grammar? Our advanced AI-powered tool helps
            you identify mistakes, understand corrections, and improve your
            writing effortlessly.
          </p>
        </div>
        <video
          className="w-56 rounded-lg shadow-md"
          src={video1}
          autoPlay
          loop
          muted
          controls
        />
      </section>
    </div>
  );
};

export default About;

