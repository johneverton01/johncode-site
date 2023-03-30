import { Hero } from '@/components/Hero'
import { ToggleButton } from '@/components/ToggleButton'

import bgHero from '../../../public/hero-portfolio.png'

export default function Portfolio() {
  return (
    <>
      <Hero img={bgHero} title="Portfólio" />
      <main className="container mx-auto flex flex-col gap-5 py-10 md:px-7 px-4">
        <div className="flex gap-4 w-auto max-w-2xl">
          <ToggleButton type="Todos" name="portfolioType" id="all">
            Todos
          </ToggleButton>
          <ToggleButton type="interface" name="portfolioType" id="interface">
            Interface
          </ToggleButton>
          <ToggleButton type="sites" name="portfolioType" id="sites">
            Sites
          </ToggleButton>
          <ToggleButton
            type="aplicativos"
            name="portfolioType"
            id="aplicativos"
          >
            Aplicativos
          </ToggleButton>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
          <div className="bg-blue-500 shadow-md p-4 flex flex-col gap-3 rounded-lg text-white font-bold text-lg md:w-1/3 w-full lg:max-w-[390px]">
            <div className="h-[215px] w-full lg:max-w-[355px] bg-white" />
            Portfolio
          </div>
        </div>
      </main>
    </>
  )
}
