/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../../lib/primitives.js";
import * as z from "zod";

export type User = {
    /**
     * Indicates whether the user is an admin.
     */
    admin: boolean;
    /**
     * Indicates whether the user has been confirmed.
     */
    confirmed: boolean;
    /**
     * Timestamp of the user's creation.
     */
    createdAt: Date;
    /**
     * Identifier of the default workspace.
     */
    defaultWorkspaceId?: string | undefined;
    /**
     * Display name of the user.
     */
    displayName: string;
    /**
     * Email address of the user.
     */
    email: string;
    /**
     * Indicates whether the email address has been verified.
     */
    emailVerified: boolean;
    /**
     * GitHub handle of the user.
     */
    githubHandle?: string | undefined;
    /**
     * Unique identifier for the user.
     */
    id: string;
    /**
     * Timestamp of the last login.
     */
    lastLoginAt: Date;
    /**
     * URL of the user's photo.
     */
    photoUrl?: string | undefined;
    /**
     * Timestamp of the user's last update.
     */
    updatedAt: Date;
    /**
     * Indicates whether the user has been whitelisted.
     */
    whitelisted: boolean;
};

/** @internal */
export const User$inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
    .object({
        admin: z.boolean(),
        confirmed: z.boolean(),
        created_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        default_workspace_id: z.string().optional(),
        display_name: z.string(),
        email: z.string(),
        email_verified: z.boolean(),
        github_handle: z.string().optional(),
        id: z.string(),
        last_login_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        photo_url: z.string().optional(),
        updated_at: z
            .string()
            .datetime({ offset: true })
            .transform((v) => new Date(v)),
        whitelisted: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            default_workspace_id: "defaultWorkspaceId",
            display_name: "displayName",
            email_verified: "emailVerified",
            github_handle: "githubHandle",
            last_login_at: "lastLoginAt",
            photo_url: "photoUrl",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type User$Outbound = {
    admin: boolean;
    confirmed: boolean;
    created_at: string;
    default_workspace_id?: string | undefined;
    display_name: string;
    email: string;
    email_verified: boolean;
    github_handle?: string | undefined;
    id: string;
    last_login_at: string;
    photo_url?: string | undefined;
    updated_at: string;
    whitelisted: boolean;
};

/** @internal */
export const User$outboundSchema: z.ZodType<User$Outbound, z.ZodTypeDef, User> = z
    .object({
        admin: z.boolean(),
        confirmed: z.boolean(),
        createdAt: z.date().transform((v) => v.toISOString()),
        defaultWorkspaceId: z.string().optional(),
        displayName: z.string(),
        email: z.string(),
        emailVerified: z.boolean(),
        githubHandle: z.string().optional(),
        id: z.string(),
        lastLoginAt: z.date().transform((v) => v.toISOString()),
        photoUrl: z.string().optional(),
        updatedAt: z.date().transform((v) => v.toISOString()),
        whitelisted: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            defaultWorkspaceId: "default_workspace_id",
            displayName: "display_name",
            emailVerified: "email_verified",
            githubHandle: "github_handle",
            lastLoginAt: "last_login_at",
            photoUrl: "photo_url",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace User$ {
    /** @deprecated use `User$inboundSchema` instead. */
    export const inboundSchema = User$inboundSchema;
    /** @deprecated use `User$outboundSchema` instead. */
    export const outboundSchema = User$outboundSchema;
    /** @deprecated use `User$Outbound` instead. */
    export type Outbound = User$Outbound;
}
