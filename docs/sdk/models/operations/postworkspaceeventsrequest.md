# PostWorkspaceEventsRequest

## Example Usage

```typescript
import { PostWorkspaceEventsRequest } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: PostWorkspaceEventsRequest = {
    requestBody: [
        {
            createdAt: new Date("2022-08-31T12:05:36.980Z"),
            executionId: "<value>",
            id: "<id>",
            interactionType: "CONFIGURE",
            localStartedAt: new Date("2022-06-04T19:48:20.525Z"),
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