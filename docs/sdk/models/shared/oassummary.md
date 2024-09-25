# OASSummary

## Example Usage

```typescript
import { OASSummary } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OASSummary = {
  info: {
    description: "Open-source fresh-thinking customer loyalty",
    license: {},
    summary: "<value>",
    title: "<value>",
    version: "<value>",
  },
  operations: [
    {
      description: "Robust high-level leverage",
      method: "<value>",
      operationId: "<value>",
      path: "/bin",
      tags: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `info`                                                              | [shared.OASInfo](../../../sdk/models/shared/oasinfo.md)             | :heavy_check_mark:                                                  | N/A                                                                 |
| `operations`                                                        | [shared.OASOperation](../../../sdk/models/shared/oasoperation.md)[] | :heavy_check_mark:                                                  | N/A                                                                 |