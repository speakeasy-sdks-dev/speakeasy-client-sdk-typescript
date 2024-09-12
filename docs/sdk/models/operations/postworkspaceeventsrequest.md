# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
  requestBody: [
    {
      createdAt: new Date("2023-07-04T10:50:11.661Z"),
      executionId: "<value>",
      id: "<id>",
      interactionType: "TOMBSTONE",
      localStartedAt: new Date("2024-11-13T20:49:26.617Z"),
      speakeasyApiKeyName: "<value>",
      speakeasyVersion: "<value>",
      success: false,
      workspaceId: "<value>",
    },
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `workspaceID`                                               | *string*                                                    | :heavy_minus_sign:                                          | Unique identifier of the workspace.                         |
| `requestBody`                                               | [shared.CliEvent](../../../sdk/models/shared/clievent.md)[] | :heavy_check_mark:                                          | N/A                                                         |