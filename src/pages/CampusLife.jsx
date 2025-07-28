import { ArrowUpRight, Dna, Dumbbell, House, Volleyball } from "lucide-react";
import "../components/achivement/Achivement.css";
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import overviewOne from "../assets/images/campus-breadcrumb.jpg";
import campusLife1 from "../assets/images/campusLife/campusLife1.png";
import campusLife2 from "../assets/images/campusLife/campusLife2.png";
import campusLife3 from "../assets/images/campusLife/campusLife3.png";
import campusLife4 from "../assets/images/campusLife/campusLife4.png";
import videoBg from "../assets/images/campusLife/videoCampus.jpg";
import ImageSlider from "../components/slider/ImageSlider";

const CampusLife = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 10) {
          return prev + 1;
        }

        return prev;
      });
    }, 100);

    const interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev < 40) {
          return prev + 1;
        }

        return prev;
      });
    }, 100);

    const interval3 = setInterval(() => {
      setCount3((prev) => {
        if (prev < 300) {
          return prev + 1;
        }

        return prev;
      });
    }, 10);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="h-[70vh] relative">
        <img
          src={overviewOne}
          alt="img"
          className="h-full bg-cover drop-shadow-2xl"
        />
        <div className="bg-black h-full w-full absolute z-1 top-0 opacity-50"></div>
        <div className="z-100 absolute top-[40%] flex left-[150px] items-center gap-5 text-white">
          <a href="https://muhammadimran-55.github.io/university-portal/">
            <House />
          </a>
          <h4 className="border-l-gray-300 border-l-1 text-xl">
            Admission Overview
          </h4>
        </div>
        <h1 className="absolute top-[50%] text-white text-6xl z-50 left-[150px] font-bold">
          Admission Overview
        </h1>
      </div>
      <div className=" p-[100px] pb-0">
        <p className="my-6 text-center uppercase text-xl text-[#8d0000]">
          CAMPUS HIGHLIGHT
        </p>
        <p className="text-6xl leading-18">
          Our goal is to develop and meet the needs of each child so that he or
          she becomes a well-rounded tomorrow individual.
        </p>
        <button className="ml-[40%] px-6 bg-[#8d0000] text-white py-4 rounded-xl text-xl my-6 border-2 hover:border-[#8d0000] hover:bg-transparent hover:text-[#8d0000] transition-all cursor-pointer">
          Why Choose Learnix
        </button>
      </div>
      <div className="flex px-[100px] gap-12">
        <img src={campusLife2} alt="" className="rounded-xl h-[400px]" />
        <img src={campusLife3} alt="" className="rounded-xl mt-24" />
        <img src={campusLife4} alt="" className="rounded-xl h-[400px]" />
      </div>

      <div
        className="counter-bg"
        style={{
          border: "1px solid black",
          width: "100%",
          height: "240px",
          margin: "0 auto",
          borderRadius: "0px",
          display: "grid",
          marginTop: "50px",
          gridTemplateColumns: "repeat(3,1fr)",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "80px",
            fontWeight: "500",
            borderRight: "1px solid grey",
          }}
        >{`${count}K`}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "80px",
            fontWeight: "500",
            borderRight: "1px solid grey",
          }}
        >{`${count2}K`}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "80px",
            fontWeight: "500",
          }}
        >{`${count3}K`}</div>
      </div>

      <div className="p-[100px] border-b-1 border-b-gray-400">
        <h1 className="text-center text-6xl text-black font-bold my-6">
          Student Life
        </h1>
        <p className="text-center text-2xl mb-12">
          Life at Acadia University is enriching, exciting, and energizing
        </p>
        <img src={campusLife1} alt="" className="rounded-xl" />
      </div>

      <div className="p-[100px]">
        <p className="text-5xl text-black font-medium my-12">
          Build lifelong friendships with students who share your interests,
          passions, and perspectives
        </p>
        <div className="grid grid-cols-3">
          <div className="flex gap-12">
            <div>
              <Dumbbell size={75} />
            </div>
            <div>
              <h1 className="text-2xl text-black font-semibold">
                Athletics & Fitness
              </h1>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Fitness <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Calisthenics <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  MMA <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Boxing <ArrowUpRight />
                </a>
              </li>
            </div>
          </div>

          <div className="flex  gap-12">
            <div>
              <Dna size={75} />
            </div>
            <div>
              <h1 className="text-2xl text-black font-semibold">
                Student Clubs
              </h1>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Special Intrest Club <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Healthy and Wellness Club <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Art Club <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Design Club <ArrowUpRight />
                </a>
              </li>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <Volleyball size={75} />
            </div>
            <div>
              <h1 className="text-2xl text-black font-semibold">
                Student Activities
              </h1>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Cricket <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Football <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  Hockey <ArrowUpRight />
                </a>
              </li>
              <li className="flex my-6 ">
                <a
                  href=""
                  className="flex gap-3 hover:text-[#8d0000] transition-all"
                >
                  BasketBall <ArrowUpRight />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img src={videoBg} alt="" />
        <div className="relative w-[100%] h-[60vh] justify-center flex">
        <div className="w-[80%] bg-white p-[100px] absolute -top-24 rounded-2xl">
          <p className="my-6 text-center uppercase text-xl text-[#8d0000]">
            Life On Campus
          </p>
          <p className="text-6xl leading-18">
            Together, we grow in mind, body, spirit and character.
          </p>
        </div>
        </div>
        <div className="h-[100vh]">
        <ImageSlider/>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampusLife;
