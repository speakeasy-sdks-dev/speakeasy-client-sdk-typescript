/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { InteractionType } from "./interactiontype";
import { Expose, Transform } from "class-transformer";

/**
 * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
 */
export enum GenerateBumpType {
    Major = "major",
    Minor = "minor",
    Patch = "patch",
    Custom = "custom",
    None = "none",
}

/**
 * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
 */
export enum OpenapiDiffBumpType {
    Major = "major",
    Minor = "minor",
    Patch = "patch",
    None = "none",
}

export class CliEvent extends SpeakeasyBase {
    /**
     * Remote commit ID.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "commit_head" })
    commitHead?: string;

    /**
     * Name of the CI environment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "continuous_integration_environment" })
    continuousIntegrationEnvironment?: string;

    /**
     * Timestamp when the event was created in the database.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "created_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    createdAt: Date;

    /**
     * Duration of the event in milliseconds.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "duration_ms" })
    durationMs?: number;

    /**
     * Error message if the event was not successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "error" })
    error?: string;

    /**
     * Unique identifier for each execution of the CLI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "execution_id" })
    executionId: string;

    /**
     * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_bump_type" })
    generateBumpType?: GenerateBumpType;

    /**
     * Checksum of the configuration file (post generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_checksum" })
    generateConfigPostChecksum?: string;

    /**
     * Rendered configuration file (post generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_raw" })
    generateConfigPostRaw?: string;

    /**
     * The version of the customer's SDK that we just generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_post_version" })
    generateConfigPostVersion?: string;

    /**
     * Checksum of the configuration file (prior to generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_checksum" })
    generateConfigPreChecksum?: string;

    /**
     * Rendered configuration file (prior to generation)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_raw" })
    generateConfigPreRaw?: string;

    /**
     * The version of the customer's SDK before we generated
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_config_pre_version" })
    generateConfigPreVersion?: string;

    /**
     * Eligible feature set during generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_eligible_features" })
    generateEligibleFeatures?: string;

    /**
     * gen.lock ID (expected to be a uuid).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_id" })
    generateGenLockId?: string;

    /**
     * Features post generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_post_features" })
    generateGenLockPostFeatures?: string;

    /**
     * Blob digest of the Previous Generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_blob_digest" })
    generateGenLockPreBlobDigest?: string;

    /**
     * Checksum of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_doc_checksum" })
    generateGenLockPreDocChecksum?: string;

    /**
     * info.Version of the Previous Rendered OpenAPI document (prior to generation, via gen lock)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_doc_version" })
    generateGenLockPreDocVersion?: string;

    /**
     * Features prior to generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_features" })
    generateGenLockPreFeatures?: string;

    /**
     * Namespace name of the Previous Generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_namespace_name" })
    generateGenLockPreNamespaceName?: string;

    /**
     * Revision digest of the Previous Generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_revision_digest" })
    generateGenLockPreRevisionDigest?: string;

    /**
     * Artifact version for the Previous Generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_gen_lock_pre_version" })
    generateGenLockPreVersion?: string;

    /**
     * The number of operations ignored in generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_number_of_operations_ignored" })
    generateNumberOfOperationsIgnored?: number;

    /**
     * The number of operations used in generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_number_of_operations_used" })
    generateNumberOfOperationsUsed?: number;

    /**
     * Indicates whether tests were output.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_output_tests" })
    generateOutputTests?: boolean;

    /**
     * Indicates whether the target was considered published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_published" })
    generatePublished?: boolean;

    /**
     * Expected Repo URL, for use in documentation generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_repo_url" })
    generateRepoUrl?: string;

    /**
     * The target of the event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target" })
    generateTarget?: string;

    /**
     * The version of the target.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_target_version" })
    generateTargetVersion?: string;

    /**
     * Version of the generation logic used.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "generate_version" })
    generateVersion?: string;

    /**
     * GitHub organization of the action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_organization" })
    ghActionOrganization?: string;

    /**
     * GitHub Action ref value.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_ref" })
    ghActionRef?: string;

    /**
     * GitHub repository of the action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_repository" })
    ghActionRepository?: string;

    /**
     * Link to the GitHub action run.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_run_link" })
    ghActionRunLink?: string;

    /**
     * Version of the GitHub action.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "gh_action_version" })
    ghActionVersion?: string;

    /**
     * Current working directory relative to the git root.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_relative_cwd" })
    gitRelativeCwd?: string;

    /**
     * Default owner for git remote.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_remote_default_owner" })
    gitRemoteDefaultOwner?: string;

    /**
     * Default repository name for git remote.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_remote_default_repo" })
    gitRemoteDefaultRepo?: string;

    /**
     * User email from git configuration.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_user_email" })
    gitUserEmail?: string;

    /**
     * User's name from git configuration. (not GitHub username)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "git_user_name" })
    gitUserName?: string;

    /**
     * Remote hostname.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "hostname" })
    hostname?: string;

    /**
     * Unique identifier for each event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Type of interaction.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "interaction_type" })
    interactionType: InteractionType;

    /**
     * The last step of the event.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "last_step" })
    lastStep?: string;

    /**
     * The checksum of the lint report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lint_report_digest" })
    lintReportDigest?: string;

    /**
     * The number of errors in the lint report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lint_report_error_count" })
    lintReportErrorCount?: number;

    /**
     * The number of info messages in the lint report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lint_report_info_count" })
    lintReportInfoCount?: number;

    /**
     * The number of warnings in the lint report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "lint_report_warning_count" })
    lintReportWarningCount?: number;

    /**
     * Timestamp when the event completed, in local time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "local_completed_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    localCompletedAt?: Date;

    /**
     * Timestamp when the event started, in local time.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "local_started_at" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    localStartedAt: Date;

    /**
     * Checksum of the currently Rendered OpenAPI document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "management_doc_checksum" })
    managementDocChecksum?: string;

    /**
     * Version taken from info.version field of the Rendered OpenAPI document.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "management_doc_version" })
    managementDocVersion?: string;

    /**
     * Mermaid diagram
     */
    @SpeakeasyMetadata()
    @Expose({ name: "mermaid_diagram" })
    mermaidDiagram?: string;

