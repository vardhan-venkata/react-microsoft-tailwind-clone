import { FaChevronRight } from 'react-icons/fa'
import React from 'react'
import showcase from '../assets/Hero/microsoft365.jpg'

const Hero = () => {
  return (
    <section className="hero xl:mx-20">
      <div>
        <img className="hero-img" src={showcase} alt="hero" />
      </div>
      <div className="overlay bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
        <h1 className="font-bold text-2xl mb-2">Microsoft 365 </h1>
        <p className="text">
         Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription 
        </p>
        <button className="block relative bg-black text-white py-2 px-4 pr-6 mt-3 hover:underline sm:inline-block">
          <span>Choose your Microsoft365</span>
          <span className=" h-4 w-4 right-1 top-1.5 p-2 pl-0 absolute"><FaChevronRight/></span>
        </button>
      </div>
    </section>
  )
}

export default Hero
