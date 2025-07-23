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
  },
  {
    "id": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
    "startedAt": 1752408874763,
    "endedAt": 1752408875034,
    "latency": 271,
    "name": "Trace-98c271d8",
    "status": "failure",
    "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
    "referenceId": "b8aa7580-f653-4e48-b647-872c42f25da5",
    "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
    "attributes": null,
    "tags": [
      "user-triggered"
    ],
    "spans": [
      {
        "id": "8333106c-8e5b-427e-9b7c-191878c1ea23",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "0bd440e8-621c-4b56-a7e1-bb2f83283ee2",
        "parentReferenceId": null,
        "startedAt": 1752408874816,
        "endedAt": 1752408874893,
        "latency": 77,
        "name": "Span-8333106c",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 269\"}",
          "output": "{\"resp\": \"ok 673\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {},
        "tags": null
      },
      {
        "id": "189cb916-7d91-4fe8-af96-dd83cb8d359d",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "0f5aa94f-fd06-4757-aa0c-93189b694e82",
        "parentReferenceId": null,
        "startedAt": 1752408874816,
        "endedAt": 1752408874953,
        "latency": 137,
        "name": "Span-189cb916",
        "status": "success",
        "content": {
          "output": "{\"resp\": \"ok 365\"}"
        },
        "parsedContent": null,
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": {
          "spanAttr0": false
        },
        "tags": [
          "system"
        ]
      },
      {
        "id": "9f30ee05-bb03-4f80-b05b-f48e7dd777f3",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "390bfda3-86fe-4f52-a1a2-b4cdcb8b946a",
        "parentReferenceId": "0f5aa94f-fd06-4757-aa0c-93189b694e82",
        "startedAt": 1752408874841,
        "endedAt": 1752408874936,
        "latency": 95,
        "name": "Span-9f30ee05",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 172\"}",
          "output": "{\"resp\": \"ok 474\"}"
        },
        "parsedContent": {
          "inputTokens": 613,
          "outputTokens": 419,
          "cost": 0.02649,
          "model": "gpt-3.5-turbo"
        },
        "sessionId": null,
        "attributes": null,
        "tags": [
          "user-triggered",
          "api"
        ]
      },
      {
        "id": "e3adde3b-66c6-4344-a2f6-8fd5ea5df305",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "bec0b87c-c3f4-4073-8b7b-46fbfb51ccbc",
        "parentReferenceId": "390bfda3-86fe-4f52-a1a2-b4cdcb8b946a",
        "startedAt": 1752408874836,
        "endedAt": 1752408874990,
        "latency": 154,
        "name": "Span-e3adde3b",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 8\"}",
          "output": "{\"resp\": \"ok 554\"}"
        },
        "parsedContent": {
          "inputTokens": 1067,
          "outputTokens": 1550,
          "cost": 0.04259
        },
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": null
      },
      {
        "id": "cd37b408-3d89-433b-b6d0-cfde820f1ae8",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "6bf10a06-d3d3-4624-9f3d-c1d45f6fe3de",
        "parentReferenceId": "0bd440e8-621c-4b56-a7e1-bb2f83283ee2",
        "startedAt": 1752408874867,
        "endedAt": 1752408874981,
        "latency": 114,
        "name": "Span-cd37b408",
        "status": "failure",
        "content": {
          "output": "{\"resp\": \"ok 742\"}"
        },
        "parsedContent": {
          "inputTokens": 1050
        },
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": null
      },
      {
        "id": "9916776d-5041-4a67-adfd-ea240fc88588",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752408874851,
        "endedAt": 1752408874973,
        "latency": 122,
        "name": "Span-9916776d",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 342\"}"
        },
        "parsedContent": {
          "inputTokens": 1863,
          "cost": 0.03281
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": 48,
          "spanAttr1": true
        },
        "tags": null
      },
      {
        "id": "2676ef5c-57b1-4ae9-9a55-9089205685e3",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "3f492bc0-3ace-43f5-88d1-bcb77de969c1",
        "parentReferenceId": null,
        "startedAt": 1752408874919,
        "endedAt": 1752408874962,
        "latency": 43,
        "name": "Span-2676ef5c",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 626\"}",
          "output": "{\"resp\": \"ok 443\"}"
        },
        "parsedContent": {
          "inputTokens": 1669,
          "outputTokens": 1663,
          "cost": 0.02562
        },
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": {},
        "tags": null
      },
      {
        "id": "57b71c0f-8fc2-4490-ad48-2ef15ead7722",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752408874901,
        "endedAt": 1752408874954,
        "latency": 53,
        "name": "Span-57b71c0f",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 377\"}",
          "output": "{\"resp\": \"ok 378\"}"
        },
        "parsedContent": {
          "inputTokens": 1810,
          "outputTokens": 1388,
          "cost": 0.01894,
          "model": "claude-2"
        },
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": null
      },
      {
        "id": "a184608c-af31-425d-be3b-2f1ee87f459b",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "9db71fda-7f4b-47e8-a0a2-ed5632108da9",
        "parentReferenceId": null,
        "startedAt": 1752408875000,
        "endedAt": 1752408875019,
        "latency": 19,
        "name": "Span-a184608c",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 873\"}",
          "output": "{\"resp\": \"ok 980\"}"
        },
        "parsedContent": null,
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": null
      },
      {
        "id": "eea2b565-2ad9-416e-b997-6e1dd3c3ce07",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "7aa3b36b-2a33-4703-9e4b-4a75abb2b064",
        "parentReferenceId": "3f492bc0-3ace-43f5-88d1-bcb77de969c1",
        "startedAt": 1752408874839,
        "endedAt": 1752408875005,
        "latency": 166,
        "name": "Span-eea2b565",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 654\"}"
        },
        "parsedContent": {
          "outputTokens": 1261,
          "cost": 0.04198
        },
        "sessionId": "2e703c18-ecdd-42f4-a024-0231ef69a32b",
        "attributes": null,
        "tags": null
      },
      {
        "id": "b954df1d-8efe-4303-926a-17bd0ac1288d",
        "logTraceId": "98c271d8-a7b3-41fe-9207-7814052f2d0b",
        "referenceId": "73c1bfdc-e7f2-44af-8de3-ba4b4f7456ba",
        "parentReferenceId": "7aa3b36b-2a33-4703-9e4b-4a75abb2b064",
        "startedAt": 1752408874791,
        "endedAt": 1752408874833,
        "latency": 42,
        "name": "Span-b954df1d",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 462\"}",
          "output": "{\"resp\": \"ok 688\"}",
          "metadata": {
            "step": 4
          }
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      }
    ]
  },
  {
    "id": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
    "startedAt": 1752259575056,
    "endedAt": 1752259578996,
    "latency": 3940,
    "name": "Trace-75ec2f6f",
    "status": "unknown",
    "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
    "referenceId": "7995bfc5-4699-4f7a-898d-25db7fa6b769",
    "sessionId": "27acb1e2-07ec-483a-85bf-4bbba95c2a0c",
    "attributes": {
      "attr0": 33,
      "attr1": false,
      "attr2": true
    },
    "tags": null,
    "spans": [
      {
        "id": "b8be2e8e-0226-426b-bfe3-80a95ffa76c4",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752259577526,
        "endedAt": 1752259577784,
        "latency": 258,
        "name": "Span-b8be2e8e",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 787\"}",
          "output": "{\"resp\": \"ok 108\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "f28bb3c5-3847-46d1-b0d0-d5976c575f85",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": "5bd69ead-b1cd-4b61-8732-fc1026821d82",
        "parentReferenceId": null,
        "startedAt": 1752259577224,
        "endedAt": 1752259578579,
        "latency": 1355,
        "name": "Span-f28bb3c5",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 905\"}",
          "output": "{\"resp\": \"ok 549\"}"
        },
        "parsedContent": {
          "cost": 0.02577
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "3044f16e-06e8-458a-ab4b-ed8e00398bde",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": "cc99c0ae-c3d3-44f3-b5e6-35a3d2b37069",
        "parentReferenceId": "5bd69ead-b1cd-4b61-8732-fc1026821d82",
        "startedAt": 1752259578240,
        "endedAt": 1752259578379,
        "latency": 139,
        "name": "Span-3044f16e",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 331\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": true,
          "spanAttr1": false
        },
        "tags": null
      },
      {
        "id": "cdae4b33-133a-41a2-873f-87c0baf522e4",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": "8e75daed-b1e6-4601-bc68-23ed03173951",
        "parentReferenceId": "cc99c0ae-c3d3-44f3-b5e6-35a3d2b37069",
        "startedAt": 1752259578669,
        "endedAt": 1752259578784,
        "latency": 115,
        "name": "Span-cdae4b33",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 234\"}",
          "metadata": {
            "step": 4
          }
        },
        "parsedContent": {
          "inputTokens": 627,
          "outputTokens": 1640,
          "cost": 0.01282,
          "model": "gpt-3.5-turbo"
        },
        "sessionId": null,
        "attributes": null,
        "tags": [
          "api"
        ]
      },
      {
        "id": "97c13ea3-18df-415d-8f2d-fa1f0e29eb1b",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752259578547,
        "endedAt": 1752259578953,
        "latency": 406,
        "name": "Span-97c13ea3",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 375\"}"
        },
        "parsedContent": {
          "outputTokens": 989,
          "cost": 0.0371
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": 7,
          "spanAttr1": false
        },
        "tags": null
      },
      {
        "id": "f6afba44-c29c-438d-b5d0-8ae26be067a0",
        "logTraceId": "75ec2f6f-a1d9-4408-8f8e-aa3761b112d0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752259576620,
        "endedAt": 1752259578277,
        "latency": 1657,
        "name": "Span-f6afba44",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 414\"}"
        },
        "parsedContent": null,
        "sessionId": "27acb1e2-07ec-483a-85bf-4bbba95c2a0c",
        "attributes": {},
        "tags": null
      }
    ]
  }
]