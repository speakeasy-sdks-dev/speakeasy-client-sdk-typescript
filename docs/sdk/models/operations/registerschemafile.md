# RegisterSchemaFile

## Example Usage

```typescript
import { RegisterSchemaFile } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: RegisterSchemaFile = {
    content: new TextEncoder().encode("0x1E670eC2ef"),
    fileName: "your_file_here",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |