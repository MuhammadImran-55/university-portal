import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import overviewOne from "../assets/images/campus-breadcrumb.jpg";
import { ChevronRight, House, SquaresSubtract } from "lucide-react";
import under1 from '../assets/images/under1.png'
import under2 from '../assets/images/under2.png'
import under3 from '../assets/images/under3.png'
import under4 from '../assets/images/under4.png'

const Graduates = () => {
  

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
            <h4 className="border-l-gray-300 border-l-1 text-xl pl-3">
              Academic Program
            </h4>
          </div>
          <h1 className="absolute top-[50%] text-white text-6xl z-50 left-[150px] font-bold">
            Academic Program
          </h1>
        </div>
        <div className=" p-[100px]">
          <p className="text-6xl leading-18">
            Our goal is to develop and meet the needs of each child so that he or she becomes a well-rounded tomorrow individual.
          </p>
           <button className= "hover:text-[#8d0000] hover:bg-white hover:border-2 hover:border-[#8d0000] transition-all bg-[#8d0000] text-white p-6 rounded-xl border-2 border-white mt-9">Net Price Calculator</button>
        </div>
      
         <div className="flex gap-9 mx-[100px]">
            <img src={under1} alt="" className="h-[350px] w-[200px] rounded-2xl mt-30"/>
            <img src={under2} alt="" className="rounded-2xl w-[350px]"/>
            <img src={under3} alt="" className="rounded-2xl w-[250px] h-[450px] mt-12"/>
            <img src={under4} alt=""  className="rounded-2xl w-[200px] h-[250px] mt-30"/>
        </div>   

        <div className="p-[100px]">
            <div className="bg-[#8d0000] text-white items-center gap-6 pl-6 flex h-18 w-[100%] m-auto rounded-xl">
                <SquaresSubtract />
                <div className="text-3xl font-bold">Major Programs</div>
            </div>
            <div className="grid grid-cols-3 gap-6 p-6">
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Computer Science</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Mathematics</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">English Literature</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Sports Science</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Bio Tech</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Islamic Study</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">BBA&MBA</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Machine Learning</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Artificial Intelligence</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">International Relation</a><ChevronRight /></li>
                </div>
                
            </div>
        </div>

        
        <div className="p-[100px]">
            <div className="bg-[#8d0000] text-white items-center gap-6 pl-6 flex h-18 w-[100%] m-auto rounded-xl">
                <SquaresSubtract />
                <div className="text-3xl font-bold">Minor Programs</div>
            </div>
            <div className="grid grid-cols-3 gap-6 p-6">
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Computer Science</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Mathematics</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">English Literature</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Sports Science</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Bio Tech</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Islamic Study</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">BBA&MBA</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Machine Learning</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">Artificial Intelligence</a><ChevronRight /></li>
                </div>
                <div className="w-1/1 border-gray-300 rounded-xl border-1 h-18 items-center flex hover:bg-[#8d0000] transition-all hover:text-white">
                 <li className="flex items-center mx-6 w-full justify-between"><a href="" className="text-xl hover:text-white text-black ">International Relation</a><ChevronRight /></li>
                </div>
                
            </div>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default Graduates;
