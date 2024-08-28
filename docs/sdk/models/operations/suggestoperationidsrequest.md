# SuggestOperationIDsRequest

## Example Usage

```typescript
import { SuggestOperationIDsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: SuggestOperationIDsRequest = {
    xSessionId: "<value>",
    requestBody: {
        schema: await openAsBlob("./sample-file"),
    },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `xSessionId`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `limit`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Max number of suggestions to request                                                                          |
| `requestBody`                                                                                                 | [operations.SuggestOperationIDsRequestBody](../../../sdk/models/operations/suggestoperationidsrequestbody.md) | :heavy_check_mark:                                                                                            | The schema file to upload provided as a multipart/form-data file segment.                                     |