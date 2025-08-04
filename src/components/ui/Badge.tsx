import { ReactNode } from 'react'

type BadgeType = 'success' | 'error' | 'warning' | 'unknown' | 'neutral'

interface BadgeProps {
  children: ReactNode
  type: BadgeType
}

const getBadgeClasses = (type: BadgeType): string => {
  const baseClasses = 'inline-flex items-center justify-center px-0.5 py-0.5 text-xs font-medium rounded-base'
  
  switch (type) {
    case 'success':
      return `${baseClasses} bg-secondary-container text-on-secondary-container border border-secondary-outline`
    case 'error':
      return `${baseClasses} bg-error-container text-on-error-container border border-error-outline`
    case 'warning':
      return `${baseClasses} bg-warning text-on-warning border border-warning-outline`
    case 'unknown':
      return `${baseClasses} bg-surface-low text-on-surface-low-subtle border border-outline`
    case 'neutral':
      return `${baseClasses} bg-accent-8-container text-accent-8 border border-accent-8-outline`
    default:
      return `${baseClasses} bg-surface-low text-on-surface-low-subtle border border-outline`
  }
}

export const Badge = ({ children, type }: BadgeProps) => {
  return (
    <span className={getBadgeClasses(type)}>
      {children}
    </span>
  )
}