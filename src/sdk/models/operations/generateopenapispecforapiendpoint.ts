/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as shared from "../shared/index.js";

export type GenerateOpenApiSpecForApiEndpointRequest = {
  /**
   * The ID of the Api to generate an OpenAPI specification for.
   */
  apiID: string;
  /**
   * The version ID of the Api to generate an OpenAPI specification for.
   */
  versionID: string;
  /**
   * The ID of the ApiEndpoint to generate an OpenAPI specification for.
   */
  apiEndpointID: string;
};

export type GenerateOpenApiSpecForApiEndpointResponse =
  | shared.ErrorT
  | shared.GenerateOpenApiSpecDiff;

/** @internal */
export const GenerateOpenApiSpecForApiEndpointRequest$inboundSchema: z.ZodType<
  GenerateOpenApiSpecForApiEndpointRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  apiEndpointID: z.string(),
});

/** @internal */
export type GenerateOpenApiSpecForApiEndpointRequest$Outbound = {
  apiID: string;
  versionID: string;
  apiEndpointID: string;
};

/** @internal */
export const GenerateOpenApiSpecForApiEndpointRequest$outboundSchema: z.ZodType<
  GenerateOpenApiSpecForApiEndpointRequest$Outbound,
  z.ZodTypeDef,
  GenerateOpenApiSpecForApiEndpointRequest
> = z.object({
  apiID: z.string(),
  versionID: z.string(),
  apiEndpointID: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateOpenApiSpecForApiEndpointRequest$ {
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointRequest$inboundSchema` instead. */
  export const inboundSchema =
    GenerateOpenApiSpecForApiEndpointRequest$inboundSchema;
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointRequest$outboundSchema` instead. */
  export const outboundSchema =
    GenerateOpenApiSpecForApiEndpointRequest$outboundSchema;
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointRequest$Outbound` instead. */
  export type Outbound = GenerateOpenApiSpecForApiEndpointRequest$Outbound;
}

/** @internal */
export const GenerateOpenApiSpecForApiEndpointResponse$inboundSchema: z.ZodType<
  GenerateOpenApiSpecForApiEndpointResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  shared.ErrorT$inboundSchema,
  shared.GenerateOpenApiSpecDiff$inboundSchema,
]);

/** @internal */
export type GenerateOpenApiSpecForApiEndpointResponse$Outbound =
  | shared.ErrorT$Outbound
  | shared.GenerateOpenApiSpecDiff$Outbound;

/** @internal */
export const GenerateOpenApiSpecForApiEndpointResponse$outboundSchema:
  z.ZodType<
    GenerateOpenApiSpecForApiEndpointResponse$Outbound,
    z.ZodTypeDef,
    GenerateOpenApiSpecForApiEndpointResponse
  > = z.union([
    shared.ErrorT$outboundSchema,
    shared.GenerateOpenApiSpecDiff$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GenerateOpenApiSpecForApiEndpointResponse$ {
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointResponse$inboundSchema` instead. */
  export const inboundSchema =
    GenerateOpenApiSpecForApiEndpointResponse$inboundSchema;
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointResponse$outboundSchema` instead. */
  export const outboundSchema =
    GenerateOpenApiSpecForApiEndpointResponse$outboundSchema;
  /** @deprecated use `GenerateOpenApiSpecForApiEndpointResponse$Outbound` instead. */
  export type Outbound = GenerateOpenApiSpecForApiEndpointResponse$Outbound;
}
