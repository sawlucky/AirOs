import React, { Suspense } from "react";
// import RecentShowList from "./RecentShowList";
const RecentShowList =React.lazy(()=> (import("./RecentShowList")))
import {OnlineShopping,ClappingHand,PhoneStar,Star} from "../svgs/Timings"
const LoadingFallback = () => <div aria-live="polite">Loading...</div>;
const RecentShow = () => {
    
  return (
    <div className="bg-[#122] flex justify-center  flex-col items-center min-h-[100px]">
      <div className="w-[1285px] h-20 bg-amber-400 flex items-center rounded-[20px] overflow-hidden relative">
        <div className="w-full text-black text-3xl font-['Nunito Sans'] whitespace-nowrap animate-marquee">
          Upcoming Shows 🔹 10:00 AM - Sports & Cricket Buzz 🔹 12:00 PM - Desi
          Beats Hour 🔹 08:00 PM - Bollywood Talk with Akash
        </div>
      </div>
      <Suspense fallback={<LoadingFallback />}>
        <RecentShowList />
      </Suspense>

      <div className="w-[1285px] h-64 relative mt-[100px]  ml-[200px] ">
        <div className=" top-[2px]  absolute text-center justify-center text-white text-5xl font-normal font-['Nunito Sans'] leading-[82.50px]">
          Create and stream
        </div>
        <div className="left-[400.61px] top-[3px] absolute inline-flex justify-start items-start">
          <div
            data-:hover="false"
            data-variant="1"
            className="px-4 bg-amber-400 flex justify-start items-start"
          >
            <div className="text-center justify-center text-black text-5xl font-bold font-['Nunito Sans'] leading-[82.50px]">
              high-quality radio shows
            </div>
          </div>
        </div>
        <div className="w-[466.17px] h-20  top-[85.34px] absolute text-center justify-center text-white text-5xl font-normal font-['Nunito Sans'] leading-[82.50px]">
          while delivering the
        </div>
        <div className="max-w-9 left-[500.82px] top-[134.41px] absolute origin-top-left rotate-[153deg] inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="w-12 h-12 flex flex-col justify-center items-center overflow-hidden">
            <div
              data-variant="1"
              className="w-12 h-12 relative overflow-hidden"
            >
              <div className="w-12 h-12 left-[0.35px] top-[0.69px] absolute bg-amber-400" />
              <div className="w-8 h-8 left-[8.57px] top-[8.70px] absolute bg-teal-900" />
            </div>
          </div>
        </div>
        <div className="w-24 h-20 left-[520.66px] top-[85.34px] absolute text-center justify-center text-white text-5xl font-normal font-['Nunito Sans'] leading-[82.50px]">
          best
        </div>
        <div className="max-w-9 left-[700.90px] top-[133.95px] absolute origin-top-left rotate-[153deg] inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="w-12 h-12 flex flex-col justify-center items-center overflow-hidden">
            <div
              data-variant="1"
              className="w-12 h-12 relative overflow-hidden"
            >
              <div className="w-12 h-12 left-[0.35px] top-[0.69px] absolute bg-amber-400" />
              <div className="w-8 h-8 left-[8.57px] top-[8.70px] absolute bg-teal-900" />
            </div>
          </div>
        </div>
        <div className="w-64 h-20 left-[722px] top-[85px] absolute text-center justify-center text-white text-5xl font-normal font-['Nunito Sans'] leading-[82.50px]">
          experience
        </div>
        <div className="left-[406.45px] top-[168.31px] absolute inline-flex justify-start items-start">
          <div className="px-6 py-[2.84px] rounded-[33.19px] outline outline-[2.84px] outline-offset-[-2.84px] outline-amber-400 flex justify-start items-start">
            <div className="text-center justify-center text-white text-5xl font-bold font-['Space_Grotesk'] leading-[82.50px]">
              for music lovers.
            </div>
          </div>
        </div>
      </div>
      {/* all streams 24/7 ratings and all */}
      <div className="w-full my-10 inline-flex items-center  justify-between px-[103.64px] py-[40px] pr-[96px] bg-[#1A2929]">
        <div className="inline-flex gap-5">
          <OnlineShopping />
          <div>
            <div className="w-32 h-14 justify-center text-white text-5xl font-normal font-['Nunito Sans'] leading-[58px]">
              24/7
            </div>
            <div className="justify-center text-white text-base font-normal font-['Nunito Sans'] leading-normal">
              live broadcasting
            </div>
          </div>
        </div>
        <div className="inline-flex  gap-5">
          <ClappingHand />
          <div>
            <div className="w-32 h-14 justify-center text-white text-4xl font-normal font-['Nunito Sans'] leading-[58px]">
              32M+
            </div>
            <div className="justify-center text-white text-base font-normal font-['Nunito Sans'] leading-normal">
              Global audience reach
            </div>
          </div>
        </div>
        <div className="inline-flex  gap-5">
          <PhoneStar />
          <div>
            <div className="inline-flex">
              <div className="w-16 h-14 justify-center text-white text-4xl font-normal font-['Nunito Sans'] leading-[58px]">
                4.7
              </div>
              <Star />
            </div>
            <div className="justify-center text-white text-base font-normal font-['Nunito Sans'] leading-normal">
              listener rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentShow;
