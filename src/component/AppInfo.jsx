import React from 'react'

import mobileImg from "../assets/mobile.png"
import mobileUserImg from "../assets/mobileTaai.png"
import mind from "../assets/mind.png"
import old from "../assets/old.png"
import { GiBrain } from "react-icons/gi";
import { MdAssistWalker } from "react-icons/md";

export default function AppInfo() {
  return (
    <div className=' pt-[60px] pb-[20px] py-[134px] flex flex-col items-center gap-4 justify-center '>
        <div className=' text-center'>
            <h1 className=' text-4xl font-semibold text-[#0F8894]'> Steady Steps App</h1>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-6 w-full md:w-[90%] lg:w-[75%] h-full md:h-[500px] overflow-hidden mt-5">
            <div className='w-full  md:h-full md:w-1/2 rounded-lg flex flex-col items-center gap-6'>
                <div className=' w-full border-2 border-[#11929E] h-full md:h-1/3 rounded-lg p-6 text-[#4E4E4E] text-xl bg-[#DBF0F2] font-normal'>
                The Steady Steps App helps senior citizens stay healthy and active with easy exercises, progress tracking and activities that boost balance, strength and independence.
                </div>
                <div className='flex flex-col md:flex-row w-full h-full md:w-full md:h-2/3  gap-6 items-center '>
                    <div className='border-2 border-[#11929E] bg-[#DBF0F2] rounded-lg w-full md:w-[calc(50%-12px)] h-full flex flex-col items-center justify-center gap-2 p-4 text-center'>
                        <div className=' w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#11929E] '><MdAssistWalker className='text-[#DBF0F2] h-[46px] w-[46px]'/></div>
                        <h3 className=' font-medium text-xl text-[#4E4E4E]'>Maintaining Independence</h3>
                        <p className=' text-[#4E4E4E] text-lg font-normal'>
                        Regular exercise helps in preserving strength, balance, and flexibility, enabling the elderly to carry out daily activities independently.
                        </p>
                    </div>
                    <div className='border-2 border-[#11929E] bg-[#DBF0F2] rounded-lg w-full md:w-[calc(50%-12px)] h-full flex flex-col items-center justify-center gap-2 p-4 text-center'>
                        <div className=' w-[50px] h-[50px] flex items-center justify-center rounded-full bg-[#11929E] '><GiBrain className='text-[#DBF0F2] h-[46px] w-[46px]'/></div>
                        <h3 className=' font-medium text-xl text-[#4E4E4E]'>Enhancing Cognitive Function</h3>
                        <p className=' text-[#4E4E4E] text-lg font-normal'>
                        Physical activity has been linked to improved cognitive function and a reduced risk of Dementia and Alzheimer's disease.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' w-full h-[500px] md:h-full md:w-1/2 rounded-lg overflow-hidden flex items-center gap-4'>
                <div className='anglegradient overflow-hidden w-[calc(50%-0.5rem)] border-2 border-teal-500 rounded-lg h-full flex items-end'>
                    <img src={mobileImg} className='w-[120%] object-cover object-bottom' alt="" />
                </div>
                <div className='anglegradient overflow-hidden w-[calc(50%-0.5rem)] rounded-lg border-2 border-teal-500 h-full flex items-end'>
                    <img src={mobileUserImg} className='w-[120%] object-cover' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
