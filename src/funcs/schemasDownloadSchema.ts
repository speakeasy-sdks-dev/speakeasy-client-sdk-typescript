/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyCore } from "../core.js";
import { encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../sdk/models/errors/httpclienterrors.js";
import { SDKError } from "../sdk/models/errors/sdkerror.js";
import { SDKValidationError } from "../sdk/models/errors/sdkvalidationerror.js";
import * as operations from "../sdk/models/operations/index.js";
import { Result } from "../sdk/types/fp.js";

export enum DownloadSchemaAcceptEnum {
  applicationJson = "application/json",
  applicationXYaml = "application/x-yaml",
}

/**
 * Download the latest schema for a particular apiID.
 */
export async function schemasDownloadSchema(
  client: SpeakeasyCore,
  request: operations.DownloadSchemaRequest,
  options?: RequestOptions & {
    acceptHeaderOverride?: DownloadSchemaAcceptEnum;
  },
): Promise<
  Result<
    operations.DownloadSchemaResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) => operations.DownloadSchemaRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const pathParams = {
    apiID: encodeSimple("apiID", payload.apiID, {
      explode: false,
      charEncoding: "percent",
    }),
    versionID: encodeSimple("versionID", payload.versionID, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc(
    "/v1/apis/{apiID}/version/{versionID}/schema/download",
  )(pathParams);

  const headers = new Headers({
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/x-yaml;q=0",
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "downloadSchema",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: [],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    operations.DownloadSchemaResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.stream(200, operations.DownloadSchemaResponse$inboundSchema, {
      ctype: "application/json",
    }),
    M.stream(200, operations.DownloadSchemaResponse$inboundSchema, {
      ctype: "application/x-yaml",
    }),
    M.json("default", operations.DownloadSchemaResponse$inboundSchema),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
