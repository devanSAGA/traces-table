import { ReactNode, useState } from 'react'
import { LogTraceType, LogSpanType } from '../../store/tracesStore'
import { TraceTree } from './TracesTree'
import { JsonViewer } from './JsonViewer'

export const SIDE_DRAWER_WIDTH = 420

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
  trace: LogTraceType | null
  children?: ReactNode
}

export const SideDrawer = ({ isOpen, onClose, trace }: SideDrawerProps) => {
  const [selectedNode, setSelectedNode] = useState<LogTraceType | LogSpanType | null>(null)

  if (!isOpen || !trace) return null

  const handleNodeSelect = (node: LogTraceType | LogSpanType) => {
    setSelectedNode(node)
  }

  return (
    <div className="bg-surface-highest border-l border-outline h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-outline flex-shrink-0">
        <h2 className="text-lg font-semibold text-on-surface-highest">Trace Details</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-surface-high rounded-md transition-colors"
          aria-label="Close drawer"
        >
          <svg 
            className="w-5 h-5 text-on-surface-highest-subtle" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content Sections */}
      <div className="flex-1 flex flex-col gap-4 p-6 min-h-0">
        {/* Traces Tree Section */}
        <div className="flex-1 flex flex-col min-h-0">
          <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-3">Trace Tree</h3>
          <div className="flex-1 bg-surface-high border border-outline rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto p-3">
              <TraceTree trace={trace} onNodeSelect={handleNodeSelect} />
            </div>
          </div>
        </div>

        {/* JSON Viewer Section */}
        <div className="flex-1 flex flex-col min-h-0">
          <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-3">JSON Viewer</h3>
          <div className="flex-1 bg-surface-high border border-outline rounded-lg overflow-hidden">
            <div className="h-full overflow-y-auto p-3">
              <JsonViewer selectedNode={selectedNode} defaultTrace={trace} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}