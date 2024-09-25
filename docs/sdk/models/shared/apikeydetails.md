# ApiKeyDetails

## Example Usage

```typescript
import { ApiKeyDetails } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/shared";

let value: ApiKeyDetails = {
  accountType: "scale-up",
  enabledFeatures: [
    "<value>",
  ],
  orgSlug: "<value>",
  telemetryDisabled: false,
  workspaceId: "<value>",
  workspaceSlug: "<value>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `accountType`                                                                                                           | [shared.AccountType](../../../sdk/models/shared/accounttype.md)                                                         | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `enabledFeatures`                                                                                                       | *string*[]                                                                                                              | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`featureFlags`~~                                                                                                      | *string*[]                                                                                                              | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `generationAccessUnlimited`                                                                                             | *boolean*                                                                                                               | :heavy_minus_sign:                                                                                                      | N/A                                                                                                                     |
| `orgSlug`                                                                                                               | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `telemetryDisabled`                                                                                                     | *boolean*                                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceId`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `workspaceSlug`                                                                                                         | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |