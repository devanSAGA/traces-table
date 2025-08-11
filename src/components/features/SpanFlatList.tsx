import { LogSpanType } from '../../store/tracesStore'
import { Badge } from '../ui/Badge'

const getStatusType = (status: string) => {
  switch (status) {
    case 'success':
      return 'success'
    case 'failure':
      return 'error'
    case 'pending':
      return 'warning'
    case 'unknown':
    default:
      return 'unknown'
  }
}

interface SpanFlatListProps {
  spans: LogSpanType[]
}

export const SpanFlatList = ({ spans }: SpanFlatListProps) => {
  if (!spans || spans.length === 0) {
    return (
      <div className="text-sm text-on-surface-high-subtle">
        No spans available
      </div>
    )
  }

  // Sort spans by startedAt in descending order (newest first)
  const sortedSpans = [...spans].sort((a, b) => b.startedAt - a.startedAt)

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-medium text-on-surface-high">
        Spans ({spans.length})
      </h4>
      <div className="space-y-2">
        {sortedSpans.map((span) => (
          <div 
            key={span.id} 
            className="flex items-center justify-between bg-surface-highest p-3 rounded border border-outline w-[430px]"
          >
            <Badge type={getStatusType(span.status)}>
              {span.status}
            </Badge>
            <span className="text-sm text-on-surface-highest">
              <span className="font-bold">Span Id:</span> <span className="font-mono">{span.id}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}