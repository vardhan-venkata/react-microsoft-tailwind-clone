import { FaChevronRight } from 'react-icons/fa'
import React from 'react'
import showcase from '../assets/Hero/surfacepro8.webp'

const Hero1 = () => {
  return (
    <section className="hero1 xl:mx-20">
      <div>
        <img className="hero-img1" src={showcase} alt="hero" />
      </div>
      <div className="overlay1 bg-gray-200 text-center p-10 sm:bg-transparent sm:text-left">
        <p className="inline-block py-1 px-5 text-black bg-yellow-400 font-bold mb-3">
          New
        </p>
        <h1 className="font-bold text-2xl mb-2">Surface Pro 8 </h1>
        <p className="text">
         Do more with a larger 13-inch touchscreen, faster connections and extra speed. Now available with Windows 11. 
        </p>
        <button className="block relative bg-black text-white py-2 px-4 pr-6 mt-3 hover:underline sm:inline-block">
          <span>Learn More</span>
          <span className=" h-4 w-4 right-1 top-1.5 p-2 pl-0 absolute"><FaChevronRight/></span>
        </button>
      </div>
    </section>
  )
}

export default Hero1
