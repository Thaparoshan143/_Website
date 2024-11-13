'use client'

import React from 'react'
import { EmblaCarouselCertification } from './embela/EmblaCarousel'
import { motion } from "framer-motion"
 
const Certification = () => {
  return (
    <div className="min-h-[60vh] md:p-10 p-4 pt-24  w-full flex flex-col justify-evenly items-center bg-theme" id="certification">
        <motion.h1 initial={{y:"-100%"}} whileInView={{y:0}} viewport={{once : false}} transition={{duration : 0.5}} className="sm:text-large text-sup-heading text-theme-w uppercase font-bold">Certifications</motion.h1>
        <EmblaCarouselCertification />
    </div>
  )
}

export default Certification