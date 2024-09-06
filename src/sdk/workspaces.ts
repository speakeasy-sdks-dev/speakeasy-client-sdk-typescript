/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { workspacesGetWorkspace } from "../funcs/workspacesGetWorkspace.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Workspaces extends ClientSDK {
    /**
     * Get workspace
     *
     * @remarks
     * Get information about a particular workspace.
     */
    async getWorkspace(
        request: operations.GetWorkspaceRequest,
        options?: RequestOptions
    ): Promise<operations.GetWorkspaceResponse> {
        return unwrapAsync(workspacesGetWorkspace(this, request, options));
    }
}