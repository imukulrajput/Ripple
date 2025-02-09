import React from 'react'

export default function ReverseCycle({icon, title, desc}) {
  return (
    <div className=' flex flex-row-reverse items-center gap-2 relative even:mr-[60px]'>
        <div className='flex-none w-[70px] h-[70px] rounded-full p-3 relative  md:absolute right-[10px] z-30 shadow-md anglegradient '>
            <div className='w-[46px] h-[46px] rounded-full flex items-center justify-center bg-white'>
                {icon}
            </div>
        </div>
        <div className='hidden w-[400px] h-[110px] p-4 px-8 md:flex flex-row-reverse items-center relative shadow-lg rounded-full bg-white'>
            <div className='mr-[70px] flex flex-col items-end gap-1 '>
                <h1 className=' text-xl font-bold text-[#0F8894]'>{title}</h1>
                <p className='font-medium text-lg text-[#4E4E4E]'>
                    {desc}
                </p>
            </div>
            <div className='absolute w-[90px] h-[90px] bg-[#11929E] rounded-full right-[0px]'></div>
        </div>
    </div>
  )
}
