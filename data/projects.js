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
    tags:     ["Python", "TCP/IP", "Cloud (AWS/Azure)", "Automation"],
    scenario: 'A user submits a ticket: <span style="color:var(--warning);">"The internet is slow"</span> or <span style="color:var(--warning);">"I can\'t connect to the server."</span>',
    problem:  "Manual diagnostics (ping, ipconfig) take 10–15 mins per ticket and fail to distinguish between local ISP issues and specific Cloud region (AWS/Azure) degradations.",
    solution: "A modular Python engine that automates a full-stack check (L1–L4) and ranks global cloud regions by real-time TCP latency to pinpoint regional outages instantly.",
    result:   'Reduced troubleshooting time from <strong>15 mins to under 2 mins</strong>. Provided data-driven failover suggestions, cutting decision-making time for on-call engineers.',
    active:   true,
  },
  {
    id:       "user-account-automation",
    title:    "user-account-automation",
    tag:      "coming soon",
    repo:     "",
    tags:     ["Python", "Bash"],
    scenario: "",
    problem:  "",
    solution: "",
    result:   "TBD",
    active:   false,
  },
];