/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * A request to store publishing secrets for a github target
 */
export class GithubStorePublishingSecretsRequest extends SpeakeasyBase {
    /**
     * The generation lock ID
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_id" })
    generateGenLockId: string;

    /**
     * A map of secrets to store in the GitHub target
     */
    @SpeakeasyMetadata()
    @Expose({ name: "secrets" })
    secrets?: Record<string, string>;
}
