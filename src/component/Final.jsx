import React from 'react'

export default function Final() {
  return (
    <div className='mt-7 w-full flex items-center justify-center min-h-[500px] bg-[#0F8894] imagebgfinal'>
        <div className='w-full md:w-[80%] lg:w-[75%] flex flex-col gap-6 md:flex-row  items-center justify-between  p-6 text-center md:text-left'>
            <div className=' w-[500px] text-[#FFFFFF] font-semibold text-3xl'>
            Get premium access to our Ripple HipPro community and get regular updates on
            WhatsApp
            </div>
            <div className='p-6 flex flex-col gap-6 w-[450px] bg-[rgba(255,255,255,0.4)] rounded-xl h-[150px]'>
                <input 
                    placeholder='Enter your whatsapp no here'
                    className=' bg-transparent bg-none outline-none focus:outline-none focus:border-none text-3xl font-medium text-[#4E4E4E]' 
                type="text" />
                <button className='p-3 px-6 w-[150px] h-[50px] items-start rounded-full bg-white font-semibold text-xl text-[#4E4E4E]'>Join Now</button>
            </div>
        </div>
    </div>
  )
}
