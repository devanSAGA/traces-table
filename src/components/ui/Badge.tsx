import { ReactNode } from 'react'

type BadgeType = 'success' | 'error' | 'warning' | 'unknown'

interface BadgeProps {
  children: ReactNode
  type: BadgeType
}

const getBadgeClasses = (type: BadgeType): string => {
  const baseClasses = 'inline-flex items-center px-2 py-1 text-xs font-medium rounded-md'
  
  switch (type) {
    case 'success':
      return `${baseClasses} bg-secondary-container text-on-secondary-container border border-secondary-outline`
    case 'error':
      return `${baseClasses} bg-error-container text-on-error-container border border-error-outline`
    case 'warning':
      return `${baseClasses} bg-warning text-on-warning border border-warning-outline`
    case 'unknown':
      return `${baseClasses} bg-surface-low text-on-surface-low-subtle border border-outline`
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