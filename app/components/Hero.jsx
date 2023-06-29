"use client"
import React from 'react'
import styles from "../styles"
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants'
import { BsEmojiSmile } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col ss:py-16 py-4`}>
            <motion.div variants={fadeIn("down", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                    <BsEmojiSmile size={20} color="white" className="w-[32px] h-[32px]" />

                    <p className={`${styles.paragraph} ml-2`}>
                        <span className="text-white">Welcome</span> to  my{" "}
                        <span className="text-white">Portfolio</span> website
                    </p>

                </div>

                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                        Hi I am, <br className="sm:block hidden" />{" "}
                        <span className="text-gradient">Soham Saha</span>{" "}
                    </h1>
                    <div className="ss:flex hidden md:mr-4 mr-0">

                    </div>
                </div>

                <h1 className="font-poppins font-semibold ss:text-[68px] text-[34px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    <TypeAnimation sequence={["a web developer.", 1500, "a student.", 1500, "an engineer.", 1500]} speed={50} wrapper="span" className="text-white"
                        repeat={Infinity}
                    />
                    {/* a web developer. */}
                </h1>
                <motion.p variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Hello everyone I am Soham Saha a student of National Institute of Technology Durgapur. I am currently pursing B.tech in Electrical Engineering.

                </motion.p>
            </motion.div>

            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <motion.img variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} src={"./photo.png"} alt="billing" className="w-[100%] h-[95%] relative z-[5] bottom-28" />

                {/* gradient start */}
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
                {/* gradient end */}
            </div>


        </section>
    )
}

export default Hero