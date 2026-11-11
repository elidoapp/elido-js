import type {
  CheckoutResponse,
  CreateLinkInput,
  CreateWorkspaceInput,
  Link,
  ListLinksOptions,
  PaginatedLinks,
  Plan,
  Subscription,
  SubscriptionStatus,
  CurrentUsage,
  EffectiveLimits,
  LinkPacksListResponse,
  LinkPackPurchase,
  BuyLinkPackResponse,
  TimeseriesOptions,
  TimeseriesResponse,
  APIKey,
  BioLink,
  BioPage,
  BreakdownOptions,
  BreakdownResponse,
  BulkCreateInput,
  BulkCreateResponse,
  BulkMutateInput,
  BulkMutateResponse,
  CreateBioLinkInput,
  CreateBioPageInput,
  CreateLinkVariantInput,
  LinkVariant,
  UpdateBioLinkInput,
  UpdateBioPageInput,
  Gallery,
  GalleryDetail,
  CreateGalleryInput,
  UpdateGalleryInput,
  GallerySection,
  CreateGallerySectionInput,
  UpdateGallerySectionInput,
  GalleryItem,
  CreateGalleryItemInput,
  UpdateGalleryItemInput,
  ReorderGalleryItemsEntry,
  Microsite,
  MicrositeDetail,
  MicrositeSection,
  MicrositeFormSubmission,
  CreateMicrositeInput,
  UpdateMicrositeInput,
  CreateMicrositeSectionInput,
  UpdateMicrositeSectionInput,
  ReorderMicrositeSectionEntry,
  UpdateLinkVariantInput,
  Campaign,
  CreateCampaignInput,
  UpdateCampaignInput,
  Conversion,
  ConversionSummary,
  RevenueByLinkItem,
  RevenueByCampaignItem,
  RevenueByDayItem,
  RevenueByPlatformItem,
  AuditEvent,
  CreateAPIKeyInput,
  CreateAPIKeyResponse,
  MachineUser,
  MachineUserToken,
  CreateMachineUserInput,
  UpdateMachineUserInput,
  MintMachineUserTokenInput,
  MintMachineUserTokenResponse,
  CreateFolderInput,
  Folder,
  UpdateFolderInput,
  Tag,
  CreateTagInput,
  SavedView,
  SavedViewInput,
  QRTemplate,
  QRTemplateInput,
  UpdateTagInput,
  WorkspacePixels,
  UpsertWorkspacePixelsInput,
  LinkMetadata,
  UpdateAppLinksInput,
  WorkspaceDomain,
  CreateInvitationInput,
  Invitation,
  InvitationPreview,
  PendingInvitation,
  ClickEvent,
  RecentClicksOptions,
  RecentClicksResponse,
  TopLinksOptions,
  TopLinksResponse,
  AnalyticsRange,
  FunnelResponse,
  FunnelV2Request,
  FunnelV2Response,
  FunnelDefinition,
  CreateFunnelDefinitionInput,
  CohortResponse,
  CohortOptions,
  EngagementSummary,
  HeatmapResponse,
  GeoHeatmapResponse,
  TopGeoBreakdownResponse,
  LTVOptions,
  LTVResponse,
  TrafficQualityResponse,
  BAA,
  RequestBAAInput,
  CounterSignBAAInput,
  WorkspaceTag,
  CreateCustomDomainResponse,
  CreateWebhookEndpointInput,
  CreateWebhookEndpointResponse,
  RotateWebhookSecretResponse,
  CustomDomain,
  QrGenerateInput,
  UpdateLinkInput,
  RotateLinkEncryptionInput,
  CreateShareInput,
  CreateShareResponse,
  UpdateWebhookEndpointInput,
  UpdateWorkspaceInput,
  WebhookDelivery,
  WebhookEndpoint,
  WorkspaceSsoConfig,
  UpsertWorkspaceSsoConfigInput,
  SsoDiscoverResult,
  IPRule,
  CreateIPRuleInput,
  SetIPAllowlistEnabledInput,
  WorkspaceBlockedDomain,
  CreateBlockedDomainInput,
  ScimDirectory,
  UpsertScimDirectoryInput,
  SetScimEnabledInput,
  ScimDirectoryUser,
  ExportConfig,
  UpsertExportConfigInput,
  SetExportEnabledInput,
  CustomRole,
  CreateCustomRoleInput,
  UpdateCustomRoleInput,
  CustomRolesListResponse,
  UpdateMemberRoleInput,
  MarketplaceDomain,
  ClaimMarketplaceDomainResponse,
  WorkspaceCompliance,
  UpdateWorkspaceComplianceInput,
  EvidenceSnapshot,
  LinkSafetyScan,
  SuspectLinkRow,
  WorkspaceBranding,
  UpsertWorkspaceBrandingInput,
  User,
  Me,
  Workspace,
  WorkspaceMember,
  WorkspaceWithRole,
  CtaOverlay,
  CreateCtaOverlayInput,
  UpdateCtaOverlayInput,
  CtaStats,
  MobileApp,
  CreateMobileAppInput,
  UpdateMobileAppInput,
  AttributionEvent,
  AttributionSummary,
  CryptoCheckoutResponse,
  ScheduledReport,
  CreateScheduledReportInput,
  AnalyticsExportJob,
  CreateAnalyticsExportJobInput,
  BrokenLinksResponse,
  ImportJob,
  BitlyGroup,
  LinearConnection,
  LinearConnectInput,
  LinearStatus,
  LinearValidateResponse,
  PipedriveConnection,
  PipedriveConnectInput,
  PipedriveStatus,
  PipedriveValidateResponse,
  NotionStatus,
  NotionConnectStart,
  IntegrationRow,
  EventIntegration,
  EventIntegrationTestResult,
  EventIntegrationVendor,
  SmsCampaign,
  SmsCampaignDetail,
  SmsMessage,
  CreateSmsCampaignInput,
  UpdateSmsCampaignInput,
  SmsOptOut,
  AddSmsOptOutInput,
  DataExport,
  DeletionMode,
  DeletionPreview,
  DeletionRequestInfo,
  DeletionResult,
  OwnershipTransfer,
  RequestAccountDeletionInput,
  SecurityOverview,
  TrashedLink,
  TwoFactorPolicy,
} from "./types.js";

export interface ElidoApiOptions {
  baseUrl: string;
  // Analytics base URL. Defaults to baseUrl.
  analyticsBaseUrl?: string;
  // Optional token for the analytics host, if it is separate from baseUrl.
  analyticsToken?: string;
  // Billing base URL. Defaults to baseUrl when not set.
  billingBaseUrl?: string;
  // Webhooks base URL. Defaults to baseUrl.
  webhookBaseUrl?: string;
  // Domains base URL. Defaults to baseUrl.
  domainBaseUrl?: string;
  // QR generation base URL. Defaults to baseUrl.
  qrBaseUrl?: string;
  // Metadata route base URL. Defaults to baseUrl.
  metadataBaseUrl?: string;
  // BFF base URL. Defaults to baseUrl (single-gateway deploys). Used
  // by the SSE click stream.
  bffBaseUrl?: string;
  // Development-only authentication via the X-Dev-User-ID header; only
  // honoured by servers running in development mode. Use `token` otherwise.
  devUserId?: number | string;
  // Bearer API key (`elido_…`). When set, sent as
  // `Authorization: Bearer <token>` and overrides devUserId.
  token?: string;
  // Forward a session cookie from an incoming request (server-side proxies).
  cookie?: string;
  // Forwarded client IP from the incoming browser request. Set as
  // X-Forwarded-For so the API records the real user IP instead of the
  // proxy's address.
  clientIp?: string;
  // Forwarded User-Agent from the incoming browser request. Set as
  // User-Agent header so session_trail records the real browser UA rather
  // than the node-fetch / undici default.
  userAgent?: string;
  // Override fetch for tests or non-fetch runtimes (Cloudflare Workers, etc).
  fetch?: typeof fetch;
  // Maximum retries for transient failures (network errors + 502/503/504).
  // Defaults to 3 attempts (initial + up to 3 retries). Set to 0 to disable.
  maxRetries?: number;
  // Override the retry backoff schedule (in ms, before jitter). Defaults to
  // [250, 750, 2250]. Length should match maxRetries; if shorter the last
  // value is reused for any extra attempts.
  retryBackoffMs?: number[];
  // Overall deadline (ms) for a single JSON request, applied as an
  // AbortSignal.timeout when the caller doesn't pass its own signal. Caps the
  // total across retries (an AbortError stops the retry loop). Guards against a
  // dependency that hangs — e.g. a service that isn't deployed, where the DNS
  // lookup stalls ~5s per attempt and would otherwise burn maxRetries × that.
  // Unset = no timeout (unchanged behaviour). Not applied to blob/stream
  // helpers (CSV/QR exports, assistant chat) so large/streaming reads aren't cut.
  requestTimeoutMs?: number;
  // Disable automatic Idempotency-Key generation on POST/PUT/PATCH. Defaults
  // to false (keys are auto-attached). Per-call overrides via the
  // `idempotencyKey` option always win regardless of this flag.
  disableIdempotencyKey?: boolean;
}

/**
 * Per-call request options. Today only used by mutation methods that opt
 * in (`links.create`, `links.bulkCreate`, `billing.checkout`, etc). The
 * SDK auto-generates an Idempotency-Key for every POST/PUT/PATCH; pass
 * one explicitly here when the caller already owns a stable key (cron
 * job, message id, etc) so retries collapse server-side.
 */
export interface RequestOptions {
  /**
   * Override the Idempotency-Key header. Pass an empty string to suppress
   * the header entirely (rare — usually you want auto-generation).
   */
  idempotencyKey?: string;
  /** Forwarded to fetch — abort the in-flight request. */
  signal?: AbortSignal;
}

// Methods that should auto-attach an Idempotency-Key header. PATCH is
// included because PATCH bodies aren't naturally idempotent (e.g. "increase
// counter"), and the server is free to ignore the header until it wires
// dedup storage. GET / DELETE / HEAD never get a key.
const IDEMPOTENT_METHODS = new Set(["POST", "PUT", "PATCH"]);

const DEFAULT_RETRY_BACKOFF_MS = [250, 750, 2250];
// HTTP statuses that warrant a transparent retry. 429 deliberately omitted
// — the server returns Retry-After and the SDK should let the caller
// decide rather than silently swallowing rate-limits.
const RETRYABLE_STATUSES = new Set([502, 503, 504]);

function randomKey(): string {
  // crypto.randomUUID is in Node 20+, all modern browsers (Chrome 92+,
  // Firefox 95+, Safari 15.4+), Cloudflare Workers, Deno, and Bun. We
  // intentionally don't polyfill: the matrix above is the SDK's support
  // floor anyway.
  return globalThis.crypto.randomUUID();
}

function sleep(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason);
      return;
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, ms);
    const onAbort = () => {
      clearTimeout(timer);
      reject(signal?.reason);
    };
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

function jitter(ms: number): number {
  // Decorrelated jitter, ±25%. Keeps retries from synchronising across
  // many SDK instances hitting the same blip.
  return ms * (0.75 + Math.random() * 0.5);
}

export class ElidoApiError extends Error {
  status: number;
  body: unknown;
  constructor(status: number, body: unknown, message: string) {
    super(message);
    this.status = status;
    this.body = body;
    this.name = "ElidoApiError";
  }

  /** Stable machine-readable `code` from the JSON error body, if any
   *  (e.g. "email_not_verified", "captcha_required"). */
  get code(): string | undefined {
    const b = this.body;
    return b &&
      typeof b === "object" &&
      "code" in b &&
      typeof b.code === "string"
      ? b.code
      : undefined;
  }
}

export class ElidoApi {
  private opts: ElidoApiOptions;

  constructor(opts: ElidoApiOptions) {
    if (!opts.baseUrl) throw new Error("ElidoApi: baseUrl is required");
    this.opts = opts;
  }

  // === Users ===
  users = {
    me: () => this.request<Me>("GET", "/v1/me"),
    // IANA name. the API validates via time.LoadLocation.
    updateMyTimezone: (timezone: string) =>
      this.request<{ timezone: string }>("PATCH", "/v1/me/timezone", {
        body: { timezone },
      }),
    // currently flips users.onboarding_completed_at. The
    // handler accepts {onboarding_completed: true|false} and ignores
    // any other fields, so future dashboard preferences can land here
    // without bumping the SDK.
    patchMe: (input: { onboarding_completed?: boolean }) =>
      this.request<User>("PATCH", "/v1/me", { body: input }),
  };

  // === Account / workspace deletion, ownership transfer, security ===
  // Danger endpoints need a recent sign-in: they answer 403 code
  // "reauth_required"; confirmations are the localized danger word
  // (any of the 13 locales is accepted) in `confirm_word`.
  account = {
    deletionStatus: () =>
      this.request<{
        pending: DeletionRequestInfo | null;
        waiting_transfer: boolean;
      }>("GET", "/v1/me/deletion"),
    deletionPreview: (include: number[] = []) =>
      this.request<DeletionPreview>(
        "GET",
        `/v1/me/deletion/preview${include.length ? `?include=${include.join(",")}` : ""}`,
      ),
    requestDeletion: (input: RequestAccountDeletionInput) =>
      this.request<DeletionResult>("POST", "/v1/me/deletion", { body: input }),
    /** Cancel a deletion that waits for ownership transfers. */
    cancelWaitingDeletion: () =>
      this.request<{ status: "cancelled"; transfers_cancelled: number }>(
        "DELETE",
        "/v1/me/deletion",
      ),
    restore: () =>
      this.request<{ status: "restored"; request: DeletionRequestInfo }>(
        "POST",
        "/v1/me/deletion/restore",
      ),
    eraseNow: (confirmWord: string) =>
      this.request<DeletionResult>("POST", "/v1/me/deletion/erase-now", {
        body: { confirm_word: confirmWord },
      }),
    createExport: () => this.request<DataExport>("POST", "/v1/me/exports"),
    getExport: (id: number) =>
      this.request<DataExport>("GET", `/v1/me/exports/${id}`),
    incomingTransfers: () =>
      this.request<{ items: OwnershipTransfer[] }>(
        "GET",
        "/v1/me/ownership-transfers",
      ),
    acceptTransfer: (id: number) =>
      this.request<{ transfer: OwnershipTransfer; billing_effect: string }>(
        "POST",
        `/v1/me/ownership-transfers/${id}/accept`,
      ),
    declineTransfer: (id: number) =>
      this.request<{ transfer: OwnershipTransfer }>(
        "POST",
        `/v1/me/ownership-transfers/${id}/decline`,
      ),
    security: () => this.request<SecurityOverview>("GET", "/v1/me/security"),
    startRecoveryEmail: (email: string) =>
      this.request<{ status: "code_sent"; expires_in: number }>(
        "POST",
        "/v1/me/recovery-email",
        { body: { email } },
      ),
    verifyRecoveryEmail: (code: string) =>
      this.request<{ status: "verified" }>(
        "POST",
        "/v1/me/recovery-email/verify",
        { body: { code } },
      ),
    removeRecoveryEmail: () =>
      this.request<void>("DELETE", "/v1/me/recovery-email"),
    startEmailChange: (newEmail: string) =>
      this.request<{ status: "code_sent"; expires_in: number }>(
        "POST",
        "/v1/me/email-change",
        { body: { new_email: newEmail } },
      ),
    verifyEmailChange: (code: string) =>
      this.request<{ status: "changed"; undo_days: number }>(
        "POST",
        "/v1/me/email-change/verify",
        { body: { code } },
      ),
  };

