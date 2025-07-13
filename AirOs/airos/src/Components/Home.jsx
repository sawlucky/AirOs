
import Navbar from "./Navbar";
const Home = () => {


  return (
    <div className="w-full min-h-screen bg-[#122] overflow-x-hidden">
      <Navbar />
      <div className="w-full  max-h-[627.8px] overflow-hidden relative">
        {/* KKSF FM AM part */}
        <div className="flex flex-wrap w-[250px]  flex-col items-center gap-[4.529px]  mt-[150px] mx-[110px] mb-[50px]  ">
          <div className=" relative flex h-[45.53px]  felx-col justify-center self-stretch text-[#FFF] text-[40.22px] text-center font-[Nunito Sans]  font-[400] leading-normal  ">
            KKSF
          </div>

          <div className="text-center justify-start text-white text-8xl font-normal font-ralewaydots">
            103:7
          </div>

          <div className="inline-flex justify-start items-center gap-[29.59px] ">
            <div className="w-[41.32px] h-[27.55px] relative justify-center text-[#eab557] text-[26.74px] font-semibold font-['Inter'] cursor-pointer">
              FM
            </div>
            <div className="w-[45.91px] h-[27.55px] relative justify-center text-[#d5d2c6] text-[27.20px] font-semibold font-['Inter'] cursor-pointer">
              AM
            </div>
          </div>
        </div>
        {/* frequency Tuner part */}
        <div className="w-[700px] h-[100px] flex flex-col relative bg-white">
          <div className="w-full h-[1px] mt-2 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-[700px] h-[1px] mt-3 bg-[#eab557] outline-[0.37px] outline-offset-[-0.18px] outline-[#eab557]"></div>
          <div className="w-[700px] h-[1px] mt-1 bg-[#eab557] outline-[0.37px] outline-offset-[-0.18px] outline-[#eab557]"></div>
          <div className="w-[700px]  h-[1px] mt-7 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-[700px] h-[1px] mt-6 bg-black outline-[0.37px] outline-offset-[-0.18px] outline-black"></div>
          <div className="w-1.5  absolute h-full left-[70%]   bg-[#f7d795]  border-[0.19px] border-[#f7d795]" />
        </div>
        {/* Listen Online part  */}
        <div className="bg-[#FECC30] relative p-4 w-full">
          <div className="relative w-full max-w-xs mx-auto md:ml-8 lg:ml-16 pb-6 flex flex-col p-4 justify-start">
            <span className="text-black text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] tracking-wider md:tracking-widest">
              Listen
            </span>
            <span className="text-neutral-700 text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto'] tracking-wider md:tracking-[2.60px]">
              Online
            </span>
            <div className="w-3 h-3 relative ml-[200px] md:right-8 lg:right-12 bg-neutral-700 rounded-full" />
          </div>
        </div>

        {/* radio section part implementation */}
        
        <div className="absolute  w-full h-auto top-[2%] left-[25%] ">
          <div className=" relative top-[20%] left-0">
            <img
              className="w-[1200px] h-auto"
              src="./images/FullRadioImage.png"
              alt="radioBackground"
              loading="lazy"
            />
          </div>
         

        </div>
      </div>
    </div>
  );
};

export default Home;
