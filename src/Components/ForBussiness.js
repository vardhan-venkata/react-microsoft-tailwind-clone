import React, { useState } from 'react'

import { FaChevronRight } from 'react-icons/fa'
import data from '../Data/forbusiness'
import logo1 from '../assets/surfacepro8.webp'
import logo2 from '../assets/windows11.webp'
import logo3 from '../assets/microsoftteams.webp'
import logo4 from '../assets/hybridworld.jpg'

const ForBussiness = () => {
  const [cards, setCards] = useState(data)
  const images =[
    {
    imageUrl : "../assets/surfacepro8.webp",
    },
    {
    imageUrl : "../assets/windows11.webp",
    },
    {
    imageUrl : "../assets/microsoftteams.webp",
    },
    {
    imageUrl : "../assets/hybridworld.jpg",
    },
  ]
    const images1 =[logo1,logo2,logo3,logo4];
  return (
    <div className="for-business">
    <h2 className="font-semibold text-2xl mt-5 px-8">For business</h2>
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
   
        <article className="p-8">
            <div>
                <img src={logo1} alt="card" />
                <p className="inline-block px-3 mt-4 text-black bg-yellow-400">
                    New
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Surface Pro 8 for Business</h3>
                <p>Get unprecedented levels of performance and versatility on a 13-inch screen. Discover the newest Surface for Business devices now available. Available with Windows 11.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold hover:underline transition-transform border-b-blue-500">
                    <span>Learn more</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
          <article className="p-8">
            <div>
                <img src={logo2} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Windows 11 for business is here</h3>
                <p>Designed for hybrid work. Powerful for employees. Consistent for IT. Secure for all.</p>
                <button className=" block relative cursor-pointer text-blue-600 font-semibold hover:underline transition-transform border-b-blue-500">
                    <span>Learn more</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
          <article className="p-8">
            <div>
                <img src={logo3} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Get Microsoft Teams for free</h3>
                <p>Online meetings, chat and shared cloud storage – all in one place.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold hover:underline transition-transform border-b-blue-500">
                  <span>Sign up for free</span>
                  <span className="h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
          <article className="p-8">
            <div>
                <img src={logo4} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Thrive in a hybrid world</h3>
                <p>Discover tools, resources and strategies to help your employees succeed in the new world of flexible work.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold hover:underline transition-transform border-b-blue-500">
                  <span>Learn more</span>
                  <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
        
    </section>
    </div>
  )
}

export default ForBussiness
