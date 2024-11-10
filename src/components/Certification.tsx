'use client'

import React from 'react'
import { _certificates } from '../../public/data/_certificates'
import { EmblaCarouselCertification } from './embela/EmblaCarousel'
 
const Certification = () => {
  return (
    <div className="min-h-[60vh] p-10 pt-24  w-full flex flex-col justify-evenly items-center bg-theme" id="certification">
        <h1 className="text-large text-theme-w uppercase font-bold">Certifications</h1>
        <EmblaCarouselCertification />
    </div>
  )
}

export default Certification