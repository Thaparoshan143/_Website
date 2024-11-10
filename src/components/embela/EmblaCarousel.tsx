'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import { _certificates } from '../../../public/data/_certificates'
import { _projectList } from '../../../public/data/_projectList'
import { ProjectCard } from '../Cards'

const EmblaCarouselCertification = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container  flex">
          {
            _certificates.map((prop, index) => {
              const {title, url} = prop;
              return (
                <div key={title} className={'embla__slide py-4'}>
                  <img src={url} alt={title} className={"min-h-[20rem] max-h-[25rem] mx-auto transition-all duration-300 ".concat((index == selectedIndex) ? " shadow-xl " : " opacity-20  scale-75 ")} />
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container flex flex-row text-stitle">
            {_certificates.map((prop, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                title={prop.title}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const EmblaCarouselProjects = (props : any) => {

  const {projectItem} = props;
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({})
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="embla w-full">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container flex">
          {
            projectItem.map((props : any, index : number) => {
                const {item, description, tools, url} = props;
                return (
                <div key={index} className={'embla_def__slide py-4'.concat((index == selectedIndex) ? " shadow-xl " : " opacity-20  scale-75 ")}>
                  <ProjectCard key={index} item={item} description={description} tools={tools} url={url} />
                </div>
              )
            })

          }
        </div>
      </div>

      <div className="embla-thumbs">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container mt-24  w-full flex flex-row justify-evenly text-note">
            {
              projectItem.map((props : any, index : number) => {
                    return (
                      <Thumb
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedIndex}
                        title={props.item}
                        index={index}
                      />)
                  })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export { EmblaCarouselCertification, EmblaCarouselProjects }
