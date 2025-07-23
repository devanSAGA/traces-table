import JsonView from '@uiw/react-json-view'
import { Text } from '../ui/Text'
import { LogTraceType, LogSpanType } from '../../store/tracesStore'

interface JsonViewerProps {
  selectedNode?: LogTraceType | LogSpanType | null
  defaultTrace?: LogTraceType | null
}

export const JsonViewer = ({ selectedNode, defaultTrace }: JsonViewerProps) => {
  const nodeToShow = selectedNode || defaultTrace
  
  if (!nodeToShow) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Text color="on-surface-highest-subtle">
          No data to display
        </Text>
      </div>
    )
  }

  const isTrace = 'spans' in nodeToShow
  const nodeType = isTrace ? 'Trace' : 'Span'
  const nodeId = nodeToShow.id

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 mb-3">
        <Text color="on-surface-highest">
          <span className="font-medium text-sm">
            {nodeType}: <span className="font-mono">{nodeId}</span>
          </span>
        </Text>
      </div>
      
      {/* JSON Content */}
      <div className="flex-1 overflow-auto">
        <JsonView 
          value={nodeToShow}
          style={{
            backgroundColor: 'transparent',
            fontSize: '12px',
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Cascadia, "Cascadia Code", Roboto Mono, Menlo, monospace'
          }}
          collapsed={1}
          displayDataTypes={false}
          enableClipboard={false}
        />
      </div>
    </div>
  )
}