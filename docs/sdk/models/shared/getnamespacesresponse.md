# GetNamespacesResponse

## Example Usage

```typescript
import { GetNamespacesResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: GetNamespacesResponse = {
  items: [
    {
      createdAt: new Date("2022-05-10T15:05:25.793Z"),
      id: "<id>",
      name: "<value>",
      updatedAt: new Date("2023-12-03T08:28:57.162Z"),
    },
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `items`                                                       | [shared.Namespace](../../../sdk/models/shared/namespace.md)[] | :heavy_check_mark:                                            | N/A                                                           |