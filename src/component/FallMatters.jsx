import React from 'react'
import fallingVideo from "../assets/video.mp4"

export default function FallMatters() {
  return (
    <div className='flex flex-col items-center justify-center gap-6 p-8 mt-5'>
      <h1 className='text-center text-4xl font-semibold text-[#4E4E4E]'>For the Elderly, <span className='text-4xl font-semibold text-[#0F8894] '>Every Fall Matters</span></h1>
      <div className='mt-5 w-full md:w-[80%] lg:w-[75%] border-[10px] border-[#0F8894] rounded-xl flex items-center justify-center overflow-hidden shadow'>
        <video className='object-cover'  src={fallingVideo} autoPlay controls></video>
      </div>
    </div>
  )
}
