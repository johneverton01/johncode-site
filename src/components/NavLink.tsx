'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavLinkProps {
  children: ReactNode
  href: string
}

export function NavLink({ children, href }: NavLinkProps) {
  const activeHref = usePathname()
  return (
    <Link
      data-active={activeHref === href}
      className="text-white font-semibold text-base data-[active=true]:border-white data-[active=true]:border-b-2 hover:border-gray-100 hover:border-b-2 hover:text-gray-100 transition-all"
      href={href}
    >
      {children}
    </Link>
  )
}
