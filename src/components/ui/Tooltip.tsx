import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

type Placement = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  placement?: Placement
  delayDuration?: number
}

export const Tooltip = ({ children, content, placement = 'top', delayDuration = 300 }: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={placement}
            className="z-50 px-3 py-2 text-sm rounded-md bg-surface-inverse text-on-surface-inverse shadow-lg border border-outline animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={5}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}