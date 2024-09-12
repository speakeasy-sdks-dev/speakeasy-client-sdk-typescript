# UpsertApiEndpointRequest

## Example Usage

```typescript
import { UpsertApiEndpointRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpsertApiEndpointRequest = {
  apiID: "<value>",
  versionID: "<value>",
  apiEndpointID: "<value>",
  apiEndpoint: {
    apiEndpointId: "<value>",
    description: "Synergized holistic instruction set",
    displayName: "Whitney.Bednar",
    method: "<value>",
    path: "/usr/lib",
    versionId: "<value>",
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `apiID`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the Api the ApiEndpoint belongs to.                             |
| `versionID`                                                               | *string*                                                                  | :heavy_check_mark:                                                        | The version ID of the Api the ApiEndpoint belongs to.                     |
| `apiEndpointID`                                                           | *string*                                                                  | :heavy_check_mark:                                                        | The ID of the ApiEndpoint to upsert.                                      |
| `apiEndpoint`                                                             | [shared.ApiEndpointInput](../../../sdk/models/shared/apiendpointinput.md) | :heavy_check_mark:                                                        | A JSON representation of the ApiEndpoint to upsert.                       |