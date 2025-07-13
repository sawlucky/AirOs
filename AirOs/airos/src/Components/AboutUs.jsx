import React from "react";
import { Link } from "react-router-dom";
import aboutUs from "../assets/aboutUs.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AboutUs = () => {
  return (
    <div className="bg-[#122] w-full min-h-screen ">
      <Navbar />
      <div className="text-white ml-[98px] flex flex-col lg:flex-row gap-[105px] mt-[80px] mr-[100px]">
        {/* Left Section */}
        <div className="w-full lg:w-[60%]">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-[690px] text-white text-4xl lg:text-6xl font-bold font-['Nunito Sans'] leading-[48px] lg:leading-[72px]">
              Your Sound Your Story
              <br />
              Live from Vancouver.
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="self-stretch opacity-70 text-white text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-7 lg:leading-9 tracking-tight">
                Welcome to Air OS, Vancouver’s first multicultural internet
                radio station, dedicated to uniting communities through the
                universal language of music, podcasts, and cultural
                conversations.
              </div>
              <div className="self-stretch opacity-70 text-white text-sm font-extralight font-['Nunito Sans'] leading-relaxed tracking-tight">
                We believe that music has the power to bridge distances and keep
                people rooted in their heritage.
              </div>
            </div>
            <div className="self-stretch opacity-70 text-white text-lg lg:text-xl font-normal font-['Nunito_Sans'] leading-7 lg:leading-9 tracking-tight">
              ✅ Live Podcasts
              <br />✅ 24/7 live broadcasting
              <br />✅ Sports & Cricket Highlights,
            </div>
          </div>
          <Link to="/live">
            <div className="w-60 h-14 my-12 bg-stone-100 rounded-[40px] outline outline-4 outline-stone-200 inline-flex justify-center items-center gap-3 overflow-hidden cursor-pointer">
              <div className="justify-center text-black text-base font-semibold font-['Inter'] leading-tight">
                <button>Live Podcasts</button>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-[40%] flex justify-center items-end">
          <div className="bg-[#FECC30]  w-full max-w-[349px] h-auto mb-16 lg:h-[400px] rounded-t-[50%] overflow-hidden ">
            <div className=" absolute rounded-[50%] bg-purple-500 w-16 h-16 bottom-[44%] right-[11.5%]"></div>
            <img
              src="./images/lady.png"
              alt="Lady"
              className="  absolute top-[24.4%]  right-[10%]"
            />
          </div>
        </div>
      </div>
     

      <div className="  inline-flex flex-col lg:flex-row justify-start items-center gap-72  mt-[110px] lg:mx-[98px]">
        {/* Image Section */}
        <div className="w-[50%] lg:w-96 h-96 relative flex justify-center lg:justify-start">
          <img
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl border-1 border-amber-400/40 absolute left-0 top-0"
            src="./images/radio1.png"
            alt="Image 1"
          />
          <img
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl border-1 border-amber-400/40 absolute lg:left-[77.15px] lg:top-[85.32px] left-[50px] top-[60px]"
            src="./images/radio2.png"
            alt="Image 2"
          />
        </div>

        {/* Content Section */}
        <div className="w-[50%]  lg:w-[619px] inline-flex flex-col justify-center items-start gap-7">
          <div className="self-stretch  flex flex-col justify-start items-start gap-6">
            <div className="w-full lg:w-[625px] text-white text-3xl lg:text-4xl font-bold font-['Nunito Sans'] uppercase leading-[44px] lg:leading-[54.43px]">
              🎙 Bringing Voices Together Through Podcasts
            </div>
            <div className="w-full lg:w-[640px] text-white/60 text-lg lg:text-xl font-normal font-['Nunito Sans'] leading-6 lg:leading-7">
              At Air OS, we do more than just play music. We provide meaningful
              conversations through Live Podcasts featuring artists,
              influencers, experts, and community leaders.
            </div>
            <div className="w-full lg:w-[625px] text-white/60 text-xl lg:text-2xl font-normal font-['Nunito Sans'] leading-relaxed lg:leading-loose">
              Bollywood Buzz
              <br />
              Sports & Cricket
            </div>
          </div>
          <div className="self-stretch pr-0 lg:pr-40 inline-flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-20">
            <div className="inline-flex flex-col justify-center items-center gap-4">
              <div className="text-white text-4xl lg:text-5xl font-normal font-['Nunito Sans'] leading-[54px] lg:leading-[67.20px]">
                500K+
              </div>
              <div className="text-white text-xl lg:text-2xl font-normal font-['Nunito Sans'] capitalize leading-relaxed lg:leading-loose">
                Famous Singer
              </div>
            </div>
            <div className="inline-flex flex-col justify-center items-center gap-4">
              <div className="text-white text-4xl lg:text-5xl font-normal font-['Nunito Sans'] leading-[54px] lg:leading-[67.20px]">
                240K+
              </div>
              <div className="text-white text-xl lg:text-2xl font-normal font-['Nunito Sans'] leading-relaxed lg:leading-loose">
                Playlist Song
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center mt-[115px] gap-4">
        <div className="text-white text-4xl md:text-6xl font-bold font-['Nunito Sans'] capitalize leading-[48px] md:leading-[89.60px] tracking-wide text-center">
          LISTEN MUSIC EASILY
        </div>
        <div className="w-full md:w-[60%] text-center text-white text-lg md:text-3xl font-normal font-['Nunito Sans'] leading-7 md:leading-10 tracking-wide px-4">
          You can download app in available platforms. After that you can create
          an account in the applications
        </div>
      </div>

      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-start items-center gap-4">
          <img
            className="w-full max-w-[603px] h-auto md:h-96 rounded-2xl"
            src={aboutUs}
            alt="podcastImage"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
