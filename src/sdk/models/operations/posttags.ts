/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type PostTagsRequest = {
    namespaceName: string;
    /**
     * A JSON representation of the tags to add
     */
    addTags?: shared.AddTags | undefined;
};

/** @internal */
export const PostTagsRequest$inboundSchema: z.ZodType<PostTagsRequest, z.ZodTypeDef, unknown> = z
    .object({
        namespace_name: z.string(),
        AddTags: shared.AddTags$inboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            namespace_name: "namespaceName",
            AddTags: "addTags",
        });
    });

/** @internal */
export type PostTagsRequest$Outbound = {
    namespace_name: string;
    AddTags?: shared.AddTags$Outbound | undefined;
};

/** @internal */
export const PostTagsRequest$outboundSchema: z.ZodType<
    PostTagsRequest$Outbound,
    z.ZodTypeDef,
    PostTagsRequest
> = z
    .object({
        namespaceName: z.string(),
        addTags: shared.AddTags$outboundSchema.optional(),
    })
    .transform((v) => {
        return remap$(v, {
            namespaceName: "namespace_name",
            addTags: "AddTags",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostTagsRequest$ {
    /** @deprecated use `PostTagsRequest$inboundSchema` instead. */
    export const inboundSchema = PostTagsRequest$inboundSchema;
    /** @deprecated use `PostTagsRequest$outboundSchema` instead. */
    export const outboundSchema = PostTagsRequest$outboundSchema;
    /** @deprecated use `PostTagsRequest$Outbound` instead. */
    export type Outbound = PostTagsRequest$Outbound;
}
