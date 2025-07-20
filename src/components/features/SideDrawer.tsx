import { ReactNode } from 'react'
import { LogTraceType } from '../../store/tracesStore'

export const SIDE_DRAWER_WIDTH = 420

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
  trace: LogTraceType | null
  children?: ReactNode
}

export const SideDrawer = ({ isOpen, onClose, trace }: SideDrawerProps) => {
  if (!isOpen || !trace) return null

  return (
    <div className="bg-surface-highest border-l border-outline h-full overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
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

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Basic Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-on-surface-highest-subtle">ID</label>
                <p className="text-sm text-on-surface-highest font-mono">{trace.id}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Name</label>
                <p className="text-sm text-on-surface-highest">{trace.name}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Status</label>
                <p className="text-sm text-on-surface-highest">{trace.status}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Latency</label>
                <p className="text-sm text-on-surface-highest">{trace.latency}ms</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Timestamps</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Started At</label>
                <p className="text-sm text-on-surface-highest">{new Date(trace.startedAt).toLocaleString()}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Ended At</label>
                <p className="text-sm text-on-surface-highest">{new Date(trace.endedAt).toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Identifiers</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Project ID</label>
                <p className="text-sm text-on-surface-highest font-mono">{trace.projectId}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Reference ID</label>
                <p className="text-sm text-on-surface-highest font-mono">{trace.referenceId || 'N/A'}</p>
              </div>
              <div>
                <label className="text-xs text-on-surface-highest-subtle">Session ID</label>
                <p className="text-sm text-on-surface-highest font-mono">{trace.sessionId || 'N/A'}</p>
              </div>
            </div>
          </div>

          {trace.attributes && (
            <div>
              <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Attributes</h3>
              <div className="bg-surface-high p-3 rounded-md">
                <pre className="text-xs text-on-surface-high font-mono">
                  {JSON.stringify(trace.attributes, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {trace.tags && trace.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {trace.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-2 py-1 bg-surface-high text-on-surface-high text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {trace.spans && trace.spans.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-on-surface-highest-subtle mb-2">Spans ({trace.spans.length})</h3>
              <div className="space-y-2">
                {trace.spans.slice(0, 3).map((span, idx) => (
                  <div key={idx} className="bg-surface-high p-3 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium text-on-surface-high">{span.name}</p>
                      <span className="text-xs text-on-surface-high-subtle">{span.status}</span>
                    </div>
                    <p className="text-xs text-on-surface-high-subtle">Latency: {span.latency}ms</p>
                  </div>
                ))}
                {trace.spans.length > 3 && (
                  <p className="text-xs text-on-surface-highest-subtle">
                    +{trace.spans.length - 3} more spans
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}