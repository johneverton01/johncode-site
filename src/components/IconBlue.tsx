'use client'
import Link from 'next/link'
import { Envelope, Phone, Lifebuoy } from '@phosphor-icons/react'
import { ReactNode } from 'react'

interface IconBlueProps {
  icon: 'envelope' | 'phone' | 'lifebuoy'
  title: string
  link: string
  label: string
}
export function IconBlue({ icon, title, label, link }: IconBlueProps) {
  let phosphorIcon: ReactNode
  switch (icon) {
    case 'phone':
      phosphorIcon = <Phone size={28} />
      break
    case 'lifebuoy':
      phosphorIcon = <Lifebuoy size={28} />
      break
    case 'envelope':
    default:
      phosphorIcon = <Envelope size={28} />
      break
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-blue-500 rounded p-2 text-white w-[40px] h-[40px] flex items-center justify-center">
        {phosphorIcon}
      </div>
      <strong>{title}</strong>
      <Link href={link}>{label}</Link>
    </div>
  )
}
