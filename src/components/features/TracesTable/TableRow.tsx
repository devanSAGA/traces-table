import React from 'react'
import { flexRender, Row, Table } from '@tanstack/react-table'
import { type LogTraceType } from '../../../store/tracesStore'
import { SpanFlatList } from '../SpanFlatList'

interface TableRowProps {
  row: Row<LogTraceType>
  table: Table<LogTraceType>
  selectedTrace: LogTraceType | null
  isDrawerOpen: boolean
  isScrolled: boolean
  onRowClick: (trace: LogTraceType) => void
}

export const TableRow = ({
  row,
  table,
  selectedTrace,
  isDrawerOpen,
  isScrolled,
  onRowClick,
}: TableRowProps) => {
  return (
    <>
      <tr 
        key={row.id} 
        className={`group transition-colors cursor-pointer bg-surface-high ${
          selectedTrace?.id === row.original.id && isDrawerOpen
            ? 'bg-primary-container-light hover:bg-primary-container-light border-l-2 border-l-primary text-primary font-medium'
            : 'hover:bg-primary-container-subtle border-b border-b-outline'
        }`}
        onClick={() => onRowClick(row.original)}
      >
        {row.getVisibleCells().map((cell, index) => (
          <td
            key={cell.id}
            className={`p-2 text-sm ${
              index <= 1 
                ? `sticky left-0 z-20 ${index === 1 ? 'border-r border-outline' : ''} px-2 ${
                    selectedTrace?.id === row.original.id && isDrawerOpen
                      ? 'bg-primary-container-light'
                      : 'bg-surface-high group-hover:bg-primary-container-subtle'
                  }` 
                : `px-2 ${
                    selectedTrace?.id === row.original.id && isDrawerOpen
                      ? 'bg-primary-container-light'
                      : ''
                  }`
            }`}
            style={{
              ...(index === 0 ? { left: '0px', width: '40px' } : {}),
              ...(index === 1 ? { left: '40px', minWidth: '200px' } : {}),
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
}