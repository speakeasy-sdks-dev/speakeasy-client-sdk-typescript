/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GenerateOpenApiSpecRequest = {
    /**
     * The ID of the Api to generate an OpenAPI specification for.
     */
    apiID: string;
    /**
     * The version ID of the Api to generate an OpenAPI specification for.
     */
    versionID: string;
};

export type GenerateOpenApiSpecResponse = shared.ErrorT | shared.GenerateOpenApiSpecDiff;

/** @internal */
export const GenerateOpenApiSpecRequest$inboundSchema: z.ZodType<
    GenerateOpenApiSpecRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/** @internal */
export type GenerateOpenApiSpecRequest$Outbound = {
    apiID: string;
    versionID: string;
};

/** @internal */
export const GenerateOpenApiSpecRequest$outboundSchema: z.ZodType<
    GenerateOpenApiSpecRequest$Outbound,
    z.ZodTypeDef,
    GenerateOpenApiSpecRequest
> = z.object({
    apiID: z.string(),
    versionID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateOpenApiSpecRequest$ {
    /** @deprecated use `GenerateOpenApiSpecRequest$inboundSchema` instead. */
    export const inboundSchema = GenerateOpenApiSpecRequest$inboundSchema;
    /** @deprecated use `GenerateOpenApiSpecRequest$outboundSchema` instead. */
    export const outboundSchema = GenerateOpenApiSpecRequest$outboundSchema;
    /** @deprecated use `GenerateOpenApiSpecRequest$Outbound` instead. */
    export type Outbound = GenerateOpenApiSpecRequest$Outbound;
}

/** @internal */
export const GenerateOpenApiSpecResponse$inboundSchema: z.ZodType<
    GenerateOpenApiSpecResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, shared.GenerateOpenApiSpecDiff$inboundSchema]);

/** @internal */
export type GenerateOpenApiSpecResponse$Outbound =
    | shared.ErrorT$Outbound
    | shared.GenerateOpenApiSpecDiff$Outbound;

/** @internal */
export const GenerateOpenApiSpecResponse$outboundSchema: z.ZodType<
    GenerateOpenApiSpecResponse$Outbound,
    z.ZodTypeDef,
    GenerateOpenApiSpecResponse
> = z.union([shared.ErrorT$outboundSchema, shared.GenerateOpenApiSpecDiff$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateOpenApiSpecResponse$ {
    /** @deprecated use `GenerateOpenApiSpecResponse$inboundSchema` instead. */
    export const inboundSchema = GenerateOpenApiSpecResponse$inboundSchema;
    /** @deprecated use `GenerateOpenApiSpecResponse$outboundSchema` instead. */
    export const outboundSchema = GenerateOpenApiSpecResponse$outboundSchema;
    /** @deprecated use `GenerateOpenApiSpecResponse$Outbound` instead. */
    export type Outbound = GenerateOpenApiSpecResponse$Outbound;
}
