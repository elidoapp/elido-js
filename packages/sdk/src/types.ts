// Core types are generated from OpenAPI spec via @elido/api-types.
// This file re-exports them and adds SDK-only types (billing, options).

export type {
  PlanTier,
  LinkStatus,
  WorkspaceRole,
  User,
  Me,
  Workspace,
  WorkspaceWithRole,
  WorkspaceMember,
  Link,
  PaginatedLinks,
  CreateWorkspaceInput,
  UpdateWorkspaceInput,
  CreateLinkInput,
  UpdateLinkInput,
  Folder,
  CreateFolderInput,
  UpdateFolderInput,
  Tag,
  CreateTagInput,
  UpdateTagInput,
  WorkspacePixels,
  UpsertWorkspacePixelsInput,
  Campaign,
  CreateCampaignInput,
  UpdateCampaignInput,
  Conversion,
  ConversionSummary,
  IPRule,
  CreateIPRuleInput,
  SetIPAllowlistEnabledInput,
  ScimDirectory,
  UpsertScimDirectoryInput,
  SetScimEnabledInput,
  ScimDirectoryUser,
  TimeseriesPoint,
  TopLink,
  CustomRole,
  CreateCustomRoleInput,
  UpdateCustomRoleInput,
  PermissionCategory,
  CustomRolesListResponse,
  UpdateMemberRoleInput,
  MarketplaceDomain,
  ClaimMarketplaceDomainResponse,
  ComplianceMode,
  WorkspaceCompliance,
  UpdateWorkspaceComplianceInput,
  LinkSafetyScan,
  SuspectLinkRow,
  WorkspaceBranding,
  UpsertWorkspaceBrandingInput,
} from "@elido/api-types";

// === Bulk link mutate ===

export type BulkLinkAction =
  | { action: "add_tags"; tags: string[] }
  | { action: "remove_tags"; tags: string[] }
  | { action: "set_status"; status: "active" | "disabled" }
  | { action: "delete" }
  | { action: "restore" };

export interface BulkMutateInput {
  link_ids: number[];
  action: BulkLinkAction["action"];
  tags?: string[];
  status?: "active" | "disabled";
}

export interface BulkMutateResultItem {
  link_id: number;
  status: "ok" | "error";
  error?: string;
}

export interface BulkMutateResponse {
  ok: number;
  failed: number;
  items: BulkMutateResultItem[];
}

// === Metadata fetcher ===

export interface LinkMetadata {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  site_name?: string;
  type?: string;
}

// === Domains (workspace-owned) ===

export interface WorkspaceDomain {
  id: number;
  workspace_id: number | null;
  hostname: string;
  kind: "system_tier" | "custom";
  ssl_status: "pending" | "active" | "error";
  is_wildcard: boolean;
  created_at: string;
  updated_at: string;
  apple_app_site_association?: unknown;
  android_asset_links?: unknown;
}

export interface UpdateAppLinksInput {
  apple_app_site_association?: unknown;
  android_asset_links?: unknown;
}

// === Workspace SSO config (WorkOS) ===

