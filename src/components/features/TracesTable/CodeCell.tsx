import React from 'react'
import { Text } from '../../ui/Text'

interface CodeCellProps {
  content: string
  isSelected: boolean
}

export const CodeCell = ({ content, isSelected }: CodeCellProps) => (
  <div className={`p-1 rounded font-mono text-xs max-w-full overflow-hidden flex items-center ${
    isSelected ? 'bg-primary-container' : 'bg-surface-tint-mild'
  }`}>
    <Text isTruncated>
      {content}
    </Text>
  </div>
)