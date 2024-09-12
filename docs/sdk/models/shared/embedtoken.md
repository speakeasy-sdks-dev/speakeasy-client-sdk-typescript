# EmbedToken

A representation of an embed token granted for working with Speakeasy components.

## Example Usage

```typescript
import { EmbedToken } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: EmbedToken = {
  createdAt: new Date("2024-01-18T06:36:04.013Z"),
  createdBy: "<value>",
  description: "Monitored executive methodology",
  expiresAt: new Date("2023-04-24T23:41:18.538Z"),
  filters: "<value>",
  id: "<id>",
  workspaceId: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp.                                                                           |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the user that created this token.                                                   |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | A detailed description of the EmbedToken.                                                     |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The time this token expires.                                                                  |
| `filters`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The filters applied to this token.                                                            |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of this EmbedToken.                                                                    |
| `lastUsed`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The last time this token was used.                                                            |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The time this token was revoked.                                                              |
| `revokedBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user that revoked this token.                                                   |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The workspace ID this token belongs to.                                                       |