# SuggestOperationIDsRequestBody

The schema file to upload provided as a multipart/form-data file segment.

## Example Usage

```typescript
import { SuggestOperationIDsRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: SuggestOperationIDsRequestBody = {
    schema: await openAsBlob("./sample-file"),
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `schema`                                                                                                                                                                                      | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.Schema](../../../sdk/models/operations/schema.md) | :heavy_check_mark:                                                                                                                                                                            | N/A                                                                                                                                                                                           |
| `opts`                                                                                                                                                                                        | [shared.SuggestOperationIDsOpts](../../../sdk/models/shared/suggestoperationidsopts.md)                                                                                                       | :heavy_minus_sign:                                                                                                                                                                            | N/A                                                                                                                                                                                           |