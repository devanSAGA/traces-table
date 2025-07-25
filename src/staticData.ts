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
  },
  {
    "id": "18b1e427-57f0-48c2-8ad3-f843acd845df",
    "startedAt": 1752596237986,
    "endedAt": 1752596239916,
    "latency": 1930,
    "name": "Trace-18b1e427",
    "status": "unknown",
    "projectId": "bcadd4ec-1e04-4c7b-b4e0-e3fa864ec8da",
    "referenceId": null,
    "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
    "attributes": {
      "attr0": false,
      "attr1": false,
      "attr2": true
    },
    "tags": null,
    "spans": [
      {
        "id": "041b36aa-7b95-41df-bb49-01e11ff45708",
        "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "referenceId": "3f9ee814-6efb-4c01-8866-78195a6fb9fb",
        "parentReferenceId": null,
        "startedAt": 1752596238754,
        "endedAt": 1752596239136,
        "latency": 382,
        "name": "Span-041b36aa",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 471\"}",
          "output": "{\"resp\": \"ok 415\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": [
          "system",
          "user-triggered"
        ]
      },
      {
        "id": "34bc6952-5c34-4ce1-a3dc-a005d911538b",
        "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "referenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
        "parentReferenceId": null,
        "startedAt": 1752596239601,
        "endedAt": 1752596239668,
        "latency": 67,
        "name": "Span-34bc6952",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 461\"}",
          "output": "{\"resp\": \"ok 93\"}"
        },
        "parsedContent": {
          "inputTokens": 1108,
          "outputTokens": 1456,
          "cost": 0.02561
        },
        "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
        "attributes": null,
        "tags": [
          "system",
          "batch"
        ]
      },
      {
        "id": "459c45f4-5854-401b-9794-15230d25b794",
        "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "referenceId": "08e10c09-ae11-4f3a-8c94-bf073642213a",
        "parentReferenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
        "startedAt": 1752596238258,
        "endedAt": 1752596238503,
        "latency": 245,
        "name": "Span-459c45f4",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 668\"}",
          "output": "{\"resp\": \"ok 931\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "1f7811cc-c738-4b1b-b83c-c417f40083a8",
        "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "referenceId": "b2dede31-fb62-4fd3-8900-1537365dcc2e",
        "parentReferenceId": "3f9ee814-6efb-4c01-8866-78195a6fb9fb",
        "startedAt": 1752596239740,
        "endedAt": 1752596239891,
        "latency": 151,
        "name": "Span-1f7811cc",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 893\"}",
          "output": "{\"resp\": \"ok 303\"}",
          "metadata": {
            "step": 3
          }
        },
        "parsedContent": null,
        "sessionId": "7e550a13-0172-4e53-96f5-28340fc323b8",
        "attributes": null,
        "tags": null
      },
      {
        "id": "b5703122-7cd6-410a-8890-490ebc89e1f4",
        "logTraceId": "18b1e427-57f0-48c2-8ad3-f843acd845df",
        "referenceId": "9017b496-e9b9-444c-a216-8508128787a5",
        "parentReferenceId": "850417fc-4f3c-4195-9e4b-2174792b4ed9",
        "startedAt": 1752596238884,
        "endedAt": 1752596239911,
        "latency": 1027,
        "name": "Span-b5703122",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 716\"}",
          "output": "{\"resp\": \"ok 377\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      }
    ]
  },
  {
    "id": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
    "startedAt": 1750311743521,
    "endedAt": 1750311744751,
    "latency": 1230,
    "name": "Trace-7828f4ef",
    "status": "success",
    "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
    "referenceId": null,
    "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
    "attributes": null,
    "tags": null,
    "spans": [
      {
        "id": "b98d298b-41f9-4f4e-8fc5-bf7dafb62f86",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": "b99dbdd3-cbe3-476d-8b4e-42d79f628591",
        "parentReferenceId": null,
        "startedAt": 1750311743539,
        "endedAt": 1750311744250,
        "latency": 711,
        "name": "Span-b98d298b",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 300\"}",
          "output": "{\"resp\": \"ok 411\"}"
        },
        "parsedContent": {
          "inputTokens": 980,
          "outputTokens": 161,
          "model": "gpt-4"
        },
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": {},
        "tags": null
      },
      {
        "id": "0cd8a8f6-3dcf-4785-a0d8-fadaa089c51f",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750311744613,
        "endedAt": 1750311744692,
        "latency": 79,
        "name": "Span-0cd8a8f6",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 762\"}",
          "output": "{\"resp\": \"ok 726\"}"
        },
        "parsedContent": {
          "outputTokens": 456,
          "cost": 0.0313
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": 28,
          "spanAttr1": true
        },
        "tags": null
      },
      {
        "id": "91886403-7f33-4c2f-bda4-27959db973f9",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750311744080,
        "endedAt": 1750311744494,
        "latency": 414,
        "name": "Span-91886403",
        "status": "success",
        "content": {
          "metadata": {
            "step": 3
          }
        },
        "parsedContent": null,
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": null
      },
      {
        "id": "3f1d82c0-e5df-4275-b5de-521a22917ffd",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": "c9b554e2-861f-4aae-9d76-28c5482131d9",
        "parentReferenceId": "b99dbdd3-cbe3-476d-8b4e-42d79f628591",
        "startedAt": 1750311744357,
        "endedAt": 1750311744685,
        "latency": 328,
        "name": "Span-3f1d82c0",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 779\"}",
          "output": "{\"resp\": \"ok 77\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {},
        "tags": null
      },
      {
        "id": "43e8348f-67bf-4900-a0fa-915b18785a57",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": "9ae0479a-84d9-422c-af61-63d291470923",
        "parentReferenceId": null,
        "startedAt": 1750311743859,
        "endedAt": 1750311744465,
        "latency": 606,
        "name": "Span-43e8348f",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 862\"}",
          "output": "{\"resp\": \"ok 269\"}"
        },
        "parsedContent": null,
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": [
          "api"
        ]
      },
      {
        "id": "ce08d478-bced-44f4-8619-9532a265ba39",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": "04d0720d-0a01-4afb-a7ac-c4c2de3d1d11",
        "parentReferenceId": "c9b554e2-861f-4aae-9d76-28c5482131d9",
        "startedAt": 1750311744246,
        "endedAt": 1750311744480,
        "latency": 234,
        "name": "Span-ce08d478",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 181\"}",
          "output": "{\"resp\": \"ok 179\"}"
        },
        "parsedContent": {
          "inputTokens": 1232,
          "outputTokens": 1092,
          "cost": 0.01589
        },
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": null
      },
      {
        "id": "fa7e793b-26e3-4d65-998a-282e0294ffc5",
        "logTraceId": "7828f4ef-aa0a-4a3f-a5c2-1cc90a70e737",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750311743686,
        "endedAt": 1750311744446,
        "latency": 760,
        "name": "Span-fa7e793b",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 124\"}"
        },
        "parsedContent": {
          "inputTokens": 11
        },
        "sessionId": "ab3cf4d5-5632-485b-bab9-12663d4c2bcb",
        "attributes": null,
        "tags": null
      }
    ]
  },
  {
    "id": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
    "startedAt": 1751339625446,
    "endedAt": 1751339629507,
    "latency": 4061,
    "name": "Trace-6774e427",
    "status": "failure",
    "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
    "referenceId": null,
    "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
    "attributes": {
      "attr0": "v0",
      "attr1": true,
      "attr2": false
    },
    "tags": null,
    "spans": [
      {
        "id": "64d25218-6b12-4328-ac55-8a7eb5da5634",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751339628817,
        "endedAt": 1751339629306,
        "latency": 489,
        "name": "Span-64d25218",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 265\"}"
        },
        "parsedContent": {
          "outputTokens": 1803,
          "cost": 0.02502
        },
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": null,
        "tags": null
      },
      {
        "id": "a9f08ffd-b9cc-46aa-8a98-2143e38d0677",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
        "parentReferenceId": null,
        "startedAt": 1751339628688,
        "endedAt": 1751339629215,
        "latency": 527,
        "name": "Span-a9f08ffd",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 90\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "807e4869-ac1b-4dc5-9140-367dd868e08a",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "c316cfc2-898c-4f3a-b446-5e3c2f288946",
        "parentReferenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
        "startedAt": 1751339626128,
        "endedAt": 1751339626644,
        "latency": 516,
        "name": "Span-807e4869",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 583\"}",
          "output": "{\"resp\": \"ok 621\"}"
        },
        "parsedContent": {
          "inputTokens": 1538,
          "outputTokens": 295,
          "cost": 0.03168
        },
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": {
          "spanAttr0": true
        },
        "tags": null
      },
      {
        "id": "7636a916-5a0a-4595-83f5-366e746146b7",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "642aec9d-919f-4850-b5de-9d7eb4566254",
        "parentReferenceId": null,
        "startedAt": 1751339626281,
        "endedAt": 1751339627323,
        "latency": 1042,
        "name": "Span-7636a916",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 437\"}",
          "output": "{\"resp\": \"ok 100\"}",
          "metadata": {
            "step": 1
          }
        },
        "parsedContent": null,
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": null,
        "tags": null
      },
      {
        "id": "2b78815e-a92a-4f0f-99bc-3d58920ee3f2",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "a78f1f70-a173-409f-84aa-1eefc915d9a4",
        "parentReferenceId": null,
        "startedAt": 1751339626098,
        "endedAt": 1751339626286,
        "latency": 188,
        "name": "Span-2b78815e",
        "status": "pending",
        "content": {},
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": [
          "api"
        ]
      },
      {
        "id": "f35c6787-4acc-4d63-ba69-82b3cef6dbf6",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "fefa22c3-ea2f-4349-893c-34bb8c33efd8",
        "parentReferenceId": null,
        "startedAt": 1751339627375,
        "endedAt": 1751339628591,
        "latency": 1216,
        "name": "Span-f35c6787",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 963\"}"
        },
        "parsedContent": null,
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": null,
        "tags": [
          "batch"
        ]
      },
      {
        "id": "643e2fd9-8195-4b6f-aedf-c50a9e30ed9d",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "000144f0-7b50-4442-a264-fe3eb0f1e6af",
        "parentReferenceId": "fefa22c3-ea2f-4349-893c-34bb8c33efd8",
        "startedAt": 1751339626147,
        "endedAt": 1751339628498,
        "latency": 2351,
        "name": "Span-643e2fd9",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 233\"}",
          "output": "{\"resp\": \"ok 97\"}"
        },
        "parsedContent": {
          "outputTokens": 1826,
          "model": "claude-2"
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": 31,
          "spanAttr1": 6
        },
        "tags": [
          "batch",
          "system"
        ]
      },
      {
        "id": "0006fe40-ac46-4004-b2c1-308ce1c7f6da",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "6398bc9b-acf6-4165-ad3c-0b60a2d5a5bc",
        "parentReferenceId": null,
        "startedAt": 1751339626776,
        "endedAt": 1751339626889,
        "latency": 113,
        "name": "Span-0006fe40",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 636\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": false,
          "spanAttr1": 41
        },
        "tags": null
      },
      {
        "id": "5145907f-61cc-484d-afc2-aa85560496aa",
        "logTraceId": "6774e427-ffd0-48fe-9dca-4723200dcf6d",
        "referenceId": "0ed5c98e-674c-43d8-a77b-5c75109598ab",
        "parentReferenceId": "31590d9e-5594-489d-978d-1f7c15b36176",
        "startedAt": 1751339626140,
        "endedAt": 1751339626593,
        "latency": 453,
        "name": "Span-5145907f",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 823\"}",
          "metadata": {
            "step": 2
          }
        },
        "parsedContent": null,
        "sessionId": "aa82dc45-c073-45d5-b19c-b22eb795ffc6",
        "attributes": null,
        "tags": null
      }
    ]
  },
  {
    "id": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
    "startedAt": 1752474957432,
    "endedAt": 1752474958522,
    "latency": 1090,
    "name": "Trace-228c5a9b",
    "status": "failure",
    "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
    "referenceId": null,
    "sessionId": null,
    "attributes": {
      "attr0": 34,
      "attr1": "v4"
    },
    "tags": null,
    "spans": [
      {
        "id": "9744b45f-780f-49f1-a2f3-ec9ffa3b11fa",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752474957619,
        "endedAt": 1752474958009,
        "latency": 390,
        "name": "Span-9744b45f",
        "status": "pending",
        "content": {},
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": false
        },
        "tags": null
      },
      {
        "id": "6d4584ca-a257-4d8d-9b8b-582a4b09c6e5",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "7939f360-ea74-408b-b474-29db13e5553c",
        "parentReferenceId": null,
        "startedAt": 1752474957813,
        "endedAt": 1752474958248,
        "latency": 435,
        "name": "Span-6d4584ca",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 523\"}",
          "output": "{\"resp\": \"ok 356\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": []
      },
      {
        "id": "e73f9ac4-c85b-40ab-a110-d80e35311a93",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "8777a88f-91a1-4a7a-9380-f22d5cbbbf0f",
        "parentReferenceId": "7939f360-ea74-408b-b474-29db13e5553c",
        "startedAt": 1752474958505,
        "endedAt": 1752474958506,
        "latency": 1,
        "name": "Span-e73f9ac4",
        "status": "success",
        "content": {},
        "parsedContent": {
          "inputTokens": 25,
          "cost": 0.03826
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "ff2c6e14-aa25-4c8d-b15b-6034be3b812a",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "ba59f319-bc2d-4952-a930-f5b0eec021bc",
        "parentReferenceId": "8777a88f-91a1-4a7a-9380-f22d5cbbbf0f",
        "startedAt": 1752474957722,
        "endedAt": 1752474958241,
        "latency": 519,
        "name": "Span-ff2c6e14",
        "status": "success",
        "content": {
          "output": "{\"resp\": \"ok 951\"}",
          "metadata": {
            "step": 3
          }
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "748e0251-e50e-4f92-914f-ce99de5a301a",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752474958345,
        "endedAt": 1752474958520,
        "latency": 175,
        "name": "Span-748e0251",
        "status": "failure",
        "content": {
          "output": "{\"resp\": \"ok 707\"}"
        },
        "parsedContent": {
          "inputTokens": 1767,
          "outputTokens": 1845
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": false,
          "spanAttr1": 47
        },
        "tags": []
      },
      {
        "id": "701a38b1-2146-48fe-a023-ace16a1e7c4b",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "f25c2f89-9e7d-4994-bf89-0a9a6dbab2a2",
        "parentReferenceId": "ba59f319-bc2d-4952-a930-f5b0eec021bc",
        "startedAt": 1752474957498,
        "endedAt": 1752474958416,
        "latency": 918,
        "name": "Span-701a38b1",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 816\"}"
        },
        "parsedContent": {
          "inputTokens": 866,
          "outputTokens": 841,
          "cost": 0.00401
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": 13,
          "spanAttr1": 28
        },
        "tags": null
      },
      {
        "id": "084a5865-eb40-4e0a-8e9c-bfc4057487f6",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "c014c8b8-bf55-4ee0-a40a-49a67effd146",
        "parentReferenceId": "f25c2f89-9e7d-4994-bf89-0a9a6dbab2a2",
        "startedAt": 1752474957819,
        "endedAt": 1752474958468,
        "latency": 649,
        "name": "Span-084a5865",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 478\"}"
        },
        "parsedContent": {
          "inputTokens": 1241,
          "outputTokens": 1018,
          "cost": 0.01481
        },
        "sessionId": null,
        "attributes": {},
        "tags": [
          "api",
          "system"
        ]
      },
      {
        "id": "89ca760b-623c-4e79-a805-7498ebdb7b92",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752474957968,
        "endedAt": 1752474958336,
        "latency": 368,
        "name": "Span-89ca760b",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 958\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": [
          "system"
        ]
      },
      {
        "id": "ed02bee6-1301-45e9-b9f7-eaae47f40794",
        "logTraceId": "228c5a9b-2959-4de4-ac4d-423e075d3b1d",
        "referenceId": "b27fc271-43a4-4e23-9e78-95ad45350d74",
        "parentReferenceId": "c014c8b8-bf55-4ee0-a40a-49a67effd146",
        "startedAt": 1752474958145,
        "endedAt": 1752474958352,
        "latency": 207,
        "name": "Span-ed02bee6",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 993\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {},
        "tags": null
      }
    ]
  },
  {
    "id": "a4125512-ed3a-4d93-91cb-ec607362cce0",
    "startedAt": 1751411265697,
    "endedAt": 1751411267806,
    "latency": 2109,
    "name": "Trace-a4125512",
    "status": "success",
    "projectId": "973f56e4-1609-4609-ada3-f01bca344ba4",
    "referenceId": "b93df07f-374a-4762-85ea-f45c23623f68",
    "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
    "attributes": null,
    "tags": null,
    "spans": [
      {
        "id": "30c21284-d99f-4c13-84f0-00ba43f920d4",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751411265697,
        "endedAt": 1751411267552,
        "latency": 1855,
        "name": "Span-30c21284",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 225\"}",
          "output": "{\"resp\": \"ok 833\"}"
        },
        "parsedContent": {
          "inputTokens": 1708
        },
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": {
          "spanAttr0": false,
          "spanAttr1": true
        },
        "tags": null
      },
      {
        "id": "2759baef-1421-4fbd-a8ef-2b66f6c9fbbd",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
        "parentReferenceId": null,
        "startedAt": 1751411267774,
        "endedAt": 1751411267806,
        "latency": 32,
        "name": "Span-2759baef",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 635\"}",
          "output": "{\"resp\": \"ok 307\"}"
        },
        "parsedContent": {
          "outputTokens": 710,
          "cost": 0.03138
        },
        "sessionId": null,
        "attributes": null,
        "tags": []
      },
      {
        "id": "b0fc5400-b027-46f9-b928-54378bb90d0e",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "6b88c441-0ff2-4ba2-9367-8a97b8411ef1",
        "parentReferenceId": null,
        "startedAt": 1751411267774,
        "endedAt": 1751411267778,
        "latency": 4,
        "name": "Span-b0fc5400",
        "status": "pending",
        "content": {},
        "parsedContent": null,
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": null,
        "tags": null
      },
      {
        "id": "f1ffe4ef-c8e5-41bd-a7c6-4ab180a9b99d",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
        "parentReferenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
        "startedAt": 1751411266287,
        "endedAt": 1751411266485,
        "latency": 198,
        "name": "Span-f1ffe4ef",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 89\"}",
          "output": "{\"resp\": \"ok 215\"}"
        },
        "parsedContent": {
          "inputTokens": 79,
          "cost": 0.02001
        },
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": {
          "spanAttr0": 5
        },
        "tags": null
      },
      {
        "id": "6cf48ad4-2a04-4495-9f56-4cc83fe9f752",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "c5bc3b7d-2a27-4b2d-9e81-da2692eaf419",
        "parentReferenceId": "28ca9528-433c-4916-b37f-89dab7a8c118",
        "startedAt": 1751411267430,
        "endedAt": 1751411267775,
        "latency": 345,
        "name": "Span-6cf48ad4",
        "status": "failure",
        "content": {
          "output": "{\"resp\": \"ok 422\"}",
          "metadata": {
            "step": 5
          }
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "8ecd6b0b-676b-40ab-8ce7-ed4cfef5935a",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "8788aa58-a343-4478-8e37-41e7efdeb0ed",
        "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
        "startedAt": 1751411265813,
        "endedAt": 1751411266071,
        "latency": 258,
        "name": "Span-8ecd6b0b",
        "status": "pending",
        "content": {
          "output": "{\"resp\": \"ok 728\"}"
        },
        "parsedContent": {
          "inputTokens": 1371,
          "outputTokens": 315,
          "cost": 0.04297,
          "model": "claude-2"
        },
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": null,
        "tags": []
      },
      {
        "id": "958aa307-9753-4757-94bd-d275f49e8e0f",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "2fba76d2-7878-4021-9c64-c88bb00cbab7",
        "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
        "startedAt": 1751411267674,
        "endedAt": 1751411267751,
        "latency": 77,
        "name": "Span-958aa307",
        "status": "success",
        "content": {},
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": true,
          "spanAttr1": true
        },
        "tags": null
      },
      {
        "id": "ec9d5cb2-8cfd-431c-a208-408b7cd8f1c3",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751411267424,
        "endedAt": 1751411267475,
        "latency": 51,
        "name": "Span-ec9d5cb2",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 96\"}",
          "output": "{\"resp\": \"ok 834\"}",
          "metadata": {
            "step": 1
          }
        },
        "parsedContent": {
          "inputTokens": 58,
          "outputTokens": 333,
          "cost": 0.03827,
          "model": "gpt-4"
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": true
        },
        "tags": null
      },
      {
        "id": "1acff0ab-0375-4bf6-97e5-0f6c72de8e91",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "0324019a-384d-4093-8fcf-a464623bd2cd",
        "parentReferenceId": null,
        "startedAt": 1751411265911,
        "endedAt": 1751411267654,
        "latency": 1743,
        "name": "Span-1acff0ab",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 920\"}",
          "output": "{\"resp\": \"ok 804\"}"
        },
        "parsedContent": {
          "inputTokens": 1212,
          "outputTokens": 1818
        },
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": null,
        "tags": null
      },
      {
        "id": "18d295ce-db49-478f-8f91-8b65f7653b98",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751411267594,
        "endedAt": 1751411267708,
        "latency": 114,
        "name": "Span-18d295ce",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 342\"}",
          "output": "{\"resp\": \"ok 603\"}",
          "metadata": {
            "step": 1
          }
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": []
      },
      {
        "id": "7f2ed6e6-79a2-4363-9b4b-e9357874a97f",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "bf766869-74d5-4134-bef4-da14ede9176d",
        "parentReferenceId": null,
        "startedAt": 1751411266346,
        "endedAt": 1751411266961,
        "latency": 615,
        "name": "Span-7f2ed6e6",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 452\"}",
          "output": "{\"resp\": \"ok 313\"}"
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": []
      },
      {
        "id": "c9dbd580-b8df-4dbd-b5ce-7a3131244976",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751411266957,
        "endedAt": 1751411267005,
        "latency": 48,
        "name": "Span-c9dbd580",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 691\"}",
          "output": "{\"resp\": \"ok 829\"}"
        },
        "parsedContent": null,
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": null,
        "tags": null
      },
      {
        "id": "f6c86b21-b338-45c4-8875-4359d05e0697",
        "logTraceId": "a4125512-ed3a-4d93-91cb-ec607362cce0",
        "referenceId": "3a31fcaf-fc16-4bd6-b6e6-f42914e6c17c",
        "parentReferenceId": "f69386a8-6430-4bc3-88dd-0fb7eb739e63",
        "startedAt": 1751411266003,
        "endedAt": 1751411266333,
        "latency": 330,
        "name": "Span-f6c86b21",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 952\"}",
          "output": "{\"resp\": \"ok 461\"}"
        },
        "parsedContent": {
          "outputTokens": 316,
          "model": "llama-2"
        },
        "sessionId": "52a4496b-3567-4f0b-9a68-286e7a7b4c30",
        "attributes": {
          "spanAttr0": false
        },
        "tags": null
      }
    ]
  },
  {
    "id": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
    "startedAt": 1750488276727,
    "endedAt": 1750488278281,
    "latency": 1554,
    "name": "Trace-95dd67ce",
    "status": "pending",
    "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
    "referenceId": "f617c2ea-0b1b-4704-9abc-58bb3bacef85",
    "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
    "attributes": null,
    "tags": null,
    "spans": [
      {
        "id": "b33486c9-665e-4d6d-af85-63ab0b955cd7",
        "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750488277733,
        "endedAt": 1750488278145,
        "latency": 412,
        "name": "Span-b33486c9",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 556\"}",
          "output": "{\"resp\": \"ok 578\"}"
        },
        "parsedContent": {
          "inputTokens": 1394,
          "outputTokens": 1133,
          "cost": 0.01472
        },
        "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
        "attributes": {
          "spanAttr0": false
        },
        "tags": null
      },
      {
        "id": "a33929db-4b1b-445a-add1-8d1136768937",
        "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750488278095,
        "endedAt": 1750488278194,
        "latency": 99,
        "name": "Span-a33929db",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 661\"}",
          "output": "{\"resp\": \"ok 958\"}"
        },
        "parsedContent": {
          "outputTokens": 205,
          "cost": 0.02817,
          "model": "llama-2"
        },
        "sessionId": "bbf41e62-ca1d-47ed-8946-461816ad0a57",
        "attributes": null,
        "tags": null
      },
      {
        "id": "05158cc1-5872-49b9-9420-a43692024ee1",
        "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1750488277543,
        "endedAt": 1750488278091,
        "latency": 548,
        "name": "Span-05158cc1",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 587\"}",
          "output": "{\"resp\": \"ok 382\"}"
        },
        "parsedContent": {
          "inputTokens": 1503,
          "outputTokens": 1484
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "9a663d8f-96c0-4f77-b81d-5921d2f3ec63",
        "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "referenceId": "9205e125-e820-4b6f-a918-e804c118b976",
        "parentReferenceId": null,
        "startedAt": 1750488276923,
        "endedAt": 1750488277166,
        "latency": 243,
        "name": "Span-9a663d8f",
        "status": "success",
        "content": {
          "output": "{\"resp\": \"ok 603\"}",
          "metadata": {
            "step": 3
          }
        },
        "parsedContent": null,
        "sessionId": null,
        "attributes": {
          "spanAttr0": false,
          "spanAttr1": false
        },
        "tags": null
      },
      {
        "id": "be0b3048-e588-4f87-a2a9-4348aa79940c",
        "logTraceId": "95dd67ce-327e-4eb7-9433-8afa3dea5316",
        "referenceId": "ee0b0c8b-d026-45bc-83a7-0f0ceae1664a",
        "parentReferenceId": "9205e125-e820-4b6f-a918-e804c118b976",
        "startedAt": 1750488277465,
        "endedAt": 1750488277724,
        "latency": 259,
        "name": "Span-be0b3048",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 133\"}",
          "output": "{\"resp\": \"ok 677\"}"
        },
        "parsedContent": {
          "inputTokens": 711,
          "outputTokens": 1277,
          "cost": 0.02453,
          "model": "llama-2"
        },
        "sessionId": null,
        "attributes": {
          "spanAttr0": true
        },
        "tags": null
      }
    ]
  },
  {
    "id": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
    "startedAt": 1752136642079,
    "endedAt": 1752136642815,
    "latency": 736,
    "name": "Trace-5e71f0ec",
    "status": "failure",
    "projectId": "70273eed-b756-4ef5-b623-f6f625eb9ec9",
    "referenceId": null,
    "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
    "attributes": null,
    "tags": null,
    "spans": [
      {
        "id": "cc872fb8-ddf2-4333-b340-93080defe59d",
        "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752136642499,
        "endedAt": 1752136642756,
        "latency": 257,
        "name": "Span-cc872fb8",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 748\"}",
          "metadata": {
            "step": 5
          }
        },
        "parsedContent": {
          "outputTokens": 1262,
          "cost": 0.01636
        },
        "sessionId": null,
        "attributes": null,
        "tags": [
          "batch",
          "user-triggered"
        ]
      },
      {
        "id": "d6eea53e-35ef-460d-9edf-09981c0f6c55",
        "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "referenceId": "c9216573-ea13-479a-8f19-4a74b1616431",
        "parentReferenceId": null,
        "startedAt": 1752136642260,
        "endedAt": 1752136642451,
        "latency": 191,
        "name": "Span-d6eea53e",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 350\"}",
          "output": "{\"resp\": \"ok 3\"}"
        },
        "parsedContent": null,
        "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
        "attributes": null,
        "tags": null
      },
      {
        "id": "aded1a7c-7541-4540-a979-7f25baf379e2",
        "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "referenceId": "d7f127f2-9d9b-42f2-8eef-4ec3bc2b4376",
        "parentReferenceId": "c9216573-ea13-479a-8f19-4a74b1616431",
        "startedAt": 1752136642249,
        "endedAt": 1752136642508,
        "latency": 259,
        "name": "Span-aded1a7c",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 820\"}",
          "output": "{\"resp\": \"ok 75\"}"
        },
        "parsedContent": null,
        "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
        "attributes": {
          "spanAttr0": true
        },
        "tags": null
      },
      {
        "id": "ad391942-15f9-425b-bbc7-f9620983204a",
        "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "referenceId": "2420bddb-cf00-4b77-a67d-782929ce2b7a",
        "parentReferenceId": null,
        "startedAt": 1752136642345,
        "endedAt": 1752136642496,
        "latency": 151,
        "name": "Span-ad391942",
        "status": "pending",
        "content": {},
        "parsedContent": {
          "inputTokens": 1625,
          "outputTokens": 219
        },
        "sessionId": "07aa6fc8-762c-4b28-bff3-d8c973d4633c",
        "attributes": null,
        "tags": null
      },
      {
        "id": "b7cc185f-9d63-4bb8-97ba-f98b5a55053e",
        "logTraceId": "5e71f0ec-7b40-4ddb-9bee-09d39c0c3e71",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1752136642377,
        "endedAt": 1752136642703,
        "latency": 326,
        "name": "Span-b7cc185f",
        "status": "pending",
        "content": {
          "input": "{\"prompt\": \"text 557\"}",
          "output": "{\"resp\": \"ok 6\"}",
          "metadata": {
            "step": 5
          }
        },
        "parsedContent": {
          "outputTokens": 828,
          "cost": 0.01579
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      }
    ]
  },
  {
    "id": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
    "startedAt": 1751365025479,
    "endedAt": 1751365028730,
    "latency": 3251,
    "name": "Trace-38c40ca5",
    "status": "pending",
    "projectId": "baf9967a-c3b4-4e32-b23d-23d575471beb",
    "referenceId": null,
    "sessionId": "7be54e4f-e47e-4e04-a5e3-ce24a9fca5a6",
    "attributes": {
      "attr0": true,
      "attr1": true,
      "attr2": 45
    },
    "tags": null,
    "spans": [
      {
        "id": "4f7a2cb4-a4a3-4eb7-9359-db9eef3f15c2",
        "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751365028430,
        "endedAt": 1751365028477,
        "latency": 47,
        "name": "Span-4f7a2cb4",
        "status": "pending",
        "content": {},
        "parsedContent": null,
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "64e11715-5762-457b-bf74-bc7dc800f9d2",
        "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751365027747,
        "endedAt": 1751365028216,
        "latency": 469,
        "name": "Span-64e11715",
        "status": "success",
        "content": {
          "input": "{\"prompt\": \"text 253\"}",
          "output": "{\"resp\": \"ok 88\"}"
        },
        "parsedContent": {
          "inputTokens": 86,
          "outputTokens": 724,
          "cost": 0.02737
        },
        "sessionId": null,
        "attributes": null,
        "tags": null
      },
      {
        "id": "67e24935-0ac4-48e1-8874-06030b288a09",
        "logTraceId": "38c40ca5-53d5-4c40-b444-a06686dae1d4",
        "referenceId": null,
        "parentReferenceId": null,
        "startedAt": 1751365027093,
        "endedAt": 1751365027402,
        "latency": 309,
        "name": "Span-67e24935",
        "status": "failure",
        "content": {
          "input": "{\"prompt\": \"text 104\"}",
          "output": "{\"resp\": \"ok 55\"}",
          "metadata": {
            "step": 1
          }
        },
        "parsedContent": {
          "inputTokens": 1473,
          "outputTokens": 1632,
          "cost": 0.03653
        },
        "sessionId": "7be54e4f-e47e-4e04-a5e3-ce24a9fca5a6",
        "attributes": null,
        "tags": null
      }
    ]
  }
]