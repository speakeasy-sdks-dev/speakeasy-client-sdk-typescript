/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

export const ServerProd = "prod";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProd]: "https://api.prod.speakeasyapi.dev",
} as const;

export type SDKOptions = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security | (() => Promise<shared.Security>);

  /**
   * Allows setting the workspaceID parameter for all supported operations
   */
  workspaceID?: string | undefined;

  httpClient?: HTTPClient;
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
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProd;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "0.4.0 .",
  sdkVersion: "4.0.0-rc.1",
  genVersion: "2.415.4",
  userAgent:
    "speakeasy-sdk/typescript 4.0.0-rc.1 2.415.4 0.4.0 . @speakeasy-api/speakeasy-client-sdk-typescript",
} as const;
