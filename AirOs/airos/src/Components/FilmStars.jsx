import React from "react";
import { creators } from "../utils/ListenCreator";

const FilmStars = () => {
  return (
    <div className="bg-[#122]  flex  items-end justify-end ">
      <div className=" pl-52 my-20 w-full relative  grid grid-cols-4 gap-24 overflow-hidden animate-marquee">
        {creators.map((start, index) => (
          <div
            key={index}
            className={`${
              start.name === "Listen" ||
              start.name === "Your" ||
              start.name === "Best" ||
              start.name === "Creator"
                ? "bg-[#122] text-[#FECC30] font-space  font-medium leading-[98px] flex  items-center align-middle"
                : "bg-[#FECC30] text-black cursor-pointer"
            }  rounded-[14.5px] w-[300px]  overflow-hidden  `}
          >
            <div className="flex justify-between  px-2">
              <div className="flex flex-col justify-start ">
                <div className="text-lg font-bold justify-center">
                  {start.name}
                </div>
                {start.since && <div className="text-sm">{start.since}</div>}
              </div>
              <div className="flex justify-start">
                {start.name !== "Listen" &&
                  start.name !== "Your" &&
                  start.name !== "Best" &&
                  start.name !== "Creator" && (
                    <img
                      src="./images/samantha.png"
                      alt=""
                      className="w-full "
                    />
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmStars;
