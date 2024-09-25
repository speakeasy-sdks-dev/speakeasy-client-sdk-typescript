/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SpeakeasyCore } from "../core.js";
import { encodeFormQuery, encodeJSON, encodeSimple } from "../lib/encodings.js";
import { readableStreamToArrayBuffer } from "../lib/files.js";
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
import * as shared from "../sdk/models/shared/index.js";
import { isBlobLike } from "../sdk/types/blobs.js";
import { Result } from "../sdk/types/fp.js";
import { isReadableStream } from "../sdk/types/streams.js";

/**
 * Generate operation ID suggestions.
 *
 * @remarks
 * Get suggestions from an LLM model for improving the operationIDs in the provided schema.
 */
export async function suggestSuggestOperationIDs(
  client: SpeakeasyCore,
  request: operations.SuggestOperationIDsRequest,
  options?: RequestOptions,
): Promise<
  Result<
    shared.SuggestedOperationIDs,
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
    (value) =>
      operations.SuggestOperationIDsRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = new FormData();

  if (isBlobLike(payload.RequestBody.schema)) {
    body.append("schema", payload.RequestBody.schema);
  } else if (isReadableStream(payload.RequestBody.schema.content)) {
    const buffer = await readableStreamToArrayBuffer(
      payload.RequestBody.schema.content,
    );
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    body.append("schema", blob);
  } else {
    body.append(
      "schema",
      new Blob([payload.RequestBody.schema.content], {
        type: "application/octet-stream",
      }),
      payload.RequestBody.schema.fileName,
    );
  }
  if (payload.RequestBody.opts !== undefined) {
    body.append(
      "opts",
      encodeJSON("opts", payload.RequestBody.opts, { explode: true }),
    );
  }

  const path = pathToFunc("/v1/suggest/operation_ids")();

  const query = encodeFormQuery({
    "limit": payload.limit,
  });

  const headers = new Headers({
    Accept: "application/json",
    "x-session-id": encodeSimple("x-session-id", payload["x-session-id"], {
      explode: false,
      charEncoding: "none",
    }),
  });

  const securityInput = await extractSecurity(client._options.security);
  const context = {
    operationID: "suggestOperationIDs",
    oAuth2Scopes: [],
    securitySource: client._options.security,
  };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    path: path,
    headers: headers,
    query: query,
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
    shared.SuggestedOperationIDs,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, shared.SuggestedOperationIDs$inboundSchema),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}