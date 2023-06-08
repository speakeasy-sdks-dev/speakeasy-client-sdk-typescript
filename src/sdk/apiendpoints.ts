/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * REST APIs for managing ApiEndpoint entities
 */
export class ApiEndpoints {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Delete an ApiEndpoint.
     *
     * @remarks
     * Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).
     */
    async deleteApiEndpoint(
        req: operations.DeleteApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.DeleteApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DeleteApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "delete",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.DeleteApiEndpointResponse = new operations.DeleteApiEndpointResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Find an ApiEndpoint via its displayName.
     *
     * @remarks
     * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
     * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
     */
    async findApiEndpoint(
        req: operations.FindApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.FindApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.FindApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.FindApiEndpointResponse = new operations.FindApiEndpointResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiEndpoint = utils.objectToClass(httpRes?.data, shared.ApiEndpoint);
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Generate an OpenAPI specification for a particular ApiEndpoint.
     *
     * @remarks
     * This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
     * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
     */
    async generateOpenApiSpecForApiEndpoint(
        req: operations.GenerateOpenApiSpecForApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GenerateOpenApiSpecForApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GenerateOpenApiSpecForApiEndpointResponse =
            new operations.GenerateOpenApiSpecForApiEndpointResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.generateOpenApiSpecDiff = utils.objectToClass(
                        httpRes?.data,
                        shared.GenerateOpenApiSpecDiff
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Generate a Postman collection for a particular ApiEndpoint.
     *
     * @remarks
     * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
     */
    async generatePostmanCollectionForApiEndpoint(
        req: operations.GeneratePostmanCollectionForApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GeneratePostmanCollectionForApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/octet-stream;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GeneratePostmanCollectionForApiEndpointResponse =
            new operations.GeneratePostmanCollectionForApiEndpointResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/octet-stream`)) {
                    const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                    const out: Uint8Array = new Uint8Array(resBody.length);
                    for (let i = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                    res.postmanCollection = out;
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Get all Api endpoints for a particular apiID.
     */
    async getAllApiEndpoints(
        req: operations.GetAllApiEndpointsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAllApiEndpointsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllApiEndpointsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(baseURL, "/v1/apis/{apiID}/api_endpoints", req);

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetAllApiEndpointsResponse =
            new operations.GetAllApiEndpointsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiEndpoints = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.apiEndpoints = utils.objectToClass(
                        httpRes?.data,
                        shared.ApiEndpoint,
                        resFieldDepth
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Get all ApiEndpoints for a particular apiID and versionID.
     */
    async getAllForVersionApiEndpoints(
        req: operations.GetAllForVersionApiEndpointsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetAllForVersionApiEndpointsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetAllForVersionApiEndpointsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetAllForVersionApiEndpointsResponse =
            new operations.GetAllForVersionApiEndpointsResponse({
                statusCode: httpRes.status,
                contentType: contentType,
                rawResponse: httpRes,
            });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiEndpoints = [];
                    const resFieldDepth: number = utils.getResFieldDepth(res);
                    res.apiEndpoints = utils.objectToClass(
                        httpRes?.data,
                        shared.ApiEndpoint,
                        resFieldDepth
                    );
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Get an ApiEndpoint.
     */
    async getApiEndpoint(
        req: operations.GetApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
            req
        );

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...config?.headers };
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "get",
            headers: headers,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetApiEndpointResponse = new operations.GetApiEndpointResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiEndpoint = utils.objectToClass(httpRes?.data, shared.ApiEndpoint);
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }

    /**
     * Upsert an ApiEndpoint.
     *
     * @remarks
     * Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.
     */
    async upsertApiEndpoint(
        req: operations.UpsertApiEndpointRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.UpsertApiEndpointResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpsertApiEndpointRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = utils.generateURL(
            baseURL,
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}",
            req
        );

        let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

        try {
            [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req, "apiEndpointInput", "json");
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`Error serializing request body, cause: ${e.message}`);
            }
        }

        const client: AxiosInstance =
            this.sdkConfiguration.securityClient || this.sdkConfiguration.defaultClient;

        const headers = { ...reqBodyHeaders, ...config?.headers };
        if (reqBody == null || Object.keys(reqBody).length === 0)
            throw new Error("request body is required");
        headers["Accept"] = "application/json;q=1, application/json;q=0";
        headers[
            "user-agent"
        ] = `speakeasy-sdk/${this.sdkConfiguration.language} ${this.sdkConfiguration.sdkVersion} ${this.sdkConfiguration.genVersion} ${this.sdkConfiguration.openapiDocVersion}`;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "put",
            headers: headers,
            data: reqBody,
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.UpsertApiEndpointResponse = new operations.UpsertApiEndpointResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.apiEndpoint = utils.objectToClass(httpRes?.data, shared.ApiEndpoint);
                }
                break;
            default:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
                }
                break;
        }

        return res;
    }
}
