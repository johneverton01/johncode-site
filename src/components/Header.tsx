import Image from 'next/image'
import logo from '../../public/logo.svg'
import { DropdownMenu } from './DropdownMenu'
import { NavLink } from './NavLink'
import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-blue-500 h-20">
      <nav className="mx-auto flex container items-center h-full justify-between p-6">
        <div className="flex lg:flex-1">
          <Link href="/">
            <Image src={logo} alt="John code" className="md:w-auto w-32" />
          </Link>
        </div>
        <div className="md:flex hidden w-full md:w-auto gap-5">
          <NavLink href="/portfolio"> Portfólio </NavLink>
          <NavLink href="/servico"> Serviços </NavLink>
          <NavLink href="/blog"> Blog </NavLink>
          <NavLink href="/contato"> Contato </NavLink>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu />
        </div>
      </nav>
    </header>
  )
}
