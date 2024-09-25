# Revision

## Example Usage

```typescript
import { Revision } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: Revision = {
  createdAt: new Date("2024-01-01T18:37:54.059Z"),
  digest:
    "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
  id: "<id>",
  namespaceName: "<value>",
  tags: [
    "<value>",
  ],
  updatedAt: new Date("2024-01-06T00:27:30.681Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `digest`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Format {namespace_id}/{revision_digest}                                                       |                                                                                               |
| `namespaceName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `tags`                                                                                        | *string*[]                                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |