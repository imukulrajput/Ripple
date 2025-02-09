import React from 'react'

export default function Final() {
  return (
    <div className="mt-7 w-full flex items-center justify-center min-h-[400px] md:min-h-[500px] bg-[#0F8894] imagebgfinal px-4">
  <div className="w-full md:w-[90%] lg:w-[75%] flex flex-col gap-6 md:flex-row items-center justify-between p-4 md:p-6 text-center md:text-left">
    
    {/* Text Section */}
    <div className="w-full md:max-w-[500px] text-[#FFFFFF] font-semibold text-2xl md:text-3xl leading-tight">
      Get premium access to our Ripple HipPro community and get regular updates on WhatsApp
    </div>

    {/* Input & Button Section */}
    <div className="p-4 md:p-6 flex flex-col gap-4 md:gap-6 w-full md:max-w-[450px] bg-[rgba(255,255,255,0.4)] rounded-xl h-auto">
      <input 
        placeholder="Enter your WhatsApp number here"
        className="w-full bg-transparent outline-none text-lg md:text-2xl font-medium text-[#4E4E4E] placeholder-gray-700 p-2"
        type="text"
      />
      <button className="p-3 w-full md:w-[150px] h-[50px] rounded-full bg-white font-semibold text-lg md:text-xl text-[#4E4E4E]">
        Join Now
      </button>
    </div>

  </div>
</div>

  )
}
