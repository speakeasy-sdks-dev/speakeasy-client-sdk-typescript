/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { Plugins } from "./plugins";
import { Requests } from "./requests";
import { Schemas } from "./schemas";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const ServerProd = "prod";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList: Record<string, string> = {
  [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security;
  /**
   * Allows overriding the default axios client used by the SDK
   */
  defaultClient?: AxiosInstance;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * The Speakeasy API allows teams to manage common operations with their APIs
 *
 * @see {@link https://docs.speakeasyapi.dev} - The Speakeasy Platform Documentation
 */
export class Speakeasy {
  /**
   * REST APIs for managing ApiEndpoint entities
   */
  public apiEndpoints: ApiEndpoints;
  /**
   * REST APIs for managing Api entities
   */
  public apis: Apis;
  /**
   * REST APIs for managing embeds
   */
  public embeds: Embeds;
  /**
   * REST APIs for managing Version Metadata entities
   */
  public metadata: Metadata;
  /**
   * REST APIs for managing and running plugins
   */
  public plugins: Plugins;
  /**
   * REST APIs for retrieving request information
   */
  public requests: Requests;
  /**
   * REST APIs for managing Schema entities
   */
  public schemas: Schemas;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.23.4";
  private _genVersion = "2.26.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[ServerProd];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.apiEndpoints = new ApiEndpoints(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.apis = new Apis(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.embeds = new Embeds(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.metadata = new Metadata(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.plugins = new Plugins(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.requests = new Requests(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.schemas = new Schemas(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }

  /**
   * Validate the current api key.
   */
  async validateApiKey(
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateApiKeyResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/auth/validate";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

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

    const res: operations.ValidateApiKeyResponse =
      new operations.ValidateApiKeyResponse({
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
}
