'use client'
import { useState } from 'react'
import { StaticImageData } from 'next/image'
import { CaretLeft, CaretRight, Circle } from '@phosphor-icons/react'
import clsx from 'clsx'

import bg1 from '../../public/img1.jpg'
import bg2 from '../../public/img2.jpg'

interface IImage {
  url: StaticImageData
  title?: string
}

type ISlides = IImage[]

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides: ISlides = [
    {
      url: bg1,
    },
    {
      url: bg2,
    },
  ]

  const toggleCurrentIndex = (type: 'add' | 'sub') => {
    if (type === 'add' && currentIndex !== slides.length - 1) {
      setCurrentIndex((state) => state + 1)
    } else if (type === 'sub' && currentIndex !== 0) {
      setCurrentIndex((state) => state - 1)
    } else {
      setCurrentIndex(0)
    }
  }
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div
      style={{ height: 'calc(100vh - 80px)' }}
      className="min-h-[650px] w-full m-auto relative"
    >
      <div className="bg-black/30 w-full h-full absolute" />
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url.src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      />
      <div className="md:hidden block outline-none absolute top-1/2 -translate-x-0 translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-blue-400/80 text-white cursor-pointer">
        <CaretLeft onClick={() => toggleCurrentIndex('sub')} size={28} />
      </div>
      <div className="md:hidden block outline-none absolute top-1/2 -translate-x-0 translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-blue-400/80 text-white cursor-pointer">
        <CaretRight size={28} onClick={() => toggleCurrentIndex('add')} />
      </div>
      <div className="top-1/2 absolute w-full md:block hidden">
        <div className="container mx-auto px-7 flex flex-col gap-2 items-end">
          {slides.map((_, index) => (
            <Circle
              className={clsx(
                'drop-shadow-lg cursor-pointer transition-colors duration-300 hover:text-blue-500',
                {
                  'text-blue-400': currentIndex !== index,
                  'text-blue-600': currentIndex === index,
                },
              )}
              weight="fill"
              key={index}
              size={20}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
