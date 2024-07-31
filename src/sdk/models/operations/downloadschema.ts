/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type DownloadSchemaRequest = {
    /**
     * The ID of the Api to download the schema for.
     */
    apiID: string;
    /**
     * The version ID of the Api to delete metadata for.
     */
    versionID: string;
};

export type DownloadSchemaResponse =
    | shared.ErrorT
    | ReadableStream<Uint8Array>
    | ReadableStream<Uint8Array>;

/** @internal */
export const DownloadSchemaRequest$inboundSchema: z.ZodType<
    DownloadSchemaRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/** @internal */
export type DownloadSchemaRequest$Outbound = {
    apiID: string;
    versionID: string;
};

/** @internal */
export const DownloadSchemaRequest$outboundSchema: z.ZodType<
    DownloadSchemaRequest$Outbound,
    z.ZodTypeDef,
    DownloadSchemaRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadSchemaRequest$ {
    /** @deprecated use `DownloadSchemaRequest$inboundSchema` instead. */
    export const inboundSchema = DownloadSchemaRequest$inboundSchema;
    /** @deprecated use `DownloadSchemaRequest$outboundSchema` instead. */
    export const outboundSchema = DownloadSchemaRequest$outboundSchema;
    /** @deprecated use `DownloadSchemaRequest$Outbound` instead. */
    export type Outbound = DownloadSchemaRequest$Outbound;
}

/** @internal */
export const DownloadSchemaResponse$inboundSchema: z.ZodType<
    DownloadSchemaResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    shared.ErrorT$inboundSchema,
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(ReadableStream<Uint8Array>),
]);

/** @internal */
export type DownloadSchemaResponse$Outbound =
    | shared.ErrorT$Outbound
    | ReadableStream<Uint8Array>
    | ReadableStream<Uint8Array>;

/** @internal */
export const DownloadSchemaResponse$outboundSchema: z.ZodType<
    DownloadSchemaResponse$Outbound,
    z.ZodTypeDef,
    DownloadSchemaResponse
> = z.union([
    shared.ErrorT$outboundSchema,
    z.instanceof(ReadableStream<Uint8Array>),
    z.instanceof(ReadableStream<Uint8Array>),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DownloadSchemaResponse$ {
    /** @deprecated use `DownloadSchemaResponse$inboundSchema` instead. */
    export const inboundSchema = DownloadSchemaResponse$inboundSchema;
    /** @deprecated use `DownloadSchemaResponse$outboundSchema` instead. */
    export const outboundSchema = DownloadSchemaResponse$outboundSchema;
    /** @deprecated use `DownloadSchemaResponse$Outbound` instead. */
    export type Outbound = DownloadSchemaResponse$Outbound;
}
