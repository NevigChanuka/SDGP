import React from "react";
import "../App.css";
import "animate.css";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import video from "../assets/Video.mp4";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import FAQ from "../components/FAQ.tsx";
import About from "../components/About.tsx";
import {TeamCard} from "../components/TeamCard.tsx";
import { teamMembers } from "../components/Team.tsx";



const Home: React.FC = () => {

  const divRef = useRef<(HTMLDivElement | null)[]>([]);

  const addDivRef = (element: HTMLDivElement | null) => {
    if (element) {
      divRef.current = [...divRef.current, element];
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Intersection Entries:", entries); // Log the entries array

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            //console.log('Element is visible!');
            //entry.target.classList.add('animate__animated', 'animate__fadeInLeft');

            if (entry.target.id === "1") {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInLeft"
              );
            } else if (entry.target.id === "0") {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeInRight"
              );
            }
          } else {
            //console.log('Element is not visible!');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    divRef.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      divRef.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div>
      <NavBar />
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-20 w-full h-100 mb-30 ">
        <div className="w-140 h-100 relative">
          <span className="font-sinhasithumina text-7xl text-emerald-700">
            Tfí ,sùug ksjerÈ u. fmkaùuæ
          </span>
          <p className="font-sandaru text-2xl">
            Tnf.a ,sùfuys jHdlrk fodaI ksjerÈ lr.kak" wjia:djg iqÿiqu jpk
            Ndú;fhka ,sùfuys ;;a;ajh Wiia lr .kak" Tnf.a isxy, oekqu Tmakxjd
            .kak"
          </p>
          <div className="flex justify-center items-center m-10 absolute w-65 h-14 rounded-full   border-4 border-[#0d8065] hover:scale-110 transition duration-400 hover:bg-[#0d8065] hover:text-white">
            <span className="font-sandaru text-2xl ">wou Ndú;d lrkak</span>
            <ArrowRight className="w-8 h-7 ml-1" />
          </div>
        </div>

        <div className=" flex justify-center w-110 h-100 ml-8">
          <video className="w-full h-full object-cover" loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center  w-auto h-400">
        <div className="w-full h-90 ">
          <div
            id="1"
            ref={addDivRef}
            className="flex justify-evenly text-black  border-r-2 border-t-2 border-b-2 border-emerald-700 h-90   hover:bg-emerald-700  hover:text-white duration-500 mb-10 mr-30"
          >
            <div className=" w-100 h-100 content-center ">
              <div>
                <span className="font-CCWelikala text-4xl">jHdlrK mÍlaIlh</span>
                <p className="font-CCWelikala text-xl">
                  {" "}
                  Tfí fmf&lt;ys jHdlrK fodaI y÷kdf.k ksjerÈ fhdackd ,ndfohs'{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-100 h-100 ">
              <img className="mb-10" src="\src\assets\picbr1.png" alt="png1" />
            </div>
          </div>
        </div>

        <div className="w-full  h-90 ">
          <div
            id="0"
            ref={addDivRef}
            className="flex justify-evenly h-90  text-black  border-l-2 border-t-2 border-b-2  border-emerald-700   hover:bg-emerald-700  hover:text-white duration-500 mb-10 ml-30 "
          >
            <div className="flex justify-center items-center w-100 h-100 ">
              <img src="\src\assets\picbr2.png" alt="png2" />
            </div>
            <div className="w-100 h-100 content-center ">
              <div>
                <span className="font-CCWelikala text-4xl ">
                  iudk mo iemhqu
                </span>
                <p className="font-CCWelikala text-xl">
                  jdlH fmf&lt;ys i|yka jk jpk j,g wod,j iudk mo úl,am ,nd foa'
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-90 ">
          <div
            id="1"
            ref={addDivRef}
            className="flex justify-evenly  h-90   text-black  border-r-2 border-t-2 border-b-2  border-emerald-700  hover:bg-emerald-700  hover:text-white duration-500 mb-10 mr-30"
          >
            <div className="w-100 h-100 content-center ">
              <div>
                <span className="font-CCWelikala text-4xl">jHdlrK Wmfoia</span>
                <p className="font-CCWelikala text-xl">
                  {" "}
                  isxy, NdIdfõ fhfok jHdlrK kS;s WodyrK iu. meyeÈ,s flfra'{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-100 h-100">
              <img src="\src\assets\picbr3.png" alt="png2" />
            </div>
          </div>
        </div>

        <div className="w-full h-90 ">
          <div
            id="0"
            ref={addDivRef}
            className="flex justify-evenly h-90  text-black  border-l-2 border-t-2 border-b-2  border-emerald-700 hover:bg-emerald-700  hover:text-white duration-500 ml-30"
          >
            <div className="flex justify-center items-center w-100 h-100">
              <img src="\src\assets\picbr4.png" alt="png2" />
            </div>

            <div className="w-100 h-100 content-center">
              <div>
                <span className="font-CCWelikala text-4xl"> jpk iuQyh</span>
                <p className="font-CCWelikala text-xl">
                  iudk mo" úreoaO mo" hq., mo wd§ isxy, NdIdfõ fhfok mo j¾. fuys
                  we;=&lt;;a fõ'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <About />
    <FAQ />
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-5xl font-sinhasithumina">wmf.a lKavdhu yuqjkak</h2>
          <p className="mt-4 text-lg text-gray-500 font-CCWelikala">
            úYsIag;ajh ,nd §u i|yd tlaj lghq;= lrk lemjQ jD;a;slhka
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Home;