    /**
     * The blob digest of the base source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_base_source_blob_digest" })
    openapiDiffBaseSourceBlobDigest?: string;

    /**
     * The namespace name of the base source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_base_source_namespace_name" })
    openapiDiffBaseSourceNamespaceName?: string;

    /**
     * The revision digest of the base source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_base_source_revision_digest" })
    openapiDiffBaseSourceRevisionDigest?: string;

    /**
     * The number of breaking changes in the openapi diff report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_breaking_changes_count" })
    openapiDiffBreakingChangesCount?: number;

    /**
     * Bump type of the lock file (calculated semver delta, or a custom change (manual release))
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_bump_type" })
    openapiDiffBumpType?: OpenapiDiffBumpType;

    /**
     * The checksum of the openapi diff report.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "openapi_diff_report_digest" })
    openapiDiffReportDigest?: string;

    /**
     * Name of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_name" })
    publishPackageName?: string;

    /**
     * Name of the registry where the package was published.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_registry_name" })
    publishPackageRegistryName?: string;

    /**
     * URL of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_url" })
    publishPackageUrl?: string;

    /**
     * Version of the published package.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "publish_package_version" })
    publishPackageVersion?: string;

    /**
     * Full CLI command.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "raw_command" })
    rawCommand?: string;

    /**
     * Label of the git repository.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "repo_label" })
    repoLabel?: string;

    /**
     * The blob digest of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_blob_digest" })
    sourceBlobDigest?: string;

    /**
     * The namespace name of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_namespace_name" })
    sourceNamespaceName?: string;

    /**
     * The revision digest of the source.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "source_revision_digest" })
    sourceRevisionDigest?: string;

    /**
     * Identifier of the Speakeasy API key.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "speakeasy_api_key_name" })
    speakeasyApiKeyName: string;

    /**
     * Version of the Speakeasy CLI.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "speakeasy_version" })
    speakeasyVersion: string;

    /**
     * Indicates whether the event was successful.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "success" })
    success: boolean;

    /**
     * Workflow lock file (post execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_lock_post_raw" })
    workflowLockPostRaw?: string;

    /**
     * Workflow lock file (prior to execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_lock_pre_raw" })
    workflowLockPreRaw?: string;

    /**
     * Workflow file (post execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_post_raw" })
    workflowPostRaw?: string;

    /**
     * Workflow file (prior to execution)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow_pre_raw" })
    workflowPreRaw?: string;

    /**
     * Identifier of the workspace.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workspace_id" })
    workspaceId: string;
}
