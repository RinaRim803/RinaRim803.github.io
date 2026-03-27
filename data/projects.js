// Project data — add new projects here without touching index.html.
// Each project object maps to one card in the Projects section.
//
// Fields:
//   id       : unique identifier (matches GitHub repo name)
//   title    : display name shown in card header
//   tag      : OS / stack label shown top-right of card
//   repo     : GitHub repo path (username/repo-name)
//   tags     : array of tech stack tags shown in card footer
//   scenario : one-line ticket scenario
//   problem  : what the manual workflow costs
//   solution : what the script does
//   result   : measurable outcome (shown highlighted)
//   active   : true = live card, false = "coming soon" placeholder

const PROJECTS = [
  {
    id:       "sys-health-check",
    title:    "sys-health-check",
    tag:      "Windows · macOS · Linux",
    repo:     "RinaRim803/sys-health-check",
    tags:     ["Python", "psutil", "SMTP", "modular"],
    scenario: 'User submits a ticket: <span style="color:var(--warning);">"My computer is running slow"</span>',
    problem:  "Technician spends 10–15 min manually checking Task Manager, disk, and network before any fix starts",
    solution: "Single script checks CPU, RAM, Disk, Network, Services — auto-identifies root cause on WARNING, cleans temp files, sends Gmail alert",
    result:   "10–15 min → under 60 sec",
    active:   true,
  },
  {
    id:       "network-troubleshooter",
    title:    "network-troubleshooter",
    tag:      "Infrastructure · Python · Automation",
    repo:     "RinaRim803/network-troubleshooter",
    tags:     ["Python", "TCP/IP", "Flask", "REST API", "Cloud (AWS/Azure)", "Automation"],
    scenario: 'A user submits a ticket: <span style="color:var(--warning);">"The internet is slow"</span> or <span style="color:var(--warning);">"I can\'t connect to the server."</span>',
    problem:  "Manual diagnostics (ping, ipconfig) take 10–15 mins per ticket and fail to distinguish between local ISP issues and specific Cloud region (AWS/Azure) degradations. Findings are never recorded — no ticket, no audit trail.",
    solution: "A modular Python engine that automates a full-stack check (L1–L4) and ranks global cloud regions by real-time TCP latency to pinpoint regional outages instantly. On failure, each failed check is automatically converted into a structured ticket via REST API. On success, the user is prompted to optionally save the run as an audit record.",
    result:   'Reduced troubleshooting time from <strong>15 mins to under 2 mins</strong>. Provided data-driven failover suggestions, cutting decision-making time for on-call engineers. Every diagnostic run is now traceable — failed checks auto-create tickets in the IT Ticket System.',
    active:   true,
  },{
    id:       "it-ticket-system",
    title:    "it-ticket-system",
    tag:      "ITSM · Python · Flask · Automation",
    repo:     "RinaRim803/it-ticket-system",
    tags:     ["Python", "Flask", "SQLite3", "REST API", "ITSM", "Automation"],
    scenario: 'After building <span style="color:var(--warning);">sys-health-check</span> and <span style="color:var(--warning);">network-troubleshooter</span>, I realized alerts were being acted on and forgotten — no record of what broke, when, or how it was resolved.',
    problem:  "Diagnostic tools ran in isolation. Incidents were tracked verbally or by email, priority decisions were subjective, and there was no audit trail to demonstrate response times or spot recurring issues.",
    solution: "A Flask-based ITSM API server that receives alerts from the other two tools via HTTP POST and implements the full ITIL ticket lifecycle — auto-categorization, SLA priority assignment (P1–P4), status tracking, and audit logging. All classification rules and server settings are controlled via config.json with no code changes required.",
    result:   'Every WARNING or FAIL detected by the diagnostic tools <strong>automatically becomes a tracked ticket</strong>. Priority is assigned by rule, not gut feeling. Full status history is preserved in SQLite — turning a reactive, ad-hoc workflow into a structured, auditable IT support pipeline.',
    active:   true,
  },
  {
    id:       "user-automation-scripts",
    title:    "user-automation-scripts",
    tag:      "coming soon",
    repo:     "coming soon",
    tags:     ["Python", "SQLite3", "ITSM"],
    scenario: "",
    problem:  "",
    solution: "",
    result:   "TBD",
    active:   false,
  },
];
