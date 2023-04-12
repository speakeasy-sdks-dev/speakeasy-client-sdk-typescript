/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
  objectToClass,
  SpeakeasyBase,
  SpeakeasyMetadata,
} from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class SchemaDiffValueChange extends SpeakeasyBase {
  /**
   * Represents the previous value of the element.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "From" })
  from: string;

  /**
   * Represents the current value of the element.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "To" })
  to: string;
}

/**
 * A SchemaDiff represents a diff of two Schemas.
 */
export class SchemaDiff extends SpeakeasyBase {
  /**
   * Holds every addition change in the diff.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additions" })
  additions: string[];

  /**
   * Holds every deletion change in the diff.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "deletions" })
  deletions: string[];

  /**
   * Holds every modification change in the diff.
   */
  @SpeakeasyMetadata({ elemType: SchemaDiffValueChange })
  @Expose({ name: "modifications" })
  @Transform(
    ({ value }) => {
      const obj: Record<string, SchemaDiffValueChange> = {};
      for (const key in value) {
        obj[key] = objectToClass(value[key], SchemaDiffValueChange);
      }
      return obj;
    },
    { toClassOnly: true }
  )
  modifications: Record<string, SchemaDiffValueChange>;
}
