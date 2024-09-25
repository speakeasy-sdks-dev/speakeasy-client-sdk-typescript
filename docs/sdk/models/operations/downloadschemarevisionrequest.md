# DownloadSchemaRevisionRequest

## Example Usage

```typescript
import { DownloadSchemaRevisionRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: DownloadSchemaRevisionRequest = {
  apiID: "<value>",
  versionID: "<value>",
  revisionID: "<value>",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `apiID`                                           | *string*                                          | :heavy_check_mark:                                | The ID of the Api to retrieve schemas for.        |
| `versionID`                                       | *string*                                          | :heavy_check_mark:                                | The version ID of the Api to delete metadata for. |
| `revisionID`                                      | *string*                                          | :heavy_check_mark:                                | The revision ID of the schema to retrieve.        |