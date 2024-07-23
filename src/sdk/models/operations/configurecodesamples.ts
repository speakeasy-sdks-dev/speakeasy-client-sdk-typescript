/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared/index.js";
import * as z from "zod";

export type ConfigureCodeSamplesResponse =
    | shared.ErrorT
    | shared.GithubConfigureCodeSamplesResponse;

/** @internal */
export const ConfigureCodeSamplesResponse$inboundSchema: z.ZodType<
    ConfigureCodeSamplesResponse,
    z.ZodTypeDef,
    unknown
> = z.union([shared.ErrorT$inboundSchema, shared.GithubConfigureCodeSamplesResponse$inboundSchema]);

/** @internal */
export type ConfigureCodeSamplesResponse$Outbound =
    | shared.ErrorT$Outbound
    | shared.GithubConfigureCodeSamplesResponse$Outbound;

/** @internal */
export const ConfigureCodeSamplesResponse$outboundSchema: z.ZodType<
    ConfigureCodeSamplesResponse$Outbound,
    z.ZodTypeDef,
    ConfigureCodeSamplesResponse
> = z.union([
    shared.ErrorT$outboundSchema,
    shared.GithubConfigureCodeSamplesResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConfigureCodeSamplesResponse$ {
    /** @deprecated use `ConfigureCodeSamplesResponse$inboundSchema` instead. */
    export const inboundSchema = ConfigureCodeSamplesResponse$inboundSchema;
    /** @deprecated use `ConfigureCodeSamplesResponse$outboundSchema` instead. */
    export const outboundSchema = ConfigureCodeSamplesResponse$outboundSchema;
    /** @deprecated use `ConfigureCodeSamplesResponse$Outbound` instead. */
    export type Outbound = ConfigureCodeSamplesResponse$Outbound;
}