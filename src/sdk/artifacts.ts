/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as operations from "./models/operations/index.js";
import * as shared from "./models/shared/index.js";

export enum GetBlobAcceptEnum {
    applicationJson = "application/json",
    applicationOctetStream = "application/octet-stream",
}

export enum GetManifestAcceptEnum {
    applicationJson = "application/json",
    applicationVndOciImageManifestV1PlusJson = "application/vnd.oci.image.manifest.v1+json",
}

export class Artifacts extends ClientSDK {
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
     * Get blob for a particular digest
     */
    async getBlob(
        request: operations.GetBlobRequest,
        options?: RequestOptions & { acceptHeaderOverride?: GetBlobAcceptEnum }
    ): Promise<operations.GetBlobResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetBlobRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            digest: encodeSimple$("digest", payload$.digest, {
                explode: false,
                charEncoding: "percent",
            }),
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
            organization_slug: encodeSimple$("organization_slug", payload$.organization_slug, {
                explode: false,
                charEncoding: "percent",
            }),
            workspace_slug: encodeSimple$("workspace_slug", payload$.workspace_slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/blobs/{digest}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept:
                options?.acceptHeaderOverride ||
                "application/json;q=1, application/octet-stream;q=0",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getBlob",
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

        const [result$] = await this.matcher<operations.GetBlobResponse>()
            .stream(200, operations.GetBlobResponse$inboundSchema)
            .json("default", operations.GetBlobResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Get manifest for a particular reference
     */
    async getManifest(
        request: operations.GetManifestRequest,
        options?: RequestOptions & { acceptHeaderOverride?: GetManifestAcceptEnum }
    ): Promise<operations.GetManifestResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetManifestRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
            organization_slug: encodeSimple$("organization_slug", payload$.organization_slug, {
                explode: false,
                charEncoding: "percent",
            }),
            revision_reference: encodeSimple$("revision_reference", payload$.revision_reference, {
                explode: false,
                charEncoding: "percent",
            }),
            workspace_slug: encodeSimple$("workspace_slug", payload$.workspace_slug, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/oci/v2/{organization_slug}/{workspace_slug}/{namespace_name}/manifests/{revision_reference}"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept:
                options?.acceptHeaderOverride ||
                "application/json;q=1, application/vnd.oci.image.manifest.v1+json;q=0",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getManifest",
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

        const [result$] = await this.matcher<operations.GetManifestResponse>()
            .json(200, operations.GetManifestResponse$inboundSchema, {
                ctype: "application/vnd.oci.image.manifest.v1+json",
            })
            .json("default", operations.GetManifestResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Each namespace contains many revisions.
     */
    async getNamespaces(options?: RequestOptions): Promise<operations.GetNamespacesResponse> {
        const path$ = this.templateURLComponent("/v1/artifacts/namespaces")();

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getNamespaces",
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

        const [result$] = await this.matcher<operations.GetNamespacesResponse>()
            .json(200, operations.GetNamespacesResponse$inboundSchema)
            .json("default", operations.GetNamespacesResponse$inboundSchema)
            .match(response);

        return result$;
    }

    async getOASSummary(
        request: operations.GetOASSummaryRequest,
        options?: RequestOptions
    ): Promise<operations.GetOASSummaryResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetOASSummaryRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
            revision_reference: encodeSimple$("revision_reference", payload$.revision_reference, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/artifacts/namespaces/{namespace_name}/revisions/{revision_reference}/summary"
        )(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getOASSummary",
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

        const [result$] = await this.matcher<operations.GetOASSummaryResponse>()
            .json(200, operations.GetOASSummaryResponse$inboundSchema)
            .json("default", operations.GetOASSummaryResponse$inboundSchema)
            .match(response);

        return result$;
    }

    async getRevisions(
        request: operations.GetRevisionsRequest,
        options?: RequestOptions
    ): Promise<operations.GetRevisionsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetRevisionsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/v1/artifacts/namespaces/{namespace_name}/revisions"
        )(pathParams$);

        const query$ = encodeFormQuery$({
            next_page_token: payload$.next_page_token,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getRevisions",
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

        const [result$] = await this.matcher<operations.GetRevisionsResponse>()
            .json(200, operations.GetRevisionsResponse$inboundSchema)
            .json("default", operations.GetRevisionsResponse$inboundSchema)
            .match(response);

        return result$;
    }

    async getTags(
        request: operations.GetTagsRequest,
        options?: RequestOptions
    ): Promise<operations.GetTagsResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetTagsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/artifacts/namespaces/{namespace_name}/tags")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "getTags",
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

        const [result$] = await this.matcher<operations.GetTagsResponse>()
            .json(200, operations.GetTagsResponse$inboundSchema)
            .json("default", operations.GetTagsResponse$inboundSchema)
            .match(response);

        return result$;
    }

    /**
     * Add tags to an existing revision
     */
    async postTags(
        request: operations.PostTagsRequest,
        options?: RequestOptions
    ): Promise<shared.ErrorT | undefined> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.PostTagsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.AddTags, { explode: true });

        const pathParams$ = {
            namespace_name: encodeSimple$("namespace_name", payload$.namespace_name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/artifacts/namespaces/{namespace_name}/tags")(
            pathParams$
        );

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "postTags",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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
     * Get access token for communicating with OCI distribution endpoints
     */
    async preflight(
        request?: shared.PreflightRequest | undefined,
        options?: RequestOptions
    ): Promise<operations.PreflightResponse> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => shared.PreflightRequest$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/artifacts/preflight")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const security$ = await extractSecurity(this.options$.security);
        const context = {
            operationID: "preflight",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
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

        const [result$] = await this.matcher<operations.PreflightResponse>()
            .json(200, operations.PreflightResponse$inboundSchema)
            .json("default", operations.PreflightResponse$inboundSchema)
            .match(response);

        return result$;
    }
}
