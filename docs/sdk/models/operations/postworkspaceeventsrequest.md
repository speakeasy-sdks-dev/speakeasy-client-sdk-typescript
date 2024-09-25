# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
  requestBody: [
    {
      createdAt: new Date("2024-01-05T05:29:05.430Z"),
      executionId: "<value>",
      id: "<id>",
      interactionType: "RUN",
      localStartedAt: new Date("2022-11-05T18:37:43.326Z"),
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