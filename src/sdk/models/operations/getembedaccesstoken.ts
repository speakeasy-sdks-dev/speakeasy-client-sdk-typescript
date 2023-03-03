import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Type } from "class-transformer";


export class GetEmbedAccessTokenQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "queryParam, serialization=json;name=filters" })
  filters?: shared.Filters;
}

export class GetEmbedAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEmbedAccessTokenQueryParams;
}

export class GetEmbedAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  embedAccessTokenResponse?: shared.EmbedAccessTokenResponse;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}