import React, { useState } from 'react'
import { Badge } from '../../ui/Badge'

interface TagsCellProps {
  tags: string[]
}

export const TagsCell = ({ tags }: TagsCellProps) => {
  const [showTooltip, setShowTooltip] = useState(false)
  
  if (tags.length === 0) return <span className="text-xs muted">No tags</span>
  
  if (tags.length === 1) {
    return (
      <Badge type="neutral">
        {tags[0]}
      </Badge>
    )
  }
  
  return (
    <div className="flex items-center gap-1">
      <Badge type="neutral">
        {tags[0]}
      </Badge>
      <div className="relative">
        <div 
          className="bg-outline text-on-surface-low text-xs px-1.5 py-0.5 rounded-sm cursor-pointer hover:bg-outline-strong transition-colors"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          +{tags.length - 1}
        </div>
        {showTooltip && (
          <div className="absolute left-0 top-full mt-1 bg-surface-inverse text-on-surface-inverse text-xs p-2 rounded-md shadow-lg z-50 min-w-max">
            <div className="flex flex-wrap gap-1 max-w-48">
              {tags.slice(1).map((tag, idx) => (
                <span key={idx} className="bg-surface-tint-mild px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}