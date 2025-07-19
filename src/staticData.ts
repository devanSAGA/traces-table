import { LogTraceType } from './store/tracesStore'

export const staticTraceData: LogTraceType[] = [
  {
    "id": "af30b67e-44b8-47b0-99fc-929fe427bab6",
    "startedAt": 1752233021145,
    "endedAt": 1752233022620,
    "latency": 1475,
    "name": "Trace-af30b67e",
    "status": "failure",
    "projectId": "0e2d6085-e1ae-4370-87a3-0a03087a85d5",
    "referenceId": null,
    "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
    "attributes": {
      "attr0": false
    },
    "tags": [
      "system",
      "batch",
      "user-triggered"
    ],
    "spans": [
      {
        "id": "efda3b87-a007-4bdb-9e9c-c6f240ea3a2c",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233022411,
        "endedAt": 1752233022494,
        "latency": 83,
        "name": "Span-efda3b87",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 482\"}",
          "output": "{\"resp\": \"ok 35\"}",
          "metadata": {
            "step": 2
          }
        },
        "parsedContent": null,
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": null,
        "tags": null
      },
      {
        "id": "9f6515f5-70bb-4352-8b56-1aeb2cc7c8fe",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233021158,
        "endedAt": 1752233022176,
        "latency": 1018,
        "name": "Span-9f6515f5",
        "status": "success",
        "content": {
          "output": "{\"resp\": \"ok 542\"}"
        },
        "parsedContent": {
          "inputTokens": 1579,
          "model": "llama-2"
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "07285290-d9d0-4213-8fa8-6b76ff133d5e",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": "8b0e4ceb-e71c-4dd5-86f3-c00be44ba06e",
        "parentReferenceId": null,
        "startedAt": 1752233021394,
        "endedAt": 1752233022042,
        "latency": 648,
        "name": "Span-07285290",
        "status": "failure",
        "content": {
          "output": "{\"resp\": \"ok 357\"}"
        },
        "parsedContent": {
          "inputTokens": 1547,
          "outputTokens": 126
        },
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": null,
        "tags": null
      },
      {
        "id": "be7ccc26-e5a4-4d5b-85b9-23b36c454617",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": "df0f2394-07cb-4520-895b-ed27637d3908",
        "parentReferenceId": "8b0e4ceb-e71c-4dd5-86f3-c00be44ba06e",
        "startedAt": 1752233021422,
        "endedAt": 1752233022032,
        "latency": 610,
        "name": "Span-be7ccc26",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 344\"}"
        },
        "parsedContent": {
          "inputTokens": 1380
        },
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": {},
        "tags": null
      },
      {
        "id": "50e020a4-f03d-4261-a244-8ca4b3cf69a1",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": "adb89c62-6328-4335-9e54-56bd45224bc0",
        "parentReferenceId": "df0f2394-07cb-4520-895b-ed27637d3908",
        "startedAt": 1752233022200,
        "endedAt": 1752233022225,
        "latency": 25,
        "name": "Span-50e020a4",
        "status": "pending",
        "content": {},
        "parsedContent": {
          "inputTokens": 876,
          "cost": 0.04209
        },
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": null,
        "tags": null
      },
      {
        "id": "91e96dc2-765d-4811-aa2d-49c121c77c84",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": "00d52dcd-c684-42c6-a676-f10da0a909e6",
        "parentReferenceId": null,
        "startedAt": 1752233021569,
        "endedAt": 1752233022604,
        "latency": 1035,
        "name": "Span-91e96dc2",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 586\"}",
          "output": "{\"resp\": \"ok 809\"}"
        },
        "parsedContent": null,
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": null,
        "tags": null
      },
      {
        "id": "7b58f08a-0be6-462d-93c8-ee107c68fd28",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233021327,
        "endedAt": 1752233022202,
        "latency": 875,
        "name": "Span-7b58f08a",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 893\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": true
        },
        "tags": [
          "user-triggered"
        ]
      },
      {
        "id": "41d12383-7da8-49a2-9655-4b7359203e4e",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233022302,
        "endedAt": 1752233022619,
        "latency": 317,
        "name": "Span-41d12383",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 9\"}",
          "output": "{\"resp\": \"ok 774\"}"
        },
        "parsedContent": null,
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": {
          "spanAttr0": false,
          "spanAttr1": 22
        },
        "tags": null
      },
      {
        "id": "7ec5fd7d-763a-4ba3-a361-bc9ea83e0a24",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": "5baed57c-b2bc-4316-924b-9013d5a3a225",
        "parentReferenceId": "adb89c62-6328-4335-9e54-56bd45224bc0",
        "startedAt": 1752233021366,
        "endedAt": 1752233021414,
        "latency": 48,
        "name": "Span-7ec5fd7d",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 694\"}"
        },
        "parsedContent": {
          "inputTokens": 1989,
          "cost": 0.01858
        },
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": null,
        "tags": null
      },
      {
        "id": "3d641e53-e5ee-4f28-be56-c4eee7b26e94",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233021266,
        "endedAt": 1752233022383,
        "latency": 1117,
        "name": "Span-3d641e53",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 873\"}",
          "output": "{\"resp\": \"ok 671\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": 49
        },
        "tags": [
          "retry",
          "system"
        ]
      },
      {
        "id": "6dcd3933-96fe-41df-89d5-96328eb76c12",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233022004,
        "endedAt": 1752233022543,
        "latency": 539,
        "name": "Span-6dcd3933",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 39\"}",
          "output": "{\"resp\": \"ok 465\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": [
          "system"
        ]
      },
      {
        "id": "03441818-8394-4e2b-89cf-0208d1c470d0",
        "logTraceId": "af30b67e-44b8-47b0-99fc-929fe427bab6",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752233021475,
        "endedAt": 1752233022304,
        "latency": 829,
        "name": "Span-03441818",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 434\"}",
          "output": "{\"resp\": \"ok 584\"}",
          "metadata": {
            "step": 4
          }
        },
        "parsedContent": {
          "inputTokens": 597,
          "outputTokens": 1487,
          "cost": 0.04768,
          "model": "gpt-4"
        },
        "sessionId": "64baf557-4b04-47a8-955c-efe80ebe3448",
        "attributes": {
          "spanAttr0": 24
        },
        "tags": null
      }
    ]
  }
]