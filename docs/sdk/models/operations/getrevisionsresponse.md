# GetRevisionsResponse

## Example Usage

```typescript
import { GetRevisionsResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetRevisionsResponse = {
  items: [
    {
      createdAt: new Date("2022-05-25T10:48:39.464Z"),
      digest:
        "sha256:6d1ef012b5674ad8a127ecfa9b5e6f5178d171b90ee462846974177fd9bdd39f",
      id: "<id>",
      namespaceName: "<value>",
      tags: [
        "<value>",
      ],
      updatedAt: new Date("2023-12-11T07:16:06.748Z"),
    },
  ],
  nextPageToken: "<value>",
};
```

## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = /* values here */
```

### `shared.GetRevisionsResponse`

```typescript
const value: shared.GetRevisionsResponse = /* values here */
```

