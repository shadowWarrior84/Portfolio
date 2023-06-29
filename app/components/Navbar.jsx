"use client"
import React, { useEffect, useRef, useState } from 'react'
import { navLinks } from '../helper'
import { BsFacebook, BsFillPieChartFill, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    const ref = useRef()

    useEffect(() => {


        const handler = (e) => {

            if (!ref.current.contains(e.target)) {
                setToggle(false)
            }
        }

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">

            <BsFillPieChartFill size={40} color="white" />
            <h2 className="text-lg font-poppins text-white ml-4">PORTFOLIO</h2>

            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                <li className="mr-10">
                    <Link target="_blank" href={"https://www.linkedin.com/login"}>
                        <BsLinkedin size={40} color="white" />
                    </Link>
                </li>
                <li className="mr-10">
                    <Link target="_blank" href={"https://www.facebook.com/"}>
                        <BsFacebook size={40} color='white' />
                    </Link>
                </li>
                <li className="mr-10">
                    <Link target="_blank" href={"https://github.com/shadowWarrior84"}>
                        <BsGithub size={40} color="white" />
                    </Link>
                </li>
                <li className="mr-10">
                    <Link target="_blank" href={"https://www.instagram.com/"}>
                        <BsInstagram size={40} color="white" />
                    </Link>
                </li>

            </ul>

            <div ref={ref} className="sm:hidden flex flex-1 justify-end items-center">
                <BiMenu size={20} color="white" className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(!toggle)} />


                <div
                    className={`${!toggle ? "hidden" : "flex"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex justify-end items-start flex-1 flex-col">

                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-dimWhite"
                                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                                onClick={() => setActive(nav.title)}
                            >
                                <Link target="_blank" href={`${nav.link}`}>{nav.title}</Link>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar