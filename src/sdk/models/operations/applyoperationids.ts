/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

/**
 * Apply options
 */
export type ApplyOperationIDsRequestBody = {
  /**
   * Whether to apply the suggestions as an overlay or replace the existing operationIDs. Default: false
   */
  asOverlay?: boolean | undefined;
};

export type ApplyOperationIDsRequest = {
  xSessionId: string;
  /**
   * Apply options
   */
  requestBody?: ApplyOperationIDsRequestBody | undefined;
};

export type ApplyOperationIDsResponse =
  | shared.ErrorT
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const ApplyOperationIDsRequestBody$inboundSchema: z.ZodType<
  ApplyOperationIDsRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  as_overlay: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "as_overlay": "asOverlay",
  });
});

/** @internal */
export type ApplyOperationIDsRequestBody$Outbound = {
  as_overlay?: boolean | undefined;
};

/** @internal */
export const ApplyOperationIDsRequestBody$outboundSchema: z.ZodType<
  ApplyOperationIDsRequestBody$Outbound,
  z.ZodTypeDef,
  ApplyOperationIDsRequestBody
> = z.object({
  asOverlay: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    asOverlay: "as_overlay",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyOperationIDsRequestBody$ {
  /** @deprecated use `ApplyOperationIDsRequestBody$inboundSchema` instead. */
  export const inboundSchema = ApplyOperationIDsRequestBody$inboundSchema;
  /** @deprecated use `ApplyOperationIDsRequestBody$outboundSchema` instead. */
  export const outboundSchema = ApplyOperationIDsRequestBody$outboundSchema;
  /** @deprecated use `ApplyOperationIDsRequestBody$Outbound` instead. */
  export type Outbound = ApplyOperationIDsRequestBody$Outbound;
}

/** @internal */
export const ApplyOperationIDsRequest$inboundSchema: z.ZodType<
  ApplyOperationIDsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  "x-session-id": z.string(),
  RequestBody: z.lazy(() => ApplyOperationIDsRequestBody$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "x-session-id": "xSessionId",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type ApplyOperationIDsRequest$Outbound = {
  "x-session-id": string;
  RequestBody?: ApplyOperationIDsRequestBody$Outbound | undefined;
};

/** @internal */
export const ApplyOperationIDsRequest$outboundSchema: z.ZodType<
  ApplyOperationIDsRequest$Outbound,
  z.ZodTypeDef,
  ApplyOperationIDsRequest
> = z.object({
  xSessionId: z.string(),
  requestBody: z.lazy(() => ApplyOperationIDsRequestBody$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    xSessionId: "x-session-id",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyOperationIDsRequest$ {
  /** @deprecated use `ApplyOperationIDsRequest$inboundSchema` instead. */
  export const inboundSchema = ApplyOperationIDsRequest$inboundSchema;
  /** @deprecated use `ApplyOperationIDsRequest$outboundSchema` instead. */
  export const outboundSchema = ApplyOperationIDsRequest$outboundSchema;
  /** @deprecated use `ApplyOperationIDsRequest$Outbound` instead. */
  export type Outbound = ApplyOperationIDsRequest$Outbound;
}

/** @internal */
export const ApplyOperationIDsResponse$inboundSchema: z.ZodType<
  ApplyOperationIDsResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/** @internal */
export type ApplyOperationIDsResponse$Outbound =
  | shared.ErrorT$Outbound
  | ReadableStream<Uint8Array>
  | ReadableStream<Uint8Array>;

/** @internal */
export const ApplyOperationIDsResponse$outboundSchema: z.ZodType<
  ApplyOperationIDsResponse$Outbound,
  z.ZodTypeDef,
  ApplyOperationIDsResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
  z.instanceof(ReadableStream<Uint8Array>),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplyOperationIDsResponse$ {
  /** @deprecated use `ApplyOperationIDsResponse$inboundSchema` instead. */
  export const inboundSchema = ApplyOperationIDsResponse$inboundSchema;
  /** @deprecated use `ApplyOperationIDsResponse$outboundSchema` instead. */
  export const outboundSchema = ApplyOperationIDsResponse$outboundSchema;
  /** @deprecated use `ApplyOperationIDsResponse$Outbound` instead. */
  export type Outbound = ApplyOperationIDsResponse$Outbound;
}
