import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import overviewOne from "../assets/images/campus-breadcrumb.jpg";
import { ChevronRight, House } from "lucide-react";
import overviewTwo from '../assets/images/adover.png'
import oThree from '../assets/images/adover2.png'

const Overview = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => {
        if (prev < 126) {
          return prev + 1;
        }
        return prev;
      });
    }, 10);

    const interval2 = setInterval(() => {
      setCount2((prev) => {
        if (prev < 82) {
          return prev + 1;
        }
        return prev;
      });
    }, 10);
    const interval3 = setInterval(() => {
      setCount3((prev) => {
        if (prev < 74) {
          return prev + 1;
        }
        return prev;
      });
    }, 10);
  }, []);

  return (
    <>
      <Header />
      <div className="">
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
        <div className=" p-[100px]">
          <p className="my-6 text-center uppercase text-xl text-[#8d0000]">
            Financial Aid
          </p>
          <p className="text-5xl leading-18">
            At Stanford, we practice holistic admission. This means that each
            piece in your application is reviewed as part of an integrated and
            comprehensive whole.
          </p>
        </div>

        <div className="bg-[#F6F4EE] w-[80%] rounded-xl gap-6 p-12 h-[300px] m-auto grid grid-cols-3 ">
          <div className="p-6">
            <div className="text-[#8d0000] text-8xl mb-3">{`${count1}`}</div>
            <h2 className="text-xl text-gray-500">
              Degree & diploma programs offered
            </h2>
          </div>
          <div className="p-6">
            <div className="text-[#8d0000] text-8xl mb-3">{`${count2}%`}</div>
            <h2 className="text-xl text-gray-500">
              Of undergraduate students receive financial aid
            </h2>
          </div>
          <div className="p-6">
            <div className="text-[#8d0000] text-8xl mb-3">{`${count3}%`}</div>
            <h2 className="text-xl text-gray-500">
              Of graduates had two or more internships as students
            </h2>
          </div>
        </div>

        <div className="p-[100px]">
          <h1 className="my-6 text-center text-4xl font-bold text-black">
            Afford Learnix
          </h1>
          <p className="my-9 mx-[20%] text-xl leading-10">
            At Acadia University, we prepare you to launch your career by
            providing a supportive, creative, and professional environment from
            which to learn practical skills, build a network of industry
            contacts. Acadia is affordable for all admitted students. Financial
            aid covers all demonstrated need for all students, regardless of
            citizenship or citizenship status. Families making under{" "}
            <strong>$85,000</strong> a year pay nothing for their students
            education, and families making between{" "}
            <strong>$85,000-$150,000 pay 0-10%</strong> of their incomes.
          </p>
          <button className="p-[10px] px-[20px]  border-2 border-[#C41230] text-[#C41230] text-xl rounded-xl ml-[40%] hover:bg-[#C41230] hover:text-white transition-all">
            Learn more <br />
            <span className="flex gap-3">
              about finance aid <ChevronRight />
            </span>
          </button>
        </div>

        <div className="m-[100px] bg-[#164951] rounded-2xl w-[80%] h-[400px] p-12 flex">
          <div className="p-[60px] w-[50%]">
            <h1 className="text-white text-3xl font-bold mb-3">Calculate Your Estimated Scholarship.</h1>
            <p className="text-white my-6">How affordable is Harvard? See for yourself with our Net Price Calculator.</p>
            <button className= "hover:text-[#164951] hover:bg-white transition-all text-white p-6 rounded-xl border-2 border-white">Net Price Calculator</button>
          </div>
            <img src={overviewTwo} alt="" className="h-[400px] rounded-2xl" />
        </div>

        <div className="m-[100px]   w-[80%] h-[400px] p-12 flex relative">
          <div className="w-[200px] bg-amber-400 absolute h-[470px] -z-20 top-[10px] rounded-xl"></div>
            <img src={oThree} alt="" className="h-[400px] w-[50%] rounded-2xl" />
          <div className="p-[60px] w-[50%]">
            <h1 className="text-black text-3xl font-bold mb-3">HOw to Apply</h1>
            <p className="text-black my-6">We’ll guide you through the Common Application
or Coalition Application, Powered by Scoir, and answer
any questions you have along the way.</p>
            <button className= "hover:text-amber-400 hover:bg-black transition-all text-black p-6 rounded-xl border-2 border-amber-400">Net Price Calculator</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Overview;
