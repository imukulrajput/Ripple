import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-screen py-[32px] flex items-center justify-center border-b border-teal-400 bg-white">
      <div className='w-full flex items-center justify-between  md:w-[80%] lg:w-[75%]'>
        <div className=' w-[151px] h-[54px]  flex items-center justify-start ml-0'>
        <img src={logo} alt="" />
        </div>
        <div className={` md:order-0 relative `} >
          <div className=' w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center md:hidden' onClick={()=> setIsOpen(!isOpen)}>
            {isOpen?<X /> : <Menu /> }
          </div>
          <div 
            onClick={()=> setIsOpen(false)}
            className={`gap-[40px] w-screen md:w-full flex flex-col items-center justify-center font-semibold bg-white ${isOpen? "flex absolute right-[-1rem] top-[65px] md:top-full pb-2 border-b-2 border-b-teal-500 md:border-none": "hidden relative  md:flex top-full border-none"} md:flex-row md:relative`}
          >
            <a href="#home"  className=' py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500  md:hover:bg-white w-full  flex items-center justify-center  font-bold text-xl text-[#0F8894] underline'>Home</a>
            <a href="#howitworks" className='py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500  md:hover:bg-white  w-full  flex items-center justify-center text-nowrap  font-medium text-xl' >How it works <span className='p-2 mt-1'><svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#2A3440" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a>
            <a href="#about" className='py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500 md:hover:bg-white w-full  flex items-center justify-center  font-medium text-xl' >About <span className='p-2 mt-1'><svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 0.75L6 5.25L10.5 0.75" stroke="#2A3440" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a>
            <a href="#testimonial" className='py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500 md:hover:bg-white  w-full  flex items-center justify-center  font-medium text-xl' >Testimonials </a>
            <a href="#faq" className='py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500 md:hover:bg-white w-full  flex items-center justify-center  text-nowrap  font-medium text-xl'>FAQs</a>
            <a href="#contact" className='py-2 md:p-0 hover:bg-[#0F8894] md:hover:text-teal-500 md:hover:bg-white w-full  flex items-center justify-center  text-nowrap  font-medium text-xl'>Contact Us</a>
            <button className='block md:hidden rounded-full w-[150px] p-3 bg-teal-600 text-white p'>
              Order Now
            </button>
          </div>
        </div>
        <button className=' hidden md:block rounded-full w-[150px] p-3 bg-teal-600 text-white p'>
          Order Now
        </button>
      </div>
    </nav>
  )
} 