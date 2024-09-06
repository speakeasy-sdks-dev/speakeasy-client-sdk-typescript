# GetOrganizationUsageResponse

## Example Usage

```typescript
import { GetOrganizationUsageResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetOrganizationUsageResponse = {
    allowedLanguages: ["<value>"],
    totalAllowedLanguages: 433288,
    usage: [
        {
            accessible: false,
            accessibleFeatures: ["<value>"],
            genLockIds: ["<value>"],
            language: "<value>",
            numberOfOperations: 248753,
            usedFeatures: ["<value>"],
            workspaces: ["<value>"],
        },
    ],
};
```

## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = /* values here */
```

### `shared.OrganizationUsageResponse`

```typescript
const value: shared.OrganizationUsageResponse = /* values here */
```

