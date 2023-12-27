import React, { useState } from 'react'

import data from '../Data/logowithtext'
import logo1 from '../assets/LogoImages/windows.png';
import logo2 from '../assets/LogoImages/surface.webp';
import logo3 from '../assets/LogoImages/xbox.webp';
import logo4 from '../assets/LogoImages/windows11.png';

const LogowithText = () => {
  const [cards, setCards] = useState(data)

  return (
    <div className="logo-content justify-between">
    <section className="md:grid grid-cols-2 xl:grid-cols-6 my-8 xl:mx-20 items-center">
      {/* {cards.map((card) => {
        const { id, text, image } = card

        return (
          <article key={id} className="flex items-center px-6 py-2">
            <img src={image} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              {text}
            </p>
          </article>
        )
      })} */}
        <article className="flex items-center px-6 py-2">
            <img src={logo1} alt="card" />
            <p className="mx-3 font-semibold  cursor-pointer hover:underline">
              Choose your Microsoft 365
            </p>
        </article>
        <article className="flex items-center px-6 py-2">
            <img src={logo2} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              Explore Surface devices
            </p>
        </article>
        <article className="flex items-center px-6 py-2">
            <img src={logo3} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              Buy Xbox games
            </p>
        </article>
        <article className="flex items-center px-6 py-2">
            <img src={logo4} alt="card" />
            <p className="mx-3 font-semibold cursor-pointer hover:underline">
              Get Windows 11
            </p>
        </article>
        {/* <ul className="flex justify-between p-6 ml-4 xl:mx-20 items-center">
          <li className="flex flex-col items-center justify-between w-10">
            <img src={logo1} alt="card" />
              <p className="mx-3 pl-4 font-semibold cursor-pointer hover:underline">
                Choose your Microsoft 365
              </p>
          </li>
          <li className="flex flex-col items-center justify-between ml-10">
            <img src={logo2} alt="card" />
              <p className="mx-3 pl-4 font-semibold cursor-pointer hover:underline">
                Explore Surface devices
              </p>
          </li>
          <li className="flex flex-col items-center justify-between pl-10">
            <img src={logo3} alt="card" className="flex items-center" />
              <p className="flex items-center pl-4 mx-3 font-semibold cursor-pointer hover:underline">
                Buy Xbox games
              </p>
          </li>
          <li className="flex flex-col items-center justify-between pl-10">
            <img src={logo4} alt="card" />
              <p className="pl-4 mx-3 font-semibold cursor-pointer hover:underline">
                Get Windows 11
              </p>
          </li>
        </ul> */}
    </section>
    </div>
  )
}

export default LogowithText
