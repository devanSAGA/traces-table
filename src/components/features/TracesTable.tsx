import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTracesStore, type LogTraceType } from '../../store/tracesStore'
import { Badge } from '../ui/Badge'
import { Text } from '../ui/Text'

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
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => (
      <Text isTruncated>{info.getValue()}</Text>
    ),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
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
  
  const table = useReactTable({
    data: traces,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-6 bg-surface-base min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-md font-medium mb-6 text-on-surface-base">Traces</h1>
        
        <div className="bg-surface-highest rounded-lg shadow-sm border border-outline overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="border-b border-outline">
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-3 text-left text-xs font-medium text-on-surface-highest-subtle uppercase tracking-wider"
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
                  <tr key={row.id} className="hover:bg-surface-high transition-colors">
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-6 py-4 whitespace-nowrap text-sm text-on-surface-highest"
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
  )
}