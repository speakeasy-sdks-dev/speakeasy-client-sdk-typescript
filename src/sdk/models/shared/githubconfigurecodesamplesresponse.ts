/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  WorkflowDocument,
  WorkflowDocument$inboundSchema,
  WorkflowDocument$Outbound,
  WorkflowDocument$outboundSchema,
} from "./workflowdocument.js";

/**
 * A response to configure GitHub code samples
 */
export type GithubConfigureCodeSamplesResponse = {
  /**
   * The URL of the code sample overlay registry
   */
  codeSampleOverlayRegistryURL: string;
  /**
   * The ID of the GitHub action that was dispatched
   */
  ghActionID?: string | undefined;
  /**
   * A document referenced by a workflow
   */
  source: WorkflowDocument;
};

/** @internal */
export const GithubConfigureCodeSamplesResponse$inboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  codeSampleOverlayRegistryURL: z.string(),
  ghActionID: z.string().optional(),
  source: WorkflowDocument$inboundSchema,
});

/** @internal */
export type GithubConfigureCodeSamplesResponse$Outbound = {
  codeSampleOverlayRegistryURL: string;
  ghActionID?: string | undefined;
  source: WorkflowDocument$Outbound;
};

/** @internal */
export const GithubConfigureCodeSamplesResponse$outboundSchema: z.ZodType<
  GithubConfigureCodeSamplesResponse$Outbound,
  z.ZodTypeDef,
  GithubConfigureCodeSamplesResponse
> = z.object({
  codeSampleOverlayRegistryURL: z.string(),
  ghActionID: z.string().optional(),
  source: WorkflowDocument$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GithubConfigureCodeSamplesResponse$ {
  /** @deprecated use `GithubConfigureCodeSamplesResponse$inboundSchema` instead. */
  export const inboundSchema = GithubConfigureCodeSamplesResponse$inboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$outboundSchema` instead. */
  export const outboundSchema =
    GithubConfigureCodeSamplesResponse$outboundSchema;
  /** @deprecated use `GithubConfigureCodeSamplesResponse$Outbound` instead. */
  export type Outbound = GithubConfigureCodeSamplesResponse$Outbound;
}
