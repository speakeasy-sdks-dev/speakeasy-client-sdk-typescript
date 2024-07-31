/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

/**
 * response to a getting the latest action run on a GitHub request
 */
export type GithubGetActionResponse = {
    /**
     * The status of the latest action run if available
     */
    runStatus?: string | undefined;
    /**
     * The URL for latest action run if available
     */
    runUrl?: string | undefined;
};

/** @internal */
export const GithubGetActionResponse$inboundSchema: z.ZodType<
    GithubGetActionResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        run_status: z.string().optional(),
        run_url: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            run_status: "runStatus",
            run_url: "runUrl",
        });
    });

/** @internal */
export type GithubGetActionResponse$Outbound = {
    run_status?: string | undefined;
    run_url?: string | undefined;
};

/** @internal */
export const GithubGetActionResponse$outboundSchema: z.ZodType<
    GithubGetActionResponse$Outbound,
    z.ZodTypeDef,
    GithubGetActionResponse
> = z
    .object({
        runStatus: z.string().optional(),
        runUrl: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            runStatus: "run_status",
            runUrl: "run_url",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubGetActionResponse$ {
    /** @deprecated use `GithubGetActionResponse$inboundSchema` instead. */
    export const inboundSchema = GithubGetActionResponse$inboundSchema;
    /** @deprecated use `GithubGetActionResponse$outboundSchema` instead. */
    export const outboundSchema = GithubGetActionResponse$outboundSchema;
    /** @deprecated use `GithubGetActionResponse$Outbound` instead. */
    export type Outbound = GithubGetActionResponse$Outbound;
}
