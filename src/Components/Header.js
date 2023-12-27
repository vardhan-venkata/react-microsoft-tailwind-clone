import { FaBars, FaSearch, FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import {FiChevronDown, FiShoppingCart} from 'react-icons/fi';

import React from "react";
import {VscSearch} from 'react-icons/vsc';
import logo from '../assets/logo.png';

const Header = () =>{
    return(
        <header className="header flex items-center justify-between py-3 xl:mx20">
            <div className="menu-btn flex">
                <div className="mx-4">
                    <FaBars/>
                </div>
                <div>
                    <FaSearch/>
                </div>
            </div>
            <div className="logo">
                <div>
                    <img src={logo} alt="Microsoft Logo"/>
                </div>
            <ul>
                <li className="hover:border-b-2 border-black cursor-pointer">Microsoft 365</li>
                <li className="hover:border-b-2 border-black cursor-pointer">Office</li>
                <li className="hover:border-b-2 border-black cursor-pointer">Windows</li>
                <li className="hover:border-b-2 border-black cursor-pointer">Surface</li>
                <li className="hover:border-b-2 border-black cursor-pointer ">Xbox</li>
                <li className="hover:border-b-2 border-black cursor-pointer">Support</li>
            </ul>
            </div>
            <div className="cart flex">
                <div>
                    <FaShoppingCart/>
                </div>
                <div className="mx-4">
                    <FaUserPlus/>
                </div>
            </div>
            <div className="sign-in flex justify-between">
                <ul>
                    <li className="block relative hover:border-b-2 border-black cursor-pointer">
                        <span className="block relative mr-8">All Microsoft</span>
                        <span className=" h-4 w-0 right-8 top-1 pl-0 absolute"><FiChevronDown/></span>
                        </li>
                    <li className="block realtive ml-12 hover:border-b-2 border-black cursor-pointer"> 
                        <span className="block relative mr-8">Search</span>
                        <span className=" h-16 w-12 right-30 top-4 pl-12 left-30 absolute"><VscSearch/></span>  
                    </li>
                    <li className="block relative hover:border-b-2 border-black cursor-pointer">
                        <span className="">Cart</span>
                        <span className=" h-14 w-16 right-30 top-1 pr-4 absolute"><FiShoppingCart/></span>
                        </li>
                    <li className="block relative cursor-pointer pl-6">
                        <span>Sign In</span>
                        <span className=" h-16 w-10 right-30 top-1 pl-1 absolute"><FaUserPlus/></span>
                    </li>
                </ul>
            </div>
        </header>
    )
}



export default Header;

