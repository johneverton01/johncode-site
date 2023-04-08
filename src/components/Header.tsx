import Image from 'next/image'
import logo from '../../public/logo.svg'
import { DropdownMenu } from './DropdownMenu'
import { NavLink } from './NavLink'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-blue-700 h-20">
      <nav className="mx-auto flex container items-center h-full justify-between p-6">
        <div className="flex lg:flex-1">
          <Link href="/" arial-label="Pagina home">
            <Image src={logo} alt="John code" className="md:w-auto w-32" />
          </Link>
        </div>
        <div className="md:flex hidden w-full md:w-auto gap-5">
          <NavLink href="/portfolio" arial-label="Pagina Portfólio">
            Portfólio
          </NavLink>
          <NavLink href="/servico" arial-label="Pagina Serviço">
            Serviços
          </NavLink>
          <NavLink href="/sobre" arial-label="Pagina Sobre">
            Sobre
          </NavLink>
          <NavLink href="/blog" arial-label="Pagina Blog">
            Blog
          </NavLink>
          <NavLink href="/contato" arial-label="Pagina Contato">
            Contato
          </NavLink>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu />
        </div>
      </nav>
    </header>
  )
}
