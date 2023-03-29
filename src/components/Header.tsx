import Image from 'next/image'
import logo from '../../public/logo.svg'
import { DropdownMenu } from './DropdownMenu'

export function Header() {
  return (
    <header className="bg-blue-500 h-20">
      <nav className="mx-auto flex max-w-6xl items-center h-full justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
            <Image 
              src={logo}
              alt="Foquete dentro de um circulo texto john code"
              className="md:w-auto w-32"
            />         
        </div>
        <div className="text-white font-semibold text-base md:flex hidden w-full md:w-auto gap-5">
          <a href="#">Portfólio</a>
          <a href="#">Serviços</a>
          <a href="#">Blog</a>
          <a href="#">Contato</a>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu />
        </div>
      </nav>
    </header>
  )
}