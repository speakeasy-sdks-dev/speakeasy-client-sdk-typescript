/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetSchemaDiffRequest = {
    /**
     * The ID of the Api to retrieve schemas for.
     */
    apiID: string;
    /**
     * The version ID of the Api to delete metadata for.
     */
    versionID: string;
    /**
     * The base revision ID of the schema to retrieve.
     */
    baseRevisionID: string;
    /**
     * The target revision ID of the schema to retrieve.
     */
    targetRevisionID: string;
};

export type GetSchemaDiffResponse = shared.ErrorT | shared.SchemaDiff;

/** @internal */
export const GetSchemaDiffRequest$inboundSchema: z.ZodType<
    GetSchemaDiffRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    baseRevisionID: z.string(),
    targetRevisionID: z.string(),
});

/** @internal */
export type GetSchemaDiffRequest$Outbound = {
    apiID: string;
    versionID: string;
    baseRevisionID: string;
    targetRevisionID: string;
};

/** @internal */
export const GetSchemaDiffRequest$outboundSchema: z.ZodType<
    GetSchemaDiffRequest$Outbound,
    z.ZodTypeDef,
    GetSchemaDiffRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
    baseRevisionID: z.string(),
    targetRevisionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemaDiffRequest$ {
    /** @deprecated use `GetSchemaDiffRequest$inboundSchema` instead. */
    export const inboundSchema = GetSchemaDiffRequest$inboundSchema;
    /** @deprecated use `GetSchemaDiffRequest$outboundSchema` instead. */
    export const outboundSchema = GetSchemaDiffRequest$outboundSchema;
    /** @deprecated use `GetSchemaDiffRequest$Outbound` instead. */
    export type Outbound = GetSchemaDiffRequest$Outbound;
}

/** @internal */
export const GetSchemaDiffResponse$inboundSchema: z.ZodType<
    GetSchemaDiffResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, shared.SchemaDiff$inboundSchema]);

/** @internal */
export type GetSchemaDiffResponse$Outbound = shared.ErrorT$Outbound | shared.SchemaDiff$Outbound;

/** @internal */
export const GetSchemaDiffResponse$outboundSchema: z.ZodType<
    GetSchemaDiffResponse$Outbound,
    z.ZodTypeDef,
    GetSchemaDiffResponse
> = z.union([shared.ErrorT$outboundSchema, shared.SchemaDiff$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetSchemaDiffResponse$ {
    /** @deprecated use `GetSchemaDiffResponse$inboundSchema` instead. */
    export const inboundSchema = GetSchemaDiffResponse$inboundSchema;
    /** @deprecated use `GetSchemaDiffResponse$outboundSchema` instead. */
    export const outboundSchema = GetSchemaDiffResponse$outboundSchema;
    /** @deprecated use `GetSchemaDiffResponse$Outbound` instead. */
    export type Outbound = GetSchemaDiffResponse$Outbound;
}
