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
      className="text-white font-semibold text-base data-[active=true]:border-white data-[active=true]:border-b-2 group relative"
      href={href}
    >
      {children}
      <span className="inline-block h-[2px] absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300 dark:bg-light bg-white"></span>
    </Link>
  )
}
