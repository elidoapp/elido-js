export type { paths, components, operations } from "./openapi.js";

export type Schemas = components["schemas"];

export type PlanTier = Schemas["PlanTier"];
export type LinkStatus = Schemas["LinkStatus"];
export type WorkspaceRole = Schemas["WorkspaceRole"];

export type User = Schemas["User"];
export type Me = Schemas["Me"];
export type Workspace = Schemas["Workspace"];
export type WorkspaceWithRole = Schemas["WorkspaceWithRole"];
export type WorkspaceMember = Schemas["WorkspaceMember"];
export type WorkspaceMemberBasic = Schemas["WorkspaceMemberBasic"];
// Link is augmented with the safety fields the API returns
// (risk_score / abuse_status / scanned_at). They will move into the
// generated Link once openapi.d.ts is rebuilt; until then we layer the
// fields on via intersection so consumers see the full shape.
//
// `is_encrypted` is also layered on for the same reason
// (openapi.d.ts doesn't yet describe it). When true, destination_url
// is the sentinel "encrypted://" and the real target is recovered
// client-side via AES-GCM with the key from the URL fragment.
export type Link = Schemas["Link"] & {
  risk_score?: number;
  abuse_status?: "clean" | "suspect" | "blocked";
  scanned_at?: string | null;
  is_encrypted?: boolean;
};
// PaginatedLinks.items is the augmented Link too — Omit + replace.
export type PaginatedLinks = Omit<Schemas["PaginatedLinks"], "items"> & {
  items: Link[];
};
export type TimeseriesPoint = Schemas["TimeseriesPoint"];
export type TopLink = Schemas["TopLink"];

export type CreateUserInput = Schemas["CreateUserInput"];
export type CreateWorkspaceInput = Schemas["CreateWorkspaceInput"];
export type UpdateWorkspaceInput = Schemas["UpdateWorkspaceInput"];
// CreateLinkInput is augmented with the encryption
// envelope fields. When is_encrypted is true, destination_url should
// be empty / omitted; the server forces it to the "encrypted://"
// sentinel and rejects A/B variants, targeting rules, and deep-link
// metadata for the row.
export type CreateLinkInput = Omit<
  Schemas["CreateLinkInput"],
  "destination_url"
> & {
  destination_url?: string;
  is_encrypted?: boolean;
  encrypted_target?: string;
  enc_iv?: string;
  enc_alg?: "aes-256-gcm";
  enc_passphrase_salt?: string;
  enc_kdf?: "pbkdf2-sha256";
  enc_kdf_iters?: number;
};
export type UpdateLinkInput = Schemas["UpdateLinkInput"];
export type AddMemberInput = Schemas["AddMemberInput"];

export type Folder = Schemas["Folder"];
export type CreateFolderInput = Schemas["CreateFolderInput"];
export type UpdateFolderInput = Schemas["UpdateFolderInput"];
export type Tag = Schemas["Tag"];
export type CreateTagInput = Schemas["CreateTagInput"];
export type UpdateTagInput = Schemas["UpdateTagInput"];

export type WorkspacePixels = Schemas["WorkspacePixels"];
export type UpsertWorkspacePixelsInput = Schemas["UpsertWorkspacePixelsInput"];

export type Campaign = Schemas["Campaign"];
export type CreateCampaignInput = Schemas["CreateCampaignInput"];
export type UpdateCampaignInput = Schemas["UpdateCampaignInput"];

export type Conversion = Schemas["Conversion"];
export type ConversionSummary = Schemas["ConversionSummary"];

export type IPRule = Schemas["IPRule"];
export type CreateIPRuleInput = Schemas["CreateIPRuleInput"];
export type SetIPAllowlistEnabledInput = Schemas["SetIPAllowlistEnabledInput"];

export type ScimDirectory = Schemas["ScimDirectory"];
export type UpsertScimDirectoryInput = Schemas["UpsertScimDirectoryInput"];
export type SetScimEnabledInput = Schemas["SetScimEnabledInput"];
export type ScimDirectoryUser = Schemas["ScimDirectoryUser"];

export type CustomRole = Schemas["CustomRole"];
export type CreateCustomRoleInput = Schemas["CreateCustomRoleInput"];
export type UpdateCustomRoleInput = Schemas["UpdateCustomRoleInput"];
export type PermissionCategory = Schemas["PermissionCategory"];
export type CustomRolesListResponse = Schemas["CustomRolesListResponse"];
export type UpdateMemberRoleInput = Schemas["UpdateMemberRoleInput"];

export type MarketplaceDomain = Schemas["MarketplaceDomain"];
export type ClaimMarketplaceDomainResponse =
  Schemas["ClaimMarketplaceDomainResponse"];

export type ComplianceMode = Schemas["ComplianceMode"];
export type WorkspaceCompliance = Schemas["WorkspaceCompliance"];
export type UpdateWorkspaceComplianceInput =
  Schemas["UpdateWorkspaceComplianceInput"];

// SOC 2 / HIPAA evidence-collection snapshot. The full shape is generated
// from OpenAPI; we re-export it together with the sub-schemas so dashboard
// components can take a typed slice (`Posture`, `Access`, etc.) without
// importing the umbrella type every time.
export type EvidenceSnapshot = Schemas["EvidenceSnapshot"];
export type EvidencePosture = Schemas["EvidencePosture"];
export type EvidenceAccess = Schemas["EvidenceAccess"];
export type EvidenceAuditing = Schemas["EvidenceAuditing"];
export type EvidenceIntegrations = Schemas["EvidenceIntegrations"];

// Link safety / anti-abuse — defined inline (not yet in openapi.d.ts).
export interface LinkSafetyScan {
  id: number;
  link_id: number;
  workspace_id: number;
  source: string;
  verdict: "clean" | "suspect" | "blocked" | "unknown";
  score: number;
  threats: string[];
  signals: Record<string, unknown>;
  kind: "create" | "update" | "rescan";
  scanned_at: string;
}

// White-label workspace branding (Pro+; tier-gated server-side).
export interface WorkspaceBranding {
  workspace_id: number;
  brand_name: string;
  logo_url: string;
  primary_color: string;
  email_from_name: string;
  portal_hostname: string;
  enabled: boolean;
  // True when a branding row exists. False = caller is seeing platform defaults.
  configured: boolean;
}

export interface UpsertWorkspaceBrandingInput {
  brand_name?: string;
  logo_url?: string;
  primary_color?: string;
  email_from_name?: string;
  portal_hostname?: string;
  enabled?: boolean;
}

export interface SuspectLinkRow {
  id: number;
  slug: string;
  destination_url: string;
  risk_score: number;
  abuse_status: "clean" | "suspect" | "blocked";
  scanned_at: string | null;
  created_at: string;
}

import type { components } from "./openapi.js";
