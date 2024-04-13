import React from 'react'
import ChangingText from './ChangingText'
import Profile from "./../assets/images/mick4.png"
import "./../index.css"
export default function Home() {
  return (
    <div className='bg-black relative'>
      <ChangingText />
      <img src={Profile} alt="profile" className='w-[400px] absolute bottom-[100px] left-[500px] opacity-30'/>
    </div>
  )
}
