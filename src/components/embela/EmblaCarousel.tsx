'use client'

import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'
import { _certificates } from '../../../public/data/_certificates'
import { ProjectCard } from '../Cards'

interface IProjectSubItem
{
  item : string,
  description : string,
  tools : string[],
  url : string,
};

interface IProjectItem
{
  subItem : IProjectSubItem[];
};

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
                  <img src={url} alt={title} className={"min-h-[18rem] max-h-[25rem] mx-auto transition-all duration-300 ".concat((index == selectedIndex) ? " shadow-xl " : " opacity-20  scale-75 ")} />
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


const EmblaCarouselProjects = (props : IProjectItem) => {

  const {subItem} = props;
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
    <div className="embla sm:w-[95%] w-[90%]">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="embla__container flex">
          {
            subItem.map((props : IProjectSubItem, index : number) => {
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
          <div className="embla-thumbs__container mt-10  w-full flex flex-row justify-evenly sm:text-note text-sm">
            {
              subItem.map((props : IProjectSubItem, index : number) => {
                    return (
                      <Thumb
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedIndex}
                        title={props.item}
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
