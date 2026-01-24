'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  options?: EmblaOptionsType
  slides: string[]
}

const EmblaCarousel = (props: PropType) => {
  const { options, slides } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

  useEffect(() => {
    if (!emblaApi) return
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    autoplay.play()
  }, [emblaApi])

  return (
    <section className='w-screen m-auto'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex touch-pan-y touch-pinch-zoom ml-[calc(2rem * -1)]'>
          {slides.map((src, index) => (
            <div className='flex-none w-5/6 xl:w-304 min-w-0 ml-8' key={index}>
              <div className='rounded-2xl flex items-center justify-center user-select-none h-full relative overflow-hidden aspect-video'>
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={1920}
                  height={1080}
                  className='object-cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel