/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GenerateRequestPostmanCollectionRequest = {
  /**
   * The ID of the request to retrieve.
   */
  requestID: string;
};

export type GenerateRequestPostmanCollectionResponse =
  | shared.ErrorT
  | ReadableStream<Uint8Array>;

/** @internal */
export const GenerateRequestPostmanCollectionRequest$inboundSchema: z.ZodType<
  GenerateRequestPostmanCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  requestID: z.string(),
});

/** @internal */
export type GenerateRequestPostmanCollectionRequest$Outbound = {
  requestID: string;
};

/** @internal */
export const GenerateRequestPostmanCollectionRequest$outboundSchema: z.ZodType<
  GenerateRequestPostmanCollectionRequest$Outbound,
  z.ZodTypeDef,
  GenerateRequestPostmanCollectionRequest
> = z.object({
  requestID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateRequestPostmanCollectionRequest$ {
  /** @deprecated use `GenerateRequestPostmanCollectionRequest$inboundSchema` instead. */
  export const inboundSchema =
    GenerateRequestPostmanCollectionRequest$inboundSchema;
  /** @deprecated use `GenerateRequestPostmanCollectionRequest$outboundSchema` instead. */
  export const outboundSchema =
    GenerateRequestPostmanCollectionRequest$outboundSchema;
  /** @deprecated use `GenerateRequestPostmanCollectionRequest$Outbound` instead. */
  export type Outbound = GenerateRequestPostmanCollectionRequest$Outbound;
}

/** @internal */
export const GenerateRequestPostmanCollectionResponse$inboundSchema: z.ZodType<
  GenerateRequestPostmanCollectionResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
]);

/** @internal */
export type GenerateRequestPostmanCollectionResponse$Outbound =
  | shared.ErrorT$Outbound
  | ReadableStream<Uint8Array>;

/** @internal */
export const GenerateRequestPostmanCollectionResponse$outboundSchema: z.ZodType<
  GenerateRequestPostmanCollectionResponse$Outbound,
  z.ZodTypeDef,
  GenerateRequestPostmanCollectionResponse
> = z.union([
  shared.ErrorT$outboundSchema,
  z.instanceof(ReadableStream<Uint8Array>),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateRequestPostmanCollectionResponse$ {
  /** @deprecated use `GenerateRequestPostmanCollectionResponse$inboundSchema` instead. */
  export const inboundSchema =
    GenerateRequestPostmanCollectionResponse$inboundSchema;
  /** @deprecated use `GenerateRequestPostmanCollectionResponse$outboundSchema` instead. */
  export const outboundSchema =
    GenerateRequestPostmanCollectionResponse$outboundSchema;
  /** @deprecated use `GenerateRequestPostmanCollectionResponse$Outbound` instead. */
  export type Outbound = GenerateRequestPostmanCollectionResponse$Outbound;
}
