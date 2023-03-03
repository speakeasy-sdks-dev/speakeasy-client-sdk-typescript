import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { plainToInstance } from "class-transformer";

export class Embeds {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getEmbedAccessToken - Get an embed access token for the current workspace.
   *
   * Returns an embed access token for the current workspace. This can be used to authenticate access to externally embedded content.
   * Filters can be applied allowing views to be filtered to things like particular customerIds.
  **/
  getEmbedAccessToken(
    req: operations.GetEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetEmbedAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetEmbedAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-token";
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    const queryParams: string = utils.serializeQueryParams(req.queryParams);
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetEmbedAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.embedAccessTokenResponse = plainToInstance(
                shared.EmbedAccessTokenResponse,
                httpRes?.data as shared.EmbedAccessTokenResponse,
                { excludeExtraneousValues: true }
              );
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getValidEmbedAccessTokens - Get all valid embed access tokens for the current workspace.
  **/
  getValidEmbedAccessTokens(
    config?: AxiosRequestConfig
  ): Promise<operations.GetValidEmbedAccessTokensResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/workspace/embed-access-tokens/valid";
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetValidEmbedAccessTokensResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.embedTokens = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * revokeEmbedAccessToken - Revoke an embed access EmbedToken.
  **/
  revokeEmbedAccessToken(
    req: operations.RevokeEmbedAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeEmbedAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeEmbedAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v1/workspace/embed-access-tokens/{tokenID}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...config?.headers};
    headers["user-agent"] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeEmbedAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType, rawResponse: httpRes,};
        switch (true) {
          case httpRes?.status == 200:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
              res.error = plainToInstance(
                shared.ErrorT,
                httpRes?.data as shared.ErrorT,
                { excludeExtraneousValues: true }
              );
            }
            break;
        }

        return res;
      })
  }

}
