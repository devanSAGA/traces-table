import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTracesStore, type LogTraceType } from '../store/tracesStore'

const columnHelper = createColumnHelper<LogTraceType>()

const columns = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => info.getValue().slice(0, 8) + '...',
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
        info.getValue() === 'success' ? 'bg-green-100 text-green-800' :
        info.getValue() === 'failure' ? 'bg-red-100 text-red-800' :
        info.getValue() === 'pending' ? 'bg-yellow-100 text-yellow-800' :
        'bg-gray-100 text-gray-800'
      }`}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.accessor('latency', {
    header: 'Latency (ms)',
    cell: (info) => info.getValue().toLocaleString(),
  }),
  columnHelper.accessor('startedAt', {
    header: 'Started At',
    cell: (info) => new Date(info.getValue()).toLocaleString(),
  }),
  columnHelper.accessor('projectId', {
    header: 'Project ID',
    cell: (info) => info.getValue().slice(0, 8) + '...',
  }),
  columnHelper.accessor('sessionId', {
    header: 'Session ID',
    cell: (info) => info.getValue()?.slice(0, 8) + '...' || 'N/A',
  }),
  columnHelper.accessor('tags', {
    header: 'Tags',
    cell: (info) => (
      <div className="flex flex-wrap gap-1">
        {info.getValue()?.slice(0, 2).map((tag, idx) => (
          <span key={idx} className="px-1 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
            {tag}
          </span>
        )) || 'N/A'}
        {(info.getValue()?.length || 0) > 2 && (
          <span className="text-xs text-gray-500">+{(info.getValue()?.length || 0) - 2}</span>
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
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Traces Table</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-2 text-left font-semibold"
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
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2"
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
  )
}