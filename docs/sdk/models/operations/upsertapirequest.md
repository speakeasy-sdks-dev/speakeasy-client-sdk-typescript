# UpsertApiRequest

## Example Usage

```typescript
import { UpsertApiRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: UpsertApiRequest = {
  apiID: "<value>",
  api: {
    apiId: "<value>",
    description: "Function-based local algorithm",
    versionId: "<value>",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `apiID`                                                   | *string*                                                  | :heavy_check_mark:                                        | The ID of the Api to upsert.                              |
| `api`                                                     | [shared.ApiInput](../../../sdk/models/shared/apiinput.md) | :heavy_check_mark:                                        | A JSON representation of the Api to upsert                |