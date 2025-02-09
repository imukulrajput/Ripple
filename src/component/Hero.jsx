import React, { useState } from "react";
import oldman from "../assets/hero.jpg";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(1);

  const nextImage = () => {
    if (currentImage === 3) return;
    setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    if (currentImage === 1) return;
    setCurrentImage(currentImage - 1);
  };

  const leftImage = () => setCurrentImage(1);
  const middleImage = () => setCurrentImage(2);
  const rightImage = () => setCurrentImage(3);

  return (
    <div className="h-[800px] flex items-center justify-center bg-teal-200 relative overflow-hidden">
      <div className="w-screen h-[inherit] absolute top-0 left-0 flex items-center">
        <div
          className={`flex-none w-screen h-[inherit] flex items-center justify-center bg-amber-300 absolute top-0 z-10 duration-300
                ${currentImage === 1 ? "translate-x-[0%]" : ""}
                ${currentImage === 2 ? "translate-x-[-100%]" : ""}
                ${currentImage === 3 ? "translate-x-[-200%]" : ""}`}
        >
          <img className="w-full h-full object-cover" src={oldman} alt="" />
        </div>

        <div
          className={`flex-none w-screen h-[inherit] flex items-center justify-center bg-blue-300 absolute top-0 z-10 duration-300
                ${currentImage === 1 ? "translate-x-[100%]" : ""}
                ${currentImage === 2 ? "translate-x-[0%]" : ""}
                ${currentImage === 3 ? "translate-x-[-100%]" : ""}`}
        >
          <img className="w-full h-full object-cover" src={oldman} alt="" />
        </div>

        <div
          className={`flex-none w-screen h-[inherit] flex items-center justify-center bg-red-300 absolute top-0 z-10 duration-300
                ${currentImage === 1 ? "translate-x-[200%]" : ""}
                ${currentImage === 2 ? "translate-x-[100%]" : ""}
                ${currentImage === 3 ? "translate-x-[0%]" : ""}`}
        >
          <img className="w-full h-full object-cover" src={oldman} alt="" />
        </div>
      </div>

      <div className="w-screen h-[inherit] absolute top-0 left-0 flex items-center z-30 imagebg"></div>

      <div className="w-full h-[800px] bg-transparent absolute top-0 left-0 flex items-center justify-center z-30">
        <div className="w-full md:w-[80%] lg:w-[75%] flex flex-col gap-6 p-3 text-white">
          <h1 className="text-5xl font-bold">Ripple HealthCare</h1>
          <p className="max-w-[500px] text-3xl font-medium">
            Every elderly person deserves an enhanced quality of life, mobility,
            safety and independence.
          </p>

          <div className="flex flex-col gap-2 mt-[100px]">
            
            <div className="flex items-center gap-2">
              <span
                className={`w-[30px] h-2 rounded-full border-2 border-white ${
                  currentImage === 1 ? "bg-white w-[50px]" : ""
                }`}
                onClick={leftImage}
              ></span>
              <span
                className={`w-[30px] h-2 rounded-full border-2 border-white ${
                  currentImage === 2 ? "bg-white w-[50px]" : ""
                }`}
                onClick={middleImage}
              ></span>
              <span
                className={`w-[30px] h-2 rounded-full border-2 border-white ${
                  currentImage === 3 ? "bg-white w-[50px]" : ""
                }`}
                onClick={rightImage}
              ></span>
            </div>

            
            <div className="flex items-center gap-2">
              <div
                className="w-[60px] h-[60px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-black cursor-pointer"
                onClick={prevImage}
              >
                 <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.33333 16.2759L0.333328 8.27588L8.33333 0.275879L10.2 2.20921L5.46666 6.94255H21.6667V9.60921H5.46666L10.2 14.3425L8.33333 16.2759Z" fill="#11929E"/>
</svg>
              </div>
              <div
                className=" w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-black cursor-pointer"
                onClick={nextImage}
              >
                <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 16.2759L21.6667 8.27588L13.6667 0.275879L11.8 2.20921L16.5333 6.94255H0.333338V9.60921H16.5333L11.8 14.3425L13.6667 16.2759Z" fill="#11929E"/>
</svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
