/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetEmbedAccessTokenRequest = {
    /**
     * The description of the embed access token.
     */
    description?: string | undefined;
    /**
     * The duration (in minutes) of the embed access token.
     */
    duration?: number | undefined;
    /**
     * The filter to apply to the query.
     */
    filters?: shared.Filters | undefined;
};

export type GetEmbedAccessTokenResponse = shared.EmbedAccessTokenResponse | shared.ErrorT;

/** @internal */
export const GetEmbedAccessTokenRequest$inboundSchema: z.ZodType<
    GetEmbedAccessTokenRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    description: z.string().optional(),
    duration: z.number().int().optional(),
    filters: shared.Filters$inboundSchema.optional(),
});

/** @internal */
export type GetEmbedAccessTokenRequest$Outbound = {
    description?: string | undefined;
    duration?: number | undefined;
    filters?: shared.Filters$Outbound | undefined;
};

/** @internal */
export const GetEmbedAccessTokenRequest$outboundSchema: z.ZodType<
    GetEmbedAccessTokenRequest$Outbound,
    z.ZodTypeDef,
    GetEmbedAccessTokenRequest
> = z.object({
    description: z.string().optional(),
    duration: z.number().int().optional(),
    filters: shared.Filters$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEmbedAccessTokenRequest$ {
    /** @deprecated use `GetEmbedAccessTokenRequest$inboundSchema` instead. */
    export const inboundSchema = GetEmbedAccessTokenRequest$inboundSchema;
    /** @deprecated use `GetEmbedAccessTokenRequest$outboundSchema` instead. */
    export const outboundSchema = GetEmbedAccessTokenRequest$outboundSchema;
    /** @deprecated use `GetEmbedAccessTokenRequest$Outbound` instead. */
    export type Outbound = GetEmbedAccessTokenRequest$Outbound;
}

/** @internal */
export const GetEmbedAccessTokenResponse$inboundSchema: z.ZodType<
    GetEmbedAccessTokenResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.EmbedAccessTokenResponse$inboundSchema, shared.ErrorT$inboundSchema]);

/** @internal */
export type GetEmbedAccessTokenResponse$Outbound =
    | shared.EmbedAccessTokenResponse$Outbound
    | shared.ErrorT$Outbound;

/** @internal */
export const GetEmbedAccessTokenResponse$outboundSchema: z.ZodType<
    GetEmbedAccessTokenResponse$Outbound,
    z.ZodTypeDef,
    GetEmbedAccessTokenResponse
> = z.union([shared.EmbedAccessTokenResponse$outboundSchema, shared.ErrorT$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEmbedAccessTokenResponse$ {
    /** @deprecated use `GetEmbedAccessTokenResponse$inboundSchema` instead. */
    export const inboundSchema = GetEmbedAccessTokenResponse$inboundSchema;
    /** @deprecated use `GetEmbedAccessTokenResponse$outboundSchema` instead. */
    export const outboundSchema = GetEmbedAccessTokenResponse$outboundSchema;
    /** @deprecated use `GetEmbedAccessTokenResponse$Outbound` instead. */
    export type Outbound = GetEmbedAccessTokenResponse$Outbound;
}
