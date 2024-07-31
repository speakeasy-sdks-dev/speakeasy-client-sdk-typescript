/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * Type of interaction.
 */
export const InteractionType = {
    CiExec: "CI_EXEC",
    CliExec: "CLI_EXEC",
    Lint: "LINT",
    OpenapiDiff: "OPENAPI_DIFF",
    TargetGenerate: "TARGET_GENERATE",
    Tombstone: "TOMBSTONE",
    Authenticate: "AUTHENTICATE",
    Quickstart: "QUICKSTART",
    Run: "RUN",
    Configure: "CONFIGURE",
    Publish: "PUBLISH",
} as const;
/**
 * Type of interaction.
 */
export type InteractionType = ClosedEnum<typeof InteractionType>;

/** @internal */
export const InteractionType$inboundSchema: z.ZodNativeEnum<typeof InteractionType> =
    z.nativeEnum(InteractionType);

/** @internal */
export const InteractionType$outboundSchema: z.ZodNativeEnum<typeof InteractionType> =
    InteractionType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InteractionType$ {
    /** @deprecated use `InteractionType$inboundSchema` instead. */
    export const inboundSchema = InteractionType$inboundSchema;
    /** @deprecated use `InteractionType$outboundSchema` instead. */
    export const outboundSchema = InteractionType$outboundSchema;
}
