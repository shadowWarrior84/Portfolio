import React, { useRef, useState } from 'react'
import styles, { layout } from '../styles'
import { motion } from 'framer-motion'
import { fadeIn } from '../helper/variants'
import emailJs from "@emailjs/browser"


const Contact = () => {

    const ref = useRef()
    const [success, setSuccess] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailJs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, ref.current, process.env.NEXT_PUBLIC_ID).then((result) => {
            // console.log(result.text)

            setSuccess(true)
        }, (error) => {
            console.log(error.text)
            setSuccess(false)
        })
    }

    return (
        <section id="contact" className={`py:16 lg:section ${layout.section} ${styles.paddingY} mb-10`}>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <motion.div variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex-1">
                        <div>
                            <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide text-dimWhite">Get in touch</h4>
                            <h2 className={`${styles.heading2} text-[45px] lg:text-[90px] leading-none mb-12 text-gradient`}>Let's work <br /> together!</h2>
                        </div>
                    </motion.div>
                    <motion.form onSubmit={handleSubmit} ref={ref} variants={fadeIn("left", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} action="" className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6">
                        <input name="name" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple transition-all text-white" type="text" placeholder="Your name" />
                        <input name="email" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple transition-all text-white" type="text" placeholder="Your email" />
                        <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple transition-all text-white" type="text" placeholder="Your phone no" />
                        <textarea name="message" className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-purple transition-all resize-none mb-12 text-white" type="text" placeholder="Your message"></textarea>
                        <button type="submit" className="btn rounded-full font-primary text-white font-medium h-[56px] px-10 text-base">Send Message</button>
                        {success && <span className="text-white">Your message has been sent, We'll get back to you soon :)</span>}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

export default Contact