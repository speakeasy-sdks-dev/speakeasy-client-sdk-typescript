import { Metadata } from "../../../internal/utils/utils";

export class Filter {
  @Metadata("json, name=key")
  Key: string;
  @Metadata("json, name=operator")
  Operator: string;
  @Metadata("json, name=value")
  Value: string;
}
