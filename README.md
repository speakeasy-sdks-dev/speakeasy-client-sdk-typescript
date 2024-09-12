# @speakeasy-api/speakeasy-client-sdk-typescript

<!-- Start Summary [summary] -->
## Summary

Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs

For more information about the API: [The Speakeasy Platform Documentation](/docs)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Global Parameters](#global-parameters)
* [File uploads](#file-uploads)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @speakeasy-api/speakeasy-client-sdk-typescript
```

### PNPM

```bash
pnpm add @speakeasy-api/speakeasy-client-sdk-typescript
```

### Bun

```bash
bun add @speakeasy-api/speakeasy-client-sdk-typescript
```

### Yarn

```bash
yarn add @speakeasy-api/speakeasy-client-sdk-typescript zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.getApis({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [apiEndpoints](docs/sdks/apiendpoints/README.md)

* [deleteApiEndpoint](docs/sdks/apiendpoints/README.md#deleteapiendpoint) - Delete an ApiEndpoint.
* [findApiEndpoint](docs/sdks/apiendpoints/README.md#findapiendpoint) - Find an ApiEndpoint via its displayName.
* [generateOpenApiSpecForApiEndpoint](docs/sdks/apiendpoints/README.md#generateopenapispecforapiendpoint) - Generate an OpenAPI specification for a particular ApiEndpoint.
* [generatePostmanCollectionForApiEndpoint](docs/sdks/apiendpoints/README.md#generatepostmancollectionforapiendpoint) - Generate a Postman collection for a particular ApiEndpoint.
* [getAllApiEndpoints](docs/sdks/apiendpoints/README.md#getallapiendpoints) - Get all Api endpoints for a particular apiID.
* [getAllForVersionApiEndpoints](docs/sdks/apiendpoints/README.md#getallforversionapiendpoints) - Get all ApiEndpoints for a particular apiID and versionID.
* [getApiEndpoint](docs/sdks/apiendpoints/README.md#getapiendpoint) - Get an ApiEndpoint.
* [upsertApiEndpoint](docs/sdks/apiendpoints/README.md#upsertapiendpoint) - Upsert an ApiEndpoint.

### [apis](docs/sdks/apis/README.md)

* [deleteApi](docs/sdks/apis/README.md#deleteapi) - Delete an Api.
* [generateOpenApiSpec](docs/sdks/apis/README.md#generateopenapispec) - Generate an OpenAPI specification for a particular Api.
* [generatePostmanCollection](docs/sdks/apis/README.md#generatepostmancollection) - Generate a Postman collection for a particular Api.
* [getAllApiVersions](docs/sdks/apis/README.md#getallapiversions) - Get all Api versions for a particular ApiEndpoint.
* [getApis](docs/sdks/apis/README.md#getapis) - Get a list of Apis for a given workspace
* [upsertApi](docs/sdks/apis/README.md#upsertapi) - Upsert an Api

### [artifacts](docs/sdks/artifacts/README.md)

* [getBlob](docs/sdks/artifacts/README.md#getblob) - Get blob for a particular digest
* [getManifest](docs/sdks/artifacts/README.md#getmanifest) - Get manifest for a particular reference
* [getNamespaces](docs/sdks/artifacts/README.md#getnamespaces) - Each namespace contains many revisions.
* [getOASSummary](docs/sdks/artifacts/README.md#getoassummary)
* [getRevisions](docs/sdks/artifacts/README.md#getrevisions)
* [getTags](docs/sdks/artifacts/README.md#gettags)
* [postTags](docs/sdks/artifacts/README.md#posttags) - Add tags to an existing revision
* [preflight](docs/sdks/artifacts/README.md#preflight) - Get access token for communicating with OCI distribution endpoints

### [auth](docs/sdks/auth/README.md)

* [getAccessToken](docs/sdks/auth/README.md#getaccesstoken) - Get or refresh an access token for the current workspace.
* [getUser](docs/sdks/auth/README.md#getuser) - Get information about the current user.
* [getWorkspaceAccess](docs/sdks/auth/README.md#getworkspaceaccess) - Get access allowances for a particular workspace
* [validateApiKey](docs/sdks/auth/README.md#validateapikey) - Validate the current api key.

### [embeds](docs/sdks/embeds/README.md)

* [getEmbedAccessToken](docs/sdks/embeds/README.md#getembedaccesstoken) - Get an embed access token for the current workspace.
* [getValidEmbedAccessTokens](docs/sdks/embeds/README.md#getvalidembedaccesstokens) - Get all valid embed access tokens for the current workspace.
* [revokeEmbedAccessToken](docs/sdks/embeds/README.md#revokeembedaccesstoken) - Revoke an embed access EmbedToken.

### [events](docs/sdks/events/README.md)

* [getWorkspaceEventsByTarget](docs/sdks/events/README.md#getworkspaceeventsbytarget) - Load recent events for a particular workspace
* [getWorkspaceTargets](docs/sdks/events/README.md#getworkspacetargets) - Load targets for a particular workspace
* [postWorkspaceEvents](docs/sdks/events/README.md#postworkspaceevents) - Post events for a specific workspace
* [searchWorkspaceEvents](docs/sdks/events/README.md#searchworkspaceevents) - Search events for a particular workspace by any field

### [github](docs/sdks/github/README.md)

* [checkAccess](docs/sdks/github/README.md#checkaccess)
* [configureCodeSamples](docs/sdks/github/README.md#configurecodesamples)
* [configureMintlifyRepo](docs/sdks/github/README.md#configuremintlifyrepo)
* [configureTarget](docs/sdks/github/README.md#configuretarget)
* [fetchPublishingPRs](docs/sdks/github/README.md#fetchpublishingprs)
* [getAction](docs/sdks/github/README.md#getaction)
* [githubCheckPublishingSecrets](docs/sdks/github/README.md#githubcheckpublishingsecrets)
* [githubStorePublishingSecrets](docs/sdks/github/README.md#githubstorepublishingsecrets)
* [triggerAction](docs/sdks/github/README.md#triggeraction)

### [metadata](docs/sdks/metadata/README.md)

* [deleteVersionMetadata](docs/sdks/metadata/README.md#deleteversionmetadata) - Delete metadata for a particular apiID and versionID.
* [getVersionMetadata](docs/sdks/metadata/README.md#getversionmetadata) - Get all metadata for a particular apiID and versionID.
* [insertVersionMetadata](docs/sdks/metadata/README.md#insertversionmetadata) - Insert metadata for a particular apiID and versionID.

### [organizations](docs/sdks/organizations/README.md)

* [createFreeTrial](docs/sdks/organizations/README.md#createfreetrial) - Create a free trial for an organization
* [getOrganization](docs/sdks/organizations/README.md#getorganization) - Get organization
* [getOrganizationUsage](docs/sdks/organizations/README.md#getorganizationusage) - Get billing usage summary for a particular organization
* [getOrganizations](docs/sdks/organizations/README.md#getorganizations) - Get organizations for a user

### [reports](docs/sdks/reports/README.md)

* [getChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl) - Get the signed access url for the change reports for a particular document.
* [getLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl) - Get the signed access url for the linting reports for a particular document.
* [uploadReport](docs/sdks/reports/README.md#uploadreport) - Upload a report.

### [requests](docs/sdks/requests/README.md)

* [generateRequestPostmanCollection](docs/sdks/requests/README.md#generaterequestpostmancollection) - Generate a Postman collection for a particular request.
* [getRequestFromEventLog](docs/sdks/requests/README.md#getrequestfromeventlog) - Get information about a particular request.
* [queryEventLog](docs/sdks/requests/README.md#queryeventlog) - Query the event log to retrieve a list of requests.

### [schemas](docs/sdks/schemas/README.md)

* [deleteSchema](docs/sdks/schemas/README.md#deleteschema) - Delete a particular schema revision for an Api.
* [downloadSchema](docs/sdks/schemas/README.md#downloadschema) - Download the latest schema for a particular apiID.
* [downloadSchemaRevision](docs/sdks/schemas/README.md#downloadschemarevision) - Download a particular schema revision for an Api.
* [getSchema](docs/sdks/schemas/README.md#getschema) - Get information about the latest schema.
* [getSchemaDiff](docs/sdks/schemas/README.md#getschemadiff) - Get a diff of two schema revisions for an Api.
* [getSchemaRevision](docs/sdks/schemas/README.md#getschemarevision) - Get information about a particular schema revision for an Api.
* [getSchemas](docs/sdks/schemas/README.md#getschemas) - Get information about all schemas associated with a particular apiID.
* [registerSchema](docs/sdks/schemas/README.md#registerschema) - Register a schema.

### [shortURLs](docs/sdks/shorturls/README.md)

* [create](docs/sdks/shorturls/README.md#create) - Shorten a URL.


### [suggest](docs/sdks/suggest/README.md)

* [applyOperationIDs](docs/sdks/suggest/README.md#applyoperationids) - Apply operation ID suggestions and download result.
* [suggestOperationIDs](docs/sdks/suggest/README.md#suggestoperationids) - Generate operation ID suggestions.
* [suggestOperationIDsRegistry](docs/sdks/suggest/README.md#suggestoperationidsregistry) - Generate operation ID suggestions.

### [workspaces](docs/sdks/workspaces/README.md)

* [getWorkspace](docs/sdks/workspaces/README.md#getworkspace) - Get workspace

</details>
<!-- End Available Resources and Operations [operations] -->







<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { SDKValidationError } from "@speakeasy-api/speakeasy-client-sdk-typescript/sdk/models/errors";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await speakeasy.apis.deleteApi({
      apiID: "<value>",
      versionID: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://api.prod.speakeasyapi.dev` | None |

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  server: "prod",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<value>",
    versionID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  serverURL: "https://api.prod.speakeasyapi.dev",
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<value>",
    versionID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { HTTPClient } from "@speakeasy-api/speakeasy-client-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Speakeasy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `apiKey`    | apiKey      | API key     |
| `bearer`    | http        | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<value>",
    versionID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [apiEndpointsDeleteApiEndpoint](docs/sdks/apiendpoints/README.md#deleteapiendpoint)
- [apiEndpointsFindApiEndpoint](docs/sdks/apiendpoints/README.md#findapiendpoint)
- [apiEndpointsGenerateOpenApiSpecForApiEndpoint](docs/sdks/apiendpoints/README.md#generateopenapispecforapiendpoint)
- [apiEndpointsGeneratePostmanCollectionForApiEndpoint](docs/sdks/apiendpoints/README.md#generatepostmancollectionforapiendpoint)
- [apiEndpointsGetAllApiEndpoints](docs/sdks/apiendpoints/README.md#getallapiendpoints)
- [apiEndpointsGetAllForVersionApiEndpoints](docs/sdks/apiendpoints/README.md#getallforversionapiendpoints)
- [apiEndpointsGetApiEndpoint](docs/sdks/apiendpoints/README.md#getapiendpoint)
- [apiEndpointsUpsertApiEndpoint](docs/sdks/apiendpoints/README.md#upsertapiendpoint)
- [apisDeleteApi](docs/sdks/apis/README.md#deleteapi)
- [apisGenerateOpenApiSpec](docs/sdks/apis/README.md#generateopenapispec)
- [apisGeneratePostmanCollection](docs/sdks/apis/README.md#generatepostmancollection)
- [apisGetAllApiVersions](docs/sdks/apis/README.md#getallapiversions)
- [apisGetApis](docs/sdks/apis/README.md#getapis)
- [apisUpsertApi](docs/sdks/apis/README.md#upsertapi)
- [artifactsGetBlob](docs/sdks/artifacts/README.md#getblob)
- [artifactsGetManifest](docs/sdks/artifacts/README.md#getmanifest)
- [artifactsGetNamespaces](docs/sdks/artifacts/README.md#getnamespaces)
- [artifactsGetOASSummary](docs/sdks/artifacts/README.md#getoassummary)
- [artifactsGetRevisions](docs/sdks/artifacts/README.md#getrevisions)
- [artifactsGetTags](docs/sdks/artifacts/README.md#gettags)
- [artifactsPostTags](docs/sdks/artifacts/README.md#posttags)
- [artifactsPreflight](docs/sdks/artifacts/README.md#preflight)
- [authGetAccessToken](docs/sdks/auth/README.md#getaccesstoken)
- [authGetUser](docs/sdks/auth/README.md#getuser)
- [authGetWorkspaceAccess](docs/sdks/auth/README.md#getworkspaceaccess)
- [authValidateApiKey](docs/sdks/auth/README.md#validateapikey)
- [embedsGetEmbedAccessToken](docs/sdks/embeds/README.md#getembedaccesstoken)
- [embedsGetValidEmbedAccessTokens](docs/sdks/embeds/README.md#getvalidembedaccesstokens)
- [embedsRevokeEmbedAccessToken](docs/sdks/embeds/README.md#revokeembedaccesstoken)
- [eventsGetWorkspaceEventsByTarget](docs/sdks/events/README.md#getworkspaceeventsbytarget)
- [eventsGetWorkspaceTargets](docs/sdks/events/README.md#getworkspacetargets)
- [eventsPostWorkspaceEvents](docs/sdks/events/README.md#postworkspaceevents)
- [eventsSearchWorkspaceEvents](docs/sdks/events/README.md#searchworkspaceevents)
- [githubCheckAccess](docs/sdks/github/README.md#checkaccess)
- [githubConfigureCodeSamples](docs/sdks/github/README.md#configurecodesamples)
- [githubConfigureMintlifyRepo](docs/sdks/github/README.md#configuremintlifyrepo)
- [githubConfigureTarget](docs/sdks/github/README.md#configuretarget)
- [githubFetchPublishingPRs](docs/sdks/github/README.md#fetchpublishingprs)
- [githubGetAction](docs/sdks/github/README.md#getaction)
- [githubGithubCheckPublishingSecrets](docs/sdks/github/README.md#githubcheckpublishingsecrets)
- [githubGithubStorePublishingSecrets](docs/sdks/github/README.md#githubstorepublishingsecrets)
- [githubTriggerAction](docs/sdks/github/README.md#triggeraction)
- [metadataDeleteVersionMetadata](docs/sdks/metadata/README.md#deleteversionmetadata)
- [metadataGetVersionMetadata](docs/sdks/metadata/README.md#getversionmetadata)
- [metadataInsertVersionMetadata](docs/sdks/metadata/README.md#insertversionmetadata)
- [organizationsCreateFreeTrial](docs/sdks/organizations/README.md#createfreetrial)
- [organizationsGetOrganizationUsage](docs/sdks/organizations/README.md#getorganizationusage)
- [organizationsGetOrganization](docs/sdks/organizations/README.md#getorganization)
- [organizationsGetOrganizations](docs/sdks/organizations/README.md#getorganizations)
- [reportsGetChangesReportSignedUrl](docs/sdks/reports/README.md#getchangesreportsignedurl)
- [reportsGetLintingReportSignedUrl](docs/sdks/reports/README.md#getlintingreportsignedurl)
- [reportsUploadReport](docs/sdks/reports/README.md#uploadreport)
- [requestsGenerateRequestPostmanCollection](docs/sdks/requests/README.md#generaterequestpostmancollection)
- [requestsGetRequestFromEventLog](docs/sdks/requests/README.md#getrequestfromeventlog)
- [requestsQueryEventLog](docs/sdks/requests/README.md#queryeventlog)
- [schemasDeleteSchema](docs/sdks/schemas/README.md#deleteschema)
- [schemasDownloadSchemaRevision](docs/sdks/schemas/README.md#downloadschemarevision)
- [schemasDownloadSchema](docs/sdks/schemas/README.md#downloadschema)
- [schemasGetSchemaDiff](docs/sdks/schemas/README.md#getschemadiff)
- [schemasGetSchemaRevision](docs/sdks/schemas/README.md#getschemarevision)
- [schemasGetSchema](docs/sdks/schemas/README.md#getschema)
- [schemasGetSchemas](docs/sdks/schemas/README.md#getschemas)
- [schemasRegisterSchema](docs/sdks/schemas/README.md#registerschema)
- [shortURLsCreate](docs/sdks/shorturls/README.md#create)
- [suggestApplyOperationIDs](docs/sdks/suggest/README.md#applyoperationids)
- [suggestSuggestOperationIDsRegistry](docs/sdks/suggest/README.md#suggestoperationidsregistry)
- [suggestSuggestOperationIDs](docs/sdks/suggest/README.md#suggestoperationids)
- [workspacesGetWorkspace](docs/sdks/workspaces/README.md#getworkspace)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `workspaceID` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `getWorkspace`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.

| Name | Type | Required | Description |
| ---- | ---- |:--------:| ----------- |
| workspaceID | string |  | The workspaceID parameter. |


### Example

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.workspaces.getWorkspace({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Global Parameters [global-parameters] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<value>",
    versionID: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const speakeasy = new Speakeasy({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.apis.deleteApi({
    apiID: "<value>",
    versionID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";
import { openAsBlob } from "node:fs";

const speakeasy = new Speakeasy({
  security: {
    apiKey: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await speakeasy.schemas.registerSchema({
    apiID: "<value>",
    versionID: "<value>",
    requestBody: {
      file: await openAsBlob("./sample-file"),
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Speakeasy } from "@speakeasy-api/speakeasy-client-sdk-typescript";

const sdk = new Speakeasy({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->



### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