  /** Unauthenticated sign-in recovery flows; answers never reveal whether an address exists. */
  authRecovery = {
    undoEmailChange: (token: string) =>
      this.request<{ status: "restored" }>(
        "POST",
        "/v1/auth/email-change/undo",
        { body: { token }, auth: false },
      ),
    startTwoFactorReset: (email: string) =>
      this.request<{ status: string }>("POST", "/v1/auth/two-factor-reset", {
        body: { email },
        auth: false,
      }),
    confirmTwoFactorReset: (input: {
      email: string;
      code_primary: string;
      code_recovery: string;
    }) =>
      this.request<{ status: "waiting"; wait_hours: number }>(
        "POST",
        "/v1/auth/two-factor-reset/confirm",
        { body: input, auth: false },
      ),
    cancelTwoFactorReset: (token: string) =>
      this.request<{ status: "cancelled" }>(
        "POST",
        "/v1/auth/two-factor-reset/cancel",
        { body: { token }, auth: false },
      ),
  };

  workspaceLifecycle = {
    deletionStatus: (ws: number) =>
      this.request<{ pending: DeletionRequestInfo | null }>(
        "GET",
        `/v1/workspaces/${ws}/deletion`,
      ),
    deletionPreview: (ws: number) =>
      this.request<DeletionPreview>(
        "GET",
        `/v1/workspaces/${ws}/deletion/preview`,
      ),
    requestDeletion: (
      ws: number,
      input: { mode: DeletionMode; confirm_word: string },
    ) =>
      this.request<DeletionResult>("POST", `/v1/workspaces/${ws}/deletion`, {
        body: input,
      }),
    restore: (ws: number) =>
      this.request<{ status: "restored" }>(
        "POST",
        `/v1/workspaces/${ws}/deletion/restore`,
      ),
    eraseNow: (ws: number, confirmWord: string) =>
      this.request<DeletionResult>(
        "POST",
        `/v1/workspaces/${ws}/deletion/erase-now`,
        { body: { confirm_word: confirmWord } },
      ),
    createExport: (ws: number) =>
      this.request<DataExport>("POST", `/v1/workspaces/${ws}/exports`),
    getExport: (ws: number, id: number) =>
      this.request<DataExport>("GET", `/v1/workspaces/${ws}/exports/${id}`),
    currentTransfer: (ws: number) =>
      this.request<{ transfer: OwnershipTransfer | null }>(
        "GET",
        `/v1/workspaces/${ws}/ownership-transfers`,
      ),
    createTransfer: (
      ws: number,
      input: {
        to_user_id: number;
        billing: "move" | "cancel";
        after: "admin" | "leave";
        confirm_word: string;
      },
    ) =>
      this.request<{ transfer: OwnershipTransfer; billing_effect: string }>(
        "POST",
        `/v1/workspaces/${ws}/ownership-transfers`,
        { body: input },
      ),
    cancelTransfer: (ws: number, id: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${ws}/ownership-transfers/${id}`,
      ),
    remindTransfer: (ws: number, id: number) =>
      this.request<void>(
        "POST",
        `/v1/workspaces/${ws}/ownership-transfers/${id}/remind`,
      ),
    twoFactorPolicy: (ws: number) =>
      this.request<TwoFactorPolicy>(
        "GET",
        `/v1/workspaces/${ws}/security/two-factor`,
      ),
    setTwoFactorPolicy: (
      ws: number,
      input: {
        required: boolean;
        grace_days?: number;
        methods?: "strong" | "any";
      },
    ) =>
      this.request<TwoFactorPolicy>(
        "PUT",
        `/v1/workspaces/${ws}/security/two-factor`,
        { body: input },
      ),
    remindMemberTwoFactor: (ws: number, userId: number) =>
      this.request<void>(
        "POST",
        `/v1/workspaces/${ws}/members/${userId}/two-factor-reminder`,
      ),
    trash: (ws: number) =>
      this.request<{ items: TrashedLink[]; retention_days: number }>(
        "GET",
        `/v1/workspaces/${ws}/links/trash`,
      ),
    restoreLink: (ws: number, linkId: number) =>
      this.request<unknown>(
        "POST",
        `/v1/workspaces/${ws}/links/${linkId}/restore`,
      ),
    purgeLink: (ws: number, linkId: number, confirmWord: string) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${ws}/links/${linkId}/purge`,
        { body: { confirm_word: confirmWord } },
      ),
    emptyTrash: (ws: number, confirmWord: string) =>
      this.request<{ purged: number }>(
        "DELETE",
        `/v1/workspaces/${ws}/links/trash`,
        { body: { confirm_word: confirmWord } },
      ),
  };

  // === Workspaces ===
  workspaces = {
    create: (input: CreateWorkspaceInput) =>
      this.request<Workspace>("POST", "/v1/workspaces", { body: input }),
    list: () =>
      this.request<{ items: WorkspaceWithRole[] }>("GET", "/v1/workspaces"),
    get: (id: number) => this.request<Workspace>("GET", `/v1/workspaces/${id}`),
    update: (id: number, input: UpdateWorkspaceInput) =>
      this.request<Workspace>("PATCH", `/v1/workspaces/${id}`, { body: input }),
    members: (id: number) =>
      this.request<{ items: WorkspaceMember[] }>(
        "GET",
        `/v1/workspaces/${id}/members`,
      ),
  };

  // === Workspace invitations ===
  invitations = {
    create: (workspaceId: number, input: CreateInvitationInput) =>
      this.request<Invitation>(
        "POST",
        `/v1/workspaces/${workspaceId}/invitations`,
        { body: input },
      ),
    list: (workspaceId: number) =>
      this.request<{ items: PendingInvitation[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/invitations`,
      ),
    revoke: (workspaceId: number, invitationId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/invitations/${invitationId}`,
      ),
    /**
     * Rotates the token + bumps the expiry on a still-pending invitation
     * and re-publishes the invitation.created event so the dispatcher
     * sends a fresh email. Returns the updated row including the new
     * token, so the caller can render a copy-able link.
     */
    resend: (workspaceId: number, invitationId: number) =>
      this.request<Invitation>(
        "POST",
        `/v1/workspaces/${workspaceId}/invitations/${invitationId}/resend`,
      ),
    /**
     * Public — no auth header required. Returns workspace name + role for
     * the /invite/[token] landing page.
     */
    preview: (token: string) =>
      this.request<InvitationPreview>(
        "GET",
        `/v1/invitations/${encodeURIComponent(token)}`,
      ),
    /**
     * Authenticated. Caller becomes a member of the invited workspace at
     * the invited role; their email must match.
     */
    accept: (token: string) =>
      this.request<{
        workspace_id: number;
        role: string;
        already_member?: boolean;
      }>("POST", `/v1/invitations/${encodeURIComponent(token)}/accept`),
  };

  // === Workspace SSO config (WorkOS) ===
  sso = {
    get: (workspaceId: number) =>
      this.request<WorkspaceSsoConfig>(
        "GET",
        `/v1/workspaces/${workspaceId}/sso`,
      ),
    upsert: (workspaceId: number, input: UpsertWorkspaceSsoConfigInput) =>
      this.request<WorkspaceSsoConfig>(
        "PUT",
        `/v1/workspaces/${workspaceId}/sso`,
        { body: input },
      ),
    delete: (workspaceId: number) =>
      this.request<void>("DELETE", `/v1/workspaces/${workspaceId}/sso`),
    /** Public lookup — used by /auth/sso/start to map an email's domain
     *  to a WorkOS connection id. 404 means "no SSO configured here". */
    discover: (domain: string) =>
      this.request<SsoDiscoverResult>(
        "GET",
        `/v1/sso/discover?domain=${encodeURIComponent(domain)}`,
      ),
    /** Public lookup — used by /auth/sso/callback to map a WorkOS
     *  connection id back to a workspace before signing the user in. */
    byConnection: (connectionId: string) =>
      this.request<SsoDiscoverResult>(
        "GET",
        `/v1/sso/by-connection?id=${encodeURIComponent(connectionId)}`,
      ),
  };

  // === Workspace domains (workspace view; complements `domains` for the
  //     per-domain CRUD). ===
  workspaceDomains = {
    list: (workspaceId: number) =>
      this.request<{ items: WorkspaceDomain[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/domains`,
      ),
    /**
     * Resolve the workspace's primary redirect domain — a verified
     * custom domain when one is attached, otherwise the system_tier
     * domain matching the workspace's plan_tier. Use this in shorten
     * flows; do NOT iterate `list()` for that purpose (it only returns
     * custom domains, so freshly-provisioned workspaces look empty).
     */
    primary: (workspaceId: number) =>
      this.request<WorkspaceDomain>(
        "GET",
        `/v1/workspaces/${workspaceId}/redirect-domain`,
      ),
    updateAppLinks: (
      workspaceId: number,
      domainId: number,
      input: UpdateAppLinksInput,
    ) =>
      this.request<WorkspaceDomain>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/domains/${domainId}/app-links`,
        { body: input },
      ),
  };

  // === Metadata (OG/Twitter card preview) ===
  metadata = {
    fetch: (url: string) =>
      this.metadataRequest<LinkMetadata>("/v1/metadata/fetch", { url }),
  };

  private async metadataRequest<T>(path: string, body: unknown): Promise<T> {
    const baseUrl = this.opts.metadataBaseUrl ?? this.opts.baseUrl;
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method: "POST",
      path,
      headers: { "Content-Type": "application/json" },
      body,
    });
  }

