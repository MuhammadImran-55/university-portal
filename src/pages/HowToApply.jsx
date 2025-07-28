import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import overviewOne from "../assets/images/campus-breadcrumb.jpg";
import applyThumb from "../assets/images/apply-thumb.png";
import { House, Pointer } from "lucide-react";
import { Link } from "react-router-dom";

const HowToApply = () => {
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
          <h4 className="pl-6 border-l-gray-300 border-l-1 text-xl">
            Our Leadership
          </h4>
        </div>
        <h1 className="absolute top-[50%] text-white text-6xl z-50 left-[150px] font-bold">
          Our Leadership
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
        <img src={applyThumb} alt="" className="rounded-2xl my-9" />
      </div>

      <div className=" w-[60%] m-auto mb-18">
        <h1 className="text-5xl text-black font-medium my-6 ">
          Application Process
        </h1>

        <div className="border-b-1 border-b-gray-500 py-9">
          <div className="flex gap-6 items-center my-6">
            <span className="border-1 border-[#8d0000] rounded-full px-[17px] py-[6px] text-[#8d0000] text-xl">
              1
            </span>
            <p className=" text-2xl text-black font-medium">
              Complete Applicaton Form
            </p>
          </div>
          <p className="text-xl">
            The University of Acadia uses Apply web for the processing of
            graduate applications. Proceed to the link below to create an Apply
            web account, submit an application review a submitted application,
            and access post-submission functionality.
          </p>
          <button className="px-6 bg-[#8d0000] text-white py-4 rounded-xl text-xl my-6 border-2 hover:border-[#8d0000] hover:bg-transparent hover:text-[#8d0000] transition-all cursor-pointer">
            Application Form
          </button>
        </div>
        <div className="border-b-1 border-b-gray-500 py-6">
          <div className="flex gap-6 items-center my-6">
            <span className="border-1 border-[#8d0000] rounded-full px-[17px] py-[6px] text-[#8d0000] text-xl">
              2
            </span>
            <p className="text-2xl text-black font-medium">
              Confirmation of Application
            </p>
          </div>
          <p className="text-xl py-6">
            Admissions requirements vary by program. Please consult the program
            website to verify which information is required to complete the
            application.
          </p>
        </div>
        <div className="border-b-1 border-b-gray-500 py-6">
          <div className="flex gap-6 items-center my-6">
            <span className="border-1 border-[#8d0000] rounded-full px-[17px] py-[6px] text-[#8d0000] text-xl">
              3
            </span>
            <p className="text-2xl text-black font-medium">
              Application Review
            </p>
          </div>
          <p className="text-xl py-6">
            QRC will review your application to confirm you meet our
            requirements. If so, you will then be asked to complete an interview
            as part of the review process.
          </p>
        </div>
        <div className="border-b-1 border-b-gray-500 py-6">
          <div className="flex gap-6 items-center my-6">
            <span className="border-1 border-[#8d0000] rounded-full px-[17px] py-[6px] text-[#8d0000] text-xl">
              4
            </span>
            <p className="text-2xl text-black font-medium">
              Application Interview
            </p>
          </div>
          <p className="text-xl py-6">
            Interviews are usually completed over the phone with a member of the
            Academic Team. The purpose of the interview is to get to know you
            better, hear about your future plans, understand why you are
            interested in the course.
          </p>
        </div>
        <div className="border-b-1 border-b-gray-500 py-6">
          <div className="flex gap-6 items-center my-6">
            <span className="border-1 border-[#8d0000] rounded-full px-[17px] py-[6px] text-[#8d0000] text-xl">
              5
            </span>
            <p className="text-2xl text-black font-medium">Payment of Fees</p>
          </div>
          <p className="text-xl py-6">
            At the end of the application, you will be required to pay the
            registration fee and the testing fee before continuing to the next
            step.
          </p>
        </div>
      </div>

      <div className="bg-white  flex p-[100px] gap-18">
        <div className="w-[60%]  ">
          <h1 className="text-5xl text-black font-medium my-6 ">
            Application Process
          </h1>
          <div className="text-2xl text-black my-9">You Will need:</div>
          <div className="flex text-xl gap-6 my-9">
            <Pointer className="rotate-90" />
            You can be admitted at any time during the academic year.
          </div>
          <div className="flex text-xl gap-6 my-9">
            <Pointer className="rotate-90" />
            If English is not your first language, you will need to demonstrate
            English language proficiency equivalent to with a minimum of 5.5 in
            each band and 6.0 in speaking.
          </div>
          <div className="flex text-xl gap-6 my-9">
            <Pointer className="rotate-90" />
            Contact information for one teacher (or two, maximum) who will complete
the Teacher Evaluation form.
          </div>
          <div className="flex text-xl gap-6 my-9">
            <Pointer className="rotate-90" />
            Open to students 18 years and over at course commencement.
          </div>
          <div className="flex text-xl gap-6 my-9">
            <Pointer className="rotate-90" />
            Spiritual Formation Program Requirements
          </div>
           <Link to='/campuslife'>
                <button className="px-6 bg-[#8d0000] text-white py-4 rounded-xl text-xl my-6 border-2 hover:border-[#8d0000] hover:bg-transparent hover:text-[#8d0000] transition-all cursor-pointer">
            Request a Campus Tour
          </button>
                </Link>
        </div>
        <div className="w-[35%] bg-[#EFEDE7] p-6 rounded-2xl text-black">
                <h1 className="text-3xl font-medium py-6">Application Deadlines</h1>
                <div className="flex justify-between items-center border-b-1 py-6 border-b-gray-500">
                    <div className="text-2xl"><span className="text-[#8d0000] text-xl">General</span><br />October 15</div>
                    <div className="text-2xl text-gray-600">Early Decision |</div>
                </div>
                <div className="flex justify-between items-center border-b-1 py-6 border-b-gray-500">
                    <div className="text-2xl"><span className="text-[#8d0000] text-xl">ON Campus</span><br />November 1</div>
                    <div className="text-2xl text-gray-600">Early Decision ||</div>
                </div>
                <div className="flex justify-between items-center border-b-1 py-6 border-b-gray-500">
                    <div className="text-2xl"><span className="text-[#8d0000] text-xl">Hybrid/Online</span><br />January 15</div>
                    <div className="text-2xl text-gray-600">Regular Decision </div>
                </div>
                <div className="flex justify-between items-center border-b-1 py-6 border-b-gray-500">
                    <div className="text-2xl"><span className="text-[#8d0000] text-xl">Current Continuing</span><br />March 5</div>
                    <div className="text-2xl text-gray-600">All Continuing</div>
                </div>
                <Link to='/overview'>
                <button className="px-6 bg-[#8d0000] text-white py-4 rounded-xl text-xl my-6 border-2 hover:border-[#8d0000] hover:bg-transparent hover:text-[#8d0000] transition-all cursor-pointer">
            Visit Financial Aid
          </button>
                </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowToApply;
