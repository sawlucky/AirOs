import React from "react";
import aboutUs from "../assets/aboutUs.png";
import { Link } from "react-router-dom";
const About = ({ id }) => {
  return (
    <div
      id={id}
      className="w-full  h-auto min-h-[512px] p-8 md:p-[71.71px] bg-[#112222] flex flex-col justify-center items-center gap-8 md:gap-[71.71px]"
    >
      <div className="w-full max-w-[1074px] flex flex-col md:flex-row justify-start items-center gap-8 md:gap-16">
        <img
          className="w-full md:flex-1 rounded-[14.34px] object-cover max-h-[355px]"
          src={aboutUs}
          alt="About us"
        />
        <div className="w-full md:flex-1 flex flex-col justify-start items-start gap-6 md:gap-[35.85px]">
          <div className="self-stretch flex flex-col justify-start items-start gap-[14.34px]">
            <div className="inline-flex justify-start items-center gap-[21.51px]">
              <div className="w-[57.37px] h-0 border-t-[3.59px] border-[#fecc30]" />
              <div className="opacity-70 text-white text-[21.51px] font-normal font-['Inter'] leading-relaxed tracking-wide">
                About us
              </div>
            </div>
            <div className="self-stretch text-white text-[32.27px] font-bold font-['Nunito Sans'] leading-[38.72px]">
              Connecting Cultures, One Song at a Time.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-[14.34px]">
            <div className="self-stretch opacity-70 text-white text-lg font-normal font-['Nunito Sans'] leading-loose tracking-[0.359px]">
              We are Vancouver's first multicultural internet radio station,
              dedicated to bringing communities together through the power of
              music. Founded in Vancouver, BC, Canada, our station is a bridge
              for the global diaspora, helping people reconnect with their
              cultural heritage, no matter where they are.
            </div>
            <div className="self-stretch opacity-70 text-white text-lg font-normal font-['Nunito Sans'] leading-loose tracking-tight">
              🎵 24/7 Live Music | 🌍 Global Community | 🎙 Engaging Talk
            </div>
          </div>
          <div
            data-property="Default"
            className="w-[180px] h-[45px] px-[20px] py-[12px] bg-[#f2eee9] rounded-[26px] border-[3px] border-[#e8e4e1] inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer"
          >
            <div className="text-black text-base font-semibold font-['Inter'] leading-tight">
              <Link to="/about">
                <button> About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
