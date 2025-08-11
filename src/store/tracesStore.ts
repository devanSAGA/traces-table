import { create } from 'zustand'
import { staticTraceData } from '../staticData'

export interface LogTraceType {
  id: string; // unique UUID returned by API after accepting trace
  startedAt: number; // Unix timestamp
  endedAt: number; // Unix timestamp
  latency: number; // endedAt - startedAt
  name: string; // max length 4096
  status: "success" | "failure" | "pending" | "unknown";
  projectId: string; // UUID for project these traces belong to
  referenceId?: string | null; // caller set UUID to map trace with their logs, records
  sessionId?: string | null; // caller set UUID to group traces and spans by a session in their app
  attributes?: Record<string, string | number | boolean> | null;
  tags?: string[] | null;
  spans?: LogSpanType[];
}

export interface LogSpanType {
  id: string; // unique UUID returned by API after accepting span
  logTraceId: string; // Parent trace
  referenceId?: string | null; // caller set UUID to map span with their logs, records
  parentReferenceId?: string | null; // For nested spans, represents the 'referenceId' of this span's parent span
  startedAt: number; // Unix timestamp
  endedAt: number; // Unix timestamp
  latency: number; // endedAt - startedAt
  name: string; // endedAt - startedAt
  status: "success" | "failure" | "pending" | "unknown";

  content: {
    input?: string; // always JSON parseable
    output?: string; // always JSON parseable
    metadata?: Record<string, string | number | boolean>;
  };
  parsedContent?: {
    inputTokens?: number; // count of input tokens sent to the LLM
    outputTokens?: number; // count of output tokens sent by the LLM
    cost?: number; // cost incurred by the LLM generation (in USD)
    model?: string; // LLM name
  } | null;
  sessionId?: string | null; // caller set UUID to group traces and spans by a session in their app
  attributes?: Record<string, string | number | boolean> | null;
  tags?: string[] | null;
}

interface TracesState {
  traces: LogTraceType[]
}

export const useTracesStore = create<TracesState>(() => ({
  traces: staticTraceData
}))