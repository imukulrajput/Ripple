import React from 'react'
import CycleItem from './items/CycleItem'
import ReverseCycle from './items/ReverseCycle'
import cycleLogo from "../assets/image.png"
import right3 from "../assets/right3.png"
import right2 from "../assets/right2.png"
import right1 from "../assets/right1.png"
import { GiWalkingBoot } from "react-icons/gi";
import { FaPersonFalling } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";


export default function VisciousCycle() {

    const leftItems = [
        {
            icon: <FaPersonFalling className='text-[#0F8894] w-[44px] h-[44px]'/>
             ,
            title: "Increased fall risk",
            desc: " Falling becomes repetitive."
        },
        {
            icon: <GiWalkingBoot className='text-[#0F8894] w-[44px] h-[44px]'/>
            ,
            title: "Walking difficulty",
            desc: " Increases likelihood of falling."
        },
        {
            icon: <LuBicepsFlexed  className='text-[#0F8894] w-[44px] h-[44px]'/>
            ,
            title: "Muscle weakness",
            desc: "Weakens muscular strength and reduces mobility."
        },
    ]
    const rightItems = [
        {
            icon: <img src={right1} alt="" />
            ,
            title: "Fall",
            desc: "One out of every 4 elderly citizens globally fall every year."
        },
        {
            icon: <img src={right2} alt="" />
            ,
            title: "Fear of falling",
            desc: "Limits activity and confidence."
        },
        {
            icon: <img src={right3} alt="" />
            ,
            title: "Decreased physical activity",
            desc: "Weakens balance."
        },
    ]

  return (
    <div className=' w-full flex flex-col gap-6 items-center justify-center mt-5'>
        <h1 className='text-center text-4xl font-semibold text-[#4E4E4E] mt-5'>Fear of falling <span className='text-4xl font-semibold text-[#0F8894] '>- A vicious cycle</span></h1>
        <div className=' w-full h-[550px] mt-6 flex items-center justify-center bg-[#11929E]'>
        <div className=' w-full md:w-[80%] lg:w-[75%] flex items-center justify-center gap-[100px] relative'>
            <div className=' w-[300px] flex flex-col items-end gap-6 p-6'>
                {leftItems.map((item, i)=> (   
                    <ReverseCycle
                        key={i}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                     />
                ))}
            </div>
            <div className=' flex-none w-[160px] h-[160px]  rounded-full flex items-center justify-center absolute bg-[#11929E]' > 
                <img src={cycleLogo} alt="" />
            </div>
            <div className=' w-[300px] flex flex-col items-start gap-6 p-6 '>
                {rightItems.map((item, i)=> (   
                    <CycleItem
                        key={i}
                        icon={item.icon}
                        title={item.title}
                        desc={item.desc}
                     />
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}
