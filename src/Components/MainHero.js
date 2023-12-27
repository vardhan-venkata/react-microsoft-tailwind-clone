import {BsArrowLeftCircle, BsArrowRightCircle} from 'react-icons/bs';
import React, { useState } from "react";

import Hero from "./Hero";
import Hero1 from "./Hero1";

export const MainHero = () =>{
    const[show,setShowCarousel]=useState(false);
    const showcarousel = () => setShowCarousel(!show);
    return(
    <>
        <div className="flex flex-row">
        <BsArrowLeftCircle className="cursor-pointer w-10 h-5 left-0 items-start" onClick={showcarousel}/>
        <BsArrowRightCircle className="cursor-pointer w-10 h-5 left-40 items-end" onClick={showcarousel}/>
        </div>
        
        {show?<Hero/>: <Hero1/>}
        
    </>
    )
}