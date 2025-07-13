import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import axios from "axios";

const Footer = React.lazy(() => import("./Footer"));
const FrequentlyAsked = React.lazy(() => import("./FrequentlyAsked"));
const DonateUs = () => {
  const userData = useSelector((store) => store?.user?.loggedInUser) || {};

  const { _id, username, email } = userData;
  const navigate = useNavigate();
  if (!_id) {
    navigate("/");
  }
  console.log(_id, username, email);
  //   const navigate = useNavigate();
  const donateMoney = [5, 10, 15, 40];
  const [inputVal, setInputVal] = useState("");
  const [error, setError] = useState("");
  const validateAmount = (amount) => {
    const amountInCents = Math.round(amount * 100);
    if (amountInCents < 50) {
      setError("Minimum donation amount is $0.50");
      return false;
    }
    setError("");
    return true;
  };
  const HandleMoneyClick = (val) => {
    setInputVal(val);
  };
  const HandleSendMoney = async () => {
    if (!inputVal) return;
    if (!validateAmount(inputVal)) return;

    try {
      const stripe = await loadStripe(
        import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
      );

      const responseData = await axios.post(
        "http://localhost:8080/payment/create-checkout-session",
        {
          amount: inputVal,
          userEmail: email || "Deafult",
          userName: username || "Anonymous",
          userId: _id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const session = responseData;
      console.log(session.data);
      const result = stripe.redirectToCheckout({
        sessionId: session.data.id,
      });

      if (result.error) {
        console.log(result.error);
      }
    } catch (error) {
      console.log("message" + error);
    }
  };
  return (
    <div className="bg-[#122] w-full overflow-hidden">
      <Navbar />
      {/* Upper section Heading */}
      <div className="relative px-8 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white font-sans leading-tight mb-8 font-['Nunito Sans'] leading-[89.19px]">
            Great things begin with small acts of help
          </h1>
          <p className="text-center max-w-5xl justify-center items-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
            Support Our Radio – Keep the Music Alive!
          </p>
          <p className="text-center max-w-5xl justify-center items-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
            🎵 Your donation helps us bring 24/7 live music, podcasts, and
            engaging content to listeners worldwide.
          </p>
        </div>
      </div>

      {/* MIddle Sections */}

      <div className="relative px-8 py-4">
        <div className="flex mx-auto w-[930px] h-[530px] rounded-xl overflow-hidden gap-x-6">
          {/* Left Section - Image */}
          <div className="w-1/2 h-full relative">
            <img
              className="absolute w-full h-auto object-cover top-[-200px]"
              src="./images/DonateImg.png"
              alt="Donate"
            />
          </div>

          {/* Right Section - Form Box */}
          <div className="w-1/2 h-full flex items-start">
            <div className="w-full h-[90%] bg-[#122] border border-gray-600 rounded-xl p-6 mx-auto flex flex-col justify-between">
              {/* Top Section */}
              <div className="space-y-4">
                <div className="text-white text-base font-normal font-['Roboto']">
                  Send a Gift 🎉
                </div>
                <div className="text-white text-base font-normal font-['Nunito Sans']">
                  Enter the amount
                </div>

                <input
                  type="text"
                  placeholder="Enter Price Manually"
                  min="0.50"
                  className="w-full px-4 py-2 border bg-neutral-800 text-white border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-[#FECC30]"
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    validateAmount(e.target.value);
                  }}
                  required
                />
                {error && (
                  <div className="mt-2 flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-medium">{error}</p>
                      {error === "Minimum donation amount is $0.50" && (
                        <p className="mt-1 text-red-500 dark:text-red-300">
                          Please enter at least $0.50 to proceed with payment.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Grid of Donation Amounts */}
                <div className="grid grid-cols-2 gap-4 w-full">
                  {donateMoney.map((money, index) => (
                    <div
                      key={index}
                      className="h-11 pl-3 pr-2 py-2 bg-neutral-800 rounded-lg outline outline-1 outline-offset-[-1px] outline-neutral-600 flex justify-center items-center cursor-pointer"
                      onClick={() => HandleMoneyClick(money)}
                    >
                      <div className="text-neutral-100 text-xl font-normal font-['Inter'] leading-loose">
                        ${money}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}

              <div className="space-y-4">
                <button onClick={HandleSendMoney}>
                  <div className="w-72 h-10 pl-1 pr-2.5 py-1 bg-[#FECC30] rounded-[44px] flex justify-center items-center gap-2 cursor-pointer hover:bg-[#FECC30] transition">
                    <div className="text-black text-base font-bold font-['Nunito Sans']">
                      Continue
                    </div>
                  </div>
                </button>

                {/* Note Section */}
                <div className="w-full bg-emerald-200 rounded-md px-3 py-2">
                  <p className="text-black text-xs font-bold font-['Nunito Sans']">
                    Note:
                    <span className="ml-1 font-normal">
                      Your support helps us bring uninterrupted live music,
                      podcasts, and cultural programs to our global audience.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center justify-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
        🎧 Your Support Keeps Us Streaming!
      </div>
      <div className="text-center justify-center text-white text-xl font-normal font-['Nunito Sans'] leading-relaxed">
        🙏 Donate Today & Be Part of Our Radio Family!
      </div>

      <div className="relative  w-full bg-[#122] py-12 px-4 flex justify-center">
        <div className="relative w-96 h-20 bg-yellow-400 rounded-[38.91px]" />

        <div className="absolute w-24 h-24 left-[650px] bottom-20 origin-top-left rotate-[25.11deg] bg-yellow-400 rounded-xl" />
        <div className="absolute w-20 h-20 rounded-[50%] border-[5px] border-white left-[579px] bottom-[47px] origin-top-left bg-[#FE7A15]" />

        <div className="absolute w-20 h-20  left-[650px] bottom-[85px] origin-top-left rotate-[25.11deg] bg-sky-400 rounded-xl border-[5px] border-white" />

        <div className="absolute w-40 justify-start text-black text-lg font-bold font-['Nunito Sans'] leading-none left-[750px] bottom-[70px]">
          We Build the Future of Radio
        </div>
      </div>

      {/* main sections implemented */}

      <div className="text-center my-4 justify-center text-white text-4xl font-extrabold font-['Nunito Sans'] leading-[50.40px]">
        Why Donate with AirOS? 🎙️🎶
        <br />
      </div>
      <div className="px-4 py-12 bg-[#122]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text Section */}
          <div className="text-white max-w-xl space-y-6">
            <p className="text-xl font-bold font-['Nunito Sans'] leading-relaxed">
              Your support keeps AirOS thriving as a community-driven,
              multicultural radio station that connects people worldwide through
              music, podcasts, and engaging content. Here’s why your donation
              matters.
            </p>

            <div className="text-xl font-normal font-['Nunito Sans'] leading-9 space-y-2">
              <p>
                💛 Support Independent Radio – Listener-powered, ad-free
                streaming.
              </p>
              <p>
                🎵 Keep the Music Alive – 24/7 live shows, podcasts & diverse
                music.
              </p>
              <p>
                📡 Improve Streaming & Content – Better quality, more exclusive
                content.
              </p>
              <p>
                🎤 Empower Voices & Talent – Support hosts, podcasters &
                artists.
              </p>
            </div>

            <p className="text-xl font-normal font-['Nunito Sans'] leading-loose">
              Every donation makes a difference! 🔗 Donate Today & Keep AirOS
              Alive! 💙
            </p>
          </div>

          {/* Right: Image Section */}
          <div className="w-full max-w-md">
            <img
              src="./images/DonateImg3.png"
              alt="Radio"
              className="w-full h-[450px]  rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative px-4 py-8">
        <div className="relative mx-auto w-full max-w-5xl h-[530px] rounded-lg overflow-hidden">
          {/* Background Image */}
          <img
            src="./images/DonateImg2.png"
            alt="Help"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Overlay Text */}
          <div className="absolute bottom-6 left-6 flex flex-wrap items-end gap-4">
            {/* Fund Text */}
            <div className="text-white font-extrabold font-['Nunito Sans'] leading-none text-[clamp(48px,12vw,180px)]">
              Fund
            </div>

            {/* Help / Others Text */}
            <div className="flex flex-col justify-center leading-none">
              <div className="text-white font-extrabold font-['Nunito Sans'] text-[clamp(24px,5vw,48px)]">
                Help
              </div>
              <div className="text-white font-extrabold font-['Nunito Sans'] text-[clamp(24px,5vw,48px)]">
                Others
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-12 bg-[#122]">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
          {/* First Row: Image - Focus Number - Image */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            {/* Left Image */}
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="./images/DonateImg4.png"
                alt="Radio Top"
                className="w-full max-w-[200px] h-auto object-contain rounded-lg"
              />
            </div>

            {/* Center Focus Text */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-xl font-normal font-['Nunito Sans'] mb-2">
                Be The Part Of FundRaisers With Over
              </p>
              <h1 className="text-white text-[clamp(80px,12vw,180px)] font-extrabold font-['Space Grotesk'] leading-[1.1] tracking-tight)]">
                10,000+
              </h1>
              <p className="text-white text-xl font-normal font-['Nunito Sans'] mt-2">
                People from around the world Joined
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="./images/DonateImg5.png"
                alt="Radio Bottom"
                className="w-full max-w-[200px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Diagonal Images */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <img
              src="./images/DonateImg6.png"
              alt="Radio Diagonal 1"
              className="w-40 md:w-60 h-auto rotate-[-10deg] rounded-lg shadow-lg"
            />
            <img
              src="./images/DonateImg7.png"
              alt="Radio Diagonal 2"
              className="w-40 md:w-60 h-auto rotate-[10deg] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <FrequentlyAsked />
      <Footer />
    </div>
  );
};

export default DonateUs;
