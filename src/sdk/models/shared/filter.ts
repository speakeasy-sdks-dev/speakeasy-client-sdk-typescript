/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A filter is a key-value pair that can be used to filter a list of requests.
 */
export type Filter = {
  /**
   * The key of the filter.
   */
  key: string;
  /**
   * The operator of the filter.
   */
  operator: string;
  /**
   * The value of the filter.
   */
  value: string;
};

/** @internal */
export const Filter$inboundSchema: z.ZodType<Filter, z.ZodTypeDef, unknown> = z
  .object({
    key: z.string(),
    operator: z.string(),
    value: z.string(),
  });

/** @internal */
export type Filter$Outbound = {
  key: string;
  operator: string;
  value: string;
};

/** @internal */
export const Filter$outboundSchema: z.ZodType<
  Filter$Outbound,
  z.ZodTypeDef,
  Filter
> = z.object({
  key: z.string(),
  operator: z.string(),
  value: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Filter$ {
  /** @deprecated use `Filter$inboundSchema` instead. */
  export const inboundSchema = Filter$inboundSchema;
  /** @deprecated use `Filter$outboundSchema` instead. */
  export const outboundSchema = Filter$outboundSchema;
  /** @deprecated use `Filter$Outbound` instead. */
  export type Outbound = Filter$Outbound;
}
