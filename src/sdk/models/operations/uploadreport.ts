/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as b64$ from "../../../lib/base64.js";
import { blobLikeSchema } from "../../types/blobs.js";
import * as shared from "../shared/index.js";
import * as z from "zod";

export type FileT = {
    content: Uint8Array | string;
    fileName: string;
};

/**
 * The report file to upload provided as a multipart/form-data file segment.
 */
export type UploadReportRequestBody = {
    data: shared.Report;
    file: FileT | Blob;
};

/**
 * OK
 */
export type UploadReportUploadedReport = {
    url: string;
};

/** @internal */
export const FileT$inboundSchema: z.ZodType<FileT, z.ZodTypeDef, unknown> = z.object({
    content: b64$.zodInbound,
    fileName: z.string(),
});

/** @internal */
export type FileT$Outbound = {
    content: Uint8Array;
    fileName: string;
};

/** @internal */
export const FileT$outboundSchema: z.ZodType<FileT$Outbound, z.ZodTypeDef, FileT> = z.object({
    content: b64$.zodOutbound,
    fileName: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileT$ {
    /** @deprecated use `FileT$inboundSchema` instead. */
    export const inboundSchema = FileT$inboundSchema;
    /** @deprecated use `FileT$outboundSchema` instead. */
    export const outboundSchema = FileT$outboundSchema;
    /** @deprecated use `FileT$Outbound` instead. */
    export type Outbound = FileT$Outbound;
}

/** @internal */
export const UploadReportRequestBody$inboundSchema: z.ZodType<
    UploadReportRequestBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    data: shared.Report$inboundSchema,
    file: z.lazy(() => FileT$inboundSchema),
});

/** @internal */
export type UploadReportRequestBody$Outbound = {
    data: shared.Report$Outbound;
    file: FileT$Outbound | Blob;
};

/** @internal */
export const UploadReportRequestBody$outboundSchema: z.ZodType<
    UploadReportRequestBody$Outbound,
    z.ZodTypeDef,
    UploadReportRequestBody
> = z.object({
    data: shared.Report$outboundSchema,
    file: z.lazy(() => FileT$outboundSchema).or(blobLikeSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportRequestBody$ {
    /** @deprecated use `UploadReportRequestBody$inboundSchema` instead. */
    export const inboundSchema = UploadReportRequestBody$inboundSchema;
    /** @deprecated use `UploadReportRequestBody$outboundSchema` instead. */
    export const outboundSchema = UploadReportRequestBody$outboundSchema;
    /** @deprecated use `UploadReportRequestBody$Outbound` instead. */
    export type Outbound = UploadReportRequestBody$Outbound;
}

/** @internal */
export const UploadReportUploadedReport$inboundSchema: z.ZodType<
    UploadReportUploadedReport,
    z.ZodTypeDef,
    unknown
> = z.object({
    url: z.string(),
});

/** @internal */
export type UploadReportUploadedReport$Outbound = {
    url: string;
};

/** @internal */
export const UploadReportUploadedReport$outboundSchema: z.ZodType<
    UploadReportUploadedReport$Outbound,
    z.ZodTypeDef,
    UploadReportUploadedReport
> = z.object({
    url: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UploadReportUploadedReport$ {
    /** @deprecated use `UploadReportUploadedReport$inboundSchema` instead. */
    export const inboundSchema = UploadReportUploadedReport$inboundSchema;
    /** @deprecated use `UploadReportUploadedReport$outboundSchema` instead. */
    export const outboundSchema = UploadReportUploadedReport$outboundSchema;
    /** @deprecated use `UploadReportUploadedReport$Outbound` instead. */
    export type Outbound = UploadReportUploadedReport$Outbound;
}
