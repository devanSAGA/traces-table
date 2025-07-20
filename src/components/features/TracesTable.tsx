import { useState, useRef, useEffect } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { useTracesStore, type LogTraceType } from '../../store/tracesStore'
import { Badge } from '../ui/Badge'
import { Text } from '../ui/Text'
import { SideDrawer, SIDE_DRAWER_WIDTH } from './SideDrawer'
import { SpanFlatList } from '../SpanFlatList'
import { useClickOutside } from '../../utils/useClickOutside'

const columnHelper = createColumnHelper<LogTraceType>()

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

const columns = [
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
          className="p-1 hover:bg-surface-low rounded transition-colors"
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="w-4 h-4 text-on-surface-highest-subtle" />
          ) : (
            <ChevronRight className="w-4 h-4 text-on-surface-highest-subtle" />
          )}
        </button>
      ) : null
    },
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('startedAt', {
    header: 'Started At',
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('endedAt', {
    header: 'Ended At',
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('latency', {
    header: 'Latency (ms)',
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <Badge type={getStatusType(info.getValue())}>
        {info.getValue()}
      </Badge>
    ),
  }),
  columnHelper.accessor('projectId', {
    header: 'Project ID',
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('referenceId', {
    header: 'Reference ID',
    cell: (info) => (
      <Text isTruncated>{info.getValue() || 'N/A'}</Text>
    ),
  }),
  columnHelper.accessor('sessionId', {
    header: 'Session ID',
    cell: (info) => (
      <Text isTruncated>{info.getValue() || 'N/A'}</Text>
    ),
  }),
  columnHelper.accessor('tags', {
    header: 'Tags',
    cell: (info) => (
      <div className="flex flex-wrap gap-1">
        {info.getValue()?.slice(0, 2).map((tag, idx) => (
          <Badge key={idx} type="unknown">
            {tag}
          </Badge>
        )) || 'N/A'}
        {(info.getValue()?.length || 0) > 2 && (
          <span className="text-xs text-on-surface-low-subtle">+{(info.getValue()?.length || 0) - 2}</span>
        )}
      </div>
    ),
  }),
]

export default function TracesTable() {
  const traces = useTracesStore((state) => state.traces)
  const [selectedTrace, setSelectedTrace] = useState<LogTraceType | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tableContainerRef = useRef<HTMLDivElement>(null)
  const sideDrawerRef = useRef<HTMLDivElement>(null)
  
  const table = useReactTable({
    data: traces,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
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
    isDrawerOpen
  )

  return (
    <div className="flex h-screen bg-surface-base">
      {/* Main Content Area */}
      <div 
        className="transition-all duration-300"
        style={{ 
          width: isDrawerOpen ? `calc(100% - ${SIDE_DRAWER_WIDTH}px)` : '100%' 
        }}
      >
        <div className="p-6">
          <div className="max-w-full">
            <h1 className="text-md font-medium mb-6 text-on-surface-base">Traces</h1>
            
            <div className="bg-surface-highest rounded-lg shadow-sm border border-outline overflow-hidden" ref={tableContainerRef}>
              <div className="overflow-x-auto" ref={scrollContainerRef}>
                <table className="min-w-full">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id} className="border-b border-outline">
                        {headerGroup.headers.map((header, index) => (
                          <th
                            key={header.id}
                            className={`px-6 py-3 text-left text-xs font-medium text-on-surface-highest-subtle uppercase tracking-wider ${
                              index <= 1 
                                ? `sticky left-0 bg-surface-highest z-20 ${index === 1 ? 'border-r border-outline' : ''}` 
                                : ''
                            }`}
                            style={{
                              ...(index === 0 ? { left: '0px', width: '48px' } : {}),
                              ...(index === 1 ? { left: '48px', minWidth: '200px' } : {}),
                              ...(index > 1 && header.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                              ...(index === 1 && isScrolled ? { 
                                boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)' 
                              } : {})
                            }}
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
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
                            className="group hover:bg-surface-high transition-colors cursor-pointer"
                            onClick={() => handleRowClick(row.original)}
                          >
                            {row.getVisibleCells().map((cell, index) => (
                              <td
                                key={cell.id}
                                className={`py-4 text-sm text-on-surface-highest ${
                                  index <= 1 
                                    ? `sticky left-0 bg-surface-highest group-hover:bg-surface-high z-20 ${index === 1 ? 'border-r border-outline' : ''} px-6` 
                                    : 'px-6'
                                }`}
                                style={{
                                  ...(index === 0 ? { left: '0px', width: '48px' } : {}),
                                  ...(index === 1 ? { left: '48px', minWidth: '200px' } : {}),
                                  ...(index > 1 && cell.column.id !== 'status' ? { maxWidth: '150px' } : {}),
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