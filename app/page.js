"use client"

import Business from "./components/Buisness"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import styles from "./styles"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"
import Aos from "aos"
import "aos/dist/aos.css"
import Navbar2 from "./components/Navbar2"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Skills from "./components/Skills"


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 800
    })
  }, [])
  useEffect(() => {

    setTimeout(() => (
      setLoading(false)
    ), 600)


  }, [])


  return (
    <>
      {loading ?
        (<Loader />) :
        <main >
          <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar2 />
                <Navbar />
              </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
              </div>
            </div>


            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`} >
                <Stats />
                <Business />
                <Skills />
                <Work />
                <Contact />
              </div>
            </div>
          </div>
        </main >
      }
    </>

  )
}
