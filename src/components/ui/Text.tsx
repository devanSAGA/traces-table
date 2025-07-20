import { ReactNode } from 'react'
import { Tooltip } from './Tooltip'

type ColorToken = 
  | 'on-surface-highest' | 'on-surface-highest-subtle' | 'on-surface-highest-disabled'
  | 'on-surface-high' | 'on-surface-high-subtle' | 'on-surface-high-disabled'
  | 'on-surface-base' | 'on-surface-base-subtle' | 'on-surface-base-disabled'
  | 'on-surface-low' | 'on-surface-low-subtle' | 'on-surface-low-disabled'
  | 'on-surface-lowest' | 'on-surface-lowest-subtle' | 'on-surface-lowest-disabled'
  | 'on-surface-inverse' | 'on-surface-inverse-subtle' | 'on-surface-inverse-disabled'
  | 'primary' | 'on-primary' | 'on-primary-container'
  | 'secondary' | 'on-secondary' | 'on-secondary-container'
  | 'tertiary' | 'on-tertiary' | 'on-tertiary-container'
  | 'error' | 'on-error' | 'on-error-container'
  | 'accent-1' | 'accent-2' | 'accent-3' | 'accent-4' | 'accent-5'
  | 'accent-6' | 'accent-7' | 'accent-8' | 'accent-9' | 'accent-10'

interface TextProps {
  children: ReactNode
  isTruncated?: boolean
  color?: ColorToken
}

export const Text = ({ children, isTruncated = false, color }: TextProps) => {
  const classNames = [
    isTruncated && 'inline-block overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
    color && `text-${color}`
  ].filter(Boolean).join(' ')

  const textElement = (
    <span className={classNames || undefined}>
      {children}
    </span>
  )

  if (isTruncated) {
    return (
      <Tooltip content={children}>
        {textElement}
      </Tooltip>
    )
  }

  return textElement
}