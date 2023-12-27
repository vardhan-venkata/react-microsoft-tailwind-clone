import OneDriveImg from '../assets/onedrive.webp'
import React from 'react'

const OneDriveSection = () => {
  return (
    <section className="hero one-drive xl:mx-20">
      <div>
        <img className="hero-img" src={OneDriveImg} alt="one-drive image" />
      </div>

      <div className="ml-10 overlay bg-gray-100 text-center px-10 py-20 text-black sm:bg-transparent sm:text-left">
        <h2 className="font-semibold text-4xl  p-2 mb-2">
          Microsoft OneDrive
        </h2>
        <p className="mb-2 text p-2 text-black">
        Save your files and photos to OneDrive and access them from any device, anywhere
        </p>
        <button className="ml-2 mr-4 p-2 bg-black text-white py-2 px-5 hover:underline hover:bg-opacity-80 hover:border-b-black">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default OneDriveSection