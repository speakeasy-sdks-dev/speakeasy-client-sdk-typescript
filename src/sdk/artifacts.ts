/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

export enum GetBlobAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export enum GetManifestAcceptEnum {
    applicationJson = "application/json",
    applicationVndOciImageManifestV1PlusJson = "application/vnd.oci.image.manifest.v1+json",
}

export class Artifacts {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get blob for a particular digest
     */
    async getBlob(
        req: operations.GetBlobRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetBlobAcceptEnum
    ): Promise<operations.GetBlobResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetBlobRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/blobs/{digest}",
            req,
            this.sdkConfiguration.globals
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] = "application/json;q=1, application/octet-stream;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetBlobResponse = new operations.GetBlobResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/octet-stream`)) {
                    res.blob = httpRes?.data;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get manifest for a particular reference
     */
    async getManifest(
        req: operations.GetManifestRequest,
        config?: AxiosRequestConfig,
        acceptHeaderOverride?: GetManifestAcceptEnum
    ): Promise<operations.GetManifestResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetManifestRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/manifests/{revision_reference}",
            req,
            this.sdkConfiguration.globals
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        if (acceptHeaderOverride !== undefined) {
            headers["Accept"] = acceptHeaderOverride.toString();
        } else {
            headers["Accept"] =
                "application/json;q=1, application/vnd.oci.image.manifest.v1+json;q=0";
        }

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetManifestResponse = new operations.GetManifestResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (
                    utils.matchContentType(
                        responseContentType,
                        `application/vnd.oci.image.manifest.v1+json`
                    )
                ) {
                    res.manifest = utils.objectToClass(JSON.parse(decodedRes), shared.Manifest);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Each namespace contains many revisions.
     */
    async getNamespaces(config?: AxiosRequestConfig): Promise<operations.GetNamespacesResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/v1/artifacts/namespaces";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetNamespacesResponse = new operations.GetNamespacesResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.getNamespacesResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.GetNamespacesResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    async getRevisions(
        req: operations.GetRevisionsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetRevisionsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetRevisionsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/artifacts/namespaces/{namespace_name}/revisions",
            req,
            this.sdkConfiguration.globals
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req, this.sdkConfiguration.globals);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetRevisionsResponse = new operations.GetRevisionsResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.getRevisionsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.GetRevisionsResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    async getTags(
        req: operations.GetTagsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetTagsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetTagsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/artifacts/namespaces/{namespace_name}/tags",
            req,
            this.sdkConfiguration.globals
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetTagsResponse = new operations.GetTagsResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.getTagsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.GetTagsResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Add tags to an existing revision
     */
    async postTags(
        req: operations.PostTagsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PostTagsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PostTagsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/v1/artifacts/namespaces/{namespace_name}/tags",
            req,
            this.sdkConfiguration.globals
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "addTags", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PostTagsResponse = new operations.PostTagsResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }

    /**
     * Get access token for communicating with OCI distribution endpoints
     */
    async preflight(
        req: shared.PreflightRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.PreflightResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new shared.PreflightRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/v1/artifacts/preflight";

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, null];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "request", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = {
            ...reqBodyHeaders,
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            data: reqBody,
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.PreflightResponse = new operations.PreflightResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.preflightToken = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.PreflightToken
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            default:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.error = utils.objectToClass(JSON.parse(decodedRes), shared.ErrorT);
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
        }

        return res;
    }
}
