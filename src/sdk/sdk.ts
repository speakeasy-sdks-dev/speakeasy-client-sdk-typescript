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
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export const ServerProd = "prod";

export const ServerList: Record<string, string> = {
  [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: The Speakeasy API allows teams to manage common operations with their APIs
 * https://docs.speakeasyapi.dev - The Speakeasy Platform Documentation
 */
export class Speakeasy {
  public apiEndpoints: ApiEndpoints;
  public apis: Apis;
  public embeds: Embeds;
  public metadata: Metadata;
  public plugins: Plugins;
  public requests: Requests;
  public schemas: Schemas;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "1.11.2";
  private _genVersion = "1.12.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[ServerProd];

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
   * validateApiKey - Validate the current api key.
   **/
  validateApiKey(
    config?: AxiosRequestConfig
  ): Promise<operations.ValidateApiKeyResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/auth/validate";

    const client: AxiosInstance = this._securityClient!;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
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
            res.error = utils.deserializeJSONResponse(
              httpRes?.data,
              shared.ErrorT
            );
          }
          break;
      }

      return res;
    });
  }
}
