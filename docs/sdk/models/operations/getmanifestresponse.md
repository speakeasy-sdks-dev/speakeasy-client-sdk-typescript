# GetManifestResponse

## Example Usage

```typescript
import { GetManifestResponse } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/operations";

let value: GetManifestResponse = {
    layers: [
        {
            digest: "sha256:5d20c808ce198565ff70b3ed23a991dd49afac45dece63474b27ce6ed036adc6",
            mediaType: "application/vnd.docker.image.rootfs.diff.tar.gzip",
            size: 2107098,
        },
    ],
    mediaType: "application/vnd.docker.distribution.manifest.v2+json",
    schemaVersion: 2,
};
```

## Supported Types

### `shared.ErrorT`

```typescript
const value: shared.ErrorT = /* values here */
```

### `shared.Manifest`

```typescript
const value: shared.Manifest = /* values here */
```

