# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetNamespacesResponse = {
    items: [
        {
            createdAt: new Date("2024-06-09T03:17:10.252Z"),
            id: "<id>",
            name: "<value>",
            updatedAt: new Date("2023-08-03T16:03:07.258Z"),
        },
    ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `items`                                                       | [shared.Namespace](../../../sdk/models/shared/namespace.md)[] | :heavy_check_mark:                                            | N/A                                                           |