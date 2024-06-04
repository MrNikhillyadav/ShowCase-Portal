import Image from 'next/image';
import React from 'react';
import { PiSlideshowFill } from "react-icons/pi";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineLogin } from "react-icons/md";

function Header() {

  return (
    <div className="px-4 md:px-0 max-w-[1778px] w-full m-auto border  border-black">
          <div className=" flex items-center justify-between w-full border" >
            <div className="flex gap-1 items-center text-md " > 
                  <PiSlideshowFill className='flex items-center text-4xl justify-center ' />
                  <div className='text-2xl md:text-3xl' >Showcase Portal.</div>
            </div>

            <div className="text-xs flex font-normal items-center m-2 border gap-2 md:gap-4 " >
                <button className='hidden md:block p-3 border  bg-blue-500 text-white rounded-md hover:bg-blue-700' > CREATE POST</button>
                <div className=" md:hidden text-3xl rounded-full "><IoCreateOutline className='bg-black  text-white rounded-full p-1  ' /></div>
                <div className="md:hidden text-3xl flex  rounded-full"><MdOutlineLogin className='bg-black  text-white rounded-full pr-2' /></div>
                <button
                  className='hidden md:block p-3 border bg-blue-500 text-white rounded-md hover:bg-blue-700'>
                    SIGN IN
                  </button>
                <img 
                  src='/images/profile.png'
                  width={40}
                  height={40}
                  className="rounded-full "/>
            </div>
          </div>
    </div>
  );
}

export default Header;