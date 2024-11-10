'use client'

import React from 'react'
import { _certificates } from '../../public/data/_certificates'
import EmblaCarouselCertification from './embla/EmblaCarousel'
 
const Certification = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-evenly items-center bg-theme">
        <h1 className="text-6xl mt-12 text-theme-w uppercase font-main">Certifications</h1>
        <EmblaCarouselCertification />
    </div>
  )
}

export default Certification