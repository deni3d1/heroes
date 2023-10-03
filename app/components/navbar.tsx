'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const navbar = () => {

  const [status,setstatus] = useState('')
  const [windowWidth, setWindowWidth] = useState(0);

  function toggle() {
    if (status == '') {
      setstatus('hidden')
    }else{
      setstatus('')
    } 
  }

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth < 1024) {
        setstatus('hidden')
      }else{
        setstatus('')
      }
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    // <div classNameNameName='bg-red-500 p-3 text-white'>
    //   <div classNameNameName='flex container mx-auto gap-1'>
    //     <Link  href='/' classNameNameName='font-bold flex items-center me-3'>
    //         <img src="./Marvel_Logo.svg.png" classNameNameName='w-20 h-6'/>
    //     </Link>
    //     <Link  href='/' classNameNameName='font-bold hover:bg-red-700 p-2 rounded'>Home</Link>
    //     <Link  href='/heroes' classNameNameName='font-bold hover:bg-red-700 p-2 rounded'>Heroes</Link>
    //   </div>
    // </div>
    <>
      <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link  href='/' className='font-bold flex items-center me-3'>
            <img src="./Marvel_Logo.svg.png" className='w-20 h-6'/>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 hover:text-white hover:border-white" onClick={toggle}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className={`text-sm lg:flex-grow ${status}`}>
            <Link  href='/' className='block lg:inline-block font-bold hover:bg-red-700 p-2 rounded text-white'>Home</Link>
            <Link  href='/heroes' className='block lg:inline-block font-bold hover:bg-red-700 p-2 rounded  text-white'>Heroes</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default navbar;