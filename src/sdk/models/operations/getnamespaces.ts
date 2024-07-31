/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type GetNamespacesResponse = shared.GetNamespacesResponse | shared.ErrorT;

/** @internal */
export const GetNamespacesResponse$inboundSchema: z.ZodType<
    GetNamespacesResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.GetNamespacesResponse$inboundSchema, shared.ErrorT$inboundSchema]);

/** @internal */
export type GetNamespacesResponse$Outbound =
    | shared.GetNamespacesResponse$Outbound
    | shared.ErrorT$Outbound;

/** @internal */
export const GetNamespacesResponse$outboundSchema: z.ZodType<
    GetNamespacesResponse$Outbound,
    z.ZodTypeDef,
    GetNamespacesResponse
> = z.union([shared.GetNamespacesResponse$outboundSchema, shared.ErrorT$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNamespacesResponse$ {
    /** @deprecated use `GetNamespacesResponse$inboundSchema` instead. */
    export const inboundSchema = GetNamespacesResponse$inboundSchema;
    /** @deprecated use `GetNamespacesResponse$outboundSchema` instead. */
    export const outboundSchema = GetNamespacesResponse$outboundSchema;
    /** @deprecated use `GetNamespacesResponse$Outbound` instead. */
    export type Outbound = GetNamespacesResponse$Outbound;
}