  // === Audit log ===
  audit = {
    list: (workspaceId: number, opts?: { limit?: number }) => {
      const qs = new URLSearchParams();
      if (opts?.limit != null) qs.set("limit", String(opts.limit));
      const q = qs.toString();
      return this.request<{ items: AuditEvent[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/audit${q ? `?${q}` : ""}`,
      );
    },
  };

  // === Links ===
  links = {
    list: (workspaceId: number, opts?: ListLinksOptions) => {
      const qs = new URLSearchParams();
      if (opts?.limit != null) qs.set("limit", String(opts.limit));
      if (opts?.cursor != null) qs.set("cursor", opts.cursor);
      // Deprecated. Server still accepts this for one release; we leave
      // it in the SDK for callers mid-migration.
      if (opts?.offset != null) qs.set("offset", String(opts.offset));
      if (opts?.tags?.length) qs.set("tags", opts.tags.join(","));
      if (opts?.q) qs.set("q", opts.q);
      if (opts?.folder !== undefined) qs.set("folder", String(opts.folder));
      if (opts?.host) qs.set("host", opts.host);
      if (opts?.status) qs.set("status", opts.status);
      const query = qs.toString();
      const path = `/v1/workspaces/${workspaceId}/links${query ? `?${query}` : ""}`;
      return this.request<PaginatedLinks>("GET", path);
    },
    listTags: (workspaceId: number) =>
      this.request<{ items: WorkspaceTag[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/links/tags`,
      ),
    get: (workspaceId: number, linkId: number) =>
      this.request<Link>(
        "GET",
        `/v1/workspaces/${workspaceId}/links/${linkId}`,
      ),
    create: (
      workspaceId: number,
      input: CreateLinkInput,
      options?: RequestOptions,
    ) =>
      this.request<Link>("POST", `/v1/workspaces/${workspaceId}/links`, {
        body: input,
        idempotencyKey: options?.idempotencyKey,
        signal: options?.signal,
      }),
    bulkCreate: (
      workspaceId: number,
      input: BulkCreateInput,
      options?: RequestOptions,
    ) =>
      this.request<BulkCreateResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/bulk`,
        {
          body: input,
          idempotencyKey: options?.idempotencyKey,
          signal: options?.signal,
        },
      ),
    bulkMutate: (
      workspaceId: number,
      input: BulkMutateInput,
      options?: RequestOptions,
    ) =>
      this.request<BulkMutateResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/bulk-mutate`,
        {
          body: input,
          idempotencyKey: options?.idempotencyKey,
          signal: options?.signal,
        },
      ),
    /**
     * AI-suggested back-halves. The server fetches the
     * destination's title + description, prompts Claude Haiku 4.5, and
     * returns up to 3 brand-friendly slug candidates.
     *
     * The endpoint returns:
     *   - 503 when ANTHROPIC_API_KEY is unset (UI greys the button)
     *   - 429 on per-workspace rate limit (10/min, burst 5)
     *   - 200 { suggestions: string[] } otherwise
     */
    suggestSlug: (
      workspaceId: number,
      input: { destination_url: string; tags?: string[]; context?: string },
      options?: RequestOptions,
    ) =>
      this.request<{ suggestions: string[]; cached?: boolean }>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/suggest-slug`,
        {
          body: input,
          signal: options?.signal,
        },
      ),
    /**
     * Re-publishes every link in the workspace so the search service can
     * rebuild its Meilisearch index from authoritative state. Idempotent;
     * safe to run repeatedly. Returns the count of rows published.
     */
    reindexSearch: (workspaceId: number) =>
      this.request<{ published: number }>(
        "POST",
        `/v1/workspaces/${workspaceId}/search/reindex`,
      ),
    update: (workspaceId: number, linkId: number, input: UpdateLinkInput) =>
      this.request<Link>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/links/${linkId}`,
        { body: input },
      ),
    delete: (workspaceId: number, linkId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/links/${linkId}`,
      ),
    /**
     * rotate the encryption envelope for an E2E
     * encrypted link. The link MUST already be encrypted. The browser
     * generates a fresh key + IV, re-encrypts the destination URL
     * (which the workspace member must paste again — the server has no
     * record of it), and posts the new ciphertext via this method.
     *
     * The new key never leaves the browser; the caller is responsible
     * for assembling the new `<short-url>#k=<base64url(key)>` and
     * sharing it with whoever needs the link.
     */
    rotateEncryption: (
      workspaceId: number,
      linkId: number,
      input: RotateLinkEncryptionInput,
    ) =>
      this.request<{ ok: boolean }>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/${linkId}/encryption/rotate`,
        { body: input },
      ),
    /**
     * Mint a public-share token for a single link's analytics. Anyone with
     * the resulting URL can view the link's read-only analytics dashboard
     * — no auth required. Tokens are HMAC-signed and self-contained;
     * "revoke" by waiting for `expires_at` or rotating SHARE_SECRET on
     * the server.
     */
    share: (workspaceId: number, linkId: number, input?: CreateShareInput) =>
      this.request<CreateShareResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/${linkId}/share`,
        { body: input ?? {} },
      ),
    /**
     * Fetch the saved QR design for a link. Returns `{ design: null }` when
     * the user hasn't customised a QR for this link yet (server returns
     * 404 in that case; the SDK normalises it so callers don't need to
     * special-case ElidoApiError.status === 404).
     */
    getQRDesign: async (
      workspaceId: number,
      linkId: number,
    ): Promise<{
      link_id: number | null;
      design: Record<string, unknown> | null;
      updated_at: string | null;
    }> => {
      try {
        return await this.request<{
          link_id: number;
          design: Record<string, unknown>;
          updated_at: string;
        }>("GET", `/v1/workspaces/${workspaceId}/links/${linkId}/qr`);
      } catch (err) {
        if (err instanceof ElidoApiError && err.status === 404) {
          return { link_id: null, design: null, updated_at: null };
        }
        throw err;
      }
    },
    /**
     * Persist (insert or replace) the QR design for a link. The `design`
     * payload is opaque JSON — whatever shape the QR playground produces
     * — so the schema can evolve client-side without an API change.
     */
    saveQRDesign: (
      workspaceId: number,
      linkId: number,
      design: Record<string, unknown>,
    ) =>
      this.request<{
        link_id: number;
        design: Record<string, unknown>;
        updated_at: string;
      }>("PUT", `/v1/workspaces/${workspaceId}/links/${linkId}/qr`, {
        body: { design },
      }),
    deleteQRDesign: (workspaceId: number, linkId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/links/${linkId}/qr`,
      ),
    /**
     * Lightweight workspace-scoped lookup: which link ids have a saved
     * QR design. The dashboard list view calls this once and uses it to
     * render a small QR badge + drive the has_qr filter without paging
     * through the full QR table.
     */
    listQRDesignIds: (workspaceId: number) =>
      this.request<{ link_ids: number[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/qr-designs/ids`,
      ),
    listVariants: (workspaceId: number, linkId: number) =>
      this.request<{ items: LinkVariant[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/links/${linkId}/variants`,
      ),
    createVariant: (
      workspaceId: number,
      linkId: number,
      input: CreateLinkVariantInput,
    ) =>
      this.request<LinkVariant>(
        "POST",
        `/v1/workspaces/${workspaceId}/links/${linkId}/variants`,
        { body: input },
      ),
    updateVariant: (
      workspaceId: number,
      linkId: number,
      variantId: number,
      input: UpdateLinkVariantInput,
    ) =>
      this.request<LinkVariant>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/links/${linkId}/variants/${variantId}`,
        { body: input },
      ),
    deleteVariant: (workspaceId: number, linkId: number, variantId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/links/${linkId}/variants/${variantId}`,
      ),
    /**
     * Lazy async-iterator over every link in the workspace. Pages via
     * the server's `next_cursor`; consumers see a flat stream.
     *
     * ```ts
     * for await (const link of sdk.links.iterate(42)) {
     *   console.log(link.slug);
     * }
     * ```
     *
     * Filters (tags / q / folder) are honoured the same as `links.list`.
     * Break out of the `for await` to stop early — no extra page is
     * fetched after the loop returns.
     */
    iterate: (
      workspaceId: number,
      opts?: ListLinksOptions & { pageSize?: number },
    ): AsyncGenerator<Link, void, void> => this.iterateLinks(workspaceId, opts),
    /**
     * Subscribe to a live SSE stream of click events for a single link.
     * The stream is served from `/bff/live/links/:id/clicks/stream`.
     *
     * Returns an `unsubscribe` function — call it to close the
     * connection (the SDK will also stop the underlying fetch via
     * AbortController). The caller is responsible for any reconnect
     * logic; on transient errors the SDK fires `onError` and exits.
     *
     * `onEvent` payload shape depends on what the server publishes;
     * today it's a small `{ link_id, slug, ts, country?, ua_family? }`
     * object. We hand it to callers as `unknown` so the mobile UI can
     * treat it as opaque (it only needs the existence of the event to
     * tick a counter).
     */
    streamClicks: (
      linkId: number,
      handlers: {
        onEvent: (payload: unknown) => void;
        onOpen?: () => void;
        onError?: (err: unknown) => void;
      },
    ): (() => void) => this.openClickStream(linkId, handlers),
  };

  private openClickStream(
    linkId: number,
    handlers: {
      onEvent: (payload: unknown) => void;
      onOpen?: () => void;
      onError?: (err: unknown) => void;
    },
  ): () => void {
    const ctrl = new AbortController();
    const base = (this.opts.bffBaseUrl ?? this.opts.baseUrl).replace(/\/$/, "");
    const url = `${base}/bff/live/links/${linkId}/clicks/stream`;
    const headers: Record<string, string> = { Accept: "text/event-stream" };
    if (this.opts.token) {
      headers["Authorization"] = `Bearer ${this.opts.token}`;
    } else if (this.opts.cookie) {
      headers["Cookie"] = this.opts.cookie;
    } else if (this.opts.devUserId != null) {
      headers["X-Dev-User-ID"] = String(this.opts.devUserId);
    }
    if (this.opts.clientIp) headers["X-Forwarded-For"] = this.opts.clientIp;
    if (this.opts.userAgent) headers["User-Agent"] = this.opts.userAgent;

    void (async () => {
      try {
        const f = this.opts.fetch ?? fetch;
        const res = await f(url, {
          method: "GET",
          headers,
          signal: ctrl.signal,
          cache: "no-store",
        });
        if (!res.ok || !res.body) {
          handlers.onError?.(
            new ElidoApiError(res.status, null, `GET ${url} → ${res.status}`),
          );
          return;
        }
        handlers.onOpen?.();
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buf = "";
        // Minimal SSE parser — splits on the blank-line frame boundary
        // and pulls `event:` + `data:` lines per frame. We ignore
        // multi-line data (the server always sends a single JSON
        // line) and `id:` / `retry:` directives (server doesn't set
        // them, and reconnects are caller-driven).
        while (true) {
          const { done, value } = await reader.read();
          if (done) return;
          buf += decoder.decode(value, { stream: true });
          let frameEnd: number;
          while ((frameEnd = buf.indexOf("\n\n")) !== -1) {
            const frame = buf.slice(0, frameEnd);
            buf = buf.slice(frameEnd + 2);
            let event = "message";
            let data = "";
            for (const line of frame.split("\n")) {
              if (line.startsWith("event:")) event = line.slice(6).trim();
              else if (line.startsWith("data:")) data += line.slice(5).trim();
            }
            if (event === "ping" || data === "") continue;
            if (event !== "click") continue;
            try {
              handlers.onEvent(JSON.parse(data));
            } catch {
              handlers.onEvent(data);
            }
          }
        }
      } catch (err) {
        if (
          err instanceof Error &&
          (err.name === "AbortError" || ctrl.signal.aborted)
        ) {
          return;
        }
        handlers.onError?.(err);
      }
    })();

    return () => ctrl.abort();
  }

  private async *iterateLinks(
    workspaceId: number,
    opts?: ListLinksOptions & { pageSize?: number },
  ): AsyncGenerator<Link, void, void> {
    const pageSize = opts?.pageSize ?? 100;
    let cursor = opts?.cursor;
    while (true) {
      const page = await this.links.list(workspaceId, {
        ...opts,
        limit: pageSize,
        cursor,
        // Strip the deprecated offset path so we never accidentally mix
        // cursor + offset (the server prefers offset when both are set).
        offset: undefined,
      });
      for (const link of page.items) yield link;
      if (!page.next_cursor) return;
      cursor = page.next_cursor;
    }
  }

  // === Workspace conversion-tracking pixels ===
  pixels = {
    get: (workspaceId: number) =>
      this.request<WorkspacePixels>(
        "GET",
        `/v1/workspaces/${workspaceId}/pixels`,
      ),
    upsert: (workspaceId: number, input: UpsertWorkspacePixelsInput) =>
      this.request<WorkspacePixels>(
        "PUT",
        `/v1/workspaces/${workspaceId}/pixels`,
        { body: input },
      ),
    delete: (workspaceId: number) =>
      this.request<void>("DELETE", `/v1/workspaces/${workspaceId}/pixels`),
  };

  // === Workspace event integrations (GA4 / Mixpanel / Klaviyo / Brevo / Datadog) ===
  eventIntegrations = {
    /** List all configured vendors (masked api_key). */
    list: (workspaceId: number) =>
      this.request<{ items: EventIntegration[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/event-integrations`,
      ),
    /** Save (upsert) plaintext config for a vendor. Returns masked view. */
    upsert: (
      workspaceId: number,
      vendor: EventIntegrationVendor,
      config: Record<string, string>,
    ) =>
      this.request<EventIntegration>(
        "PUT",
        `/v1/workspaces/${workspaceId}/event-integrations/${vendor}`,
        { body: config },
      ),
    /** Soft-disable and scrub credentials for a vendor. */
    delete: (workspaceId: number, vendor: EventIntegrationVendor) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/event-integrations/${vendor}`,
      ),
    /** Send a real test event to the vendor and return its answer. */
    test: (workspaceId: number, vendor: EventIntegrationVendor) =>
      this.request<EventIntegrationTestResult>(
        "POST",
        `/v1/workspaces/${workspaceId}/event-integrations/${vendor}/test`,
      ),
  };

  // === Link folders ===
  folders = {
    list: (workspaceId: number) =>
      this.request<{ items: Folder[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/folders`,
      ),
    create: (workspaceId: number, input: CreateFolderInput) =>
      this.request<Folder>("POST", `/v1/workspaces/${workspaceId}/folders`, {
        body: input,
      }),
    update: (workspaceId: number, folderId: number, input: UpdateFolderInput) =>
      this.request<Folder>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/folders/${folderId}`,
        { body: input },
      ),
    delete: (workspaceId: number, folderId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/folders/${folderId}`,
      ),
  };

  // === Workspace tags ===
  // First-class tag catalog (name + color). Membership still lives on
  // links.tags[]; renaming/deleting a tag here propagates to every link
  // server-side. `links.listTags` returns the lighter {tag, link_count}
  // view; this returns full entities with id + color.
  tags = {
    list: (workspaceId: number) =>
      this.request<{ items: Tag[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/tags`,
      ),
    create: (workspaceId: number, input: CreateTagInput) =>
      this.request<Tag>("POST", `/v1/workspaces/${workspaceId}/tags`, {
        body: input,
      }),
    update: (workspaceId: number, tagId: number, input: UpdateTagInput) =>
      this.request<Tag>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/tags/${tagId}`,
        { body: input },
      ),
    delete: (workspaceId: number, tagId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/tags/${tagId}`,
      ),
  };

  // === Saved views (named list presets; W4) ===
  savedViews = {
    list: (workspaceId: number, kind?: SavedView["kind"]) =>
      this.request<{ items: SavedView[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/saved-views${kind ? `?kind=${kind}` : ""}`,
      ),
    create: (workspaceId: number, input: SavedViewInput) =>
      this.request<SavedView>(
        "POST",
        `/v1/workspaces/${workspaceId}/saved-views`,
        { body: input },
      ),
    update: (
      workspaceId: number,
      viewId: number,
      input: Partial<SavedViewInput>,
    ) =>
      this.request<SavedView>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/saved-views/${viewId}`,
        { body: input },
      ),
    delete: (workspaceId: number, viewId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/saved-views/${viewId}`,
      ),
  };

  // === QR templates (named presets of QR appearance settings) ===
  qrTemplates = {
    list: (workspaceId: number) =>
      this.request<{ items: QRTemplate[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/qr-templates`,
      ),
    create: (workspaceId: number, input: QRTemplateInput) =>
      this.request<QRTemplate>(
        "POST",
        `/v1/workspaces/${workspaceId}/qr-templates`,
        { body: input },
      ),
    update: (
      workspaceId: number,
      templateId: number,
      input: Partial<QRTemplateInput>,
    ) =>
      this.request<QRTemplate>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/qr-templates/${templateId}`,
        { body: input },
      ),
    delete: (workspaceId: number, templateId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/qr-templates/${templateId}`,
      ),
  };

  // === Campaigns ===
  campaigns = {
    list: (workspaceId: number) =>
      this.request<{ items: Campaign[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/campaigns`,
      ),
    create: (workspaceId: number, input: CreateCampaignInput) =>
      this.request<Campaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/campaigns`,
        { body: input },
      ),
    update: (
      workspaceId: number,
      campaignId: number,
      input: UpdateCampaignInput,
    ) =>
      this.request<Campaign>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/campaigns/${campaignId}`,
        { body: input },
      ),
    delete: (workspaceId: number, campaignId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/campaigns/${campaignId}`,
      ),
    listLinks: (workspaceId: number, campaignId: number) =>
      this.request<{ items: import("@elido/api-types").Link[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/campaigns/${campaignId}/links`,
      ),
    assignLinks: (workspaceId: number, campaignId: number, linkIds: number[]) =>
      this.request<void>(
        "POST",
        `/v1/workspaces/${workspaceId}/campaigns/${campaignId}/links`,
        { body: { link_ids: linkIds } },
      ),
    removeLinks: (workspaceId: number, campaignId: number, linkIds: number[]) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/campaigns/${campaignId}/links`,
        { body: { link_ids: linkIds } },
      ),
  };

  // === IP allowlist ===
  ipRules = {
    list: (workspaceId: number) =>
      this.request<{ items: IPRule[]; enabled: boolean }>(
        "GET",
        `/v1/workspaces/${workspaceId}/ip-rules`,
      ),
    create: (workspaceId: number, input: CreateIPRuleInput) =>
      this.request<IPRule>("POST", `/v1/workspaces/${workspaceId}/ip-rules`, {
        body: input,
      }),
    setEnabled: (workspaceId: number, input: SetIPAllowlistEnabledInput) =>
      this.request<{ enabled: boolean }>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/ip-rules/enabled`,
        { body: input },
      ),
    delete: (workspaceId: number, ruleId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/ip-rules/${ruleId}`,
      ),
  };

  // === Per-workspace destination-domain blocklist (blocklist P3) ===
  workspaceBlocklist = {
    list: (workspaceId: number) =>
      this.request<{ items: WorkspaceBlockedDomain[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/blocked-domains`,
      ),
    create: (workspaceId: number, input: CreateBlockedDomainInput) =>
      this.request<WorkspaceBlockedDomain>(
        "POST",
        `/v1/workspaces/${workspaceId}/blocked-domains`,
        { body: input },
      ),
    delete: (workspaceId: number, id: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/blocked-domains/${id}`,
      ),
  };

  // === SCIM directory sync ===
  scim = {
    get: (workspaceId: number) =>
      this.request<ScimDirectory>("GET", `/v1/workspaces/${workspaceId}/scim`),
    upsert: (workspaceId: number, input: UpsertScimDirectoryInput) =>
      this.request<ScimDirectory>("PUT", `/v1/workspaces/${workspaceId}/scim`, {
        body: input,
      }),
    setEnabled: (workspaceId: number, input: SetScimEnabledInput) =>
      this.request<ScimDirectory>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/scim/enabled`,
        { body: input },
      ),
    delete: (workspaceId: number) =>
      this.request<void>("DELETE", `/v1/workspaces/${workspaceId}/scim`),
    listUsers: (workspaceId: number) =>
      this.request<{ items: ScimDirectoryUser[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/scim/users`,
      ),
  };

  // === Data export ===
  export = {
    list: (workspaceId: number) =>
      this.request<{ items: ExportConfig[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/export`,
      ),
    upsert: (workspaceId: number, input: UpsertExportConfigInput) =>
      this.request<ExportConfig>(
        "PUT",
        `/v1/workspaces/${workspaceId}/export`,
        { body: input },
      ),
    setEnabled: (
      workspaceId: number,
      kind: string,
      input: SetExportEnabledInput,
    ) =>
      this.request<{ enabled: boolean }>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/export/${kind}/enabled`,
        { body: input },
      ),
    delete: (workspaceId: number, kind: string) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/export/${kind}`,
      ),
  };

  // === Link safety / anti-abuse ===
  safety = {
    listScans: (
      workspaceId: number,
      linkId: number,
      opts?: { limit?: number },
    ) =>
      this.request<{ items: LinkSafetyScan[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/links/${linkId}/scans${opts?.limit ? `?limit=${opts.limit}` : ""}`,
      ),
    listSuspect: (
      workspaceId: number,
      opts?: { limit?: number; offset?: number },
    ) =>
      this.request<{ items: SuspectLinkRow[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/safety/suspect${opts ? `?limit=${opts.limit ?? 50}&offset=${opts.offset ?? 0}` : ""}`,
      ),
  };

  // === White-label branding ===
  branding = {
    get: (workspaceId: number) =>
      this.request<WorkspaceBranding>(
        "GET",
        `/v1/workspaces/${workspaceId}/branding`,
      ),
    update: (workspaceId: number, input: UpsertWorkspaceBrandingInput) =>
      this.request<WorkspaceBranding>(
        "PUT",
        `/v1/workspaces/${workspaceId}/branding`,
        { body: input },
      ),
    delete: (workspaceId: number) =>
      this.request<void>("DELETE", `/v1/workspaces/${workspaceId}/branding`),
  };

  // === Asset uploads ===
  //
  // Single endpoint: POST /v1/workspaces/{id}/uploads/presign. Server
  // returns a presigned PUT URL the browser hits directly with the
  // file bytes. Per-Kind RBAC + MIME + size
  // limits are enforced server-side.
  uploadsPresign = (
    workspaceId: number,
    input: {
      kind:
        | "branding_logo"
        | "branding_favicon"
        | "bio_avatar"
        | "gallery_cover"
        | "microsite_hero";
      filename: string;
      content_type: string;
      size_bytes: number;
    },
  ) =>
    this.request<{
      key: string;
      upload_url: string;
      public_url: string;
      expires_at: string;
      max_size_bytes: number;
      required_content_type: string;
    }>("POST", `/v1/workspaces/${workspaceId}/uploads/presign`, {
      body: input,
    });

  // === Compliance posture ===
  compliance = {
    get: (workspaceId: number) =>
      this.request<WorkspaceCompliance>(
        "GET",
        `/v1/workspaces/${workspaceId}/compliance`,
      ),
    update: (workspaceId: number, input: UpdateWorkspaceComplianceInput) =>
      this.request<WorkspaceCompliance>(
        "PUT",
        `/v1/workspaces/${workspaceId}/compliance`,
        { body: input },
      ),
    /**
     * SOC 2 / HIPAA evidence snapshot. Returns a JSON view of the
     * workspace's posture + access controls + audit-log volume + SSO /
     * SCIM bindings. Use `evidenceBundleUrl` for a downloadable ZIP
     * suitable for an auditor's evidence pack.
     */
    evidence: (workspaceId: number) =>
      this.request<EvidenceSnapshot>(
        "GET",
        `/v1/workspaces/${workspaceId}/compliance/evidence`,
      ),
    /**
     * URL of the streaming ZIP bundle. Returned as a string (not a
     * Blob) because consumers usually want to drop it into an `<a
     * download>` so the browser writes the bytes straight to disk
     * without buffering a 100k-event audit log in memory.
     */
    evidenceBundleUrl: (workspaceId: number) =>
      `${this.opts.baseUrl.replace(/\/$/, "")}/v1/workspaces/${workspaceId}/compliance/evidence.zip`,
  };

  // === HIPAA BAA flow ===
  baa = {
    list: (workspaceId: number) =>
      this.request<{ items: BAA[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/baa`,
      ),
    request: (workspaceId: number, input: RequestBAAInput) =>
      this.request<BAA>("POST", `/v1/workspaces/${workspaceId}/baa`, {
        body: input,
      }),
    pdfUrl: (workspaceId: number, id: number) =>
      `${this.opts.baseUrl.replace(/\/$/, "")}/v1/workspaces/${workspaceId}/baa/${id}/pdf`,
    markSigned: (workspaceId: number, id: number, signedAt?: string) =>
      this.request<BAA>(
        "POST",
        `/v1/workspaces/${workspaceId}/baa/${id}/sign`,
        signedAt ? { body: { signed_at: signedAt } } : undefined,
      ),
    counterSign: (
      workspaceId: number,
      id: number,
      input: CounterSignBAAInput,
    ) =>
      this.request<BAA>(
        "POST",
        `/v1/workspaces/${workspaceId}/baa/${id}/counter-sign`,
        { body: input },
      ),
  };

  // === Domain marketplace ===
  marketplace = {
    list: (workspaceId: number) =>
      this.request<{ items: MarketplaceDomain[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/marketplace/domains`,
      ),
    claim: (workspaceId: number, marketplaceId: number) =>
      this.request<ClaimMarketplaceDomainResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/marketplace/domains/${marketplaceId}/claim`,
      ),
  };

  // === Custom roles ===
  customRoles = {
    list: (workspaceId: number) =>
      this.request<CustomRolesListResponse>(
        "GET",
        `/v1/workspaces/${workspaceId}/roles`,
      ),
    create: (workspaceId: number, input: CreateCustomRoleInput) =>
      this.request<CustomRole>("POST", `/v1/workspaces/${workspaceId}/roles`, {
        body: input,
      }),
    update: (
      workspaceId: number,
      roleId: number,
      input: UpdateCustomRoleInput,
    ) =>
      this.request<CustomRole>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/roles/${roleId}`,
        { body: input },
      ),
    delete: (workspaceId: number, roleId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/roles/${roleId}`,
      ),
  };

  // === Member role ===
  memberRole = {
    update: (
      workspaceId: number,
      userId: number,
      input: UpdateMemberRoleInput,
    ) =>
      this.request<void>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/members/${userId}/role`,
        { body: input },
      ),
    /**
     * Remove a member from the workspace. Owner removal is rejected by
     * the backend — ownership transfer is a separate flow.
     */
    remove: (workspaceId: number, userId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/members/${userId}`,
      ),
  };

  // === Conversions ===
  conversions = {
    list: (workspaceId: number, opts?: { limit?: number; offset?: number }) =>
      this.request<{ items: Conversion[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions${opts ? `?limit=${opts.limit ?? 50}&offset=${opts.offset ?? 0}` : ""}`,
      ),
    summary: (workspaceId: number) =>
      this.request<ConversionSummary>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions/summary`,
      ),
    byLink: (workspaceId: number, limit = 20) =>
      this.request<{ items: RevenueByLinkItem[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions/by-link?limit=${limit}`,
      ),
    byCampaign: (workspaceId: number, limit = 20) =>
      this.request<{ items: RevenueByCampaignItem[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions/by-campaign?limit=${limit}`,
      ),
    byDay: (workspaceId: number, since?: string) =>
      this.request<{ items: RevenueByDayItem[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions/by-day${since ? `?since=${since}` : ""}`,
      ),
    byPlatform: (workspaceId: number) =>
      this.request<{ items: RevenueByPlatformItem[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/conversions/by-platform`,
      ),
  };

  // === Bio pages ===
  bio = {
    list: (workspaceId: number) =>
      this.request<{ items: BioPage[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/bio`,
      ),
    create: (workspaceId: number, input: CreateBioPageInput) =>
      this.request<BioPage>("POST", `/v1/workspaces/${workspaceId}/bio`, {
        body: input,
      }),
    update: (workspaceId: number, bioId: number, input: UpdateBioPageInput) =>
      this.request<BioPage>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/bio/${bioId}`,
        { body: input },
      ),
    delete: (workspaceId: number, bioId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/bio/${bioId}`,
      ),
    listLinks: (workspaceId: number, bioId: number) =>
      this.request<{ items: BioLink[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/bio/${bioId}/links`,
      ),
    createLink: (
      workspaceId: number,
      bioId: number,
      input: CreateBioLinkInput,
    ) =>
      this.request<BioLink>(
        "POST",
        `/v1/workspaces/${workspaceId}/bio/${bioId}/links`,
        { body: input },
      ),
    updateLink: (
      workspaceId: number,
      bioId: number,
      linkId: number,
      input: UpdateBioLinkInput,
    ) =>
      this.request<BioLink>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/bio/${bioId}/links/${linkId}`,
        { body: input },
      ),
    deleteLink: (workspaceId: number, bioId: number, linkId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/bio/${bioId}/links/${linkId}`,
      ),
    heatmap: (workspaceId: number, bioId: number) =>
      this.request<{
        items: { bio_link_id: number; clicks: number }[];
      }>("GET", `/v1/workspaces/${workspaceId}/bio/${bioId}/heatmap`),
  };

  // === Link galleries ===
  // Workspace-owned showcase pages aggregating multiple short links — press
  // kits, campaign hubs, "all my links" pages. Many per workspace (vs one
  // bio page per human). Public renderer lives at /g/<slug> on bio-renderer.
  galleries = {
    list: (
      workspaceId: number,
      opts: {
        limit?: number;
        offset?: number;
        q?: string;
        visibility?: "public" | "unlisted" | "private";
        archived?: boolean;
      } = {},
    ) => {
      const params = new URLSearchParams();
      if (opts.limit) params.set("limit", String(opts.limit));
      if (opts.offset) params.set("offset", String(opts.offset));
      if (opts.q) params.set("q", opts.q);
      if (opts.visibility) params.set("visibility", opts.visibility);
      if (opts.archived) params.set("archived", "true");
      const qs = params.toString();
      return this.request<{ items: Gallery[]; limit: number; offset: number }>(
        "GET",
        `/v1/workspaces/${workspaceId}/galleries${qs ? `?${qs}` : ""}`,
      );
    },
    create: (workspaceId: number, input: CreateGalleryInput) =>
      this.request<Gallery>("POST", `/v1/workspaces/${workspaceId}/galleries`, {
        body: input,
      }),
    get: (workspaceId: number, galleryId: number) =>
      this.request<GalleryDetail>(
        "GET",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}`,
      ),
    update: (
      workspaceId: number,
      galleryId: number,
      input: UpdateGalleryInput,
    ) =>
      this.request<Gallery>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}`,
        { body: input },
      ),
    delete: (workspaceId: number, galleryId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}`,
      ),

    // Sections.
    createSection: (
      workspaceId: number,
      galleryId: number,
      input: CreateGallerySectionInput,
    ) =>
      this.request<GallerySection>(
        "POST",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/sections`,
        { body: input },
      ),
    updateSection: (
      workspaceId: number,
      galleryId: number,
      sectionId: number,
      input: UpdateGallerySectionInput,
    ) =>
      this.request<GallerySection>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/sections/${sectionId}`,
        { body: input },
      ),
    deleteSection: (
      workspaceId: number,
      galleryId: number,
      sectionId: number,
    ) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/sections/${sectionId}`,
      ),

    // Items.
    createItem: (
      workspaceId: number,
      galleryId: number,
      input: CreateGalleryItemInput,
    ) =>
      this.request<GalleryItem>(
        "POST",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/items`,
        { body: input },
      ),
    updateItem: (
      workspaceId: number,
      galleryId: number,
      itemId: number,
      input: UpdateGalleryItemInput,
    ) =>
      this.request<GalleryItem>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/items/${itemId}`,
        { body: input },
      ),
    deleteItem: (workspaceId: number, galleryId: number, itemId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/items/${itemId}`,
      ),

    // Bulk reorder — transactional on the server. The dashboard sends the
    // full list of (item_id, section_id, sort_order) after every drag.
    reorderItems: (
      workspaceId: number,
      galleryId: number,
      entries: ReorderGalleryItemsEntry[],
    ) =>
      this.request<{ ok: true; count: number }>(
        "POST",
        `/v1/workspaces/${workspaceId}/galleries/${galleryId}/items/reorder`,
        { body: { entries } },
      ),
  };

  // === Product microsites ===
  // BL.INK CXP analogue: structured product landing pages with hero +
  // specs + manuals + warranty + FAQ. Many per workspace. Public
  // renderer lives at /p/<slug> on bio-renderer. Sections have one of
  // 9 strongly-typed kinds — the server validates the
  // per-kind data shape on write, so 4xx errors surface invalid data
  // with a `field` path the dashboard editor can highlight.
  microsites = {
    list: (
      workspaceId: number,
      opts: {
        limit?: number;
        offset?: number;
        q?: string;
        visibility?: "public" | "unlisted" | "private";
        locale?: string;
        archived?: boolean;
      } = {},
    ) => {
      const params = new URLSearchParams();
      if (opts.limit) params.set("limit", String(opts.limit));
      if (opts.offset) params.set("offset", String(opts.offset));
      if (opts.q) params.set("q", opts.q);
      if (opts.visibility) params.set("visibility", opts.visibility);
      if (opts.locale) params.set("locale", opts.locale);
      if (opts.archived) params.set("archived", "true");
      const qs = params.toString();
      return this.request<{
        items: Microsite[];
        limit: number;
        offset: number;
      }>(
        "GET",
        `/v1/workspaces/${workspaceId}/microsites${qs ? `?${qs}` : ""}`,
      );
    },
    create: (workspaceId: number, input: CreateMicrositeInput) =>
      this.request<Microsite>(
        "POST",
        `/v1/workspaces/${workspaceId}/microsites`,
        { body: input },
      ),
    get: (workspaceId: number, micrositeId: number) =>
      this.request<MicrositeDetail>(
        "GET",
        `/v1/workspaces/${workspaceId}/microsites/${micrositeId}`,
      ),
    update: (
      workspaceId: number,
      micrositeId: number,
      input: UpdateMicrositeInput,
    ) =>
      this.request<Microsite>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/microsites/${micrositeId}`,
        { body: input },
      ),
    delete: (workspaceId: number, micrositeId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/microsites/${micrositeId}`,
      ),

    // Sections — one of 9 kinds, each with its own validated `data`
    // shape on the server. The dashboard's per-kind drawer is the
    // intended editor.
    sections: {
      create: (
        workspaceId: number,
        micrositeId: number,
        input: CreateMicrositeSectionInput,
      ) =>
        this.request<MicrositeSection>(
          "POST",
          `/v1/workspaces/${workspaceId}/microsites/${micrositeId}/sections`,
          { body: input },
        ),
      update: (
        workspaceId: number,
        micrositeId: number,
        sectionId: number,
        input: UpdateMicrositeSectionInput,
      ) =>
        this.request<MicrositeSection>(
          "PATCH",
          `/v1/workspaces/${workspaceId}/microsites/${micrositeId}/sections/${sectionId}`,
          { body: input },
        ),
      delete: (workspaceId: number, micrositeId: number, sectionId: number) =>
        this.request<void>(
          "DELETE",
          `/v1/workspaces/${workspaceId}/microsites/${micrositeId}/sections/${sectionId}`,
        ),
      reorder: (
        workspaceId: number,
        micrositeId: number,
        entries: ReorderMicrositeSectionEntry[],
      ) =>
        this.request<{ ok: true; count: number }>(
          "POST",
          `/v1/workspaces/${workspaceId}/microsites/${micrositeId}/sections/reorder`,
          { body: { entries } },
        ),
    },

    // Warranty / registration form submissions — admin+ view. The
    // public form POST endpoint lives on /v1/public/microsites/.../form
    // and is NOT exposed on the authenticated client; pass-through
    // happens via the bio-renderer client component.
    submissions: {
      list: (
        workspaceId: number,
        micrositeId: number,
        opts: { limit?: number; offset?: number } = {},
      ) => {
        const params = new URLSearchParams();
        if (opts.limit) params.set("limit", String(opts.limit));
        if (opts.offset) params.set("offset", String(opts.offset));
        const qs = params.toString();
        return this.request<{
          items: MicrositeFormSubmission[];
          limit: number;
          offset: number;
          total: number;
        }>(
          "GET",
          `/v1/workspaces/${workspaceId}/microsites/${micrositeId}/submissions${qs ? `?${qs}` : ""}`,
        );
      },
    },
  };

  // === SMS campaigns ===
  // Per-recipient short-link tracking; Twilio is the carrier. STOP/HELP
  // keyword handling + opt-out registry live on a public webhook surface
  // (POST /v1/public/sms/*). CRUD here covers draft → schedule → send
  // lifecycle.
  smsCampaigns = {
    list: (
      workspaceId: number,
      opts: { limit?: number; offset?: number } = {},
    ) => {
      const params = new URLSearchParams();
      if (opts.limit) params.set("limit", String(opts.limit));
      if (opts.offset) params.set("offset", String(opts.offset));
      const qs = params.toString();
      return this.request<{
        items: SmsCampaign[];
        limit: number;
        offset: number;
      }>(
        "GET",
        `/v1/workspaces/${workspaceId}/sms-campaigns${qs ? `?${qs}` : ""}`,
      );
    },
    create: (workspaceId: number, input: CreateSmsCampaignInput) =>
      this.request<SmsCampaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns`,
        { body: input },
      ),
    get: (workspaceId: number, campaignId: number) =>
      this.request<SmsCampaignDetail>(
        "GET",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}`,
      ),
    listMessages: (
      workspaceId: number,
      campaignId: number,
      opts: { limit?: number; offset?: number } = {},
    ) => {
      const params = new URLSearchParams();
      if (opts.limit) params.set("limit", String(opts.limit));
      if (opts.offset) params.set("offset", String(opts.offset));
      const qs = params.toString();
      return this.request<{
        items: SmsMessage[];
        limit: number;
        offset: number;
      }>(
        "GET",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/messages${qs ? `?${qs}` : ""}`,
      );
    },
    update: (
      workspaceId: number,
      campaignId: number,
      input: UpdateSmsCampaignInput,
    ) =>
      this.request<SmsCampaign>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}`,
        { body: input },
      ),
    schedule: (
      workspaceId: number,
      campaignId: number,
      sendAt: string | null = null,
    ) =>
      this.request<SmsCampaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/schedule`,
        { body: sendAt ? { send_at: sendAt } : {} },
      ),
    pause: (workspaceId: number, campaignId: number) =>
      this.request<SmsCampaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/pause`,
      ),
    resume: (workspaceId: number, campaignId: number) =>
      this.request<SmsCampaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/resume`,
      ),
    cancel: (workspaceId: number, campaignId: number) =>
      this.request<SmsCampaign>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/cancel`,
      ),
    test: (workspaceId: number, campaignId: number, toE164: string) =>
      this.request<{ ok: true; twilio_sid: string }>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-campaigns/${campaignId}/test`,
        { body: { to_e164: toE164 } },
      ),
  };

  smsOptOuts = {
    list: (
      workspaceId: number,
      opts: { limit?: number; offset?: number } = {},
    ) => {
      const params = new URLSearchParams();
      if (opts.limit) params.set("limit", String(opts.limit));
      if (opts.offset) params.set("offset", String(opts.offset));
      const qs = params.toString();
      return this.request<{
        items: SmsOptOut[];
        limit: number;
        offset: number;
      }>(
        "GET",
        `/v1/workspaces/${workspaceId}/sms-opt-outs${qs ? `?${qs}` : ""}`,
      );
    },
    add: (workspaceId: number, input: AddSmsOptOutInput) =>
      this.request<SmsOptOut>(
        "POST",
        `/v1/workspaces/${workspaceId}/sms-opt-outs`,
        { body: input },
      ),
    remove: (workspaceId: number, e164: string) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/sms-opt-outs/${encodeURIComponent(e164)}`,
      ),
  };

  // === API keys ===
  apiKeys = {
    list: (workspaceId: number) =>
      this.request<{ items: APIKey[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/api-keys`,
      ),
    create: (workspaceId: number, input: CreateAPIKeyInput) =>
      this.request<CreateAPIKeyResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/api-keys`,
        { body: input },
      ),
    revoke: (workspaceId: number, keyId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/api-keys/${keyId}`,
      ),
    // set per-key rate limit overrides. Pass null to revert to global default.
    setRateLimit: (
      workspaceId: number,
      keyId: number,
      input: { rps: number | null; burst: number | null },
    ) =>
      this.request<void>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/api-keys/${keyId}/rate-limit`,
        { body: input },
      ),
  };

  // === Machine users ===
  // Workspace-owned service accounts for CI / Terraform / scripts. Tokens
  // minted under a machine user reuse the same Bearer transport as PATs;
  // server-side they resolve to a non-human RBAC subject and skip the
  // /me/sessions, /affiliate, /me/push device flows entirely.
  machineUsers = {
    list: (workspaceId: number) =>
      this.request<{ items: MachineUser[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/machine-users`,
      ),
    create: (workspaceId: number, input: CreateMachineUserInput) =>
      this.request<MachineUser>(
        "POST",
        `/v1/workspaces/${workspaceId}/machine-users`,
        { body: input },
      ),
    get: (workspaceId: number, machineUserId: number) =>
      this.request<MachineUser>(
        "GET",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}`,
      ),
    update: (
      workspaceId: number,
      machineUserId: number,
      patch: UpdateMachineUserInput,
    ) =>
      this.request<MachineUser>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}`,
        { body: patch },
      ),
    delete: (workspaceId: number, machineUserId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}`,
      ),
    listTokens: (workspaceId: number, machineUserId: number) =>
      this.request<{ items: MachineUserToken[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}/tokens`,
      ),
    mintToken: (
      workspaceId: number,
      machineUserId: number,
      input: MintMachineUserTokenInput,
    ) =>
      this.request<MintMachineUserTokenResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}/tokens`,
        { body: input },
      ),
    revokeToken: (
      workspaceId: number,
      machineUserId: number,
      tokenId: number,
    ) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/machine-users/${machineUserId}/tokens/${tokenId}`,
      ),
  };

  // === Lookup (used by the redirect edge) ===
  lookup(host: string, slug: string) {
    return this.request<Link>(
      "GET",
      `/v1/lookup?host=${encodeURIComponent(host)}&slug=${encodeURIComponent(slug)}`,
      { auth: false },
    );
  }

  // === Custom domains. Every route is workspace-scoped and behind auth,
  //     so these go through the authenticated `request` helper.
  domains = {
    list: (workspaceId: number) =>
      this.request<{ items: CustomDomain[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/domains`,
      ),
    create: (input: {
      workspace_id: number;
      hostname: string;
      is_wildcard?: boolean;
    }) =>
      this.request<CreateCustomDomainResponse>(
        "POST",
        `/v1/workspaces/${input.workspace_id}/domains`,
        { body: { hostname: input.hostname, is_wildcard: input.is_wildcard } },
      ),
    get: (workspaceId: number, domainId: number) =>
      this.request<CustomDomain>(
        "GET",
        `/v1/workspaces/${workspaceId}/domains/${domainId}`,
      ),
    delete: (workspaceId: number, domainId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/domains/${domainId}`,
      ),
  };

  // === bulk-import migrations (Bitly → Elido, …) ===
  // The Bitly token never lands on disk — it's POSTed in-band to /groups
  // (so the user can pick a source group) and again to /bitly to kick off
  // the worker. The worker holds it in memory only.
  imports = {
    list: (workspaceId: number, opts?: { vendor?: string; limit?: number }) => {
      const qs = new URLSearchParams();
      if (opts?.vendor) qs.set("vendor", opts.vendor);
      if (opts?.limit) qs.set("limit", String(opts.limit));
      const suffix = qs.toString() ? `?${qs.toString()}` : "";
      return this.simpleRequest<{ items: ImportJob[] }>(
        this.opts.baseUrl,
        "GET",
        `/v1/workspaces/${workspaceId}/imports${suffix}`,
      );
    },
    get: (workspaceId: number, importId: number) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "GET",
        `/v1/workspaces/${workspaceId}/imports/${importId}`,
      ),
    bitlyGroups: (workspaceId: number, token: string) =>
      this.simpleRequest<{ items: BitlyGroup[] }>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/bitly/groups`,
        { body: { token } },
      ),
    startBitly: (
      workspaceId: number,
      input: {
        token: string;
        group_guid: string;
        target_domain_id: number;
        conflict_strategy?: "suffix" | "skip" | "fail";
      },
    ) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/bitly`,
        { body: input },
      ),
    startRebrandly: (
      workspaceId: number,
      input: {
        token: string;
        workspace_id?: string;
        target_domain_id: number;
        conflict_strategy?: "suffix" | "skip" | "fail";
      },
    ) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/rebrandly`,
        { body: input },
      ),
    startShortio: (
      workspaceId: number,
      input: {
        token: string;
        domain_id: string;
        target_domain_id: number;
        conflict_strategy?: "suffix" | "skip" | "fail";
      },
    ) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/shortio`,
        { body: input },
      ),
    startTinyURL: (
      workspaceId: number,
      input: {
        token: string;
        target_domain_id: number;
        conflict_strategy?: "suffix" | "skip" | "fail";
      },
    ) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/tinyurl`,
        { body: input },
      ),
    startDub: (
      workspaceId: number,
      input: {
        token: string;
        workspace_id?: string;
        target_domain_id: number;
        conflict_strategy?: "suffix" | "skip" | "fail";
      },
    ) =>
      this.simpleRequest<ImportJob>(
        this.opts.baseUrl,
        "POST",
        `/v1/workspaces/${workspaceId}/imports/dub`,
        { body: input },
      ),
  };

  // === vendor integrations (Connect/Disconnect/Status) ===
  // The lifecycle is one click on the dashboard. Each entry under `integrations.*` owns
  // its own auto-provisioning rules; the SDK only surfaces the typed
  // request/response shapes.
  integrations = {
    /**
     * Fetch the connected/available state for every integration provider
     * the workspace has ever interacted with, in one round-trip.
     *
     * Only providers that have at least one stored row (connected or
     * revoked) are included. Callers should merge the result with their
     * static provider catalog and treat missing entries as "available".
     *
     * Covers all storage tiers:
     *   - Tier 2: service_tokens (Linear, Pipedrive, PAT providers)
     *   - Tier 4: external_oauth_connections (Notion, Asana, etc.)
     */
    list: (workspaceId: number) =>
      this.request<{ items: IntegrationRow[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/integrations`,
      ),
    linear: {
      /**
       * Probe a PAT — returns the user's teams without storing the
       * token. Used by the dashboard team-picker between "paste token"
       * and "Connect".
       */
      validate: (workspaceId: number, token: string) =>
        this.request<LinearValidateResponse>(
          "POST",
          `/v1/workspaces/${workspaceId}/integrations/linear/validate`,
          { body: { token } },
        ),
      /**
       * Validate a Linear Personal API Key, pick a team, and store the
       * envelope-encrypted PAT. Returns the freshly created connection
       * plus the (cached) team / user / org metadata.
       */
      connect: (workspaceId: number, input: LinearConnectInput) =>
        this.request<LinearConnection>(
          "POST",
          `/v1/workspaces/${workspaceId}/integrations/linear/connect`,
          { body: input },
        ),
      /** Probe whether the workspace currently has a Linear connection. */
      status: (workspaceId: number) =>
        this.request<LinearStatus>(
          "GET",
          `/v1/workspaces/${workspaceId}/integrations/linear/status`,
        ),
      /** Drop the encrypted PAT + connection row. No vendor-side call. */
      disconnect: (workspaceId: number) =>
        this.request<{ disconnected: boolean }>(
          "DELETE",
          `/v1/workspaces/${workspaceId}/integrations/linear/disconnect`,
        ),
    },
    pipedrive: {
      /**
       * Probe a personal API token — returns the user's pipelines
       * without storing the token. Used by the dashboard pipeline-
       * picker between "paste token" and "Connect".
       */
      validate: (workspaceId: number, token: string) =>
        this.request<PipedriveValidateResponse>(
          "POST",
          `/v1/workspaces/${workspaceId}/integrations/pipedrive/validate`,
          { body: { token } },
        ),
      /**
       * Validate a Pipedrive personal API token, pick a pipeline, and
       * store the envelope-encrypted token. Returns the freshly created
       * connection plus the (cached) pipeline / user / company metadata.
       */
      connect: (workspaceId: number, input: PipedriveConnectInput) =>
        this.request<PipedriveConnection>(
          "POST",
          `/v1/workspaces/${workspaceId}/integrations/pipedrive/connect`,
          { body: input },
        ),
      /** Probe whether the workspace currently has a Pipedrive connection. */
      status: (workspaceId: number) =>
        this.request<PipedriveStatus>(
          "GET",
          `/v1/workspaces/${workspaceId}/integrations/pipedrive/status`,
        ),
      /** Drop the encrypted token + connection row. No vendor-side call. */
      disconnect: (workspaceId: number) =>
        this.request<{ disconnected: boolean }>(
          "DELETE",
          `/v1/workspaces/${workspaceId}/integrations/pipedrive/disconnect`,
        ),
    },
    notion: {
      /**
       * Start the Notion OAuth dance. Returns an authorize_url the browser
       * should navigate to and a CSRF state token. After the user consents on
       * Notion's authorization page, the callback lands at
       * /v1/oauth/notion/callback and the browser is redirected to return_to
       * (defaults to /dashboard/integrations).
       */
      connect: (workspaceId: number, returnTo?: string) =>
        this.request<NotionConnectStart>(
          "POST",
          `/v1/workspaces/${workspaceId}/integrations/notion/connect`,
          returnTo ? { body: { return_to: returnTo } } : undefined,
        ),
      /** Probe whether the workspace currently has an active Notion connection. */
      status: (workspaceId: number) =>
        this.request<NotionStatus>(
          "GET",
          `/v1/workspaces/${workspaceId}/integrations/notion/status`,
        ),
      /**
       * Revoke the local Notion connection row. Notion has no token
       * revocation endpoint; the access token becomes unused server-side.
       */
      disconnect: (workspaceId: number) =>
        this.request<{ disconnected: boolean }>(
          "DELETE",
          `/v1/workspaces/${workspaceId}/integrations/notion/disconnect`,
        ),
    },
  };

  // === QR generation ===
  // Returns the raw bytes (PNG) or string (SVG) — caller decides what to
  // do (download, embed as data URL, etc).
  async qrPng(input: QrGenerateInput): Promise<Uint8Array> {
    const baseUrl = this.opts.qrBaseUrl ?? this.opts.baseUrl;
    return this.fetchWithRetry<Uint8Array>(
      `${baseUrl.replace(/\/$/, "")}/v1/qr/generate`,
      {
        method: "POST",
        path: "/v1/qr/generate",
        headers: { "Content-Type": "application/json" },
        body: { ...input, formats: ["png"] },
        parse: async (res) => {
          if (!res.ok) {
            throw new ElidoApiError(res.status, null, `QR PNG → ${res.status}`);
          }
          return new Uint8Array(await res.arrayBuffer());
        },
      },
    );
  }

  async qrSvg(input: QrGenerateInput): Promise<string> {
    const baseUrl = this.opts.qrBaseUrl ?? this.opts.baseUrl;
    return this.fetchWithRetry<string>(
      `${baseUrl.replace(/\/$/, "")}/v1/qr/generate`,
      {
        method: "POST",
        path: "/v1/qr/generate",
        headers: { "Content-Type": "application/json" },
        body: { ...input, formats: ["svg"] },
        parse: async (res) => {
          if (!res.ok) {
            throw new ElidoApiError(res.status, null, `QR SVG → ${res.status}`);
          }
          return res.text();
        },
      },
    );
  }

  private async simpleRequest<T>(
    baseUrl: string,
    method: string,
    path: string,
    init?: { body?: unknown; idempotencyKey?: string; signal?: AbortSignal },
  ): Promise<T> {
    const headers: Record<string, string> = {};
    if (init?.body !== undefined) headers["Content-Type"] = "application/json";
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method,
      path,
      headers,
      body: init?.body,
      idempotencyKey: init?.idempotencyKey,
      signal: init?.signal,
    });
  }

  // === Webhooks ===
  webhooks = {
    list: (workspaceId: number) =>
      this.webhookRequest<WebhookEndpoint[]>(
        "GET",
        `/v1/workspaces/${workspaceId}/webhooks`,
      ),
    create: (workspaceId: number, input: CreateWebhookEndpointInput) =>
      this.webhookRequest<CreateWebhookEndpointResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/webhooks`,
        { body: input },
      ),
    get: (workspaceId: number, id: number) =>
      this.webhookRequest<WebhookEndpoint>(
        "GET",
        `/v1/workspaces/${workspaceId}/webhooks/${id}`,
      ),
    update: (
      workspaceId: number,
      id: number,
      input: UpdateWebhookEndpointInput,
    ) =>
      this.webhookRequest<WebhookEndpoint>(
        "PUT",
        `/v1/workspaces/${workspaceId}/webhooks/${id}`,
        { body: input },
      ),
    delete: (workspaceId: number, id: number) =>
      this.webhookRequest<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/webhooks/${id}`,
      ),
    deliveries: (workspaceId: number, id: number, limit = 50, offset = 0) =>
      this.webhookRequest<WebhookDelivery[]>(
        "GET",
        `/v1/workspaces/${workspaceId}/webhooks/${id}/deliveries?limit=${limit}&offset=${offset}`,
      ),
    // Manually re-arm a finished delivery (failed or delivered). The
    // worker picks it up on the next poll. Returns 409 if the delivery is
    // still pending or doesn't belong to this endpoint.
    retryDelivery: (workspaceId: number, id: number, deliveryId: number) =>
      this.webhookRequest<void>(
        "POST",
        `/v1/workspaces/${workspaceId}/webhooks/${id}/deliveries/${deliveryId}/retry`,
      ),
    /**
     * rotate the HMAC signing secret for an event/siem endpoint.
     *
     * The new plaintext secret is returned ONCE in `secret`. Store it
     * immediately — it cannot be retrieved again. The old secret remains
     * valid for receiver-side verification until `previous_expires_at`
     * (default: 7 days after rotation), giving receivers time to update.
     *
     * During the grace window, outbound requests carry both:
     *   X-Elido-Signature: v1=<new-key-sig>
     *   X-Elido-Signature-Previous: v1=<old-key-sig>  (if old key had plaintext stored)
     *
     * Only works for kind='event' and kind='siem'. Returns 400 for
     * channel kinds (discord/telegram/sentry).
     */
    rotateSecret: (workspaceId: number, id: number) =>
      this.webhookRequest<RotateWebhookSecretResponse>(
        "POST",
        `/v1/workspaces/${workspaceId}/webhooks/${id}/rotate-secret`,
      ),
    /**
     * Verify an inbound webhook signature:
     *
     *   X-Webhook-Signature: v1=<hex(HMAC-SHA256(secret, "<ts>.<body>"))>
     *   X-Webhook-Timestamp: <unix-seconds>
     *
     * Pass the raw request body (NOT a parsed JSON object — bytes
     * matter), the two headers, and the endpoint's signing secret. The
     * comparison is timing-safe; the function returns false on any
     * malformed input rather than throwing.
     *
     * Optionally enforce a max-age on the timestamp via `maxSkewSec`
     * (recommended: 300s) to reject replays of stale deliveries.
     *
     * ```ts
     * const ok = await sdk.webhooks.verify(
     *   await req.text(),
     *   req.headers.get("X-Webhook-Signature") ?? "",
     *   req.headers.get("X-Webhook-Timestamp") ?? "",
     *   process.env.WEBHOOK_SECRET!,
     *   { maxSkewSec: 300 },
     * );
     * ```
     */
    verify: (
      payload: string | Uint8Array,
      header: string,
      timestamp: string | number,
      secret: string,
      options?: { maxSkewSec?: number },
    ): Promise<boolean> => {
      if (options?.maxSkewSec != null) {
        const tsNum =
          typeof timestamp === "number"
            ? timestamp
            : Number.parseInt(timestamp, 10);
        if (!Number.isFinite(tsNum)) return Promise.resolve(false);
        const ageSec = Math.abs(Date.now() / 1000 - tsNum);
        if (ageSec > options.maxSkewSec) return Promise.resolve(false);
      }
      return verifyWebhookSignature(payload, header, timestamp, secret);
    },
  };

  private async webhookRequest<T>(
    method: string,
    path: string,
    init?: { body?: unknown; idempotencyKey?: string; signal?: AbortSignal },
  ): Promise<T> {
    const baseUrl = this.opts.webhookBaseUrl ?? this.opts.baseUrl;
    const headers: Record<string, string> = {};
    if (init?.body !== undefined) headers["Content-Type"] = "application/json";
    if (this.opts.token) {
      headers["Authorization"] = `Bearer ${this.opts.token}`;
    } else if (this.opts.cookie) {
      headers["Cookie"] = this.opts.cookie;
    } else if (this.opts.devUserId != null) {
      headers["X-Dev-User-ID"] = String(this.opts.devUserId);
    }
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method,
      path,
      headers,
      body: init?.body,
      idempotencyKey: init?.idempotencyKey,
      signal: init?.signal,
    });
  }

  // === CTA overlays ===
  cta = {
    list: (workspaceId: number) =>
      this.request<{ items: CtaOverlay[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/cta`,
      ),
    create: (workspaceId: number, input: CreateCtaOverlayInput) =>
      this.request<CtaOverlay>("POST", `/v1/workspaces/${workspaceId}/cta`, {
        body: input,
      }),
    get: (workspaceId: number, ctaId: number) =>
      this.request<CtaOverlay>(
        "GET",
        `/v1/workspaces/${workspaceId}/cta/${ctaId}`,
      ),
    update: (
      workspaceId: number,
      ctaId: number,
      input: UpdateCtaOverlayInput,
    ) =>
      this.request<CtaOverlay>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/cta/${ctaId}`,
        { body: input },
      ),
    delete: (workspaceId: number, ctaId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/cta/${ctaId}`,
      ),
    stats: (workspaceId: number, ctaId: number) =>
      this.request<CtaStats>(
        "GET",
        `/v1/workspaces/${workspaceId}/cta/${ctaId}/stats`,
      ),
  };

  // === Mobile attribution ===
  mobileApps = {
    list: (workspaceId: number) =>
      this.request<MobileApp[]>(
        "GET",
        `/v1/workspaces/${workspaceId}/mobile-apps`,
      ),
    create: (workspaceId: number, input: CreateMobileAppInput) =>
      this.request<MobileApp>(
        "POST",
        `/v1/workspaces/${workspaceId}/mobile-apps`,
        { body: input },
      ),
    get: (workspaceId: number, appId: number) =>
      this.request<MobileApp>(
        "GET",
        `/v1/workspaces/${workspaceId}/mobile-apps/${appId}`,
      ),
    update: (workspaceId: number, appId: number, input: UpdateMobileAppInput) =>
      this.request<MobileApp>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/mobile-apps/${appId}`,
        { body: input },
      ),
    delete: (workspaceId: number, appId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/mobile-apps/${appId}`,
      ),
  };

  attribution = {
    events: (workspaceId: number) =>
      this.request<{ items: AttributionEvent[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/attribution/events`,
      ),
    summary: (workspaceId: number, opts?: { from?: string; to?: string }) => {
      const qs = new URLSearchParams();
      if (opts?.from) qs.set("from", opts.from);
      if (opts?.to) qs.set("to", opts.to);
      const q = qs.toString();
      return this.request<AttributionSummary>(
        "GET",
        `/v1/workspaces/${workspaceId}/attribution/summary${q ? `?${q}` : ""}`,
      );
    },
  };

  // === Billing ===
  billing = {
    plans: () =>
      this.billingRequest<{ items: Plan[] }>("GET", "/v1/billing/plans"),
    subscription: (workspaceId: number) =>
      this.billingRequest<Subscription>(
        "GET",
        `/v1/billing/workspaces/${workspaceId}/subscription`,
      ),
    checkout: (
      workspaceId: number,
      planId: number,
      couponCode?: string,
      options?: RequestOptions,
    ) =>
      this.billingRequest<CheckoutResponse>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/checkout`,
        {
          body: { plan_id: planId, coupon_code: couponCode || undefined },
          idempotencyKey: options?.idempotencyKey,
          signal: options?.signal,
        },
      ),
    cryptoCheckout: (
      workspaceId: number,
      planId: number,
      couponCode?: string,
      options?: RequestOptions,
    ) =>
      this.billingRequest<CryptoCheckoutResponse>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/checkout/crypto`,
        {
          body: { plan_id: planId, coupon_code: couponCode || undefined },
          idempotencyKey: options?.idempotencyKey,
          signal: options?.signal,
        },
      ),
    validateCoupon: (code: string, planId: number) =>
      this.billingRequest<{
        code: string;
        original_cents: number;
        discount_cents: number;
        final_cents: number;
        currency: string;
      }>("POST", `/v1/billing/coupons/validate`, {
        body: { code, plan_id: planId },
      }),
    cancel: (workspaceId: number) =>
      this.billingRequest<void>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/subscription/cancel`,
      ),
    publicPlans: () =>
      this.billingRequest<{ items: Plan[] }>("GET", "/v1/billing/plans/public"),
    pause: (workspaceId: number, reason: string) =>
      this.billingRequest<void>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/subscription/pause`,
        { body: { reason } },
      ),
    resume: (workspaceId: number) =>
      this.billingRequest<void>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/subscription/resume`,
      ),
    scheduleChange: (
      workspaceId: number,
      payload: {
        target_plan_id: number;
        kind: "downgrade" | "upgrade_at_renewal" | "cancel";
        reason: string;
      },
    ) =>
      this.billingRequest<{
        scheduled: boolean;
        violations?: {
          field: string;
          current: number;
          limit: number;
          message: string;
          available_at?: string;
        }[];
      }>(
        "POST",
        `/v1/billing/workspaces/${workspaceId}/subscription/schedule-change`,
        { body: payload },
      ),
    cancelScheduledChange: (workspaceId: number) =>
      this.billingRequest<void>(
        "DELETE",
        `/v1/billing/workspaces/${workspaceId}/subscription/scheduled-change`,
      ),
    upgradePreview: (workspaceId: number, targetPlanId: number) =>
      this.billingRequest<{
        delta_cents: number;
        currency: string;
        period_total_days: number;
        period_remaining_days: number;
        current_plan_id: number;
        current_plan_name: string;
        target_plan_id: number;
        target_plan_name: string;
      }>(
        "GET",
        `/v1/billing/workspaces/${workspaceId}/upgrade-preview?target_plan_id=${targetPlanId}`,
      ),
    upgradeNow: (
      workspaceId: number,
      payload: { target_plan_id: number; reason?: string },
    ) =>
      this.billingRequest<{
        pending_upgrade_id?: number;
        redirect_url?: string;
        invoice_id?: string;
        applied_immediately: boolean;
      }>("POST", `/v1/billing/workspaces/${workspaceId}/upgrade-now`, {
        body: payload,
      }),
    // switchNow handles cross-interval upgrades (yearly → monthly higher
    // tier or vice versa). Cancels the current sub and starts a fresh
    // monobank checkout for the target plan; the user's remaining yearly
    // period is forfeited (the confirm dialog must say so explicitly).
    switchNow: (
      workspaceId: number,
      payload: { target_plan_id: number; reason?: string },
    ) =>
      this.billingRequest<{
        subscription_id: number;
        status: string;
        redirect_url?: string;
      }>("POST", `/v1/billing/workspaces/${workspaceId}/switch-now`, {
        body: payload,
      }),
    overageConsent: {
      get: (workspaceId: number) =>
        this.billingRequest<{
          consented: boolean;
          consented_at?: string;
          revoked_at?: string;
          user_id?: number;
        }>(
          "GET",
          `/v1/billing/workspaces/${workspaceId}/subscription/overage-consent`,
        ),
      set: (workspaceId: number) =>
        this.billingRequest<void>(
          "POST",
          `/v1/billing/workspaces/${workspaceId}/subscription/overage-consent`,
        ),
      revoke: (workspaceId: number) =>
        this.billingRequest<void>(
          "DELETE",
          `/v1/billing/workspaces/${workspaceId}/subscription/overage-consent`,
        ),
    },
    /**
     * Workspace usage + effective limits, served via the `/bff` origin.
     *
     * Returns `{ usage: null, limits: null }` on free-tier workspaces or
     * if billing is unreachable — callers render an empty state.
     */
    usage: (workspaceId: number) =>
      this.bffRequest<{
        usage: CurrentUsage | null;
        limits: EffectiveLimits | null;
      }>("GET", `/bff/billing/workspaces/${workspaceId}/usage`),
    /**
     * Prepay link packs — one-time top-ups bought via Paddle.
     * The list endpoint returns the catalog + the workspace's current
     * credit balance; buy opens a Paddle checkout and returns the URL the
     * caller should redirect to.
     */
    linkPacks: {
      list: (workspaceId: number) =>
        this.billingRequest<LinkPacksListResponse>(
          "GET",
          `/v1/billing/workspaces/${workspaceId}/link-packs`,
        ),
      buy: (workspaceId: number, packId: number) =>
        this.billingRequest<BuyLinkPackResponse>(
          "POST",
          `/v1/billing/workspaces/${workspaceId}/link-packs/buy`,
          { body: { pack_id: packId } },
        ),
      purchases: (workspaceId: number, limit = 20) =>
        this.billingRequest<LinkPackPurchase[]>(
          "GET",
          `/v1/billing/workspaces/${workspaceId}/link-packs/purchases?limit=${limit}`,
        ),
    },
  };

  private async billingRequest<T>(
    method: string,
    path: string,
    init?: { body?: unknown; idempotencyKey?: string; signal?: AbortSignal },
  ): Promise<T> {
    const baseUrl = this.opts.billingBaseUrl ?? this.opts.baseUrl;
    const headers: Record<string, string> = {};
    if (init?.body !== undefined) headers["Content-Type"] = "application/json";
    if (this.opts.token) {
      headers["Authorization"] = `Bearer ${this.opts.token}`;
    } else if (this.opts.cookie) {
      headers["Cookie"] = this.opts.cookie;
    } else if (this.opts.devUserId != null) {
      headers["X-Dev-User-ID"] = String(this.opts.devUserId);
    }
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method,
      path,
      headers,
      body: init?.body,
      idempotencyKey: init?.idempotencyKey,
      signal: init?.signal,
    });
  }

  // Sibling of billingRequest, but targets the BFF origin (`bffBaseUrl`).
  private async bffRequest<T>(
    method: string,
    path: string,
    init?: { body?: unknown; signal?: AbortSignal },
  ): Promise<T> {
    const baseUrl = this.opts.bffBaseUrl ?? this.opts.baseUrl;
    const headers: Record<string, string> = {};
    if (init?.body !== undefined) headers["Content-Type"] = "application/json";
    if (this.opts.token) {
      headers["Authorization"] = `Bearer ${this.opts.token}`;
    } else if (this.opts.cookie) {
      headers["Cookie"] = this.opts.cookie;
    } else if (this.opts.devUserId != null) {
      headers["X-Dev-User-ID"] = String(this.opts.devUserId);
    }
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method,
      path,
      headers,
      body: init?.body,
      signal: init?.signal,
    });
  }

  // === Analytics ===
  analytics = {
    timeseries: (workspaceId: number, opts: TimeseriesOptions) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.interval) qs.set("interval", opts.interval);
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<TimeseriesResponse>(
        `/v1/analytics/workspaces/${workspaceId}/timeseries?${qs}`,
      );
    },
    topLinks: (workspaceId: number, opts: TopLinksOptions) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<TopLinksResponse>(
        `/v1/analytics/workspaces/${workspaceId}/links/top?${qs}`,
      );
    },
    byCountry: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "country", opts),
    byHost: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "host", opts),
    byReferrer: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "referrer", opts),
    byDevice: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "device", opts),
    byBrowser: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "browser", opts),
    byDestination: (workspaceId: number, opts: BreakdownOptions) =>
      this.breakdownRequest(workspaceId, "destination", opts),
    /**
     * Recent click events. Most useful with `linkId` set — gives the
     * /dashboard/links/[id] event log. Returns up to 500 rows; defaults
     * to 100. Newest-first order.
     *
     * Cursor-paginated. Pass `cursor` from a previous response to fetch
     * the next page; `next_cursor: null` indicates the last page.
     */
    recentClicks: (workspaceId: number, opts: RecentClicksOptions) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.cursor != null) qs.set("cursor", opts.cursor);
      return this.analyticsRequest<RecentClicksResponse>(
        `/v1/analytics/workspaces/${workspaceId}/clicks/recent?${qs}`,
      );
    },
    /**
     * Lazy iterator over click events in the [`from`, `to`] window.
     * Pages via the server's `next_cursor`; yields newest-first.
     *
     * ```ts
     * for await (const click of sdk.analytics.recentClicksIterate(42, {
     *   from: "2026-04-01T00:00:00Z",
     *   to:   "2026-05-01T00:00:00Z",
     * })) { … }
     * ```
     */
    recentClicksIterate: (
      workspaceId: number,
      opts: RecentClicksOptions,
    ): AsyncGenerator<ClickEvent, void, void> =>
      this.iterateRecentClicks(workspaceId, opts),
    /**
     * Streams CSV bytes of click events. Returns a Blob suitable for
     * URL.createObjectURL / a `<a download>` click flow. Hard-cap of
     * 1,000,000 rows on the server; default 100k.
     */
    exportClicksCSV: (
      workspaceId: number,
      opts: RecentClicksOptions,
    ): Promise<Blob> => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsBlob(
        `/v1/analytics/workspaces/${workspaceId}/clicks.csv?${qs}`,
      );
    },
    funnel: (workspaceId: number, opts: AnalyticsRange) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<FunnelResponse>(
        `/v1/analytics/workspaces/${workspaceId}/funnel?${qs}`,
      );
    },
    /**
     * Multi-step funnel. Each step counts visitors who
     * completed every prior step within its time window. Attribution
     * model defaults to `last_touch`; pass `first_touch` or `linear`
     * via `attribution_model`.
     */
    funnelV2: (
      workspaceId: number,
      input: FunnelV2Request,
    ): Promise<FunnelV2Response> => {
      const qs = new URLSearchParams();
      if (input.attribution_model) {
        qs.set("attribution_model", input.attribution_model);
      }
      const path = `/v1/analytics/workspaces/${workspaceId}/funnel${
        qs.toString() ? `?${qs}` : ""
      }`;
      return this.analyticsRequest<FunnelV2Response>(path, {
        method: "POST",
        body: input,
      });
    },
    listFunnelDefinitions: (workspaceId: number) =>
      this.request<{ items: FunnelDefinition[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/funnels`,
      ),
    createFunnelDefinition: (
      workspaceId: number,
      input: CreateFunnelDefinitionInput,
    ) =>
      this.request<FunnelDefinition>(
        "POST",
        `/v1/workspaces/${workspaceId}/funnels`,
        { body: input },
      ),
    updateFunnelDefinition: (
      workspaceId: number,
      funnelId: number,
      input: CreateFunnelDefinitionInput,
    ) =>
      this.request<FunnelDefinition>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/funnels/${funnelId}`,
        { body: input },
      ),
    deleteFunnelDefinition: (workspaceId: number, funnelId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/funnels/${funnelId}`,
      ),
    cohorts: (workspaceId: number, opts: CohortOptions) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.weeks != null) qs.set("weeks", String(opts.weeks));
      return this.analyticsRequest<CohortResponse>(
        `/v1/analytics/workspaces/${workspaceId}/cohorts?${qs}`,
      );
    },
    summary: (workspaceId: number, opts: AnalyticsRange) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<EngagementSummary>(
        `/v1/analytics/workspaces/${workspaceId}/summary?${qs}`,
      );
    },
    /**
     * Click counts grouped into a 7×24 heatmap (day-of-week × hour-of-day,
     * UTC). Most useful when narrowed to a single link via `linkId`. The
     * server omits zero-click cells; callers should zero-fill the grid.
     */
    heatmap: (workspaceId: number, opts: AnalyticsRange) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<HeatmapResponse>(
        `/v1/analytics/workspaces/${workspaceId}/heatmap?${qs}`,
      );
    },
    /**
     * Geographic heatmap — clicks grouped by country with a centroid
     * lat/lng attached to each bucket. The same endpoint backs both
     * dimensions; pass `dimension=geo` to get this shape, or call
     * `heatmap()` for the time-of-day grid.
     */
    geoHeatmap: (workspaceId: number, opts: AnalyticsRange) => {
      const qs = new URLSearchParams({
        from: opts.from,
        to: opts.to,
        dimension: "geo",
      });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<GeoHeatmapResponse>(
        `/v1/analytics/workspaces/${workspaceId}/heatmap?${qs}`,
      );
    },
    /**
     * Lifetime-value report — one row per ISO week of link acquisition.
     * Joins ClickHouse engagement (visitors, clicks) with Postgres-side
     * attributed revenue (Stripe / Shopify conversions). Default currency
     * is USD; pass `currency: "EUR"` etc. for other currencies. Cohorts
     * with no conversions in the chosen currency report revenue_cents=0.
     */
    ltv: (workspaceId: number, opts: LTVOptions) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.currency) qs.set("currency", opts.currency);
      return this.analyticsRequest<LTVResponse>(
        `/v1/analytics/workspaces/${workspaceId}/ltv?${qs}`,
      );
    },

    /**
     * Traffic-quality / anonymizer signal.
     *
     * Returns a breakdown of clicks by network type (clean, tor, hosting,
     * vpn, unknown) and the percentage that came from anonymizing networks.
     * Use for "is this campaign receiving bot/probe traffic?" signals.
     */
    trafficQuality: (workspaceId: number, opts: AnalyticsRange) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      return this.analyticsRequest<TrafficQualityResponse>(
        `/v1/analytics/workspaces/${workspaceId}/traffic-quality?${qs}`,
      );
    },

    // ── City-grained geo + top-N analytics ──
    //
    // These line up 1:1 with the analytics endpoints. They return
    // the same shapes as the existing /breakdown/* endpoints but expose the
    // city-grained data the edge now records and a flatter URL surface.

    /** Top-N countries by click count for the range. */
    topCountries: (
      workspaceId: number,
      opts: AnalyticsRange & { limit?: number },
    ) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      return this.analyticsRequest<BreakdownResponse>(
        `/v1/analytics/workspaces/${workspaceId}/top-countries?${qs}`,
      );
    },

    /** Top-N (country, region) pairs by click count. */
    topRegions: (
      workspaceId: number,
      opts: AnalyticsRange & { limit?: number },
    ) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      return this.analyticsRequest<TopGeoBreakdownResponse>(
        `/v1/analytics/workspaces/${workspaceId}/top-regions?${qs}`,
      );
    },

    /** Top-N (country, city) pairs by click count. */
    topCities: (
      workspaceId: number,
      opts: AnalyticsRange & { limit?: number },
    ) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      return this.analyticsRequest<TopGeoBreakdownResponse>(
        `/v1/analytics/workspaces/${workspaceId}/top-cities?${qs}`,
      );
    },

    /**
     * Top-N referrer domains by click count. Direct traffic (empty
     * referer) is bucketed under "direct".
     */
    topReferrers: (
      workspaceId: number,
      opts: AnalyticsRange & { limit?: number },
    ) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      return this.analyticsRequest<BreakdownResponse>(
        `/v1/analytics/workspaces/${workspaceId}/top-referrers?${qs}`,
      );
    },

    /**
     * Top-N destination URLs by click count. Most useful when scoped to a
     * single link via `linkId` — gives the variant-vs-control split for
     * A/B tests for free.
     */
    topDestinations: (
      workspaceId: number,
      opts: AnalyticsRange & { limit?: number },
    ) => {
      const qs = new URLSearchParams({ from: opts.from, to: opts.to });
      if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
      if (opts.host) qs.set("host", opts.host);
      if (opts.limit != null) qs.set("limit", String(opts.limit));
      return this.analyticsRequest<BreakdownResponse>(
        `/v1/analytics/workspaces/${workspaceId}/top-destinations?${qs}`,
      );
    },
    // ── async CSV exports + scheduled reports + broken links ──

    /** Queue a CSV export. Returns immediately with the job's id; poll
     *  `getExportJob` (or list) for status. The dashboard "Recent
     *  exports" panel polls every 5s while a job is in 'running'. */
    queueExportJob: (
      workspaceId: number,
      input: CreateAnalyticsExportJobInput,
    ) =>
      this.request<AnalyticsExportJob>(
        "POST",
        `/v1/workspaces/${workspaceId}/analytics-exports`,
        { body: input },
      ),
    listExportJobs: (workspaceId: number, limit = 50) =>
      this.request<{ items: AnalyticsExportJob[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/analytics-exports?limit=${limit}`,
      ),
    getExportJob: (workspaceId: number, jobId: number) =>
      this.request<AnalyticsExportJob>(
        "GET",
        `/v1/workspaces/${workspaceId}/analytics-exports/${jobId}`,
      ),

    listScheduledReports: (workspaceId: number) =>
      this.request<{ items: ScheduledReport[] }>(
        "GET",
        `/v1/workspaces/${workspaceId}/scheduled-reports`,
      ),
    createScheduledReport: (
      workspaceId: number,
      input: CreateScheduledReportInput,
    ) =>
      this.request<ScheduledReport>(
        "POST",
        `/v1/workspaces/${workspaceId}/scheduled-reports`,
        { body: input },
      ),
    updateScheduledReport: (
      workspaceId: number,
      reportId: number,
      input: CreateScheduledReportInput,
    ) =>
      this.request<ScheduledReport>(
        "PATCH",
        `/v1/workspaces/${workspaceId}/scheduled-reports/${reportId}`,
        { body: input },
      ),
    deleteScheduledReport: (workspaceId: number, reportId: number) =>
      this.request<void>(
        "DELETE",
        `/v1/workspaces/${workspaceId}/scheduled-reports/${reportId}`,
      ),

    listBrokenLinks: (workspaceId: number, limit = 100) =>
      this.request<BrokenLinksResponse>(
        "GET",
        `/v1/workspaces/${workspaceId}/broken-links?limit=${limit}`,
      ),
  };

  private breakdownRequest(
    workspaceId: number,
    dimension:
      | "country"
      | "host"
      | "referrer"
      | "device"
      | "browser"
      | "destination",
    opts: BreakdownOptions,
  ) {
    const qs = new URLSearchParams({ from: opts.from, to: opts.to });
    if (opts.limit != null) qs.set("limit", String(opts.limit));
    if (opts.linkId != null) qs.set("link_id", String(opts.linkId));
    if (opts.host) qs.set("host", opts.host);
    return this.analyticsRequest<BreakdownResponse>(
      `/v1/analytics/workspaces/${workspaceId}/breakdown/${dimension}?${qs}`,
    );
  }

  private async *iterateRecentClicks(
    workspaceId: number,
    opts: RecentClicksOptions,
  ): AsyncGenerator<ClickEvent, void, void> {
    // Page size: respect caller cap if they pinned `limit`, otherwise
    // use the server max (500) for fewer round-trips.
    const pageSize = opts.limit ?? 500;
    let cursor = opts.cursor;
    while (true) {
      const page = await this.analytics.recentClicks(workspaceId, {
        ...opts,
        limit: pageSize,
        cursor,
      });
      if (page.items.length === 0) return;
      for (const click of page.items) yield click;
      if (!page.next_cursor) return;
      cursor = page.next_cursor;
    }
  }

  private async analyticsRequest<T>(
    path: string,
    init: { method?: "GET" | "POST"; body?: unknown } = {},
  ): Promise<T> {
    const baseUrl = this.opts.analyticsBaseUrl ?? this.opts.baseUrl;
    const headers: Record<string, string> = {};
    if (this.opts.analyticsToken) {
      headers["Authorization"] = `Bearer ${this.opts.analyticsToken}`;
    }
    if (init.body !== undefined) {
      headers["Content-Type"] = "application/json";
    }
    return this.fetchWithRetry<T>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method: init.method ?? "GET",
      path,
      headers,
      body: init.body,
    });
  }

  // analyticsBlob mirrors analyticsRequest but returns the response body as
  // a Blob — for binary / large-payload endpoints (CSV export). Auth is
  // identical so the same Bearer token applies.
  private async analyticsBlob(path: string): Promise<Blob> {
    const baseUrl = this.opts.analyticsBaseUrl ?? this.opts.baseUrl;
    const headers: Record<string, string> = {};
    if (this.opts.analyticsToken) {
      headers["Authorization"] = `Bearer ${this.opts.analyticsToken}`;
    }
    return this.fetchWithRetry<Blob>(`${baseUrl.replace(/\/$/, "")}${path}`, {
      method: "GET",
      path,
      headers,
      body: undefined,
      parse: async (res) => {
        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new ElidoApiError(
            res.status,
            text,
            `GET ${path} → ${res.status}`,
          );
        }
        return res.blob();
      },
    });
  }

  private async request<T>(
    method: string,
    path: string,
    init?: {
      body?: unknown;
      auth?: boolean;
      idempotencyKey?: string;
      signal?: AbortSignal;
    },
  ): Promise<T> {
    const url = `${this.opts.baseUrl.replace(/\/$/, "")}${path}`;
    const headers: Record<string, string> = {};
    if (init?.body !== undefined) headers["Content-Type"] = "application/json";

    const auth = init?.auth !== false;
    if (auth) {
      if (this.opts.token) {
        headers["Authorization"] = `Bearer ${this.opts.token}`;
      } else if (this.opts.cookie) {
        headers["Cookie"] = this.opts.cookie;
      } else if (this.opts.devUserId != null) {
        headers["X-Dev-User-ID"] = String(this.opts.devUserId);
      }
    }

    // Default deadline: when the caller didn't pass a signal and a
    // requestTimeoutMs is configured, bound the whole request (across retries)
    // so a hung/undeployed dependency can't stall the page. AbortError isn't
    // retried, so the timeout firing ends the loop.
    const signal =
      init?.signal ??
      (this.opts.requestTimeoutMs != null && this.opts.requestTimeoutMs > 0
        ? AbortSignal.timeout(this.opts.requestTimeoutMs)
        : undefined);

    return this.fetchWithRetry<T>(url, {
      method,
      path,
      headers,
      body: init?.body,
      idempotencyKey: init?.idempotencyKey,
      signal,
    });
  }

  /**
   * fetchWithRetry centralises:
   *   1. Idempotency-Key auto-generation (POST/PUT/PATCH only).
   *   2. Exponential backoff retry on network errors + 502/503/504, up
   *      to `maxRetries` attempts. Never retries 4xx — those are bugs in
   *      the caller, not transient.
   *   3. Body buffering: we serialise once outside the loop so retries
   *      reuse the same byte string without re-running JSON.stringify.
   *
   * All four request helpers (core, billing, webhook, simple,
   * metadata) funnel through this so behaviour stays uniform.
   */
  private async fetchWithRetry<T>(
    url: string,
    cfg: {
      method: string;
      path: string;
      headers: Record<string, string>;
      body: unknown;
      idempotencyKey?: string;
      signal?: AbortSignal;
      // When set, response body is treated as opaque and returned via
      // the parser instead of the SDK's auto JSON/text logic. Used by
      // the QR / CSV blob endpoints (see fetchBlobWithRetry below).
      parse?: (res: Response) => Promise<T>;
    },
  ): Promise<T> {
    const { method, path, headers, body, idempotencyKey, signal, parse } = cfg;

    // Idempotency-Key: per-call > opt-out > auto-generated. We only
    // attach for POST/PUT/PATCH; safe methods are already idempotent
    // and don't need the header.
    if (IDEMPOTENT_METHODS.has(method) && !this.opts.disableIdempotencyKey) {
      const key = idempotencyKey ?? randomKey();
      if (key) headers["Idempotency-Key"] = key;
    } else if (idempotencyKey) {
      // Caller passed one explicitly even on GET/DELETE — respect it.
      headers["Idempotency-Key"] = idempotencyKey;
    }

    // Forward client context (real IP + UA) from the server-side proxy to the API.
    if (this.opts.clientIp && !headers["X-Forwarded-For"]) {
      headers["X-Forwarded-For"] = this.opts.clientIp;
    }
    if (this.opts.userAgent && !headers["User-Agent"]) {
      headers["User-Agent"] = this.opts.userAgent;
    }

    const serialisedBody =
      body !== undefined ? JSON.stringify(body) : undefined;

    const maxRetries = this.opts.maxRetries ?? 3;
    const backoff = this.opts.retryBackoffMs ?? DEFAULT_RETRY_BACKOFF_MS;
    const f = this.opts.fetch ?? fetch;

    let lastErr: unknown;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await f(url, {
          method,
          headers,
          body: serialisedBody,
          cache: "no-store",
          signal,
        });

        if (res.ok || (res.status >= 400 && res.status < 500)) {
          // 2xx or 4xx — final answer either way.
          return parse
            ? await parse(res)
            : await this.parseJsonResponse<T>(res, method, path);
        }

        // 5xx — retryable for our short-list, otherwise terminal.
        if (!RETRYABLE_STATUSES.has(res.status) || attempt === maxRetries) {
          return parse
            ? await parse(res)
            : await this.parseJsonResponse<T>(res, method, path);
        }

        // Drain the body so the connection can be reused.
        await res.text().catch(() => "");
        lastErr = new ElidoApiError(
          res.status,
          null,
          `${method} ${path} → ${res.status}`,
        );
      } catch (err) {
        // AbortError / non-network thrown: do not retry.
        if (err instanceof ElidoApiError) throw err;
        if (
          err instanceof Error &&
          (err.name === "AbortError" || signal?.aborted)
        ) {
          throw err;
        }
        if (attempt === maxRetries) throw err;
        lastErr = err;
      }

      const ms = jitter(backoff[Math.min(attempt, backoff.length - 1)] ?? 0);
      await sleep(ms, signal);
    }
    // Unreachable in practice: the loop either returns or throws.
    throw lastErr ?? new Error("elido: retry loop exited without result");
  }

  private async parseJsonResponse<T>(
    res: Response,
    method: string,
    path: string,
  ): Promise<T> {
    if (res.status === 204) return undefined as T;
    const contentType = res.headers.get("content-type") ?? "";
    const parsed: unknown = contentType.includes("application/json")
      ? await res.json().catch(() => null)
      : await res.text().catch(() => "");
    if (!res.ok) {
      const msg =
        (parsed &&
        typeof parsed === "object" &&
        "error" in parsed &&
        typeof parsed.error === "string"
          ? parsed.error
          : null) ?? `${method} ${path} → ${res.status}`;
      throw new ElidoApiError(res.status, parsed, msg);
    }
    return parsed as T;
  }
}

