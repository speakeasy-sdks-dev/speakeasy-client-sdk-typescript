# SuggestOperationIDsRequest

## Example Usage

```typescript
import { SuggestOperationIDsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

// No examples available for this model
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `xSessionId`                                                                                                  | *string*                                                                                                      | :heavy_check_mark:                                                                                            | N/A                                                                                                           |
| `limit`                                                                                                       | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Max number of suggestions to request                                                                          |
| `requestBody`                                                                                                 | [operations.SuggestOperationIDsRequestBody](../../../sdk/models/operations/suggestoperationidsrequestbody.md) | :heavy_check_mark:                                                                                            | The schema file to upload provided as a multipart/form-data file segment.                                     |