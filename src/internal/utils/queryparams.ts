import { ParamDecorator } from "./pathparams";
import { ParamsSerializerOptions } from "axios";
import { parseParamDecorator } from "./utils";
import qs from "qs";

export const qpMetadataKey = "queryParam";

export function getQueryParamSerializer(
  queryParams: any
): ParamsSerializerOptions {
  let paramsSerializer: ParamsSerializerOptions = {
    encode: formSerializerExplode,
  };
  if (queryParams == null) return paramsSerializer;
  const fieldNames: string[] = Object.getOwnPropertyNames(queryParams);
  fieldNames.forEach((fname) => {
    const qpAnn: string = Reflect.getMetadata(
      qpMetadataKey,
      queryParams,
      fname
    );
    if (qpAnn == null) return { encode: (params: unknown) => "" };
    const qpDecorator: ParamDecorator = parseParamDecorator(
      qpAnn,
      fname,
      "form",
      true
    );
    if (qpDecorator == null) return;
    if (qpDecorator.Serialization === "json")
      paramsSerializer = {
        encode: (params: unknown) => {
          return JSON.stringify(params);
        },
      };
    else {
      switch (qpDecorator.Style) {
        case "deepObject":
          paramsSerializer = {
            encode: (params: unknown) => {
              return qs.stringify(params, { arrayFormat: "repeat" });
            },
          };
          break;
        case "form":
          if (qpDecorator.Explode) {
            paramsSerializer = {
              encode: formSerializerExplode,
            };
          } else {
            paramsSerializer = {
              encode: formSerializer,
            };
          }
          break;
        default:
          // go to next query parameter field, assume first implemented serializer will serialize all query parameters for this request
          return;
      }
    }
  });
  return paramsSerializer;
}

function formSerializer(params: unknown): string {
  const query: string[] = [];
  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (value !== Object(value)) query.push(`${key}=${value}`);
    else if (Array.isArray(value)) {
      const values: string = value.join(",");
      query.push(`${key}=${values}`);
    } else {
      const values: string = Object.entries(Object.assign({}, value))
        .map(([objKey, objValue]) => `${objKey},${objValue}`)
        .join(",");
      query.push(`${key}=${values}`);
    }
  });
  return query.join("&");
}

function formSerializerExplode(params: unknown): string {
  const query: string[] = [];
  Object.entries(Object.assign({}, params)).forEach(([key, value]) => {
    if (value !== Object(value)) query.push(`${key}=${value}`);
    else if (Array.isArray(value)) {
      query.push(value.map((aValue) => `${key}=${aValue}`).join("&"));
    } else
      query.push(
        Object.entries(Object.assign({}, value))
          .map(([objKey, objValue]) => `${objKey}=${objValue}`)
          .join("&")
      );
  });
  return query.join("&");
}
