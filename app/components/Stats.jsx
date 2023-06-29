"use client"
import React, { useEffect, useRef } from 'react'
import styles from "../styles"
import { stats } from '../helper'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { fadeIn } from '../helper/variants';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 6000 })
    const isInView = useInView(ref)

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                // console.log(latest)
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <motion.h4 initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} ref={ref} className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
    </motion.h4>
}

const Stats = () => {
    return (
        <motion.section variants={fadeIn("left", 0.1)} initial="hidden" whileInView={"show"} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-3.5`} id="features">
            <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
                <AnimatedNumbers value={12} />
                <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    +
                </h4>

                <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    Project Done
                </p>
            </div>
            <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
                <AnimatedNumbers value={120} />
                <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    +
                </h4>

                <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    Geeksforgeeks solved
                </p>
            </div>
            <div className={`flex-1 flex justify-start items-center flex-row m-3`} >
                {/* <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    $
                </h4> */}
                <AnimatedNumbers value={100} />
                <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                    +
                </h4>

                <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                    LeetCode solved
                </p>
            </div>


            {/* {stats.map((stat) => (
                <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
                    <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
                        {stat.value}
                    </h4>
                    <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
                        {stat.title}
                    </p>
                </div>
            ))} */}
        </motion.section>
    )
}

export default Stats