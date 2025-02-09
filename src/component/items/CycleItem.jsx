import React from 'react'

export default function CycleItem({icon, title, desc}) {
  return (
    <div className=' flex items-center gap-2 relative even:ml-[60px]'>
        <div className='flex-none w-[70px] h-[70px] rounded-full p-3 relative md:absolute left-[10px] z-30 shadow-md anglegradient '>
            <div className='w-[46px] h-[46px] rounded-full flex items-center justify-center bg-white'>
                {icon}
            </div>
        </div>
        <div className=' hidden w-[400px] h-[110px] p-4 px-8 md:flex items-center relative shadow-lg rounded-full bg-white'>
            <div className='absolute w-[90px] h-[90px] bg-[#11929E] rounded-full left-[0px]'></div>
            <div className=' ml-[70px] flex flex-col gap-1 '>
                <h1 className=' truncate text-xl font-bold text-[#0F8894]'>{title}</h1>
                <p className='font-medium text-lg text-[#4E4E4E]'>
                    {desc}
                </p>
            </div>
        </div>
    </div>
  )
}
