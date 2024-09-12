# FindApiEndpointRequest

## Example Usage

```typescript
import { FindApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: FindApiEndpointRequest = {
  apiID: "<value>",
  versionID: "<value>",
  displayName: "Cordie99",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `apiID`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | The ID of the Api the ApiEndpoint belongs to.                                        |
| `versionID`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | The version ID of the Api the ApiEndpoint belongs to.                                |
| `displayName`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | The displayName of the ApiEndpoint to find (set by operationId from OpenAPI schema). |