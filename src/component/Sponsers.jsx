import React from 'react'
import aims from "../assets/Aims.png"
import delhi from "../assets/Delhi.png"

export default function Sponsers() {
  return (
    <div className=' text-center flex flex-col gap-3 items-center justify-center p-6 mt-15'>
     <div className=' flex flex-col items-center justify-center gap-4 w-full md:w-[80%] lg:w-[75%]'>
     <h1 className='text-center text-4xl font-semibold text-[#4E4E4E] mt-5'>At the heart of what we do is <span className='text-4xl font-semibold text-[#11929E] '>Design, Engineering, R&D & State of the Art Technology </span></h1>
        <p className='mt-3 font-normal text-2xl text-[#4E4E4E]'> The Ripple HipPro Belt was birthed at the Indian Institute of Technology (IIT Delhi) and
        tested at the All India Institute of Medical Sciences. (AIIMS)</p>
        <div className=' flex items-center gap-3 mt-4'>
            <div className=' w-[163px] h-[201px]  flex items-center flex-col justify-center'>
                <img src={delhi} alt="" />
                <h5 className='w-[78px] h-[12px] text-[#FF0000] font-bold'>IIT DELHI</h5>
            </div>
            <div className=' w-[137px] h-[191px]  flex items-center flex-col justify-center mt-3'>
                <img src={aims} alt="" /> 
                <h5 className='w-[105px] h-[12px] text-[#000080] font-bold'>AIIMS DELHI</h5>
            </div> 
        </div>
     </div>
    </div>
  )
}
