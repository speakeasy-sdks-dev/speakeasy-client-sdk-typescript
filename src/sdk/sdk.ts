import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { ApiEndpoints } from "./apiendpoints";
import { Apis } from "./apis";
import { Embeds } from "./embeds";
import { Metadata } from "./metadata";
import { Requests } from "./requests";
import { Schemas } from "./schemas";

type OptsFunc = (sdk: SDK) => void;

export const ServerProd = "prod";

export const ServerList: Record<string, string> = {
	[ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.speakeasyapi.dev - The Speakeasy Platform Documentation*/
export class SDK {
  public apiEndpoints: ApiEndpoints;
  public apis: Apis;
  public embeds: Embeds;
  public metadata: Metadata;
  public requests: Requests;
  public schemas: Schemas;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.5.2";
  private _genVersion = "";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[ServerProd];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        props.security
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
}