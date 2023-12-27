import React, { useState } from 'react'

import { FaChevronRight } from 'react-icons/fa'
import data from '../Data/cardsdata'
import logo1 from '../assets/Cards/surfacelaptop4.webp'
import logo2 from '../assets/Cards/surfacelaptopstudio.webp'
import logo3 from '../assets/Cards/xbox.jpg'
import logo4 from '../assets/Cards/edge.webp'

const CardsSection = () => {
  const [cards, setCards] = useState(data)

  return (
    <section className="section-2 md:grid grid-cols-2 xl:grid-cols-4 xl:mx-20">
      {/* {cards.map((card) => {
        const { id, image, title, desc, link } = card

        return (
          <article key={id} className="p-8">
            <div>
              <img src={image} alt="card" />
              <h3 className="font-semibold text-xl mt-2 mb-1">{title}</h3>
              <p>{desc}</p>
              <button className="cursor-pointer text-blue-600 font-semibold">
                {link}
              </button>
            </div>
          </article>
        )
      })} */}
      <article className="p-8">
            <div>
              <img src={logo1} alt="card" />
              <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
              <h3 className="font-semibold text-xl mt-2 mb-1">Suface Laptop 4</h3>
              <p>Do it all with a perfect balance of sleek, ultra-thin design, multitasking speed and improved performance.</p>
              <button className="block relative cursor-pointer text-blue-600 font-semibold">
                <span>Shop now</span>
                <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
              </button>
            </div>
          </article>
          <article className="p-8">
            <div>
                <img src={logo2} alt="card" />
                <p className="inline-block px-3 mt-4 text-black bg-yellow-400">
                    New
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Surface Laptop Studio</h3>
                <p>Flex your creative muscle on the most powerful Surface Laptop. Now available with Windows 11.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                <span>Learn More</span>
                <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
            </div>
          </article>
          <article className="p-8">
                <div>
                <img src={logo3} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Xbox Game Pass Ultimate</h3>
                <p>Get your first 8 months of membership for ₹ 699. Play on the devices you own. Includes EA Play. Offer available to new subscribers only and cannot be combined with any other offers.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                    <span>Join now</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
                </div>
          </article>
          <article className="p-8">
                <div>
                <img src={logo4} alt="card" />
                <p className="inline-block px-3 mt-4 text-black mb-3">
                </p>
                <h3 className="font-semibold text-xl mt-2 mb-1">Microsoft Edge</h3>
                <p>World-class performance with more privacy, more productivity and more value while you browse.</p>
                <button className="block relative cursor-pointer text-blue-600 font-semibold">
                    <span>Download now</span>
                    <span className=" h-4 w-0 right-0 top-1 pl-0 absolute"><FaChevronRight/></span>
                </button>
                </div>
          </article>
    </section>
  )
}

export default CardsSection
