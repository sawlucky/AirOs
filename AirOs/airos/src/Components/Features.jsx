import React, { useState, useEffect, useRef } from "react";
import features from "../svgs/FeaturesSvgs";
import { Bars, AudioBars, PlayBar, LineBar } from "../svgs/AboutUsSvgs";

const Features = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && placeholderRef.current) {
        const stickyOffset = stickyRef.current.offsetTop;
        const scrollPosition = window.scrollY;

        // Add some threshold (e.g., 100px) before sticking
        if (scrollPosition > stickyOffset + 100) {
          setIsSticky(true);
          // Set placeholder height to prevent layout jump
          placeholderRef.current.style.height = `${stickyRef.current.offsetHeight}px`;
        } else {
          setIsSticky(false);
          placeholderRef.current.style.height = "0px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#122] relative md:py-12">
      {/* Placeholder div to prevent layout shift when player becomes sticky */}
      <div ref={placeholderRef} className="h-0 transition-all duration-300" />

      {/* Audio Player Section - Now properly sticky */}
      <div
        ref={stickyRef}
        className={`w-full flex justify-center items-center py-5 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-[#122]/90 backdrop-blur-sm transition-all duration-300"
            : "relative"
        }`}
      >
        <div className="w-full max-w-[619px] px-8 py-4 bg-gradient-to-r from-white/40 to-white/25 rounded-2xl shadow-[-4px_8px_56px_0px_rgba(0,0,0,0.10)] outline-1 outline-offset-[-1px] outline-white backdrop-blur-[7.50px] inline-flex justify-start items-center gap-5 mx-4">
          <Bars />
          <div className="flex items-center gap-5 flex-1 min-w-0">
            <div className="w-14 h-14 rounded-lg bg-cover bg-center shrink-0">
              <img
                src="./images/song.png"
                alt="Now playing"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="min-w-0">
              <div className="text-black font-['Nunito Sans'] text-[16px] font-medium leading-[140%] tracking-[-0.4px] truncate">
                POP!
              </div>
              <div className="text-black font-['Nunito Sans'] text-[16px] font-medium leading-[140%] tracking-[-0.4px] truncate">
                SHAH LUCKY
              </div>
            </div>
          </div>
          <AudioBars />
          <PlayBar />
        </div>
      </div>

      {/* Rest of your content */}
      <div className="pt-5">
        {" "}
        {/* Added padding to account for sticky player */}
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-[#FFF] opacity-70 flex items-center justify-center font-nunito">
            <span className="w-[24.89px] h-0 mx-2 md:mx-5 border border-[#eab557]" />
            Showcasing Our Diverse Diaspora
          </p>
          <span className="font-['Nunito Sans'] text-[35.556px] font-bold leading-[58.667px] tracking-[0.999px] text-[#fff]">
            Your Home
          </span>
          <span className="text-[#1DB954] ml-2 font-['Nunito Sans'] text-[35.556px] leading-[58.667px] tracking-[0.889px]">
            Away From Home
          </span>
        </div>
        {/* Features Section */}
        <div className="flex items-start justify-center flex-wrap gap-[70.333px] flex-[1_0_0] p-[21.333px] self-stretch md:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-[1100px] px-6 py-6 items-start sm:items-start sm:w-56 hover:bg-white/40 rounded-2xl h-[300px]"
            >
              <div className="mb-4 flex justify-center sm:justify-start">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#FFF] font-nunito">
                {feature.title}
              </h3>
              <p className="opacity-70 text-[#FFF] text-[15.11px] font-normal font-['Poppins'] leading-relaxed text-center sm:text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* LineBar Graphic */}
        <div className="absolute right-0 bottom-[55%]">
          <LineBar />
        </div>
        <div className="absolute w-[204px] h-[204px] right-0 bottom-[40%] bg-[#fecc30] rounded-full blur-[126.70px]" />
      </div>
    </div>
  );
};

export default Features;
