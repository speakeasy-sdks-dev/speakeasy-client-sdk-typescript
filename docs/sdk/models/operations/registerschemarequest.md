# RegisterSchemaRequest

## Example Usage

```typescript
import { RegisterSchemaRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: RegisterSchemaRequest = {
    apiID: "<value>",
    versionID: "<value>",
    requestBody: {
        file: await openAsBlob("./sample-file"),
    },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `apiID`                                                                                             | *string*                                                                                            | :heavy_check_mark:                                                                                  | The ID of the Api to get the schema for.                                                            |
| `versionID`                                                                                         | *string*                                                                                            | :heavy_check_mark:                                                                                  | The version ID of the Api to delete metadata for.                                                   |
| `requestBody`                                                                                       | [operations.RegisterSchemaRequestBody](../../../sdk/models/operations/registerschemarequestbody.md) | :heavy_check_mark:                                                                                  | The schema file to upload provided as a multipart/form-data file segment.                           |