import React from 'react'
import Profile from "./../assets/images/mick4.png"
import "./../index.css"
export default function Navbar() {
  return (
    <div className='flex justify-between px-5 h-[70px] w-full items-center bg-black'>
      <ul className='flex items-center justify-center'>
        <li><img src={Profile} alt="profile" className='w-10 filtered-image' /></li>
        <li><h1 className='text-3xl text-red-600 font-protest text-gradient'>MicK SuraJ</h1></li>
      </ul>
      <ul className='flex gap-5'>
      <li className='text-white hover:underline hover:text-red-600 cursor-pointer'>Home</li>
        <li className='text-white hover:underline hover:text-red-600 cursor-pointer'>About</li>
        <li className='text-white hover:underline hover:text-red-600 cursor-pointer'>Works</li>
        <li className='text-white hover:underline hover:text-red-600 cursor-pointer'>Services</li>
        <li className='text-white hover:underline hover:text-red-600 cursor-pointer'>Contact</li>
      </ul>
      <ul>
        <li>
          <button className='text-white'>Resume</button>
        </li>
      </ul>
    </div>
  )
}
