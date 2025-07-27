import React from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import overviewOne from "../assets/images/campus-breadcrumb.jpg";
import { House } from 'lucide-react';

const Faculty = () => {
  return (
    <div>
        <Header/>
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
              Our Leadership
            </h4>
          </div>
          <h1 className="absolute top-[50%] text-white text-6xl z-50 left-[150px] font-bold">
            Our Leadership
          </h1>
        </div>

        <div className='grid grid-cols-3 p-[150px]'>

        </div>

        <Footer/>
    </div>
  )
}

export default Faculty