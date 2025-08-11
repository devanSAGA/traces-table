import React from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { type LogTraceType } from '../../../store/tracesStore'
import { Badge } from '../../ui/Badge'
import { Text } from '../../ui/Text'
import { CodeCell } from './CodeCell'
import { TagsCell } from './TagsCell'

const columnHelper = createColumnHelper<LogTraceType>()

export const getStatusType = (status: string) => {
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

export const getColumns = (selectedTrace: LogTraceType | null, isDrawerOpen: boolean) => [
  columnHelper.display({
    id: 'expander',
    header: '',
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <button
          onClick={(e) => {
            e.stopPropagation()
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