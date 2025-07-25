import { useState, MouseEvent } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, XCircle, AlertCircle, Clock } from 'lucide-react';
import { LogTraceType, LogSpanType, useTracesStore } from '../../store/tracesStore';
import { Text } from '../ui/Text';

interface TreeNodeData {
  node: LogTraceType | LogSpanType;
  children: TreeNodeData[];
}

interface TreeNodeProps {
  node: LogTraceType | LogSpanType;
  isTrace?: boolean;
  level?: number;
  children?: TreeNodeData[];
  onNodeSelect?: (node: LogTraceType | LogSpanType) => void;
}

const TreeNode = ({ node, isTrace = false, level = 0, children = [], onNodeSelect }: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = children && children.length > 0;

  const toggleExpanded = (e: MouseEvent) => {
    e.stopPropagation();
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  const handleLabelClick = () => {
    onNodeSelect?.(node);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-4 h-4 text-secondary" />;
      case 'failure':
        return <XCircle className="w-4 h-4 text-error" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-accent-4" />;
      default:
        return <Clock className="w-4 h-4 text-on-surface-highest-subtle" />;
    }
  }

  return (
    <div className="text-sm">
      <div 
        className="flex items-center py-2 rounded-md transition-colors group"
        style={{ paddingLeft: `${12 + level * 12}px` }}
      >
        {/* Chevron Icon - Only for expand/collapse */}
        {hasChildren ? (
          <button
            className="w-4 h-4 mr-2 flex-shrink-0 hover:bg-surface-highest rounded-sm p-0.5 transition-colors"
            onClick={toggleExpanded}
          >
            {isExpanded ? (
              <ChevronDown className="w-full h-full text-on-surface-highest-subtle" />
            ) : (
              <ChevronRight className="w-full h-full text-on-surface-highest-subtle" />
            )}
          </button>
        ) : (
          <div className="w-4 mr-2 flex-shrink-0"></div>
        )}
                
        {/* Clickable Content Area - For node selection */}
        <div 
          className="flex items-center gap-2 flex-1 min-w-0 hover:bg-surface-high rounded-md px-2 py-1 cursor-pointer transition-colors overflow-hidden"
          onClick={handleLabelClick}
        >
          {/* Status Icon */}
          <div className="flex-shrink-0">
            {getStatusIcon(node.status)}
          </div>
          
          {/* Name - takes remaining space and truncates */}
          <div className="flex-1 min-w-0">
            <Text 
              color={isTrace ? 'primary' : 'on-surface-highest'} 
              isTruncated
            >
              <span className={isTrace ? 'font-semibold' : 'font-medium'}>
                {node.name}
              </span>
            </Text>
          </div>
          
          {/* Latency - always visible */}
          <div className="flex-shrink-0">
            <Text color="on-surface-highest-subtle">
              <span className="font-mono text-xs">
                {node.latency}ms
              </span>
            </Text>
          </div>
        </div>
      </div>
      
      {hasChildren && isExpanded && (
        <div className="mt-1">
          {children.map((child: TreeNodeData) => (
            <TreeNode 
              key={child.node.id} 
              node={child.node} 
              level={level + 1}
              children={child.children}
              onNodeSelect={onNodeSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const buildTree = (trace: LogTraceType): TreeNodeData => {
  const spans = trace.spans || [];
  
  // Create maps for efficient lookups
  const spanMap = new Map();
  const childrenMap = new Map();
  
  // Initialize maps
  spans.forEach((span: LogSpanType) => {
    spanMap.set(span.id, span);
    childrenMap.set(span.id, []);
    if (span.referenceId) {
      spanMap.set(span.referenceId, span);
    }
  });
  
  // Build parent-child relationships
  spans.forEach((span: LogSpanType) => {
    if (span.parentReferenceId) {
      // Find the parent span by its referenceId
      const parentSpan = spans.find((s: LogSpanType) => s.referenceId === span.parentReferenceId);
      if (parentSpan) {
        const parentChildren = childrenMap.get(parentSpan.id) || [];
        parentChildren.push(span);
        childrenMap.set(parentSpan.id, parentChildren);
      }
    }
  });
  
  // Recursively build tree structure with cycle detection
  const buildNodeTree = (span: LogSpanType, visited = new Set<string>()): TreeNodeData[] => {
    if (visited.has(span.id)) {
      return []; // Prevent infinite recursion
    }
    
    visited.add(span.id);
    const children = childrenMap.get(span.id) || [];
    const childNodes = children.map((child: LogSpanType) => ({
      node: child,
      children: buildNodeTree(child, new Set(visited))
    }));
    
    return childNodes;
  };
  
  // Get root spans (those without parentReferenceId)
  const rootSpans = spans
    .filter((span: LogSpanType) => !span.parentReferenceId)
    .map((span: LogSpanType) => ({
      node: span,
      children: buildNodeTree(span)
    }));
  
  return {
    node: trace,
    children: rootSpans
  };
};

interface TraceTreeProps {
  trace?: LogTraceType | null;
  onNodeSelect?: (node: LogTraceType | LogSpanType) => void;
}

const TraceTree = ({ trace, onNodeSelect }: TraceTreeProps) => {
  const { traces } = useTracesStore();
  
  // Use the provided trace or fall back to all traces from store
  const tracesToShow = trace ? [trace] : traces;
  
  if (!tracesToShow.length) {
    return (
      <div className="flex items-center justify-center py-8">
        <Text color="on-surface-highest-subtle">
          No trace data available
        </Text>
      </div>
    );
  }
  
  return (
    <div className="w-full">
      <div className="space-y-2">
        {tracesToShow.map((traceItem: LogTraceType) => {
          const tree = buildTree(traceItem);
          return (
            <TreeNode 
              key={traceItem.id}
              node={tree.node}
              isTrace={true}
              level={0}
              children={tree.children}
              onNodeSelect={onNodeSelect}
            />
          );
        })}
      </div>
    </div>
  );
};

export { TraceTree };