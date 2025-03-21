import React from "react";
import "../App.css";
import "animate.css";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import video from "../assets/Video.mp4";


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
  
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-20 w-full h-100 mb-30">
        <div className="w-140 h-100 relative">
          <span className="font-sinhasithumina text-7xl">
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

        <div className=" flex w-100 h-100  ">
          <video className="w-full h-auto" loop autoPlay muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="flex flex-col justify-evenly items-center  w-auto h-400">
        <div className="w-full h-90 ">
          <div
            id="1"
            ref={addDivRef}
            className="flex justify-evenly text-black  border-r-2 border-t-2 border-b-2 border-emerald-900 h-90   hover:bg-emerald-900  hover:text-white duration-500 mb-10 mr-30"
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
            className="flex justify-evenly h-90  text-black  border-l-2 border-t-2 border-b-2  border-emerald-900   hover:bg-emerald-900  hover:text-white duration-500 mb-10 ml-30 "
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
            className="flex justify-evenly  h-90   text-black  border-r-2 border-t-2 border-b-2  border-emerald-900  hover:bg-emerald-900  hover:text-white duration-500 mb-10 mr-30"
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
            className="flex justify-evenly h-90  text-black  border-l-2 border-t-2 border-b-2  border-emerald-900 hover:bg-emerald-900  hover:text-white duration-500 ml-30"
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
  );
};

export default Home;
