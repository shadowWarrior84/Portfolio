import React from 'react'

import { fadeIn } from '../helper/variants'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Work = () => {
    return (
        <section className="py-8 lg:py-24 lg:h-screen flex items-center mb-20" id="clients">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10">
                    <motion.div variants={fadeIn("right", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }} className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        <div>
                            <h2 className="font-poppins text-[32px] mb-6 tracking-[10%] uppercase leading-tight text-cyan-400 font-bold">My Latest <br /> Work</h2>
                            <p className="max-w-sm mb-16 text-white text-[17.5px]">Here are some of my works which I have done across the time. Also to see all the projects which I have done all this time click the button below.</p>
                            <Link target="_blank" href={"https://github.com/shadowWarrior84"}>
                                <button className="btn rounded-full font-primary text-white font-medium h-[48px] px-6 text-sm">View all project</button>
                            </Link>
                        </div>
                        <Link target="_blank" href={"https://github.com/shadowWarrior84/Social-Media"}>
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img className="group-hover:scale-125 transition-all duration-500" src="./socialMedia.jpg" alt="project" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-green-600">
                                        MERN STACK
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                                    <span className="text-3xl text-white">Mern Stack Social Media Website</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                    <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className="flex-1 flex flex-col gap-y-10">
                        <Link target="_blank" href={"https://github.com/shadowWarrior84/E-Commerce"}>
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img className="group-hover:scale-125 transition-all duration-500" src="./ecommerce.jpg" alt="project" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-green-600">
                                        MERN STACK
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                                    <span className="text-3xl text-white">Mern Stack E-commerce Website</span>
                                </div>
                            </div>
                        </Link>
                        <Link target="_blank" href={"https://github.com/shadowWarrior84/BookingApp"}>
                            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                                <img className="group-hover:scale-125 transition-all duration-500" src="./bookingapp.jpg" alt="project" />
                                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                    <span className="text-green-600">
                                        MERN STACK
                                    </span>
                                </div>
                                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                                    <span className="text-3xl text-white">Mern Stack Booking Website</span>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Work