/** Constant-time comparison of two equal-length byte arrays. Returns
 * false for differing lengths; never short-circuits on the first byte
 * mismatch within equal-length inputs. */
function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i]! ^ b[i]!;
  return diff === 0;
}

function hexToBytes(hex: string): Uint8Array | null {
  if (hex.length % 2 !== 0) return null;
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) {
    const byte = parseInt(hex.substr(i * 2, 2), 16);
    if (Number.isNaN(byte)) return null;
    out[i] = byte;
  }
  return out;
}

async function verifyWebhookSignature(
  payload: string | Uint8Array,
  header: string,
  timestamp: string | number,
  secret: string,
): Promise<boolean> {
  // Header format: "v1=<hex>". Anything else is malformed.
  if (!header || typeof header !== "string") return false;
  const eq = header.indexOf("=");
  if (eq <= 0) return false;
  const scheme = header.slice(0, eq);
  const sigHex = header.slice(eq + 1);
  if (scheme !== "v1") return false;
  const sigBytes = hexToBytes(sigHex);
  if (!sigBytes) return false;

  const ts = typeof timestamp === "number" ? String(timestamp) : timestamp;
  const enc = new TextEncoder();
  const payloadBytes =
    typeof payload === "string" ? enc.encode(payload) : payload;

  // msg = "<ts>.<payload>" — same shape worker.go signs with.
  const tsBytes = enc.encode(`${ts}.`);
  const msg = new Uint8Array(tsBytes.length + payloadBytes.length);
  msg.set(tsBytes, 0);
  msg.set(payloadBytes, tsBytes.length);

  const key = await globalThis.crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const macBuf = await globalThis.crypto.subtle.sign("HMAC", key, msg);
  return timingSafeEqual(new Uint8Array(macBuf), sigBytes);
}
