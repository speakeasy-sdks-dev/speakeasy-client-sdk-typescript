/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { blobLikeSchema } from "../../types/blobs.js";

export type RegisterSchemaFile = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/**
 * The schema file to upload provided as a multipart/form-data file segment.
 */
export type RegisterSchemaRequestBody = {
  file: RegisterSchemaFile | Blob;
};

export type RegisterSchemaRequest = {
  /**
   * The ID of the Api to get the schema for.
   */
  apiID: string;
  /**
   * The version ID of the Api to delete metadata for.
   */
  versionID: string;
  /**
   * The schema file to upload provided as a multipart/form-data file segment.
   */
  requestBody: RegisterSchemaRequestBody;
};

/** @internal */
export const RegisterSchemaFile$inboundSchema: z.ZodType<
  RegisterSchemaFile,
  z.ZodTypeDef,
  unknown
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/** @internal */
export type RegisterSchemaFile$Outbound = {
  content: ReadableStream<Uint8Array> | Blob | ArrayBuffer | Uint8Array;
  fileName: string;
};

/** @internal */
export const RegisterSchemaFile$outboundSchema: z.ZodType<
  RegisterSchemaFile$Outbound,
  z.ZodTypeDef,
  RegisterSchemaFile
> = z.object({
  content: z.union([
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(Blob),
    z.instanceof(ArrayBuffer),
    z.instanceof(Uint8Array),
  ]),
  fileName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RegisterSchemaFile$ {
  /** @deprecated use `RegisterSchemaFile$inboundSchema` instead. */
  export const inboundSchema = RegisterSchemaFile$inboundSchema;
  /** @deprecated use `RegisterSchemaFile$outboundSchema` instead. */
  export const outboundSchema = RegisterSchemaFile$outboundSchema;
  /** @deprecated use `RegisterSchemaFile$Outbound` instead. */
  export type Outbound = RegisterSchemaFile$Outbound;
}

/** @internal */
export const RegisterSchemaRequestBody$inboundSchema: z.ZodType<
  RegisterSchemaRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  file: z.lazy(() => RegisterSchemaFile$inboundSchema),
});

/** @internal */
export type RegisterSchemaRequestBody$Outbound = {
  file: RegisterSchemaFile$Outbound | Blob;
};

/** @internal */
export const RegisterSchemaRequestBody$outboundSchema: z.ZodType<
  RegisterSchemaRequestBody$Outbound,
  z.ZodTypeDef,
  RegisterSchemaRequestBody
> = z.object({
  file: z.lazy(() => RegisterSchemaFile$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RegisterSchemaRequestBody$ {
  /** @deprecated use `RegisterSchemaRequestBody$inboundSchema` instead. */
  export const inboundSchema = RegisterSchemaRequestBody$inboundSchema;
  /** @deprecated use `RegisterSchemaRequestBody$outboundSchema` instead. */
  export const outboundSchema = RegisterSchemaRequestBody$outboundSchema;
  /** @deprecated use `RegisterSchemaRequestBody$Outbound` instead. */
  export type Outbound = RegisterSchemaRequestBody$Outbound;
}

/** @internal */
export const RegisterSchemaRequest$inboundSchema: z.ZodType<
  RegisterSchemaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  RequestBody: z.lazy(() => RegisterSchemaRequestBody$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type RegisterSchemaRequest$Outbound = {
  apiID: string;
  versionID: string;
  RequestBody: RegisterSchemaRequestBody$Outbound;
};

/** @internal */
export const RegisterSchemaRequest$outboundSchema: z.ZodType<
  RegisterSchemaRequest$Outbound,
  z.ZodTypeDef,
  RegisterSchemaRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  requestBody: z.lazy(() => RegisterSchemaRequestBody$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RegisterSchemaRequest$ {
  /** @deprecated use `RegisterSchemaRequest$inboundSchema` instead. */
  export const inboundSchema = RegisterSchemaRequest$inboundSchema;
  /** @deprecated use `RegisterSchemaRequest$outboundSchema` instead. */
  export const outboundSchema = RegisterSchemaRequest$outboundSchema;
  /** @deprecated use `RegisterSchemaRequest$Outbound` instead. */
  export type Outbound = RegisterSchemaRequest$Outbound;
}
