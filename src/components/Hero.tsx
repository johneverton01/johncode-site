import Image, { StaticImageData } from 'next/image'

interface HeroProps {
  img: StaticImageData
  title: string
}
export function Hero({ img, title }: HeroProps) {
  return (
    <div className="relative isolate w-full overflow-hidden">
      <div className="-z-10 transform-gpu overflow-hidden">
        <Image
          className="relative object-cover w-screen overflow-hidden"
          src={img}
          alt=""
        />
      </div>
      <div className="absolute z-10 w-full h-full top-0">
        <div className="text-white lg:text-5xl text-4xl relative lg:-top-14 -top-5 h-full flex items-end px-7 font-bold container mx-auto">
          {title}
        </div>
      </div>
    </div>
  )
}
