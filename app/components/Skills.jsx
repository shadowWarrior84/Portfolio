import React from 'react'
import { motion } from "framer-motion"
// import styles, { layout } from '../styles'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-light py-3 px-6 shadow-dark cursor-pointer absolute md:py-2 md:px-4 ss:text-ss ss:py-1.5 ss:px-3 bg-transparent text-light xs:bg-light xs:text-dark  xs:font-bold" whileHover={{ scale: 1.05 }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y, transition: { duration: 1.5 } }} >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <section className={`mb-20`} id="product">
            <h2 className="font-bold text-8xl mt-52 w-full text-center text-white sm:text-6xl sm:mt-32">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularDark md:h-[80vh] ss:h-[60vh] xs:h-[50vh] md:bg-circularDarkLg sm:bg-circularDarkMd ss:bg-circularDarkSm">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dimWhite text-dark p-8 shadow-dark cursor-pointer md:p-6 sm:p-4 xs:text-xs xs:p-2" whileHover={{ scale: 1.05 }}>
                    web
                </motion.div>
                <Skill name="HTMl" x="-25vw" y="2vw" />
                <Skill name="CSS" x="-15vw" y="-10vw" />
                <Skill name="JavaScript" x="22vw" y="6vw" />
                <Skill name="ReactJs" x="0vw" y="14vw" />
                <Skill name="NextJs" x="-20vw" y="-16vw" />
                <Skill name="NodeJs" x="15vw" y="-12vw" />
                <Skill name="MongoDb" x="32vw" y="-5vw" />
                <Skill name="Php" x="0vw" y="-15vw" />
                <Skill name="Sql" x="-25vw" y="18vw" />
                <Skill name="TailwindCss" x="20vw" y="18vw" />
            </div>
        </section>

    )
}

export default Skills