/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Artifacts } from "./artifacts";
import { Auth } from "./auth";
import { Embeds } from "./embeds";
import { Events } from "./events";
import { Github } from "./github";
import { Metadata } from "./metadata";
import { Organizations } from "./organizations";
import { Reports } from "./reports";
import { Requests } from "./requests";
import { Schemas } from "./schemas";
import { Suggest } from "./suggest";
import axios from "axios";
import { AxiosInstance } from "axios";

export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows setting the workspaceID parameter for all supported operations
     */
    workspaceID?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.4.0 .";
    sdkVersion = "3.3.9";
    genVersion = "2.347.8";
    userAgent =
        "speakeasy-sdk/typescript 3.3.9 2.347.8 0.4.0 . @speakeasy-api/speakeasy-client-sdk-typescript";
    globals: any;
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Speakeasy API: The Speakeasy API allows teams to manage common operations with their APIs
 *
 * @see {@link /docs} - The Speakeasy Platform Documentation
 */
export class Speakeasy {
    /**
     * REST APIs for managing Api entities
     */
    public apis: Apis;
    /**
     * REST APIs for managing ApiEndpoint entities
     */
    public apiEndpoints: ApiEndpoints;
    /**
     * REST APIs for managing Version Metadata entities
     */
    public metadata: Metadata;
    /**
     * REST APIs for managing Schema entities
     */
    public schemas: Schemas;
    public artifacts: Artifacts;
    /**
     * REST APIs for managing Authentication
     */
    public auth: Auth;
    /**
     * REST APIs for retrieving request information
     */
    public requests: Requests;
    public github: Github;
    public organizations: Organizations;
    /**
     * REST APIs for managing reports
     */
    public reports: Reports;
    /**
     * REST APIs for managing LLM OAS suggestions
     */
    public suggest: Suggest;
    /**
     * REST APIs for managing embeds
     */
    public embeds: Embeds;
    /**
     * REST APIs for capturing event data
     */
    public events: Events;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;

        if (!serverURL) {
            const server = props?.server ?? ServerProd;
            serverURL = ServerList[server];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            globals: {
                parameters: {
                    queryParam: {},
                    pathParam: {
                        workspaceID: props?.workspaceID,
                    },
                },
            },
            retryConfig: props?.retryConfig,
        });

        this.apis = new Apis(this.sdkConfiguration);
        this.apiEndpoints = new ApiEndpoints(this.sdkConfiguration);
        this.metadata = new Metadata(this.sdkConfiguration);
        this.schemas = new Schemas(this.sdkConfiguration);
        this.artifacts = new Artifacts(this.sdkConfiguration);
        this.auth = new Auth(this.sdkConfiguration);
        this.requests = new Requests(this.sdkConfiguration);
        this.github = new Github(this.sdkConfiguration);
        this.organizations = new Organizations(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
        this.suggest = new Suggest(this.sdkConfiguration);
        this.embeds = new Embeds(this.sdkConfiguration);
        this.events = new Events(this.sdkConfiguration);
    }
}
