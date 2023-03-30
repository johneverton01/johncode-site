import { ReactNode } from 'react'
import clsx from 'clsx'

interface SectionProps {
  isBgBlue?: boolean
  children: ReactNode
}

export function Section({ isBgBlue = false, children }: SectionProps) {
  return (
    <section className={clsx('py-10', { 'bg-blue-500': isBgBlue })}>
      <div
        className={clsx(
          'container mx-auto flex justify-between gap-5 flex-col md:flex-row px-4',
          {
            'text-white': isBgBlue,
          },
        )}
      >
        {children}
      </div>
    </section>
  )
}
