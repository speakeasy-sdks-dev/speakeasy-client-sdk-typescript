# RegisterSchemaRequestBody

The schema file to upload provided as a multipart/form-data file segment.

## Example Usage

```typescript
import { RegisterSchemaRequestBody } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";
import { openAsBlob } from "node:fs";

let value: RegisterSchemaRequestBody = {
    file: await openAsBlob("./sample-file"),
};
```

## Fields

| Field                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                  | Required                                                                                                                                                                                                              | Description                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `file`                                                                                                                                                                                                                | [File](https://developer.mozilla.org/en-US/docs/Web/API/File) \| [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) \| [operations.RegisterSchemaFile](../../../sdk/models/operations/registerschemafile.md) | :heavy_check_mark:                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                   |