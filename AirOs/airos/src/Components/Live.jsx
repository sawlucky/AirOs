import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VideoPlayer from "./VideoPlayer";

import MainLiveView from "./MainLiveView";

import LiveChat from "./LiveChat";
import axios from "axios";

const Live = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const findAllEvents = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:8080/admin/getEvents"
        );
        if (response.data) {
          setEvents(response.data); // Set the fetched events to the events state
          console.log("Fetched events:", response.data);
        }
      } catch (error) {
        console.log(error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    findAllEvents();
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#122]">
      <Navbar />
      <div className="flex h-full my-6">
        <div className="flex-1">
          <MainLiveView />
        </div>
        <div className="w-80 h-auto bg-[#191919] mr-36 rounded-lg overflow-hidden">
          <LiveChat />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start ml-[100px] my-9">
        <div className="justify-center text-white text-2xl font-bold font-['Nunito_Sans']">
          Coming Podcast
        </div>
        {isLoading && (
          <div className="col-span-full flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
          </div>
        )}
        {error && (
          <div className="col-span-full bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
            <p>{error}</p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="w-full relative bg-zinc-700 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="w-full px-4 pt-4">
                <div className="w-full h-48 sm:h-56 bg-white rounded-3xl overflow-hidden relative">
                  {event.eventThumbnail && (
                    <img
                      src={`${
                        import.meta.env.VITE_CLOUDFRONT_DOMAIN_NAME
                      }/${event.eventThumbnail.split("/").pop()}`}
                      alt="Event thumbnail"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-transparent to-black/10"></div>
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full px-5 pt-5 pb-6">
                <div className="flex flex-col gap-3">
                  {/* Time Section */}
                  <div className="flex flex-col">
                    <h3 className="text-white text-lg font-bold font-['Nunito_Sans']">
                      {event.startTime} - {event.endTime}
                    </h3>
                    <p className="text-zinc-300 text-sm font-medium font-['Space_Grotesk']">
                      {new Date(event.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Days & Repeat */}
                  <div className="flex flex-wrap gap-2">
                    {event.days.map((day, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zinc-600 rounded-full text-white text-xs font-medium font-['Nunito_Sans']"
                      >
                        {day}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-zinc-800 rounded-full text-white text-xs font-medium font-['Nunito_Sans']">
                      {event.repeat}
                    </span>
                  </div>

                  {/* Status Bar */}
                  <div className="flex justify-between items-center mt-2">
                    {/* Active Indicator */}
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-500 text-sm font-bold font-['Nunito_Sans']">
                        Active
                      </span>
                    </div>

                    {/* Action Buttons */}
                    {/* <div className="flex gap-2">
                      <button className="p-2 text-zinc-300 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    
                    </div> */}
                  </div>
                </div>
              </div>

              {/* New Badge for recently created events */}
              {new Date(event.createdAt) >
                new Date(Date.now() - 24 * 60 * 60 * 1000) && (
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold font-['Nunito_Sans'] px-2 py-1 rounded-full">
                  NEW
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Live;
// `${import.meta.env.VITE_CLOUDFRONT_DOMAIN_NAME}/${image.split("/").pop()}`;
