import React from "react";

import speech from "../assets/speech.jpg";

export const Speech = () => {
  return (
    <div className=" text-center flex flex-col gap-3 items-center justify-center p-6 mt-5">
        <div className=' flex flex-col items-center justify-center gap-4 w-full md:w-[80%] lg:w-[75%]'>
      <h1 className="text-center text-4xl font-semibold text-[#4E4E4E] mt-5">
      Kaushal Kothari, our Founder & CEO {" "}
        <span className="text-4xl font-semibold text-[#11929E]">
        speaks about the journey of Ripple Healthcare
        </span>
      </h1>
      </div>

      <div className="relative max-w-full border-[10px] border-[#11929E] rounded-lg overflow-hidden shadow-lg">
        <img src={speech} alt="CEO Speech" className="w-[800px] h-[500px]" />
      </div>
    </div>
  );
};
