import React, { useState } from "react";
import { Volume2, VolumeX, Radio, Play, Pause, Globe } from "lucide-react";
const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeFrequency, setActiveFrequency] = useState("103.7");
  const [activeMode, setActiveMode] = useState("FM");
  const [currentSong] = useState({
    artist: "LATA MANGESHKAR",
    title: "Mera Dil Yeh Pukare Aaja",
  });

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  // eslint-disable-next-line
  const handleFrequencyChange = (freq) => {
    setActiveFrequency(freq);
  };

  const handleModeChange = (mode) => {
    setActiveMode(mode);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-gray-800">Air</span>
              <span className="text-gray-400 p-1">OS</span>
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Podcast
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              Live
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900">
              <Globe size={20} />
            </button>
            <span className="text-gray-700">EN</span>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200">
              Play Radio
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col md:flex-row py-12 px-4">
        {/* Left Side - Station Info */}
        <div className="frame72 md:w-1/3 mb-8 md:mb-0">
          <h2 className="text-black text-center font-[Nunito Sans] text-[40.217px] font-normal leading-normal">
            KKSF
          </h2>

          <div className="mb-8">
            <div
              className=" h-[83.788px] self-stretch text-7xl font-mono tracking-wider mb-4"
              style={{ fontFamily: "monospace" }}
            >
              {activeFrequency}
            </div>

            <div className="flex space-x-8">
              <button
                className={`text-xl font-medium ${
                  activeMode === "FM" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleModeChange("FM")}
              >
                FM
              </button>
              <button
                className={` ${
                  activeMode === "AM"
                    ? "text-[#EAB557] font-[Inter] text-[26.743px] font-semibold leading-normal"
                    : "text-[#D5D2C6] font-[Inter] text-[27.202px] font-semibold leading-normal"
                }`}
                onClick={() => handleModeChange("AM")}
              >
                AM
              </button>
            </div>
          </div>

          <div className="mt-16">
            <div className="relative h-2 bg-gray-200 rounded-full w-full mb-2">
              <div
                className="absolute left-0 top-0 h-full bg-yellow-500"
                style={{ width: "30%" }}
              ></div>
              <div
                className="absolute h-6 w-1 bg-yellow-500 rounded-full"
                style={{ left: "30%", top: "-8px" }}
              ></div>
            </div>

            <div className="flex justify-between text-gray-500 text-sm">
              <span>200</span>
              <span>240</span>
              <span>270</span>
              <span>300</span>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-4xl font-bold text-gray-900">Listen</h3>
            <h3 className="text-4xl font-bold text-gray-400">Online</h3>
            <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
          </div>
        </div>

        {/* Right Side - Radio Player */}
        <div className="md:w-2/3 flex justify-center items-center">
          <div className="relative w-full max-w-2xl">
            {/* Radio Device */}
            <div className="bg-black rounded-3xl shadow-2xl overflow-hidden relative">
              {/* Handle */}
              <div className="h-6 bg-black rounded-full w-3/5 mx-auto -mb-2 relative z-10"></div>

              {/* Radio Body */}
              <div className="bg-black rounded-3xl p-6 relative">
                {/* Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <button className="bg-gray-800 rounded-full p-2">
                      <Radio size={24} className="text-gray-200" />
                    </button>
                    <span className="text-gray-200 uppercase text-sm">
                      Artists
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="bg-blue-100 rounded-full p-2">
                      <VolumeX size={24} className="text-blue-500" />
                    </button>
                    <button className="bg-blue-100 rounded-full p-2">
                      <Volume2 size={24} className="text-blue-500" />
                    </button>
                  </div>
                </div>

                {/* Player Display */}
                <div className="bg-blue-900 border-4 border-blue-500 rounded-lg p-4 mb-6">
                  <div className="text-blue-400 text-lg font-bold mb-2">
                    {currentSong.artist}
                  </div>
                  <div className="text-yellow-500 text-sm mb-2">
                    {currentSong.title}
                  </div>

                  <div className="flex items-center">
                    <span className="text-gray-400 mr-2">
                      <Volume2 size={16} />
                    </span>
                    <div className="h-1 bg-gray-600 rounded-full flex-grow">
                      <div
                        className="h-full bg-white rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                  <button
                    className="bg-gray-200 rounded-full h-24 w-24 flex items-center justify-center border-4 border-green-500"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <Pause size={40} className="text-gray-800" />
                    ) : (
                      <Play size={40} className="text-gray-800 ml-2" />
                    )}
                  </button>
                </div>

                {/* Speaker Grille */}
                <div className="h-24 bg-black rounded-lg mt-4 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #333 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Website URL */}
            <div className="absolute bottom-2 right-4 text-gray-400 text-sm">
              airos.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
