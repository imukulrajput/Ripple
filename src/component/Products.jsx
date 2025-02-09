import React from 'react'
import cardImg from "../assets/finalcard.png"
import wind from "../assets/wind.png"
import siren from "../assets/siren.png"


export default function Products() {
  return (
    <div className=' pt-[80px] py-[134px] pb-[20px] flex flex-col items-center gap-[24px] justify-center '>
        <div className=' text-center'>
            <h2 className=' text-4xl font-semibold text-[#4E4E4E]'>Our Products</h2>
            <h1 className=' text-4xl font-semibold text-[#0F8894] mt-4'>Ripple HipPro Belt</h1>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-6 w-full md:w-[90%] lg:w-[75%] h-full md:h-[500px] overflow-hidden mt-4">
            <div className=' w-full h-[500px] md:h-full md:w-1/2 rounded-lg border-2 border-[#11929E] anglegradient overflow-hidden'>
                <img src={cardImg} className='w-full object-cover object-bottom' alt="" />
            </div>
            <div className='w-full  md:h-full md:w-1/2 rounded-lg flex flex-col items-center gap-6'>
                <div className=' w-full border-2 border-[#11929E] h-full md:h-1/3 rounded-lg p-6 text-[#4E4E4E] text-xl font-normal bg-[#DBF0F2]'>
                    Much like an airbag that protects the rider in case of an accident, the Ripple HipPro Belt
                    automatically inflates and deflates, preventing injury to the user.
                </div>
                <div className='flex flex-col md:flex-row w-full h-full md:w-full md:h-2/3  gap-6 items-center '>
                    <div className='border-2 border-[#11929E] bg-[#DBF0F2] rounded-lg w-full md:w-[calc(50%-12px)] h-full flex flex-col items-center justify-center gap-2 p-4 text-center'>
                        <div className=' w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                             <img src={wind} alt="" />
                        </div>
                        <h3 className='font-semibold text-xl text-[#4E4E4E]'>Automatic Inflation/Deflation</h3>
                        <p className='text-[#4E4E4E] text-lg font-normal'>
                            The Ripple HipPro Belt automatically inflates as you stand up or begin to walk and deflates as you sit down. 
                        </p>
                    </div>
                    <div className='border-2 border-[#11929E] bg-[#DBF0F2] rounded-lg w-full md:w-[calc(50%-12px)] h-full flex flex-col items-center justify-center gap-2 p-4 text-center'>
                        <div className=' w-[50px] h-[50px] flex items-center justify-center rounded-full'>
                            <img src={siren} alt="" />
                        </div>
                        <h3 className='font-semibold text-xl text-[#4E4E4E] '>Automatic Inflation/Deflation</h3>
                        <p className=' text-[#4E4E4E] text-lg font-normal'>
                            The Ripple HipPro Belt automatically inflates as you stand up or begin to walk and deflates as you sit down. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
