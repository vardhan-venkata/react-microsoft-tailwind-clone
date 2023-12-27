import {AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai';
import { FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'

import React from 'react'

const Social = () => {
  return (
    <div className="flex items-center py-5 px-8 xl:pl-20">
      <div className="mr-5">
        <h4>Follow Microsoft</h4>
      </div>
      <div className="flex">
        <AiFillFacebook className="mr-2 text-2xl text-blue-900" />
        <AiFillTwitterSquare className="mr-2 text-2xl text-blue-700" />
        <FaLinkedin className="mr-2 text-2xl text-blue-900" />
        <FaYoutubeSquare className="mr-2 text-2xl text-red-600"/>
      </div>
    </div>
  )
}

export default Social