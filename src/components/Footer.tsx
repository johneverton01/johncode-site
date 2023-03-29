'use client'
import Image from "next/image";
import { 
  EnvelopeSimple,
  InstagramLogo,
  YoutubeLogo,
  FacebookLogo,
  Question,
} from '@phosphor-icons/react'
import logo from '../../public/logo.svg'

export function Footer () {
  return (
    <footer className="bg-blue-500">
      <div className="mx-auto flex flex-col max-w-6xl items-center h-full justify-between p-6 lg:px-8">
        <div className="flex justify-between flex-wrap md:flex-row flex-col gap-4 w-full md:mb-32 mb-6">
          <div>
            <Image src={logo} alt=""/>
          </div>
          <div className="text-white flex flex-col gap-3">
            Links
            <a href="">Portfólio</a>
            <a href="">Serviços</a>
            <a href="">Blog</a>
            <a href="">Contatos</a>
          </div>
          <div className="text-white flex flex-col gap-3">
            Serviços
            <p>Integração de API´s</p>
            <p>Criação de Marcas</p>
            <p>Design</p>
          </div>
          <div className="text-white flex flex-col gap-3">
            Contatos
            <div className="flex gap-2 items-center">
              <EnvelopeSimple size={20} weight="thin" /> 
              contato@johncode.com.br
            </div>
            <div className="flex gap-2 items-center">
              <Question size={20} weight="thin" /> 
              suporte.johncode.com.br
            </div>
          </div>
          <div className="text-white flex gap-3">
            <a href="">
              <InstagramLogo size={28} />
            </a>
            <a href="">
              <YoutubeLogo size={28} />
            </a>
            <a href="">
              <FacebookLogo size={28} />
            </a>
          </div>

        </div>
        <div className="flex justify-between w-full text-white flex-wrap gap-3 md:gap-0">
          <small>Todos os direitos reservados </small>
          <small>© John Code - 2023 </small>
        </div>
      </div>
    </footer>
  )
}