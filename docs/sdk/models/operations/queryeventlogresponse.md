# QueryEventLogResponse


## Supported Types

### `shared.BoundedRequest[]`

```typescript
const value: shared.BoundedRequest[] = [
  {
    apiEndpointId: "<id>",
    apiId: "<id>",
    createdAt: new Date("2024-03-02T17:47:11.428Z"),
    customerId: "<id>",
    latency: 317632,
    method: "<value>",
    path: "/net",
    requestFinishTime: new Date("2022-01-22T13:58:08.292Z"),
    requestId: "<id>",
    requestStartTime: new Date("2022-02-14T19:10:20.351Z"),
    status: 257821,
    versionId: "<id>",
    workspaceId: "<id>",
  },
];
```

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = {
  message: "<value>",
  statusCode: 418,
};
```

