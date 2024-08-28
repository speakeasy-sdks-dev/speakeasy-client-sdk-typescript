# Schema

## Example Usage

```typescript
import { Schema } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: Schema = {
    content: new TextEncoder().encode("0x68dA9D2262"),
    fileName: "your_file_here",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `content`          | *Uint8Array*       | :heavy_check_mark: | N/A                |
| `fileName`         | *string*           | :heavy_check_mark: | N/A                |