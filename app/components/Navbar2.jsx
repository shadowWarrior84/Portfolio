"use client"
import React from 'react'

import { BiHomeAlt, BiUser } from "react-icons/bi"
import { BsClipboardData, BsBriefcase, } from "react-icons/bs"
import { Link } from 'react-scroll'

const Navbar2 = () => {
    return (
        <nav className="fixed bottom-2 right-[4px] lg:bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                <div className="w-[95%] bg-black/20 h-[60px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
                    <Link to="home" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ">
                        <BiHomeAlt />
                    </Link>
                    <Link to="features" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ">
                        <BiUser />
                    </Link>
                    <Link to="product" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ">
                        <BsClipboardData />
                    </Link>
                    <Link to="clients" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center ">
                        <BsBriefcase />
                    </Link>
                </div>
            </div>

        </nav>
    )
}
export default Navbar2