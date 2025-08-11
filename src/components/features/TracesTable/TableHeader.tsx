import React from 'react'
import { flexRender, HeaderGroup } from '@tanstack/react-table'
import { ArrowUpDown, ArrowUp, ArrowDown, GripVertical } from 'lucide-react'
import { type LogTraceType } from '../../../store/tracesStore'

interface TableHeaderProps {
  headerGroups: HeaderGroup<LogTraceType>[]
  isScrolled: boolean
  draggedColumn: string | null
  onDragStart: (e: React.DragEvent, columnId: string) => void
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent, targetColumnId: string) => void
  onDragEnd: (e: React.DragEvent) => void
}

export const TableHeader = ({
  headerGroups,
  isScrolled,
  draggedColumn,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
}: TableHeaderProps) => {
  return (
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr key={headerGroup.id} className="border-b border-outline">
          {headerGroup.headers.map((header, index) => (
            <th
              key={header.id}
              draggable={index > 1}
              onDragStart={index > 1 ? (e) => onDragStart(e, header.id) : undefined}
              onDragOver={index > 1 ? onDragOver : undefined}
              onDragLeave={index > 1 ? onDragLeave : undefined}
              onDrop={index > 1 ? (e) => onDrop(e, header.id) : undefined}
              onDragEnd={index > 1 ? onDragEnd : undefined}
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
                ...(index === 0 ? { left: '0px', width: '40px' } : {}),
                ...(index === 1 ? { left: '40px' } : {}),
                ...(index > 1 && header.column.id !== 'status' ? { maxWidth: '150px' } : {}),
                ...(header.column.id === 'startedAt' || header.column.id === 'endedAt' ? { width: '180px', minWidth: '180px', maxWidth: '180px' } : {}),
                ...(header.column.id === 'tags' ? { width: '150px', minWidth: '150px', maxWidth: '150px' } : {}),
                ...(index === 1 && isScrolled ? { 
                  boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)' 
                } : {})
              }}
              onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
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
                {index > 1 && (
                  <GripVertical className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                )}
              </div>
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}