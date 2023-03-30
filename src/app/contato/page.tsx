import { Hero } from '@/components/Hero'
import bgHero from '../../../public/hero-portfolio.png'

export default function Contato() {
  return (
    <>
      <Hero img={bgHero} title="Contato" />
      <main className="container mx-auto flex flex-col gap-5 py-10 md:px-7 px-4"></main>
    </>
  )
}
