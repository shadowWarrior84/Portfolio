"use client"
import React from 'react'
import { features } from '../helper';
import styles, { layout } from '../styles';
import Button from './Button';
import { motion } from 'framer-motion';
import { fadeIn } from '../helper/variants';
import { BsCheckCircleFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const FeatureCard = ({ title, content, index }) => (
    <motion.div variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.3 }} className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <BsCheckCircleFill size={20} color="white" />

        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                {content}
            </p>
        </div>
    </motion.div>
);

const Business = () => (
    <section id="features" className={layout.section}>
        <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className={`${layout.sectionInfo}`}>
            <h2 className={styles.heading2}>
                Have any project, <br className="sm:block hidden" /> don't worry
                contact me.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                If you have any project whether big or small feel free to contact me. Also any pending work needs to be done contact me. Frontend , Backend, FullStack all can de done.
            </p>

            <Link to="contact" smooth={true}>
                <Button styles={`mt-10`} />
            </Link>
        </motion.div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
)

export default Business