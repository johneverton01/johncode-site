'use client'
import { ButtonLink } from '@/components/ButtonLink'
import { Section } from '@/components/Section'
import { Slider } from '@/components/Slider'
import { Code, Laptop, Palette, PencilSimple } from '@phosphor-icons/react'

import { axeAccessibilityReporter } from '@/utils/axeAccessibilityReporter'

axeAccessibilityReporter()

export default function Home() {
  return (
    <>
      <Slider />
      <main>
        <Section>
          <div className="w-full md:w-1/2 lg:max-w-[506px] flex flex-col gap-2 items-start">
            <h1 className="font-bold text-4xl">O que nos fazemos</h1>
            <p className="font-normal text-base leading-5">
              Conheça os nossos principais serviços oferecidos.
            </p>
            <p className="font-normal text-base leading-5">
              Lörem ipsum viv epigupp tåsa gyv. Gåda stenoliga, sokrona. Fäpp
              fask. Bäskade konera termototal, jag pyskade makrolara. Passivhus
              vade.
            </p>
            <ButtonLink
              url="/servico"
              label="Saiba mais"
              css="bg-blue-700 px-4 py-3 text-white shadow-md rounded outline-none hover:bg-blue-400 transition-colors"
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full md:w-1/2">
            <div className="bg-blue-700 rounded-lg shadow-md w-full h-60 p-3 flex flex-col gap-2 text-white">
              <div className="bg-purple-700 w-10 h-10 rounded shadow-md flex items-center justify-center">
                <Laptop size={24} />
              </div>
              <div className="font-bold text-xl">Desenvolvimento</div>
              <div className="text-base leading-5">
                Criação de sites institucionais, landing pages
              </div>
            </div>
            <div className="bg-blue-700 rounded-lg shadow-md w-full h-60 p-3 flex flex-col gap-2 text-white">
              <div className="bg-purple-700 w-10 h-10 rounded shadow-md flex items-center justify-center">
                <Code size={24} />
              </div>
              <div className="font-bold text-xl">Integração de API´s</div>
              <div className="text-base leading-5">
                Implementação e criação de API´s
              </div>
            </div>
            <div className="bg-blue-700 rounded-lg shadow-md w-full h-60 p-3 flex flex-col gap-2 text-white">
              <div className="bg-purple-700 w-10 h-10 rounded shadow-md flex items-center justify-center">
                <Palette size={24} />
              </div>
              <div className="font-bold text-xl">Criação de Marcas</div>
              <div className="text-base leading-5">
                Criação de Marca para melhor comunicar com seus clientes
              </div>
            </div>
            <div className="bg-blue-700 rounded-lg shadow-md w-full h-60 p-3 flex flex-col gap-2 text-white">
              <div className="bg-purple-700 w-10 h-10 rounded shadow-md flex items-center justify-center">
                <PencilSimple size={24} />
              </div>
              <div className="font-bold text-xl">Design</div>
              <div className="text-base leading-5">
                Desenvolvimento de design para campanhas em redes sócias ou em
                outras mídias
              </div>
            </div>
          </div>
        </Section>

        <Section isBgBlue>
          <div></div>
          <div className="flex flex-col items-start gap-4 w-1/2">
            <p className="text-2xl">Sobre nos</p>
            <h1 className="font-bold text-3xl">
              Desfrute de um serviço completo de experiência em marketing
              digital
            </h1>
            <p>
              Lörem ipsum bang. Häviv nysade. Teradebel lavis. Tetran antitengar
              som meganäde jöment biov. Säska eunade. Dotoment tyheten. Besat
              niv då sesat. Messade doktigt liksom myktiga läshund tedat. Nikyv
              valstuga pehil heterol håpoll. Kontrade näda plaktig.
            </p>
            <button className="px-4 py-3 rounded bg-purple-700 shadow">
              Mais sobre nos
            </button>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <p className="text-2xl">Fluxo de trabalho</p>
              <h1 className="font-bold text-3xl">Nosso processo de trabalho</h1>
              <p>
                Lörem ipsum reafas dill spesålogi. Tide av. Rebelt gigafåvis.
                Nysk pabel. Rektiga metropatologi till dol det alingar.
              </p>
            </div>
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                01. Conceito
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                02. Orçamento
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                03. Desenvolvimento
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                04. Resultado
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section isBgBlue>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <p className="text-2xl">Blog</p>
              <h1 className="font-bold text-3xl">
                Compartilhar conhecimento, é o mesmo que disseminar
                desenvolvimento.
              </h1>
            </div>
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="bg-white text-black rounded-lg w-full md:md:max-w-[280px] p-4 flex flex-col gap-3">
                01. Conceito
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-white text-black rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                02. Orçamento
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-white text-black rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                03. Desenvolvimento
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
              <div className="bg-white text-black rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                04. Resultado
                <p className="text-sm">
                  Lörem ipsum tide dengen knytkonferens har geor. Ososs bengen
                  terapol. Facebookfest nyck, lagt esat.
                </p>
              </div>
            </div>
            <div>
              <button className="px-4 py-3 rounded bg-purple-700 shadow">
                Saiba mais
              </button>
            </div>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <p className="text-2xl">Portfólio</p>
              <h1 className="font-bold text-3xl">
                Vejas alguns dos trabalhos que amei fazer
              </h1>
            </div>
            <div className="flex justify-between gap-4 flex-wrap">
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                01. Conceito
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                02. Orçamento
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                03. Desenvolvimento
              </div>
              <div className="bg-blue-700 text-white rounded-lg w-full md:max-w-[280px] p-4 flex flex-col gap-3">
                04. Resultado
              </div>
            </div>
            <div>
              <button className="px-4 py-3 rounded bg-purple-700 shadow text-white">
                Saiba mais
              </button>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}
