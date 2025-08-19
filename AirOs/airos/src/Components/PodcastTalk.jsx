import React from "react";
import AllShows from "../utils/TalkShow";
import BuisnessPlan from "../assets/PodcastTalk/BusinessPlan.png";
import GoodTeam from "../assets/PodcastTalk/GoodTeam.png";
import Medical from "../assets/PodcastTalk/Medical.png";
import Rectangle from "../assets/PodcastTalk/Rectangle.png";
const PodcastTalk = () => {
  return (
    <div className="bg-[#122] w-full   relative">
      <div className="w-full h-[207px] p-[71.11px]   inline-flex flex-col justify-start items-center gap-[71.11px]">
        <div className="inline-flex flex-col justify-start items-center gap-[14.22px]">
          <div className="inline-flex justify-start items-center gap-[21.33px]">
            <div className="w-[24.89px] h-[4px] outline-[1.78px] outline-offset-[-0.89px] bg-[#eab557]" />
            <div className="opacity-70 justify-start text-white text-lg font-normal font-['NunitoSans'] leading-[24.89px]">
              🎶 Live Music
            </div>
          </div>
          <div className="w-[509px] text-center justify-start text-white text-4xl font-bold font-['NunitoSans'] leading-[58.67px] tracking-wide">
            🎙️ Explore Music Categories
          </div>
        </div>
      </div>
      {/* all talk shows */}
      <div className="flex justify-center items-center w-full">
        <div className="grid grid-cols-1 max-w-[1200px] justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {AllShows.sort((a, b) => {
            return b.isLive - a.isLive;
          }).map((allshow) => {
            return (
              <div
                key={allshow?.id}
                className={`w-full rounded-[16px] md:rounded-[23px] overflow-hidden ${
                  allshow.isLive ? "bg-[#FFF]" : "bg-[#374545]"
                } cursor-pointer`}
              >
                <div className="w-full aspect-[6/7] relative bg-gray-300 rounded-t-[16px] md:rounded-t-[23px] overflow-hidden">
                  <img
                    src="./images/talkShow.png"
                    alt={allshow.title}
                    className="w-full h-full object-contain mt-4 mb-3 rounded-t-[16px]"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex flex-col justify-start items-start gap-1">
                    <div className="flex items-center justify-between w-full">
                      <div
                        className={`${
                          allshow.isLive ? "text-black" : "text-white"
                        } text-base md:text-lg font-bold font-['Nunito_Sans'] truncate" `}
                      >
                        {allshow.title.substring(0, 15) || "Trending News"}
                      </div>
                      <div className={`flex items-center gap-1`}>
                        <span className="text-green-500 text-xs">★</span>
                        <span
                          className={`${
                            allshow.isLive ? "text-black" : "text-white"
                          } text-xs`}
                        >
                          {allshow.rating || "8.5"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`opacity-75 ${
                        allshow.isLive ? "text-black" : "text-white"
                      } text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-tight`}
                    >
                      {allshow.host || "Akash Wali"}
                    </div>
                    {allshow.isLive && (
                      <div className="flex items-center justify-between w-full mt-2">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          <span className="text-red-500 text-xs">
                            Live soon
                          </span>
                        </div>
                        <div className="text-green-500 text-xs">
                          {allshow.timing
                            ? allshow.timing.split(" ")[0]
                            : "08:00 PM"}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[77.974px] h-[73.941px] rotate-[-10deg] flex-shrink-0  flex justify-start ml-[86%] mt-10  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="78"
          height="74"
          viewBox="0 0 78 74"
          fill="none"
        >
          <path
            d="M32.3945 0.770045L43.02 19.7893L61.4239 6.64678L54.6616 27.4886L77.2089 30.4087L57.0201 40.8643L70.5029 58.1363L48.7139 52.0809L45.2342 73.5873L34.6087 54.5681L16.2048 67.7106L22.9671 46.8687L0.419822 43.9487L20.6086 33.4931L7.12582 16.221L28.9148 22.2764L32.3945 0.770045Z"
            fill="#FFA200"
          />
        </svg>
      </div>
      <div className="absolute w-[204px] h-[204px] top-0 bg-[#fecc30] rounded-full blur-[126.70px]" />
      {/* HIstory  Buisness Trending  fitness */}
      <div className=" mx-[176px]  ">
        <div className="self-stretch my-5 opacity-70 justify-start text-white text-base font-normal font-['Nunito Sans'] leading-snug">
          Discover 10 Hit Shows by Category
        </div>
        <div className="w-full inline-flex justify-start items-start gap-5">
          <div className="flex-1 h-32 relative bg-black/40 rounded-md overflow-hidden">
            <img
              className="w-32 h-32 left-[120px] top-[8px] absolute"
              src={BuisnessPlan}
            />
            <div className="left-[17px] top-[98px] absolute justify-center text-white text-lg font-bold font-['Nunito Sans'] leading-3">
              History
            </div>
          </div>
          <div className="flex-1 h-32 relative bg-black/40 rounded-md overflow-hidden">
            <img
              className="w-32 h-32 left-[120px] top-[5px] absolute"
              src={GoodTeam}
            />
            <div className="left-[17px] top-[98px] absolute justify-center text-white text-lg font-bold font-['Nunito Sans'] leading-3">
              Business
            </div>
          </div>
          <div className="flex-1 h-32 relative bg-black/40 rounded-md overflow-hidden">
            <img
              className="w-32 h-32 left-[120px] top-[13px] absolute"
              src={Medical}
            />
            <div className="left-[17px] top-[98px] absolute justify-center text-white text-lg font-bold font-['Nunito Sans'] leading-3">
              Fitness
            </div>
          </div>
          <div className="flex-1 h-32 relative bg-black/40 rounded-md overflow-hidden">
            <img
              className="w-32 h-32 left-[120px] top-[13px] absolute"
              src={Rectangle}
            />
            <div className="left-[17px] top-[98px] absolute justify-center text-white text-lg font-bold font-['Nunito Sans'] leading-3">
              Trending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastTalk;
