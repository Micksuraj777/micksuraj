import React from 'react'

export default function About() {
  return (
    <div className='px-5 bg-black'>
      <ul className='flex justify-between'>
        <li>
            <h2 className='text-white'>Available for</h2>
            <h2 className='text-white'>part-Time or freelance</h2>
        </li>
        <li>
            <h2 className='text-end text-white'>Live in</h2>
            <h2 className='text-white'>Kerala ,India</h2>
        </li>
      </ul>
      <ul className='flex flex-col gap-5 mt-5'>
        <li>
            <h2 className='text-white font-anta text-6xl mb-16'>I am</h2>
        </li>
        <li className='flex justify-between'>
            <h2 className='text-white font-anta text-6xl'>Experienced</h2>
            <p className='w-[400px] text-white font-kode mt-16'>With over 2 years of experience, I have crafted 10+ websites across variousplatforms & industries</p>
        </li>
        <li className='flex justify-between'>
            <h2 className='text-white font-anta text-6xl'>Passionate</h2>
            <p className='w-[400px] text-white font-kode mt-16'>"I put my heart and my soul into my work"
                and always willings to go the extra mile to deliver the best result
            </p>
        </li>
        <li className='flex justify-between'>
            <h2 className='text-white font-anta text-6xl'>Creative</h2>
            <p className='w-[400px] text-white font-kode mt-16'>I love to create interactive and immersive experiences using Three.js,WebGL,GSAP and more.</p>
        </li>
        <li className='flex justify-between'>
            <h2 className='text-white font-anta text-6xl'>Developer</h2>
            <p className='w-[400px] text-white font-kode mt-16'>I'm looking for new challenges in a creative agency or freenlance projects to use & develop my skill</p>
        </li>
      </ul>
    </div>
  )
}
