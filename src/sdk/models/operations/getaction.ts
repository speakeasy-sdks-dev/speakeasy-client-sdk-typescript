/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class GetActionRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=org" })
    org: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repo" })
    repo: string;

    /**
     * The targetName of the workflow target.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=targetName" })
    targetName?: string;
}

export class GetActionResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Default error response
     */
    @SpeakeasyMetadata()
    error?: shared.ErrorT;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    githubGetActionResponse?: shared.GithubGetActionResponse;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
