/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { embedsGetEmbedAccessToken } from "../funcs/embedsGetEmbedAccessToken.js";
import { embedsGetValidEmbedAccessTokens } from "../funcs/embedsGetValidEmbedAccessTokens.js";
import { embedsRevokeEmbedAccessToken } from "../funcs/embedsRevokeEmbedAccessToken.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Embeds extends ClientSDK {
    /**
     * Get an embed access token for the current workspace.
     *
     * @remarks
     * Returns an embed access token for the current workspace. This can be used to authenticate access to externally embedded content.
     * Filters can be applied allowing views to be filtered to things like particular customerIds.
     */
    async getEmbedAccessToken(
        request: operations.GetEmbedAccessTokenRequest,
        options?: RequestOptions
    ): Promise<operations.GetEmbedAccessTokenResponse> {
        return unwrapAsync(embedsGetEmbedAccessToken(this, request, options));
    }

    /**
     * Get all valid embed access tokens for the current workspace.
     */
    async getValidEmbedAccessTokens(
        options?: RequestOptions
    ): Promise<operations.GetValidEmbedAccessTokensResponse> {
        return unwrapAsync(embedsGetValidEmbedAccessTokens(this, options));
    }

    /**
     * Revoke an embed access EmbedToken.
     */
    async revokeEmbedAccessToken(
        request: operations.RevokeEmbedAccessTokenRequest,
        options?: RequestOptions
    ): Promise<shared.ErrorT | undefined> {
        return unwrapAsync(embedsRevokeEmbedAccessToken(this, request, options));
    }
}
