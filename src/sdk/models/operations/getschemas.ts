import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { Type } from "class-transformer";


export class GetSchemasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=apiID" })
  apiID: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionID" })
  versionID: string;
}

export class GetSchemasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSchemasPathParams;
}

export class GetSchemasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata({ elemType: shared.Schema })
  schemata?: shared.Schema[];

  @SpeakeasyMetadata()
  statusCode: number;
}