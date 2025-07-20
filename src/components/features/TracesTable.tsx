import { useState, useRef, useEffect } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTracesStore, type LogTraceType } from '../../store/tracesStore'
import { Badge } from '../ui/Badge'
import { Text } from '../ui/Text'
import { SideDrawer, SIDE_DRAWER_WIDTH } from './SideDrawer'

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
  
  const table = useReactTable({
    data: traces,
    columns,
    getCoreRowModel: getCoreRowModel(),
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
            
            <div className="bg-surface-highest rounded-lg shadow-sm border border-outline overflow-hidden">
              <div className="overflow-x-auto" ref={scrollContainerRef}>
                <table className="min-w-full">
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id} className="border-b border-outline">
                        {headerGroup.headers.map((header, index) => (
                          <th
                            key={header.id}
                            className={`px-6 py-3 text-left text-xs font-medium text-on-surface-highest-subtle uppercase tracking-wider ${
                              index === 0 
                                ? `sticky left-0 bg-surface-highest z-20 border-r border-outline` 
                                : ''
                            }`}
                            style={{
                              ...(index === 0 ? { minWidth: '200px' } : {}),
                              ...(index > 0 && header.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                              ...(index === 0 && isScrolled ? { 
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
                    {table.getRowModel().rows.map((row) => (
                      <tr 
                        key={row.id} 
                        className="group hover:bg-surface-high transition-colors cursor-pointer"
                        onClick={() => handleRowClick(row.original)}
                      >
                        {row.getVisibleCells().map((cell, index) => (
                          <td
                            key={cell.id}
                            className={`px-6 py-4 text-sm text-on-surface-highest ${
                              index === 0 
                                ? `sticky left-0 bg-surface-highest group-hover:bg-surface-high z-20 border-r border-outline` 
                                : ''
                            }`}
                            style={{
                              ...(index === 0 ? { minWidth: '200px' } : {}),
                              ...(index > 0 && cell.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                              ...(index === 0 && isScrolled ? { 
                                boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)' 
                              } : {})
                            }}
                          >
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </td>
                        ))}
                      </tr>
                    ))}
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