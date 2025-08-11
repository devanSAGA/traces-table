import React, { useState, useRef, useEffect } from 'react'
import {
  getCoreRowModel,
  getExpandedRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTracesStore, type LogTraceType } from '../../../store/tracesStore'
import { SideDrawer, SIDE_DRAWER_WIDTH } from '../SideDrawer'
import { useClickOutside } from '../../../utils/useClickOutside'
import { ThemeToggle } from '../../ui/ThemeToggle'
import { useShortcut } from '../../../contexts/ShortcutContext'
import { getColumns } from './columnDefinitions'
import { useDragAndDrop } from './useDragAndDrop'
import { TableHeader } from './TableHeader'
import { TableRow } from './TableRow'

export default function TracesTable() {
  const traces = useTracesStore((state) => state.traces)
  const [selectedTrace, setSelectedTrace] = useState<LogTraceType | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [columnOrder, setColumnOrder] = useState<string[]>([])
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

  const {
    draggedColumn,
    handleDragStart: dragStart,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleDragEnd,
  } = useDragAndDrop(columnOrder, setColumnOrder)

  const handleDragStart = (e: React.DragEvent, columnId: string) => {
    if (columnOrder.length === 0) {
      const currentOrder = table.getAllLeafColumns().map(col => col.id)
      setColumnOrder(currentOrder)
    }
    dragStart(e, columnId)
  }

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

  // Keyboard shortcut to close drawer with Escape
  useShortcut('Escape', handleCloseDrawer, {
    id: 'close-sidedrawer',
    enabled: isDrawerOpen,
    description: 'Close side drawer'
  })

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
                <table className="min-w-full table-fixed">
                  <TableHeader
                    headerGroups={table.getHeaderGroups()}
                    isScrolled={isScrolled}
                    draggedColumn={draggedColumn}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onDragEnd={handleDragEnd}
                  />
                  <tbody className="divide-y divide-outline">
                    {table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        row={row}
                        table={table}
                        selectedTrace={selectedTrace}
                        isDrawerOpen={isDrawerOpen}
                        isScrolled={isScrolled}
                        onRowClick={handleRowClick}
                      />
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