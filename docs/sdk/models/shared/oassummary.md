# OASSummary

## Example Usage

```typescript
import { OASSummary } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: OASSummary = {
  info: {
    description: "abaft now whose",
    license: {},
    summary: "<value>",
    title: "<value>",
    version: "<value>",
  },
  operations: [
    {
      description:
        "incidentally challenge vol department brightly resort duh redact indeed",
      method: "<value>",
      operationId: "<id>",
      path: "/home",
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