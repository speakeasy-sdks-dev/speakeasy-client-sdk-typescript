/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type GithubCheckPublishingSecretsRequest = {
    generateGenLockId: string;
};

export type GithubCheckPublishingSecretsResponse =
    | shared.GithubMissingPublishingSecretsResponse
    | shared.ErrorT;

/** @internal */
export const GithubCheckPublishingSecretsRequest$inboundSchema: z.ZodType<
    GithubCheckPublishingSecretsRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        generate_gen_lock_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            generate_gen_lock_id: "generateGenLockId",
        });
    });

/** @internal */
export type GithubCheckPublishingSecretsRequest$Outbound = {
    generate_gen_lock_id: string;
};

/** @internal */
export const GithubCheckPublishingSecretsRequest$outboundSchema: z.ZodType<
    GithubCheckPublishingSecretsRequest$Outbound,
    z.ZodTypeDef,
    GithubCheckPublishingSecretsRequest
> = z
    .object({
        generateGenLockId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            generateGenLockId: "generate_gen_lock_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubCheckPublishingSecretsRequest$ {
    /** @deprecated use `GithubCheckPublishingSecretsRequest$inboundSchema` instead. */
    export const inboundSchema = GithubCheckPublishingSecretsRequest$inboundSchema;
    /** @deprecated use `GithubCheckPublishingSecretsRequest$outboundSchema` instead. */
    export const outboundSchema = GithubCheckPublishingSecretsRequest$outboundSchema;
    /** @deprecated use `GithubCheckPublishingSecretsRequest$Outbound` instead. */
    export type Outbound = GithubCheckPublishingSecretsRequest$Outbound;
}

/** @internal */
export const GithubCheckPublishingSecretsResponse$inboundSchema: z.ZodType<
    GithubCheckPublishingSecretsResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    shared.GithubMissingPublishingSecretsResponse$inboundSchema,
    shared.ErrorT$inboundSchema,
]);

/** @internal */
export type GithubCheckPublishingSecretsResponse$Outbound =
    | shared.GithubMissingPublishingSecretsResponse$Outbound
    | shared.ErrorT$Outbound;

/** @internal */
export const GithubCheckPublishingSecretsResponse$outboundSchema: z.ZodType<
    GithubCheckPublishingSecretsResponse$Outbound,
    z.ZodTypeDef,
    GithubCheckPublishingSecretsResponse
> = z.union([
    shared.GithubMissingPublishingSecretsResponse$outboundSchema,
    shared.ErrorT$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubCheckPublishingSecretsResponse$ {
    /** @deprecated use `GithubCheckPublishingSecretsResponse$inboundSchema` instead. */
    export const inboundSchema = GithubCheckPublishingSecretsResponse$inboundSchema;
    /** @deprecated use `GithubCheckPublishingSecretsResponse$outboundSchema` instead. */
    export const outboundSchema = GithubCheckPublishingSecretsResponse$outboundSchema;
    /** @deprecated use `GithubCheckPublishingSecretsResponse$Outbound` instead. */
    export type Outbound = GithubCheckPublishingSecretsResponse$Outbound;
}