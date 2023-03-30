import { ReactNode } from 'react'

interface ToggleButtonProps {
  children: ReactNode
  type: string
  name: string
  id: string
  isChecked?: boolean
}

export function ToggleButton({
  children,
  type,
  name,
  id,
  isChecked,
}: ToggleButtonProps) {
  return (
    <label className="cursor-poiter w-full" htmlFor={id}>
      <input
        aria-label={type}
        className="peer sr-only"
        type="radio"
        id={id}
        name={name}
        checked={isChecked}
      />
      <span className="whitespace-nowrap flex font-semibold gap-3 rounded-md bg-transparent text-purple ring-2 ring-purple uppercase text-xs w-full items-center justify-center p-4 peer-checked:bg-blue-400 peer-checked:text-white peer-checked:ring-blue-400 peer-checked:ring-2 peer-focus:ring-blue-400 peer-focus:ring-2 peer-hover:bg-blue-400 peer-hover:text-white transition-colors">
        {children}
      </span>
    </label>
  )
}