export interface WorkspaceSsoConfig {
  workspace_id: number;
  organization_id: string;
  connection_id: string;
  domain: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface UpsertWorkspaceSsoConfigInput {
  organization_id: string;
  connection_id: string;
  domain: string;
  enabled: boolean;
}

export interface SsoDiscoverResult {
  workspace_id: number;
  organization_id: string;
  connection_id: string;
  domain: string;
}

// === Audit log ===

export interface AuditEvent {
  id: number;
  workspace_id: number;
  actor_user_id?: number | null;
  actor_email?: string | null;
  actor_full_name?: string | null;
  kind: string;
  target_type: string;
  target_id?: number | null;
  metadata: Record<string, unknown>;
  ip?: string | null;
  user_agent: string;
  created_at: string;
}

// === Workspace invitations ===

export interface CreateInvitationInput {
  email: string;
  role: "admin" | "editor" | "viewer";
}

export interface Invitation {
  id: number;
  workspace_id: number;
  email: string;
  role: "owner" | "admin" | "editor" | "viewer";
  /** Returned only on create — never on list. */
  token?: string;
  status: "pending" | "accepted" | "revoked" | "expired";
  expires_at: string;
  accepted_at?: string | null;
  created_at: string;
  invited_by_user_id?: number | null;
}

export interface PendingInvitation {
  id: number;
  workspace_id: number;
  email: string;
  role: "owner" | "admin" | "editor" | "viewer";
  status: "pending";
  expires_at: string;
  created_at: string;
  invited_by_user_id?: number | null;
}

export interface InvitationPreview {
  workspace_id: number;
  workspace_name: string;
  email: string;
  role: "owner" | "admin" | "editor" | "viewer";
  status: "pending" | "accepted" | "revoked" | "expired";
  expires_at: string;
}

export interface ListLinksOptions {
  limit?: number;
  /**
   * Cursor for cursor-paginated calls. Pass the `next_cursor` from a
   * previous response to fetch the following page. Omit on the first
   * page.
   */
  cursor?: string;
  /**
   * @deprecated Pass `cursor` instead. Offset-based pagination is still
   * accepted by the server for one release and emits a `Deprecation`
   * response header.
   */
  offset?: number;
  tags?: string[];
  q?: string;
  /** Folder id to scope to. Pass "none" to restrict to the no-folder
   *  bucket; omit for "any folder". */
  folder?: number | "none";
  /** Custom-domain hostname to scope to. The server resolves this to
   *  the matching domains.id and filters links by domain_id. Unknown
   *  hostname returns an empty page. */
  host?: string;
  /** Link state filter. Omit for "any". */
  status?: "active" | "disabled";
}

export interface WorkspaceTag {
  tag: string;
  link_count: number;
}

// === Saved views (named filter/column presets for list surfaces) ===

export interface SavedView {
  id: number;
  workspace_id: number;
  kind: "links";
  name: string;
  /** Opaque preset blob owned by the client (URL params + table prefs). */
  state: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface SavedViewInput {
  name: string;
  state: Record<string, unknown>;
  kind?: "links";
}

// === QR templates (named presets of QR appearance settings) ===

export interface QRTemplate {
  id: number;
  workspace_id: number;
  name: string;
  /** Opaque QR appearance blob owned by the client (design minus content). */
  design: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface QRTemplateInput {
  name: string;
  design: Record<string, unknown>;
}

// === Public-share tokens ===

export interface CreateShareInput {
  /**
   * How long the token stays valid. Accepts Go duration syntax ("1h",
   * "30m") or "Nd" shorthand ("7d", "30d"). Server clamps to [1h, 365d].
   * Omit to use the server default (30d).
   */
  expires_in?: string;
}

export interface CreateShareResponse {
  token: string;
  /** RFC 3339 timestamp. */
  expires_at: string;
}

// === Analytics query options ===

export interface AnalyticsRange {
  from: string;
  to: string;
  /**
   * Optional narrow to a single link. When provided, all analytics queries
   * filter `click_events` by `link_id` so per-link panels can reuse the
   * same workspace-level endpoints without parallel routes.
   */
  linkId?: number;
  /**
   * Optional narrow to a single redirect hostname. Used by the
   * /dashboard/domains drill-down to scope every analytics widget on
   * /dashboard/analytics to clicks on that custom domain.
   */
  host?: string;
}

export interface TimeseriesOptions extends AnalyticsRange {
  interval?: "hour" | "day";
}

export interface TimeseriesResponse {
  items: import("@elido/api-types").TimeseriesPoint[];
}

export interface TopLinksOptions extends AnalyticsRange {
  limit?: number;
}

export interface TopLinksResponse {
  items: import("@elido/api-types").TopLink[];
}

export interface BreakdownPoint {
  key: string;
  count: number;
}

export interface BreakdownResponse {
  items: BreakdownPoint[];
}

export interface BreakdownOptions extends AnalyticsRange {
  limit?: number;
}

// === Advanced analytics ===

export interface FunnelStep {
  window: string;
  unique_visitors: number;
  total_clicks: number;
}

export interface FunnelResponse {
  steps: FunnelStep[];
}

/**
 * Funnel-builder request / response. The legacy GET
 * /funnel handler still returns FunnelStep[] (engagement decay over
 * time windows); the new POST handler accepts a multi-step definition
 * and returns one row per declared step with the chained drop-off.
 */
export type FunnelStepKind = "click" | "conversion";

export interface FunnelStepInput {
  kind: FunnelStepKind;
  link_id?: number;
  event_name?: string;
  time_window_seconds: number;
  /** Optional human label echoed back in the response. */
  name?: string;
}

export type AttributionModel = "first_touch" | "last_touch" | "linear";

export interface FunnelV2Request {
  steps: FunnelStepInput[];
  from: string;
  to: string;
  attribution_model?: AttributionModel;
}

export interface FunnelV2StepResult {
  name: string;
  kind: FunnelStepKind;
  count: number;
  /** 0..1 share of visitors that did NOT advance from the prior step. */
  dropoff_pct: number;
}

export interface FunnelV2Response {
  steps: FunnelV2StepResult[];
  attribution_model: AttributionModel;
}

/** Saved funnel definition row (/funnels CRUD). */
export interface FunnelDefinition {
  id: number;
  workspace_id: number;
  name: string;
  steps: FunnelStepInput[];
  attribution_model: AttributionModel;
  created_at: string;
  updated_at: string;
}

export interface CreateFunnelDefinitionInput {
  name: string;
  steps: FunnelStepInput[];
  attribution_model?: AttributionModel;
}

export interface CohortBucket {
  cohort_week: string;
  week_offset: number;
  visitors: number;
}

export interface CohortResponse {
  buckets: CohortBucket[];
}

export interface CohortOptions extends AnalyticsRange {
  weeks?: number;
}

export interface EngagementSummary {
  total_clicks: number;
  unique_visitors: number;
  returning_visitors: number;
  avg_clicks_per_visitor: number;
  bounce_rate: number;
}

/**
 * One cell of the hour-of-day × day-of-week heatmap. `dow` follows
 * ClickHouse `toDayOfWeek` (1 = Monday … 7 = Sunday); `hour` is 0..23 UTC.
 * The server omits zero-click cells — the frontend should zero-fill the
 * 7×24 grid.
 */
export interface HeatmapBucket {
  hour: number;
  dow: number;
  count: number;
}

export interface HeatmapResponse {
  cells: HeatmapBucket[];
}

/**
 * One marker on the geographic heatmap. With the city-grained edge geo
 * rollout, `region` and `city` are populated for rows where the edge
 * resolved a real location, and `lat`/`lng` are averaged across all
 * clicks in that bucket. When the row carries only a country (older data
 * or header-only resolution), region/city are omitted and lat/lng come
 * from the server-side country centroid table.
 */
export interface GeoHeatmapBucket {
  country: string;
  region?: string;
  city?: string;
  lat: number;
  lng: number;
  count: number;
}

export interface GeoHeatmapResponse {
  cells: GeoHeatmapBucket[];
}

/**
 * One row of the (country, region) or (country, city) top-N breakdowns.
 * Country is always populated; exactly one of region / city carries the
 * second dimension depending on which endpoint produced the row.
 */
export interface GeoBreakdownPoint {
  country: string;
  region?: string;
  city?: string;
  count: number;
}

export interface TopGeoBreakdownResponse {
  points: GeoBreakdownPoint[];
}

/**
 * One row of the LTV report — a single acquisition cohort (ISO week of
 * a link's first click) with engagement metrics from ClickHouse and
 * attributed revenue from Stripe / Shopify conversions joined on
 * link_id. Revenue is denominated in `currency`; cohorts with no
 * conversions in that currency report `revenue_cents = 0`.
 */
export interface LTVCohort {
  cohort_week: string;
  links_acquired: number;
  visitors: number;
  clicks_total: number;
  revenue_cents: number;
  currency: string;
  clicks_per_link: number;
  revenue_per_link_cents: number;
  revenue_per_visitor_cents: number;
}

export interface LTVResponse {
  currency: string;
  cohorts: LTVCohort[];
}

export interface LTVOptions extends AnalyticsRange {
  /** 3-letter ISO currency code. Defaults to USD on the server. */
  currency?: string;
}

// === Traffic quality / anonymizer signal ===

/**
 * Anonymizer type vocabulary.
 *   - "clean"   — IP resolves to a residential/ISP AS
 *   - "tor"     — IP is a known Tor exit node
 *   - "vpn"     — reserved; requires MaxMind Anonymous-IP feed
 *   - "hosting" — IP's AS is a known hosting/cloud provider
 *   - "unknown" — no ASN DB configured or IP not resolved
 */
export type AnonymizerType = "clean" | "tor" | "vpn" | "hosting" | "unknown";

export interface TrafficQualityResponse {
  total_clicks: number;
  /** Breakdown of click counts by anonymizer type. */
  by_type: Partial<Record<AnonymizerType, number>>;
  /**
   * Percentage of clicks from anonymizing networks (tor + vpn + hosting)
   * relative to total.  0–100.  "unknown" is excluded because it means
   * "no ASN DB configured", not confirmed anonymizing traffic.
   */
  pct_anonymizer: number;
}

/**
 * Reshaped traffic-quality payload returned by the city-grained analytics
 * endpoints (`topReferrers` / `topDestinations` siblings). Carries the
 * anonymizer distribution as a sorted list plus suspicious / total totals
 * for direct rendering. Mirrors the Go `clickhouse.TrafficQuality` struct.
 */
export interface TrafficQuality {
  anonymizer_breakdown: BreakdownPoint[];
  suspicious_count: number;
  total_count: number;
}

// === Compliance evidence ===
//
// Re-export the OpenAPI-generated types so consumers don't have to
// dip into `@elido/api-types` directly. Keeping them under
// `@elido/sdk` matches the pattern used everywhere else.
export type {
  EvidenceSnapshot,
  EvidencePosture,
  EvidenceAccess,
  EvidenceAuditing,
  EvidenceIntegrations,
} from "@elido/api-types";

export interface ClickEvent {
  ts: string;
  link_id: number;
  slug: string;
  host: string;
  user_agent: string;
  referer: string;
  ip: string;
  country_code: string;
  device: string;
  browser: string;
  destination: string;
}

export interface RecentClicksOptions extends AnalyticsRange {
  limit?: number;
  /**
   * Opaque cursor returned by a previous call's `next_cursor`. Omit on
   * the first page. Cursor-based pagination is preferred over the
   * legacy time-window slide.
   */
  cursor?: string;
}

export interface RecentClicksResponse {
  items: ClickEvent[];
  /** Null on the last page. */
  next_cursor?: string | null;
}

// === Bio pages ===

/** Visitor theme tokens (packages/visitor-theme RawTheme). Legacy rows only carry the first five. */
export type VisitorPreset =
  | "paper"
  | "night"
  | "photo"
  | "studio"
  | "sunset"
  | "aurora"
  | "mint"
  | "terminal"
  | "custom";
export type VisitorFont =
  | "modern"
  | "editorial"
  | "grotesk"
  | "system"
  | "classic"
  | "mono";
export type VisitorBackground =
  | { type: "solid" }
  | { type: "gradient"; color2: string; angle?: number }
  | { type: "image"; image_url: string; overlay: number; luma?: number };

export interface VisitorThemeTokens {
  preset?: VisitorPreset;
  bg_color?: string;
  text_color?: string;
  button_color?: string;
  button_style?: "filled" | "outline" | "outlined" | "soft" | "glass" | "hard";
  button_radius?: string;
  font?: VisitorFont;
  bg?: VisitorBackground;
  /** A request: hidden only when the plan has white label. */
  show_badge?: boolean;
}

export interface BioTheme extends VisitorThemeTokens {
  bg_color: string;
  text_color: string;
  button_style: "filled" | "outline" | "outlined" | "soft" | "glass" | "hard";
  button_color: string;
  button_radius: string;
}

export type BioBlockType =
  | "link"
  | "social"
  | "image_card"
  | "product"
  | "video"
  | "newsletter"
  | "header"
  | "text"
  | "divider";

export interface BioPage {
  id: number;
  workspace_id: number;
  username: string;
  display_name: string;
  bio: string;
  avatar_url?: string;
  theme: BioTheme;
  locale?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

/** A bio block. Plain links are type "link"; `data` is the per-type payload. */
export interface BioLink {
  id: number;
  bio_page_id: number;
  type: BioBlockType;
  title: string;
  url: string;
  icon?: string;
  subtitle?: string;
  thumb_url?: string;
  highlight: boolean;
  data: Record<string, unknown>;
  sort_order: number;
  created_at: string;
}

export interface CreateBioPageInput {
  username: string;
  display_name: string;
  bio?: string;
  avatar_url?: string;
}

export interface UpdateBioPageInput {
  display_name?: string;
  bio?: string;
  avatar_url?: string;
  theme?: VisitorThemeTokens;
  locale?: string;
  is_published?: boolean;
}

export interface CreateBioLinkInput {
  type?: BioBlockType;
  title?: string;
  url?: string;
  icon?: string;
  subtitle?: string;
  thumb_url?: string;
  highlight?: boolean;
  data?: Record<string, unknown>;
  sort_order?: number;
}

export interface UpdateBioLinkInput {
  title?: string;
  url?: string;
  icon?: string;
  subtitle?: string;
  thumb_url?: string;
  highlight?: boolean;
  data?: Record<string, unknown>;
  sort_order?: number;
}

// === Link galleries ===

export type GalleryVisibility = "public" | "unlisted" | "private";
export type GalleryTheme = "classic" | "dark" | "minimal" | "brand";

export interface Gallery {
  id: number;
  workspace_id: number;
  slug: string;
  title: string;
  description: string;
  theme: GalleryTheme;
  /** Visitor theme tokens; {} = use the legacy theme / accent_color. */
  theme_tokens?: VisitorThemeTokens;
  locale?: string;
  visibility: GalleryVisibility;
  accent_color?: string;
  cover_image_url?: string;
  custom_domain_id?: number;
  seo_og_image_url?: string;
  seo_title?: string;
  seo_description?: string;
  created_by?: number;
  published_at?: string;
  archived_at?: string;
  created_at: string;
  updated_at: string;
}

export interface GallerySection {
  id: number;
  gallery_id: number;
  title: string;
  description: string;
  sort_order: number;
}

export interface GalleryItem {
  id: number;
  gallery_id: number;
  link_id: number;
  // Slug of the underlying short link — short-URL grammar is slug-keyed,
  // so the renderer needs this to build a working href. Present on list
  // responses; create/update single-item responses don't include it.
  link_slug?: string;
  // Full, ready-to-use short URL for the link, resolved server-side from the
  // link's own domain (correct tier subdomain f./s./b.elido.me or a custom
  // domain). Prefer this over building a URL from a base host. Present on list
  // responses only.
  link_short_url?: string;
  // Destination hostname (no scheme/path) — used by the renderer to pick a
  // default favicon when icon_url is empty.
  link_destination_host?: string;
  section_id?: number;
  label?: string;
  description?: string;
  icon_url?: string;
  /** Card image: an image uploaded to Elido. */
  image_url?: string;
  /** Short chip label, e.g. "New". */
  tag?: string;
  sort_order: number;
}

// The detail (single-gallery GET) response includes embedded sections + items.
export interface GalleryDetail extends Gallery {
  sections: GallerySection[];
  items: GalleryItem[];
}

export interface CreateGalleryInput {
  slug: string;
  title: string;
  description?: string;
  theme?: GalleryTheme;
  visibility?: GalleryVisibility;
  accent_color?: string;
  cover_image_url?: string;
}

export interface UpdateGalleryInput {
  title?: string;
  description?: string;
  cover_image_url?: string;
  theme?: GalleryTheme;
  theme_tokens?: VisitorThemeTokens;
  locale?: string;
  accent_color?: string;
  visibility?: GalleryVisibility;
  custom_domain_id?: number;
  seo_og_image_url?: string;
  seo_title?: string;
  seo_description?: string;
  published?: boolean;
  archived?: boolean;
}

export interface CreateGallerySectionInput {
  title: string;
  description?: string;
  sort_order?: number;
}

export interface UpdateGallerySectionInput {
  title?: string;
  description?: string;
  sort_order?: number;
}

export interface CreateGalleryItemInput {
  link_id: number;
  section_id?: number | null;
  label?: string;
  description?: string;
  icon_url?: string;
  image_url?: string;
  tag?: string;
  sort_order?: number;
}

export interface UpdateGalleryItemInput {
  section_id?: number | null;
  label?: string;
  description?: string;
  icon_url?: string;
  image_url?: string;
  tag?: string;
  sort_order?: number;
}

export interface ReorderGalleryItemsEntry {
  item_id: number;
  section_id: number | null;
  sort_order: number;
}

// === Product microsites ===

export type MicrositeVisibility = "public" | "unlisted" | "private";
export type MicrositeTheme = "product" | "minimal" | "dark" | "brand";
export type MicrositeSectionKind =
  | "specs"
  | "gallery"
  | "manuals"
  | "video"
  | "support"
  | "warranty"
  | "faq"
  | "related"
  | "rich_text";

export interface Microsite {
  id: number;
  workspace_id: number;
  slug: string;
  product_name: string;
  sku?: string;
  gtin?: string;
  manufacturer?: string;
  product_version?: string;
  tagline: string;
  description: string;
  hero_image_url?: string;
  hero_video_url?: string;
  primary_color?: string;
  secondary_color?: string;
  theme: MicrositeTheme;
  theme_tokens?: VisitorThemeTokens;
  visibility: MicrositeVisibility;
  custom_domain_id?: number;
  seo_title?: string;
  seo_description?: string;
  seo_og_image_url?: string;
  locale: string;
  logo_url?: string;
  /** Up to three top-bar links. */
  nav_links?: MicrositeNavLink[];
  hero_cta_label?: string;
  /** A link, or a section anchor such as "#warranty". */
  hero_cta_target?: string;
  /** Language switcher entries (max 12). */
  languages?: MicrositeLanguage[];
  privacy_url?: string;
  imprint_url?: string;
  created_by?: number;
  published_at?: string;
  archived_at?: string;
  created_at: string;
  updated_at: string;
}

export interface MicrositeNavLink {
  label: string;
  url: string;
}

export interface MicrositeLanguage {
  locale: string;
  label: string;
  url: string;
}

export interface MicrositeSection {
  id: number;
  microsite_id: number;
  kind: MicrositeSectionKind;
  title?: string;
  data: Record<string, unknown>;
  sort_order: number;
  is_visible: boolean;
}

export interface MicrositeDetail extends Microsite {
  sections: MicrositeSection[];
}

export interface MicrositeFormSubmission {
  id: number;
  microsite_id: number;
  section_id?: number;
  form_kind: string;
  payload: Record<string, unknown>;
  submitter_email?: string;
  ua?: string;
  created_at: string;
}

export interface CreateMicrositeInput {
  slug: string;
  product_name: string;
  sku?: string;
  gtin?: string;
  manufacturer?: string;
  product_version?: string;
  tagline?: string;
  description?: string;
  hero_image_url?: string;
  hero_video_url?: string;
  primary_color?: string;
  secondary_color?: string;
  theme?: MicrositeTheme;
  visibility?: MicrositeVisibility;
  locale?: string;
}

export interface UpdateMicrositeInput {
  product_name?: string;
  sku?: string;
  gtin?: string;
  manufacturer?: string;
  product_version?: string;
  tagline?: string;
  description?: string;
  hero_image_url?: string;
  hero_video_url?: string;
  primary_color?: string;
  secondary_color?: string;
  theme?: MicrositeTheme;
  theme_tokens?: VisitorThemeTokens;
  visibility?: MicrositeVisibility;
  custom_domain_id?: number;
  seo_title?: string;
  seo_description?: string;
  seo_og_image_url?: string;
  locale?: string;
  logo_url?: string;
  nav_links?: MicrositeNavLink[];
  hero_cta_label?: string;
  hero_cta_target?: string;
  languages?: MicrositeLanguage[];
  privacy_url?: string;
  imprint_url?: string;
  published?: boolean;
  archived?: boolean;
}

export interface CreateMicrositeSectionInput {
  kind: MicrositeSectionKind;
  title?: string;
  data: Record<string, unknown>;
  sort_order?: number;
  is_visible?: boolean;
}

export interface UpdateMicrositeSectionInput {
  title?: string;
  data?: Record<string, unknown>;
  sort_order?: number;
  is_visible?: boolean;
}

export interface ReorderMicrositeSectionEntry {
  section_id: number;
  sort_order: number;
}

// === Link variants (A/B testing) ===

export interface LinkVariant {
  id: number;
  link_id: number;
  destination_url: string;
  label: string;
  weight: number;
  is_active: boolean;
  created_at: string;
}

export interface CreateLinkVariantInput {
  destination_url: string;
  label?: string;
  weight?: number;
}

export interface UpdateLinkVariantInput {
  destination_url?: string;
  label?: string;
  weight?: number;
  is_active?: boolean;
}

// === Bulk link import ===

export interface BulkLinkInput {
  slug?: string;
  destination_url: string;
  title?: string;
  tags?: string[];
}

export interface BulkCreateInput {
  domain_id: number;
  links: BulkLinkInput[];
}

export interface BulkCreateItemResult {
  index: number;
  status: "ok" | "error";
  link?: import("@elido/api-types").Link;
  error?: string;
  destination_url: string;
  slug?: string;
}

export interface BulkCreateResponse {
  ok: number;
  failed: number;
  items: BulkCreateItemResult[];
}

// === API keys ===

export interface APIKey {
  id: number;
  workspace_id: number;
  name: string;
  prefix: string;
  role: import("@elido/api-types").WorkspaceRole;
  created_at: string;
  expires_at: string | null;
  last_used_at: string | null;
  last_used_ip: string | null;
  revoked_at: string | null;
  // per-key rate limits (null = use workspace default)
  rate_limit_rps: number | null;
  rate_limit_burst: number | null;
  // request counters for anomaly detection
  total_requests: number;
  failed_requests: number;
  suspicious_flag: boolean;
  suspicious_flagged_at: string | null;
}

export interface CreateAPIKeyInput {
  name: string;
  role?: import("@elido/api-types").WorkspaceRole;
  expires_at?: string;
}

export interface CreateAPIKeyResponse {
  key: APIKey;
  // Plaintext token returned exactly once. Store it securely.
  token: string;
}

// === Machine users / service accounts ===

/**
 * Workspace-owned non-human identity. Tokens issued under a machine user
 * authenticate with the same Bearer scheme as a personal access token, but
 * RBAC reads the role from this row instead of from workspace_members.
 */
export interface MachineUser {
  id: number;
  workspace_id: number;
  name: string;
  description: string;
  role: import("@elido/api-types").WorkspaceRole;
  created_by: number | null;
  created_at: string;
  last_used_at: string | null;
  disabled_at: string | null;
  active_token_count: number;
}

export interface CreateMachineUserInput {
  name: string;
  description?: string;
  role?: import("@elido/api-types").WorkspaceRole;
}

export interface UpdateMachineUserInput {
  name?: string;
  description?: string;
  role?: import("@elido/api-types").WorkspaceRole;
  // Pass true to disable (rejects all the user's tokens) without deleting
  // the rows; pass false to re-enable.
  disabled?: boolean;
}

export interface MachineUserToken {
  id: number;
  name: string;
  prefix: string;
  role: import("@elido/api-types").WorkspaceRole;
  last_used_at: string | null;
  last_used_ip: string | null;
  created_at: string;
  expires_at: string | null;
  revoked_at: string | null;
  total_requests: number;
  failed_requests: number;
}

export interface MintMachineUserTokenInput {
  name: string;
  // RFC3339; omitted = never expires.
  expires_at?: string;
}

export interface MintMachineUserTokenResponse {
  token: Omit<
    MachineUserToken,
    | "last_used_at"
    | "last_used_ip"
    | "revoked_at"
    | "total_requests"
    | "failed_requests"
  >;
  // Returned exactly once. Treat as a credential.
  plaintext: string;
}

// === Custom domains ===

export type CustomDomainStatus = "pending" | "verified" | "active" | "failed";

export interface CustomDomain {
  id: number;
  workspace_id: number;
  hostname: string;
  verify_token: string;
  status: CustomDomainStatus;
  is_wildcard: boolean;
  created_at: string;
  verified_at?: string;
  failed_at?: string;
  fail_reason?: string;
}

export interface CreateCustomDomainResponse {
  domain: CustomDomain;
  instructions: {
    txt_record: string;
    cname_record: string;
  };
}

// === QR generation ===

export interface QrGenerateInput {
  content: string;
  size?: number;
  error_correction?: "L" | "M" | "Q" | "H";
}

// === HIPAA BAA (/v1/workspaces/{id}/baa) ===

export type BAAStatus =
  | "requested"
  | "generated"
  | "signed"
  | "counter_signed"
  | "voided";

export interface BAA {
  id: number;
  workspace_id: number;
  template_version: string;
  status: BAAStatus;
  covered_entity_name: string;
  signer_name: string;
  signer_email: string;
  signer_title: string;
  pdf_sha256: string | null;
  requester_user_id: number | null;
  requested_at: string;
  generated_at: string | null;
  customer_signed_at: string | null;
  counter_signer_name: string | null;
  counter_signer_email: string | null;
  counter_signed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface RequestBAAInput {
  covered_entity_name: string;
  signer_name: string;
  signer_email: string;
  signer_title: string;
}

export interface CounterSignBAAInput {
  signer_name: string;
  signer_email: string;
}

// === Webhooks ===
//
// The same backend serves both raw event endpoints (kind='event'/'siem')
// and outbound channels (kind='discord'/'telegram'/'sentry').
// Channel kinds carry per-vendor extras in the `config` field — see the
// Channel*Config types below — and skip HMAC signing because the vendor
// authenticates via the URL itself.

export type WebhookEndpointKind =
  | "event"
  | "siem"
  | "discord"
  | "telegram"
  | "sentry";

export interface DiscordChannelConfig {
  username?: string;
  avatar_url?: string;
}

export interface TelegramChannelConfig {
  chat_id: string;
  parse_mode?: "HTML" | "MarkdownV2";
  // bot_token is write-only: include it on create, the server encrypts
  // it at rest and never echoes it back. Reads always return chat_id
  // only.
  bot_token?: string;
}

export interface SentryChannelConfig {
  environment?: string;
  release?: string;
}

export type WebhookEndpointConfig =
  | Record<string, never>
  | DiscordChannelConfig
  | TelegramChannelConfig
  | SentryChannelConfig;

export interface WebhookEndpoint {
  id: number;
  workspace_id: number;
  url: string;
  events: string[];
  is_active: boolean;
  description: string;
  kind: WebhookEndpointKind;
  config: WebhookEndpointConfig;
  created_at: string;
  // rotation metadata. Null until the first explicit rotation.
  current_secret_id?: number | null;
  previous_secret_id?: number | null;
}

export interface CreateWebhookEndpointInput {
  url: string;
  events: string[];
  description?: string;
  kind?: WebhookEndpointKind;
  config?: WebhookEndpointConfig;
}

export interface CreateWebhookEndpointResponse {
  endpoint: WebhookEndpoint;
  // Only returned for kind='event'/'siem'. The signing secret is shown
  // to the user once at creation. The server stores it but won't return
  // it again on read. Channel kinds (discord/telegram/sentry) don't
  // sign, so this field is undefined for them.
  secret?: string;
}

// rotation response. The new secret is shown once and must be
// stored by the receiver. The previous key remains valid for signing
// until previous_expires_at (grace window, default 7 days).
export interface RotateWebhookSecretResponse {
  endpoint: WebhookEndpoint;
  /** New signing secret — shown exactly once, store immediately. */
  secret: string;
  grace_window_days: number;
  /** RFC 3339 timestamp. Old key accepted in X-Elido-Signature-Previous until then. */
  previous_expires_at: string;
}

export interface UpdateWebhookEndpointInput {
  url?: string;
  events?: string[];
  description?: string;
  is_active?: boolean;
  kind?: WebhookEndpointKind;
  config?: WebhookEndpointConfig;
}

export interface WebhookDelivery {
  id: number;
  endpoint_id: number;
  event_type: string;
  payload: unknown;
  status: "pending" | "delivered" | "failed";
  http_status: number | null;
  attempt_count: number;
  max_attempts: number;
  last_error: string | null;
  latency_ms: number | null;
  next_retry_at: string | null;
  completed_at: string | null;
  created_at: string;
}

// === Data export (workspace_export_configs) ===

export type ExportKind = "bigquery" | "snowflake" | "s3";
export type ExportSchedule = "hourly" | "daily";
export type ExportStatus = "idle" | "running" | "success" | "failed";

export interface ExportConfig {
  id: number;
  workspace_id: number;
  kind: ExportKind;
  enabled: boolean;
  destination: Record<string, unknown>;
  schedule: ExportSchedule;
  last_exported_at: string | null;
  last_status: ExportStatus;
  last_error: string | null;
  created_at: string;
  updated_at: string;
}

export interface UpsertExportConfigInput {
  kind: ExportKind;
  enabled: boolean;
  destination: Record<string, unknown>;
  schedule: ExportSchedule;
}

export interface SetExportEnabledInput {
  enabled: boolean;
}

// === Billing ===

export type BillingInterval = "monthly" | "yearly";
export type PlanFamily = "free" | "pro" | "business" | "enterprise";
export type OverageMode = "block" | "charge";
export type SubscriptionStatus =
  | "pending"
  | "active"
  | "past_due"
  | "paused"
  | "frozen"
  | "canceled"
  | "expired";

export interface Plan {
  id: number;
  slug: string;
  name: string;
  tier: import("@elido/api-types").PlanTier;
  price_cents: number;
  currency: string;
  billing_interval: BillingInterval;
  features: Record<string, unknown>;
  is_active: boolean;
  // Gradation fields (G.1+)
  family: PlanFamily;
  size_label?: string;
  included_links: number;
  included_clicks_pm?: number | null;
  overage_links_per?: number | null;
  overage_links_cents?: number | null;
  overage_clicks_per?: number | null;
  overage_clicks_cents?: number | null;
  branded_domains: number;
  seats: number;
  overage_mode: OverageMode;
  is_grandfathered: boolean;
  is_public: boolean;
  sort_order: number;
}

export interface Subscription {
  id: number;
  workspace_id: number;
  plan_id: number;
  status: SubscriptionStatus;
  // Processor selector + processor's stable reference for this subscription.
  // 'monobank' (cards), 'coinbase' (crypto).
  processor: string;
  processor_ref: string;
  processor_payment_ref?: string | null;
  current_period_start: string | null;
  current_period_end: string | null;
  canceled_at: string | null;
  created_at: string;
  updated_at: string;
  // Card-on-file metadata, populated from the monobank webhook on first
  // successful charge. last4 / brand / exp drive the dashboard's "card on file"
  // widget; card_token is internal to the renewal cron.
  card_token?: string | null;
  card_last4?: string | null;
  card_brand?: string | null;
  card_exp_month?: number | null;
  card_exp_year?: number | null;
  // G.1 lifecycle fields
  paused_at?: string | null;
  paused_reason?: string | null;
  frozen_at?: string | null;
  freeze_until?: string | null;
  freeze_reason?: string | null;
  scheduled_plan_id?: number | null;
  scheduled_change_at?: string | null;
  scheduled_change_kind?: "downgrade" | "upgrade_at_renewal" | "cancel" | null;
  scheduled_change_reason?: string | null;
  // Overage consent (M-x): explicit owner opt-in to be charged for usage above
  // plan limits. When unset (or revoked) server-side enforcement treats the plan
  // as block-mode regardless of the plan's overage_mode field.
  overage_consent_at?: string | null;
  overage_consent_by_user_id?: number | null;
  overage_consent_revoked_at?: string | null;
}

// EffectiveLimits is the merged plan + override + consent view that the
// dashboard widgets read. Mirrors the billing API response
export interface EffectiveLimits {
  workspace_id: number;
  plan_id: number;
  plan_slug: string;
  plan_name: string;
  family: PlanFamily;
  size_label?: string;
  billing_interval: BillingInterval;
  included_links: number;
  included_clicks_pm?: number | null;
  overage_links_per?: number | null;
  overage_links_cents?: number | null;
  overage_clicks_per?: number | null;
  overage_clicks_cents?: number | null;
  branded_domains: number;
  seats: number;
  overage_mode: OverageMode;
  effective_overage_mode: OverageMode;
  overage_consented: boolean;
  overage_consent_at?: string | null;
  overage_consent_by_user_id?: number | null;
  features: Record<string, unknown>;
  price_cents: number;
  currency: string;
  status: SubscriptionStatus;
  current_period_end?: string | null;
  paused_at?: string | null;
  frozen_at?: string | null;
  freeze_until?: string | null;
  scheduled_plan_id?: number | null;
  scheduled_change_at?: string | null;
  override_applied: boolean;
  // Owner-visible explanation when an admin sets a custom plan / pricing.
  // Empty (or undefined) when no override or when admin left the note empty.
  // Admin notes (deal IDs, contact names) live in a separate column and are
  // NOT exposed here.
  customer_facing_note?: string;
  grandfathered: boolean;
  // Prepay link-pack credits. When non-zero, the workspace has
  // bought one-time top-ups via /v1/billing/workspaces/:ws/link-packs/buy.
  // EffectiveLinksCap is the cap server-side enforcement actually compares
  // against: included_links + extra_links_balance.
  extra_links_balance?: number;
  extra_clicks_pm_balance?: number;
  effective_links_cap: number;
  effective_clicks_cap_pm?: number | null;
}

// Link packs: prepay one-time bundles of extra links the
// workspace can buy on top of its plan. Mirrors
// the pack object + the GET list response.
export interface LinkPack {
  id: number;
  code: string;
  name: string;
  extra_links: number;
  extra_clicks_pm: number;
  price_cents: number;
  currency: string;
  // false when admin hasn't yet seeded the pack in Paddle. UI greys these
  // out with a "coming soon" label rather than hiding them.
  available: boolean;
}

export interface LinkPackCredits {
  extra_links_balance: number;
  extra_clicks_pm_balance: number;
}

export interface LinkPacksListResponse {
  packs: LinkPack[];
  credits: LinkPackCredits;
}

export interface LinkPackPurchase {
  id: number;
  pack_id: number;
  extra_links: number;
  extra_clicks_pm: number;
  price_cents: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  created_at: string;
  completed_at?: string;
}

export interface BuyLinkPackResponse {
  purchase_id: number;
  redirect_url: string;
}

// CurrentUsage is the workspace_usage rollup snapshot the dashboard reads.
// Mirrors the billing API response
export interface CurrentUsage {
  workspace_id: number;
  links_used: number;
  clicks_used: number;
  seats_used: number;
  domains_used: number;
  overage_links: number;
  overage_clicks: number;
  overage_amount_cents: number;
  overage_currency?: string;
  // RFC3339 UTC. Period the clicks_used counter is scoped to. Empty when
  // the billing service couldn't resolve a window (very old workspaces with
  // no usage row and no fallback).
  current_period_start?: string;
  current_period_end?: string;
}

export interface AppliedDiscount {
  code: string;
  original_cents: number;
  discount_cents: number;
  final_cents: number;
  currency: string;
}

export interface CheckoutResponse {
  subscription_id: number;
  status: SubscriptionStatus;
  redirect_url?: string;
  liqpay_data?: string;
  liqpay_signature?: string;
  discount?: AppliedDiscount;
}

// === CTA Overlays ===

export interface CtaOverlay {
  id: number;
  workspace_id: number;
  name: string;
  cta_type: string;
  position: string;
  headline: string;
  body_text: string;
  button_text: string;
  button_url: string;
  image_url?: string;
  custom_html?: string;
  bg_color: string;
  text_color: string;
  button_bg: string;
  button_text_color: string;
  enabled: boolean;
  created_at: string;
  updated_at: string;
}

export interface CreateCtaOverlayInput {
  name: string;
  cta_type: string;
  position: string;
  headline: string;
  body_text?: string;
  button_text: string;
  button_url: string;
  image_url?: string;
  custom_html?: string;
  bg_color?: string;
  text_color?: string;
  button_bg?: string;
  button_text_color?: string;
}

export interface UpdateCtaOverlayInput {
  name?: string;
  headline?: string;
  body_text?: string;
  button_text?: string;
  button_url?: string;
  image_url?: string;
  bg_color?: string;
  text_color?: string;
  button_bg?: string;
  button_text_color?: string;
  enabled?: boolean;
}

export interface CtaStats {
  impressions: number;
  clicks: number;
}

// === Mobile Attribution ===

export interface MobileApp {
  id: number;
  workspace_id: number;
  platform: "ios" | "android";
  app_name: string;
  bundle_id: string;
  team_id?: string;
  sha256_fingerprints?: string[];
  deep_link_scheme?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateMobileAppInput {
  platform: "ios" | "android";
  app_name: string;
  bundle_id: string;
  team_id?: string;
  sha256_fingerprints?: string[];
  deep_link_scheme?: string;
}

export interface UpdateMobileAppInput {
  app_name: string;
  bundle_id: string;
  team_id?: string;
  sha256_fingerprints?: string[];
  deep_link_scheme?: string;
}

export interface AttributionEvent {
  id: number;
  workspace_id: number;
  link_id: number;
  mobile_app_id: number;
  event_type: "install" | "open" | "custom";
  device_id?: string;
  ip?: string;
  user_agent?: string;
  referrer?: string;
  created_at: string;
}

export type AttributionSummary = Record<string, number>;

// === Revenue attribution ===

export interface RevenueByLinkItem {
  link_id: number | null;
  link_slug: string;
  destination_url: string;
  conversions: number;
  revenue_cents: number;
}

export interface RevenueByCampaignItem {
  campaign_id: number | null;
  campaign_name: string;
  conversions: number;
  revenue_cents: number;
}

export interface RevenueByDayItem {
  day: string;
  conversions: number;
  revenue_cents: number;
}

export interface RevenueByPlatformItem {
  platform: string;
  conversions: number;
  revenue_cents: number;
}

// === Crypto checkout ===

export interface CryptoCheckoutResponse {
  charge_url: string;
  subscription_id: number;
  status?: SubscriptionStatus;
  discount?: AppliedDiscount;
}

// ── Advanced Analytics & Reporting ─────────────────────────

export type ScheduledReportKind = "weekly" | "monthly";

/**
 * Render format for a scheduled report.
 *   email — inline MJML digest (default; available on every plan).
 *   pdf   — PDF attachment linked from the
 *           email body. Business+ tier only; the create endpoint returns
 *           HTTP 402 + `requires_plan_tier: "business"` for lower tiers.
 */
export type ScheduledReportFormat = "email" | "pdf";

export interface ScheduledReport {
  id: number;
  workspace_id: number;
  kind: ScheduledReportKind;
  channels: string[];
  recipients: string[];
  day_of_week?: number;
  day_of_month?: number;
  hour: number;
  timezone: string;
  enabled: boolean;
  format: ScheduledReportFormat;
  next_run_at?: string;
  last_run_at?: string;
  last_status?: string;
  last_error?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateScheduledReportInput {
  kind: ScheduledReportKind;
  channels?: string[];
  recipients?: string[];
  day_of_week?: number;
  day_of_month?: number;
  hour?: number;
  timezone?: string;
  enabled?: boolean;
  format?: ScheduledReportFormat;
}

export type AnalyticsExportJobStatus =
  | "queued"
  | "running"
  | "completed"
  | "failed";

export interface AnalyticsExportJob {
  id: number;
  workspace_id: number;
  requested_by: number;
  kind: string;
  filter: Record<string, unknown>;
  status: AnalyticsExportJobStatus;
  row_count?: number;
  object_key?: string;
  download_url?: string;
  download_expires_at?: string;
  error_message?: string;
  started_at?: string;
  completed_at?: string;
  created_at: string;
}

export interface CreateAnalyticsExportJobInput {
  kind?: "clicks_csv";
  filter: {
    from?: string;
    to?: string;
    link_id?: number;
    limit?: number;
  };
}

export interface BrokenLink {
  id: number;
  workspace_id: number;
  link_id: number;
  slug: string;
  destination_url: string;
  status_code: number;
  error_message?: string;
  failure_count: number;
  first_seen_at: string;
  last_check_at: string;
  last_alert_at?: string;
}

export interface BrokenLinksResponse {
  items: BrokenLink[];
  total_count: number;
}

// ─── bulk-import migrations (Bitly → Elido, etc) ───────────────
// One row per migration attempt. The worker drives the row through
// queued → running → completed/partial/failed; the dashboard polls
// imports.get to render progress.

export type ImportJobStatus =
  | "queued"
  | "running"
  | "completed"
  | "partial"
  | "failed"
  | "cancelled";

export type ImportConflictStrategy = "suffix" | "skip" | "fail";

export interface ImportJobErrorEntry {
  source_id?: string;
  source_slug?: string;
  reason: string;
}

export interface ImportJob {
  id: number;
  workspace_id: number;
  source_vendor: string;
  target_domain_id: number;
  status: ImportJobStatus;
  conflict_strategy: ImportConflictStrategy;
  total_items: number;
  imported_items: number;
  skipped_items: number;
  failed_items: number;
  created_at: string;
  started_at?: string;
  completed_at?: string;
  error_log?: ImportJobErrorEntry[];
}

export interface BitlyGroup {
  guid: string;
  name: string;
  description?: string;
  is_active: boolean;
  role?: string;
}

// === Linear integration (docs/analysis/linear-integration.md) ===
// Auth is PAT (lin_api_*). Connect validates via Linear's GraphQL
// `viewer` query, picks a team, and stores the envelope-encrypted PAT
// in service_tokens. Status / Disconnect do NOT call Linear — there's
// no vendor-side resource to undo for the PAT flow.

export interface LinearTeam {
  id: string;
  key: string;
  name: string;
}

export interface LinearConnectInput {
  /** Personal API Key from https://linear.app/settings/api (lin_api_*). */
  token: string;
  /** ID of the Linear team where Elido will create issues on triggers. */
  team_id: string;
}

/** Response of POST /integrations/linear/connect — the freshly-stored row. */
export interface LinearConnection {
  connection_id: number;
  team_id: string;
  team_name: string;
  user_name: string;
  user_email: string;
  organization: string;
}

/** Response of GET /integrations/linear/status. */
export interface LinearStatus {
  connected: boolean;
  team_id?: string;
  team_name?: string;
  last_check_at?: string;
  revoked: boolean;
}

/** Response of POST /integrations/linear/validate — token probe, no storage. */
export interface LinearValidateResponse {
  user_name: string;
  user_email: string;
  organization: string;
  teams: LinearTeam[];
}

// === Pipedrive integration (docs/analysis/pipedrive-integration.md) ===
// Auth is a personal API token (query-param `api_token`). Connect
// validates via Pipedrive's `/users/me`, picks a pipeline, and stores
// the envelope-encrypted token in service_tokens. Status / Disconnect
// do NOT call Pipedrive — there's no vendor-side resource to undo for
// the personal-token flow.

export interface PipedrivePipeline {
  id: number;
  name: string;
  url_title?: string;
  order_nr?: number;
  active: boolean;
  deal_probability?: boolean;
  selected?: boolean;
}

export interface PipedriveConnectInput {
  /** Personal API token from https://app.pipedrive.com/settings/api. */
  token: string;
  /** ID of the Pipedrive pipeline where Elido will create deals on triggers. */
  pipeline_id: number;
}

/** Response of POST /integrations/pipedrive/connect — the freshly-stored row. */
export interface PipedriveConnection {
  connection_id: number;
  pipeline_id: number;
  pipeline_name: string;
  user_name: string;
  user_email: string;
  company_name: string;
  currency: string;
}

/** Response of GET /integrations/pipedrive/status. */
export interface PipedriveStatus {
  connected: boolean;
  pipeline_id?: number;
  pipeline_name?: string;
  last_check_at?: string;
  revoked: boolean;
}

/** Response of POST /integrations/pipedrive/validate — token probe, no storage. */
export interface PipedriveValidateResponse {
  user_name: string;
  user_email: string;
  company_name: string;
  currency: string;
  pipelines: PipedrivePipeline[];
}

// === Notion integration ===
//
// Auth: OAuth 2.0 via https://api.notion.com/v1/oauth/authorize.
// Notion uses workspace-level scopes — no per-scope selection at authorize
// time. The access token is a bot token bound to the workspace the user
// selected during consent. No refresh token is issued (tokens are long-lived).
//
// Connect starts the OAuth dance by calling
// POST /v1/workspaces/{id}/integrations/notion/connect, which returns an
// authorize_url for the browser redirect. The callback is handled at
// GET /v1/oauth/notion/callback.

/** Response of GET /integrations/notion/status. */
export interface NotionStatus {
  connected: boolean;
  workspace_id?: string;
  workspace_name?: string;
  connected_at?: string;
  revoked: boolean;
}

/** Response of POST /integrations/notion/connect — starts the OAuth dance. */
export interface NotionConnectStart {
  /** The Notion authorize URL to redirect the browser to. */
  authorize_url: string;
  /** CSRF state token — stored in the browser for callback verification. */
  state: string;
}

// === Unified workspace integrations list (GET /v1/workspaces/:id/integrations) ===
//
// A single round-trip returning the connected/available state for every
// provider the workspace has ever interacted with (or is currently connected
// to). Covers all storage tiers:
//   - tier 2 — service_tokens rows (Linear, Pipedrive, PAT providers)
//   - tier 4 — external_oauth_connections rows (Notion, Asana, etc.)

/**
 * One row in the unified integrations list response. Only providers with
 * at least one active *or* revoked row are included; providers that have
 * never been connected are absent (callers merge with their static catalog
 * and treat missing == "available").
 */
export interface IntegrationRow {
  /** Canonical provider id — matches the `vendor` column in the DB and the
   *  per-provider SDK method names (e.g. "linear", "pipedrive", "notion"). */
  provider: string;
  /** True when a non-revoked connection row exists. */
  connected: boolean;
  /** ISO-8601 timestamp of the original connection, or null for rows that
   *  were never fully connected. */
  connected_at: string | null;
  /** ISO-8601 revocation timestamp, or null when the connection is active. */
  revoked_at: string | null;
  /** Space-joined list of OAuth scopes granted by the vendor.
   *  Null for token-paste integrations. */
  scope: string | null;
  /** Human-readable connection label.
   *  - Tier 2: "<team_id>|<team_name>" style suffix from the label column,
   *    or null when only "primary" is stored (no metadata yet).
   *  - Tier 4: the external_account_name returned by the vendor token endpoint. */
  label: string | null;
  /** Integration tier: 2 = PAT/token-paste, 4 = generic OAuth 2.0. */
  tier: 2 | 4;
}

// === Event integrations (GA4 / Mixpanel / Klaviyo / Brevo / Datadog) ===

export type EventIntegrationVendor =
  | "ga4"
  | "mixpanel"
  | "klaviyo"
  | "brevo"
  | "datadog";

/**
 * The view returned by the dashboard endpoints. api_key_masked is present
 * when a credential is stored; it shows first4...last4.
 * Plaintext is never returned by the API.
 */
export interface EventIntegration {
  workspace_id: number;
  vendor: EventIntegrationVendor;
  enabled: boolean;
  api_key_masked?: string;
  last_test_at?: string;
  last_test_ok?: boolean;
  last_test_error?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Result of "Test connection": a real test event (elido_test=true) was
 * sent to the vendor. vendor_response is absent when the request never
 * left (bad config); body is capped at 512 bytes, endpoint has no secrets.
 */
export interface EventIntegrationTestResult {
  ok: boolean;
  error?: string;
  note?: string;
  vendor_response?: {
    endpoint: string;
    status: number;
    body?: string;
  };
}

// === SMS campaigns ===
//
// Per-recipient short-link tracking, Twilio carrier, STOP/HELP TCPA
// keyword handling. Naming is `sms_*` everywhere to avoid colliding with
// the existing `campaigns` (UTM-grouping) surface.

export type SmsCampaignStatus =
  | "draft"
  | "scheduled"
  | "sending"
  | "sent"
  | "paused"
  | "failed"
  | "archived";

export type SmsMessageStatus =
  | "queued"
  | "sent"
  | "delivered"
  | "failed"
  | "opted_out"
  | "undeliverable";

export interface SmsCampaign {
  id: number;
  workspace_id: number;
  name: string;
  body: string;
  sender_id: string;
  status: SmsCampaignStatus;
  send_at?: string;
  started_at?: string;
  completed_at?: string;
  target_url: string;
  created_by?: number;
  created_at: string;
}

export interface SmsCampaignStats {
  total: number;
  queued: number;
  sent: number;
  delivered: number;
  failed: number;
  opted_out: number;
  undeliverable: number;
}

export interface SmsCampaignDetail {
  campaign: SmsCampaign;
  stats: SmsCampaignStats;
}

export interface SmsMessage {
  id: number;
  campaign_id: number;
  recipient_e164: string;
  // The server stores this as JSONB; it's free-form per-recipient merge
  // data ({first_name, code, …}). Templates render with defensive
  // substitution (missing key → empty string).
  merge_data: Record<string, unknown>;
  link_id?: number;
  twilio_sid?: string;
  status: SmsMessageStatus;
  sent_at?: string;
  delivered_at?: string;
  failed_reason?: string;
  cost_micros_eur?: number;
}

export interface SmsRecipientInput {
  e164: string;
  merge_data?: Record<string, unknown>;
}

export interface CreateSmsCampaignInput {
  name: string;
  body: string;
  sender_id: string;
  target_url: string;
  send_at?: string;
  recipients: SmsRecipientInput[];
}

export interface UpdateSmsCampaignInput {
  name?: string;
  body?: string;
  sender_id?: string;
  target_url?: string;
  send_at?: string;
}

export interface SmsOptOut {
  id: number;
  workspace_id: number;
  recipient_e164: string;
  // 'stop_keyword' | 'manual_admin' | 'bounce' | 'import_blocklist'
  reason: string;
  opted_out_at: string;
}

export interface AddSmsOptOutInput {
  recipient_e164: string;
  // Optional. Defaults to 'manual_admin' server-side.
  reason?: string;
}

// === End-to-end encrypted links ===
//
// Short.io's Team+ has a similar feature. The destination URL is
// encrypted client-side via AES-256-GCM; the decryption key lives only
// in the URL fragment (`#k=…`) so the server never sees the plaintext.
// Edge-redirect returns a small HTML interstitial that decrypts in the
// browser and JS-redirects to the cleartext destination.

/**
 * Wire shape for rotating the crypto envelope of an existing E2E
 * encrypted link. All byte values are base64-encoded (standard, not
 * url-safe). `enc_passphrase_salt` / `enc_kdf` / `enc_kdf_iters` are
 * only set when the link uses the passphrase layer (the URL fragment
 * carries `#p=1` instead of `#k=…`).
 */
export interface RotateLinkEncryptionInput {
  encrypted_target: string;
  enc_iv: string;
  enc_alg: "aes-256-gcm";
  enc_passphrase_salt?: string;
  enc_kdf?: "pbkdf2-sha256";
  enc_kdf_iters?: number;
}

/**
 * Output of `encryptLinkDestination`. `body` is the JSON to POST to
 * /v1/workspaces/{id}/links (merge with `domain_id`, optional `slug`,
 * `title`, `tags`). `urlFragment` is the part to append to the
 * resulting short URL — without it the link is undecryptable.
 *
 * When `passphraseLayer` is true the fragment is `#p=1` (no key in
 * URL); the user must remember to type the passphrase on the
 * interstitial.
 */
export interface EncryptedLinkBundle {
  body: {
    is_encrypted: true;
    encrypted_target: string;
    enc_iv: string;
    enc_alg: "aes-256-gcm";
    enc_passphrase_salt?: string;
    enc_kdf?: "pbkdf2-sha256";
    enc_kdf_iters?: number;
  };
  urlFragment: string;
}

/**
 * Options for `encryptLinkDestination`. When `passphrase` is set, the
 * encryption key is derived via PBKDF2-SHA256 from the passphrase and
 * a fresh random salt; the URL fragment will be `#p=1` (the user is
 * prompted on the interstitial). Without a passphrase the key is
 * generated randomly and lives in the URL fragment.
 *
 * `kdfIters` defaults to 100000 — OWASP minimum for PBKDF2-SHA256 in
 * 2023. Raise it for higher-value links at the cost of unlock latency.
 */
export interface EncryptLinkDestinationOptions {
  passphrase?: string;
  kdfIters?: number;
}

// Per-workspace destination-domain blocklist (blocklist P3). SDK-only shape —
// mirrors the BlockedDomain row for the workspace-scoped rules. Global
// (admin) rules are managed in the admin app, not here.
export interface WorkspaceBlockedDomain {
  id: number;
  domain: string;
  match_mode: "exact" | "subdomain";
  reason: "phishing" | "malware" | "spam" | "legal" | "manual";
  note: string;
  created_at: string;
  expires_at: string | null;
}

export interface CreateBlockedDomainInput {
  domain: string;
  match_mode?: "exact" | "subdomain";
  reason?: "phishing" | "malware" | "spam" | "legal" | "manual";
  note?: string;
  expires_at?: string; // RFC3339; omit for permanent
}

// ── Account / workspace deletion, ownership transfer, sign-in security ─────
// account deletion and sign-in security.

export type DeletionMode = "30d" | "now";
export type DeletionState = "pending_deletion" | "waiting_transfer" | "erased";

export interface DeletionRequestInfo {
  id: number;
  kind: "user" | "workspace";
  mode: "restorable" | "now";
  status: "pending" | "restored" | "purged";
  workspace_id?: number;
  requested_at: string;
  purge_at: string;
  workspace_ids?: number[];
}

export interface DeletionCounts {
  workspaces: number;
  links: number;
  pages: number;
  domains: number;
  members_affected: number;
  api_keys: number;
  integrations: number;
  active_subscriptions: number;
}

export interface DeletionPreviewWorkspace {
  id: number;
  name: string;
  slug: string;
  other_members: number;
  other_owners: number;
  action: "delete" | "needs_decision" | "leave";
}

export interface DeletionPreview {
  counts: DeletionCounts;
  workspaces: DeletionPreviewWorkspace[];
  blocked: boolean;
  pending?: DeletionRequestInfo | null;
  restore_days: number;
}

export interface DeletionWorkspaceChoice {
  id: number;
  action: "delete" | "transfer";
  to_user_id?: number;
}

export interface RequestAccountDeletionInput {
  mode: DeletionMode;
  workspaces?: DeletionWorkspaceChoice[];
  export_ack: boolean;
  confirm_word: string;
}

export interface DeletionResult {
  state: DeletionState;
  purge_at?: string;
  request?: DeletionRequestInfo;
  transfers?: OwnershipTransfer[];
  purge_incomplete?: boolean;
}

export interface OwnershipTransfer {
  id: number;
  workspace_id: number;
  from_user_id: number;
  to_user_id: number;
  status: "pending" | "accepted" | "declined" | "expired" | "cancelled";
  created_at: string;
  expires_at: string;
  billing: "move" | "cancel";
  after: "admin" | "leave";
  billing_note?: string;
  workspace_name?: string;
}

export interface DataExport {
  id: number;
  kind: "user" | "workspace";
  workspace_id?: number;
  status: "preparing" | "ready" | "failed" | "expired";
  size_bytes?: number;
  created_at: string;
  ready_at?: string;
  expires_at?: string;
  download_url?: string;
}

export interface SecurityOverview {
  methods: {
    type: string;
    enrolled: boolean;
    added_at?: string;
    strong: boolean;
  }[];
  recovery_codes_left: number;
  addresses: { role: "primary" | "recovery"; email: string }[];
  workspace_requirements: {
    workspace_id: number;
    workspace_name: string;
    methods: "strong" | "any";
    enforce_at?: string;
    satisfied: boolean;
  }[];
  two_factor_reset_at?: string;
}

export interface TwoFactorPolicy {
  workspace_id: number;
  required: boolean;
  since?: string;
  grace_days: number;
  methods: "strong" | "any";
  enforce_at?: string;
}

export interface TrashedLink {
  id: number;
  host: string;
  slug: string;
  destination_url: string;
  title?: string;
  deleted_at: string;
  purge_at: string;
}
