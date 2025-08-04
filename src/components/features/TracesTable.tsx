import React, { useState, useRef, useEffect } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronRight, ChevronDown, ArrowUpDown, ArrowUp, ArrowDown, GripVertical } from 'lucide-react'
import { useTracesStore, type LogTraceType } from '../../store/tracesStore'
import { Badge } from '../ui/Badge'
import { Text } from '../ui/Text'
import { SideDrawer, SIDE_DRAWER_WIDTH } from './SideDrawer'
import { SpanFlatList } from '../SpanFlatList'
import { useClickOutside } from '../../utils/useClickOutside'
import { ThemeToggle } from '../ui/ThemeToggle'

const columnHelper = createColumnHelper<LogTraceType>()

const CodeCell = ({ content, isSelected }: { content: string, isSelected: boolean }) => (
  <div className={`p-1 rounded font-mono text-xs max-w-full overflow-hidden flex items-center ${
    isSelected ? 'bg-primary-container' : 'bg-surface-tint-mild'
  }`}>
    <Text isTruncated>
      {content}
    </Text>
  </div>
)

const TagsCell = ({ tags }: { tags: string[] }) => {
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

const getColumns = (selectedTrace: LogTraceType | null, isDrawerOpen: boolean) => [
  columnHelper.display({
    id: 'expander',
    header: '',
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          onClick={(e) => {
            e.stopPropagation() // Prevent row click
            row.getToggleExpandedHandler()()
          }}
          className={`p-1 rounded transition-colors ${
            row.getIsExpanded() 
              ? 'bg-primary-container text-primary hover:bg-primary-container' 
              : 'hover:bg-primary-container'
          }`}
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
      ) : null
    },
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    enableSorting: true,
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('id', {
    header: 'ID',
    enableSorting: false,
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('startedAt', {
    header: 'Started At',
    enableSorting: true,
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('endedAt', {
    header: 'Ended At',
    enableSorting: true,
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('latency', {
    header: 'Latency (ms)',
    enableSorting: true,
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    enableSorting: true,
    cell: (info) => (
      <Badge type={getStatusType(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
  }),
  columnHelper.accessor('projectId', {
    header: 'Project ID',
    enableSorting: true,
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('referenceId', {
    header: 'Reference ID',
    enableSorting: false,
    cell: (info) => (
      <Text isTruncated>{info.getValue() || 'N/A'}</Text>
    ),
  }),
  columnHelper.accessor('sessionId', {
    header: 'Session ID',
    enableSorting: true,
    cell: (info) => (
      <Text isTruncated>{info.getValue() || 'N/A'}</Text>
    ),
  }),
  columnHelper.accessor('tags', {
    header: 'Tags',
    enableSorting: false,
    cell: (info) => <TagsCell tags={info.getValue() || []} />,
  }),
  columnHelper.accessor(
    (row) => {
      const spans = row.spans || []
      return spans.reduce((sum, span) => sum + (span.parsedContent?.cost || 0), 0)
    },
    {
      id: 'cost',
      header: 'Cost ($)',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue().toFixed(4)}</Text>,
    }
  ),
  columnHelper.accessor(
    (row) => {
      const spans = row.spans || []
      return spans.reduce((sum, span) => sum + (span.parsedContent?.inputTokens || 0), 0)
    },
    {
      id: 'inputTokens',
      header: 'Input Tokens',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue().toLocaleString()}</Text>,
    }
  ),
  columnHelper.accessor(
    (row) => {
      const spans = row.spans || []
      return spans.reduce((sum, span) => sum + (span.parsedContent?.outputTokens || 0), 0)
    },
    {
      id: 'outputTokens',
      header: 'Output Tokens',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue().toLocaleString()}</Text>,
    }
  ),
  columnHelper.accessor(
    (row) => {
      const spans = row.spans || []
      return spans.reduce((sum, span) => {
        const inputTokens = span.parsedContent?.inputTokens || 0
        const outputTokens = span.parsedContent?.outputTokens || 0
        return sum + inputTokens + outputTokens
      }, 0)
    },
    {
      id: 'totalTokens',
      header: 'Total Tokens',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue().toLocaleString()}</Text>,
    }
  ),
  columnHelper.accessor(
    (row) => row.spans?.length || 0,
    {
      id: 'spanCount',
      header: 'Span Count',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue()}</Text>,
    }
  ),
  columnHelper.display({
    id: 'firstSpanInput',
    header: 'First Span Input',
    cell: ({ row }) => {
      const spans = row.original.spans || []
      if (spans.length === 0) return <Text>N/A</Text>
      
      const sortedSpans = [...spans].sort((a, b) => a.startedAt - b.startedAt)
      const firstSpan = sortedSpans[0]
      const input = firstSpan.content.input
      
      console.log('~~ firstSpan', firstSpan)
      return (
        <CodeCell 
          content={input ? (typeof input === 'string' ? input : JSON.stringify(input)) : 'N/A'}
          isSelected={selectedTrace?.id === row.original.id && isDrawerOpen}
        />
      )
    },
  }),
  columnHelper.display({
    id: 'lastSpanOutput',
    header: 'Last Span Output',
    cell: ({ row }) => {
      const spans = row.original.spans || []
      if (spans.length === 0) return <Text>N/A</Text>
      
      const sortedSpans = [...spans].sort((a, b) => a.startedAt - b.startedAt)
      const lastSpan = sortedSpans[sortedSpans.length - 1]
      const output = lastSpan.content.output
      
      console.log('~~ lastSpan', lastSpan)
      return (
        <CodeCell 
          content={output ? (typeof output === 'string' ? output : JSON.stringify(output)) : 'N/A'}
          isSelected={selectedTrace?.id === row.original.id && isDrawerOpen}
        />
      )
    },
  }),
  columnHelper.accessor(
    (row) => {
      const spans = row.spans || []
      return spans.filter(span => span.status === 'failure').length
    },
    {
      id: 'nonSuccessSpansCount',
      header: 'Failed Spans',
      enableSorting: true,
      cell: ({ getValue }) => <Text>{getValue()}</Text>,
    }
  ),
]

export default function TracesTable() {
  const traces = useTracesStore((state) => state.traces)
  const [selectedTrace, setSelectedTrace] = useState<LogTraceType | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [columnOrder, setColumnOrder] = useState<string[]>([])
  const [draggedColumn, setDraggedColumn] = useState<string | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const sideDrawerRef = useRef<HTMLDivElement>(null)
  const themeToggleRef = useRef<HTMLButtonElement>(null)
  
  const table = useReactTable({
    data: traces,
    columns: getColumns(selectedTrace, isDrawerOpen),
    state: {
      ...(columnOrder.length > 0 && { columnOrder }),
    },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getRowCanExpand: (row) => Boolean(row.original.spans && row.original.spans.length > 0),
  })

  const handleRowClick = (trace: LogTraceType) => {
    setSelectedTrace(trace)
    setIsDrawerOpen(true)
  }

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false)
    setSelectedTrace(null)
  }


  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent, columnId: string) => {
    // Initialize column order from current table state if not already set
    if (columnOrder.length === 0) {
      const currentOrder = table.getAllLeafColumns().map(col => col.id)
      setColumnOrder(currentOrder)
    }
    
    setDraggedColumn(columnId)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/html', columnId)
    
    // Add a subtle visual effect to the dragged element
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '0.5'
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    
    // Add visual feedback for valid drop target
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = 'var(--color-primary-container)'
    }
  }

  const handleDragLeave = (e: React.DragEvent) => {
    // Remove visual feedback when leaving drop target
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = ''
    }
  }

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault()
    
    // Remove visual feedback
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.backgroundColor = ''
    }
    
    if (!draggedColumn || draggedColumn === targetColumnId) {
      setDraggedColumn(null)
      return
    }

    const newColumnOrder = [...columnOrder]
    const draggedIndex = newColumnOrder.indexOf(draggedColumn)
    const targetIndex = newColumnOrder.indexOf(targetColumnId)
    
    // Remove dragged column and insert at target position
    newColumnOrder.splice(draggedIndex, 1)
    newColumnOrder.splice(targetIndex, 0, draggedColumn)
    
    setColumnOrder(newColumnOrder)
    setDraggedColumn(null)
  }

  const handleDragEnd = (e: React.DragEvent) => {
    // Reset visual effects
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = ''
    }
    setDraggedColumn(null)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const newIsScrolled = scrollLeft > 0
        console.log('Scroll detected:', scrollLeft, 'isScrolled:', newIsScrolled)
        setIsScrolled(newIsScrolled)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Click outside to close drawer
  useClickOutside(
    [tableContainerRef, sideDrawerRef],
    handleCloseDrawer,
    isDrawerOpen,
    [themeToggleRef]
  )

  return (
    <div className="flex h-screen bg-surface-lowest">
      {/* Main Content Area */}
      <div 
        className="transition-all duration-300"
        style={{ 
          width: isDrawerOpen ? `calc(100% - ${SIDE_DRAWER_WIDTH}px)` : '100%' 
        }}
      >
        <div className="p-4">
          <div className="max-w-full">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-md font-medium text-on-surface-base">Traces</h1>
              <ThemeToggle ref={themeToggleRef} />
            </div>
            
            <div className="bg-surface-highest rounded-lg shadow-sm border border-outline overflow-hidden" ref={tableContainerRef}>
              <div className="overflow-x-auto" ref={scrollContainerRef}>
                <table className="min-w-full" style={{ tableLayout: 'fixed' }}>
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id} className="border-b border-outline">
                        {headerGroup.headers.map((header, index) => (
                          <th
                            key={header.id}
                            draggable={index > 1} // Only allow dragging non-sticky columns
                            onDragStart={index > 1 ? (e) => handleDragStart(e, header.id) : undefined}
                            onDragOver={index > 1 ? handleDragOver : undefined}
                            onDragLeave={index > 1 ? handleDragLeave : undefined}
                            onDrop={index > 1 ? (e) => handleDrop(e, header.id) : undefined}
                            onDragEnd={index > 1 ? handleDragEnd : undefined}
                            className={`p-2 text-left text-xs font-medium text-on-surface-highest-subtle uppercase tracking-wider group ${
                              index <= 1 
                                ? `sticky left-0 bg-surface-low z-20 ${index === 1 ? 'border-r border-outline' : ''}` 
                                : 'bg-surface-low'
                            } ${
                              header.column.getCanSort() ? 'cursor-pointer select-none hover:bg-surface-high transition-colors' : ''
                            } ${
                              index > 1 && draggedColumn === header.id ? 'opacity-50' : ''
                            } ${
                              index > 1 ? 'cursor-move' : ''
                            }`}
                            style={{
                              ...(index === 0 ? { left: '0px', width: '48px' } : {}),
                              ...(index === 1 ? { left: '48px' } : {}),
                              ...(index > 1 && header.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                              ...(header.column.id === 'startedAt' || header.column.id === 'endedAt' ? { width: '180px', minWidth: '180px', maxWidth: '180px' } : {}),
                              ...(header.column.id === 'tags' ? { width: '150px', minWidth: '150px', maxWidth: '150px' } : {}),
                              ...(index === 1 && isScrolled ? { 
                                boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)' 
                              } : {})
                            }}
                            onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                          >
                            <div className="flex items-center gap-2">
                              {index > 1 && (
                                <GripVertical className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                              )}
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                    header.column.columnDef.header,
                                    header.getContext()
                                  )}
                              {header.column.getCanSort() && (
                                <div className="flex flex-col">
                                  {header.column.getIsSorted() === 'asc' ? (
                                    <ArrowUp className="w-3 h-3" />
                                  ) : header.column.getIsSorted() === 'desc' ? (
                                    <ArrowDown className="w-3 h-3" />
                                  ) : (
                                    <ArrowUpDown className="w-3 h-3 opacity-50" />
                                  )}
                                </div>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody className="divide-y divide-outline">
                    {table.getRowModel().rows.map((row) => {
                      return (
                        <>
                          <tr 
                            key={row.id} 
                            className={`group transition-colors cursor-pointer bg-surface-high ${
                              selectedTrace?.id === row.original.id && isDrawerOpen
                                ? 'bg-primary-container-light hover:bg-primary-container-light border-l-2 border-l-primary'
                                : 'hover:bg-primary-container-subtle border-b border-b-outline'
                            }`}
                            onClick={() => handleRowClick(row.original)}
                          >
                            {row.getVisibleCells().map((cell, index) => (
                              <td
                                key={cell.id}
                                className={`py-2 text-sm ${
                                  index <= 1 
                                    ? `sticky left-0 z-20 ${index === 1 ? 'border-r border-outline' : ''} px-4 ${
                                        selectedTrace?.id === row.original.id && isDrawerOpen
                                          ? 'bg-primary-container-light'
                                          : 'bg-surface-high group-hover:bg-primary-container-subtle'
                                      }` 
                                    : `px-4 ${
                                        selectedTrace?.id === row.original.id && isDrawerOpen
                                          ? 'bg-primary-container-light'
                                          : ''
                                      }`
                                }`}
                                style={{
                                  ...(index === 0 ? { left: '0px', width: '48px' } : {}),
                                  ...(index === 1 ? { left: '48px', minWidth: '200px' } : {}),
                                  ...(index > 1 && cell.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                                  ...(cell.column.id === 'startedAt' || cell.column.id === 'endedAt' ? { width: '180px', minWidth: '180px', maxWidth: '180px' } : {}),
                                  ...(cell.column.id === 'tags' ? { width: '150px', minWidth: '150px', maxWidth: '150px' } : {}),
                                  ...(index === 1 && isScrolled ? { 
                                    boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)' 
                                  } : {})
                                }}
                              >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </td>
                            ))}
                          </tr>
                          {row.getIsExpanded() && (
                            <tr key={`${row.id}-expanded`} className="bg-surface-high">
                              <td colSpan={table.getAllColumns().length} className="px-6 py-4">
                                <SpanFlatList spans={row.original.spans || []} />
                              </td>
                            </tr>
                          )}
                        </>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Drawer */}
      <div 
        className="transition-all duration-300 overflow-hidden"
        style={{ 
          width: isDrawerOpen ? `${SIDE_DRAWER_WIDTH}px` : '0px' 
        }}
        ref={sideDrawerRef}
      >
        <SideDrawer
          isOpen={isDrawerOpen}
          onClose={handleCloseDrawer}
          trace={selectedTrace}
        />
      </div>
    </div>
  )
}