/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { encodeJSON as encodeJSON$, encodeSimple as encodeSimple$ } from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export enum GeneratePostmanCollectionForApiEndpointAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export class ApiEndpoints extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Delete an ApiEndpoint.
     *
     * @remarks
     * Delete an ApiEndpoint. This will also delete all associated Request Logs (if using a Postgres datastore).
     */
    async deleteApiEndpoint(
        request: operations.DeleteApiEndpointRequest,
        options?: RequestOptions
    ): Promise<shared.ErrorT | undefined> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteApiEndpointRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiEndpointID: encodeSimple$("apiEndpointID", payload$.apiEndpointID, {
                explode: false,
                charEncoding: "percent",
            }),
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "deleteApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<shared.ErrorT | undefined>()
            .void(200, shared.ErrorT$inboundSchema.optional())
            .json("default", shared.ErrorT$inboundSchema.optional())
            .match(response);

        return result$;
    }

    /**
     * Find an ApiEndpoint via its displayName.
     *
     * @remarks
     * Find an ApiEndpoint via its displayName (set by operationId from a registered OpenAPI schema).
     * This is useful for finding the ID of an ApiEndpoint to use in the /v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID} endpoints.
     */
    async findApiEndpoint(
        request: operations.FindApiEndpointRequest,
        options?: RequestOptions
    ): Promise<operations.FindApiEndpointResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.FindApiEndpointRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            displayName: encodeSimple$("displayName", payload$.displayName, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/find/{displayName}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "findApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.FindApiEndpointResponse>()
            .json(200, operations.FindApiEndpointResponse$inboundSchema)
            .json("default", operations.FindApiEndpointResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Generate an OpenAPI specification for a particular ApiEndpoint.
     *
     * @remarks
     * This endpoint will generate a new operation in any registered OpenAPI document if the operation does not already exist in the document.
     * Returns the original document and the newly generated document allowing a diff to be performed to see what has changed.
     */
    async generateOpenApiSpecForApiEndpoint(
        request: operations.GenerateOpenApiSpecForApiEndpointRequest,
        options?: RequestOptions
    ): Promise<operations.GenerateOpenApiSpecForApiEndpointResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GenerateOpenApiSpecForApiEndpointRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiEndpointID: encodeSimple$("apiEndpointID", payload$.apiEndpointID, {
                explode: false,
                charEncoding: "percent",
            }),
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/openapi"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "generateOpenApiSpecForApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GenerateOpenApiSpecForApiEndpointResponse>()
            .json(200, operations.GenerateOpenApiSpecForApiEndpointResponse$inboundSchema)
            .json("default", operations.GenerateOpenApiSpecForApiEndpointResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Generate a Postman collection for a particular ApiEndpoint.
     *
     * @remarks
     * Generates a postman collection that allows the endpoint to be called from postman variables produced for any path/query/header parameters included in the OpenAPI document.
     */
    async generatePostmanCollectionForApiEndpoint(
        request: operations.GeneratePostmanCollectionForApiEndpointRequest,
        options?: RequestOptions & {
            acceptHeaderOverride?: GeneratePostmanCollectionForApiEndpointAcceptEnum;
        }
    ): Promise<operations.GeneratePostmanCollectionForApiEndpointResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GeneratePostmanCollectionForApiEndpointRequest$outboundSchema.parse(
                    value$
                ),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiEndpointID: encodeSimple$("apiEndpointID", payload$.apiEndpointID, {
                explode: false,
                charEncoding: "percent",
            }),
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}/generate/postman"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept:
                options?.acceptHeaderOverride ||
                "application/json;q=1, application/octet-stream;q=0",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "generatePostmanCollectionForApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] =
            await this.matcher<operations.GeneratePostmanCollectionForApiEndpointResponse>()
                .stream(
                    200,
                    operations.GeneratePostmanCollectionForApiEndpointResponse$inboundSchema
                )
                .json(
                    "default",
                    operations.GeneratePostmanCollectionForApiEndpointResponse$inboundSchema
                )
                .match(response);

        return result$;
    }

    /**
     * Get all Api endpoints for a particular apiID.
     */
    async getAllApiEndpoints(
        request: operations.GetAllApiEndpointsRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllApiEndpointsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllApiEndpointsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/apis/{apiID}/api_endpoints")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getAllApiEndpoints",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetAllApiEndpointsResponse>()
            .json(200, operations.GetAllApiEndpointsResponse$inboundSchema)
            .json("default", operations.GetAllApiEndpointsResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get all ApiEndpoints for a particular apiID and versionID.
     */
    async getAllForVersionApiEndpoints(
        request: operations.GetAllForVersionApiEndpointsRequest,
        options?: RequestOptions
    ): Promise<operations.GetAllForVersionApiEndpointsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetAllForVersionApiEndpointsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getAllForVersionApiEndpoints",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetAllForVersionApiEndpointsResponse>()
            .json(200, operations.GetAllForVersionApiEndpointsResponse$inboundSchema)
            .json("default", operations.GetAllForVersionApiEndpointsResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get an ApiEndpoint.
     */
    async getApiEndpoint(
        request: operations.GetApiEndpointRequest,
        options?: RequestOptions
    ): Promise<operations.GetApiEndpointResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetApiEndpointRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            apiEndpointID: encodeSimple$("apiEndpointID", payload$.apiEndpointID, {
                explode: false,
                charEncoding: "percent",
            }),
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.GetApiEndpointResponse>()
            .json(200, operations.GetApiEndpointResponse$inboundSchema)
            .json("default", operations.GetApiEndpointResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Upsert an ApiEndpoint.
     *
     * @remarks
     * Upsert an ApiEndpoint. If the ApiEndpoint does not exist it will be created, otherwise it will be updated.
     */
    async upsertApiEndpoint(
        request: operations.UpsertApiEndpointRequest,
        options?: RequestOptions
    ): Promise<operations.UpsertApiEndpointResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpsertApiEndpointRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.ApiEndpoint, { explode: true });

        const pathParams$ = {
            apiEndpointID: encodeSimple$("apiEndpointID", payload$.apiEndpointID, {
                explode: false,
                charEncoding: "percent",
            }),
            apiID: encodeSimple$("apiID", payload$.apiID, {
                explode: false,
                charEncoding: "percent",
            }),
            versionID: encodeSimple$("versionID", payload$.versionID, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/apis/{apiID}/version/{versionID}/api_endpoints/{apiEndpointID}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "upsertApiEndpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PUT",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: [],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const [result$] = await this.matcher<operations.UpsertApiEndpointResponse>()
            .json(200, operations.UpsertApiEndpointResponse$inboundSchema)
            .json("default", operations.UpsertApiEndpointResponse$inboundSchema)
            .match(response);

        return result$;
    }
}
