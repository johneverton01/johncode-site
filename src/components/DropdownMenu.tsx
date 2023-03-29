'use client'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu' 
import { List } from '@phosphor-icons/react'
export function DropdownMenu() {
  return (
    <DropdownMenuRadix.Root>
       <DropdownMenuRadix.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <List 
            className="text-white"
            size={28}
          />
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
         <DropdownMenuRadix.Content 
            className="bg-white rounded-md p-2 min-w-[220px] w-full shadow-md flex flex-col gap-3" 
            sideOffset={5}
          >
            <DropdownMenuRadix.Item className="text-sm rounded cursor-default select-none outline-none flex items-center h-6 px-1 relative focus:bg-blue-400 focus:text-white transition-colors">
              Portfólio
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Item className="text-sm rounded cursor-default select-none outline-none flex items-center h-6 px-1 relative focus:bg-blue-400 focus:text-white transition-colors">
              Serviços
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Item className="text-sm rounded cursor-default select-none outline-none flex items-center h-6 px-1 relative focus:bg-blue-400 focus:text-white transition-colors">
              Blog
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Item className="text-sm rounded cursor-default select-none outline-none flex items-center h-6 px-1 relative focus:bg-blue-400 focus:text-white transition-colors">
              Contato
            </DropdownMenuRadix.Item>
          </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}