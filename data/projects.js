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
    id: "sys-health-check",
    title: "System Health Checker",
    tag: "Windows · macOS · Linux",
    repo: "RinaRim803/sys-health-check",
    tags: ["Python", "psutil", "SMTP", "modular"],
    scenario:
      'User submits a ticket: <span style="color:var(--warning);">"My computer is running slow"</span>',
    problem:
      "Technician spends 10–15 min manually checking Task Manager, disk, and network before any fix starts",
    solution:
      "Single script checks CPU, RAM, Disk, Network, Services — auto-identifies root cause on WARNING, cleans temp files, sends Gmail alert",
    result: "10–15 min → under 60 sec",
    active: true,
  },
  {
    id: "network-troubleshooter",
    title: "Network Troubleshooter",
    tag: "Infrastructure · Python · Automation",
    repo: "RinaRim803/network-troubleshooter",
    tags: ["Python", "TCP/IP", "Flask", "REST API", "Cloud (AWS/Azure)"],
    scenario:
      'User reports: <span style="color:var(--warning);">"The internet is slow"</span> or <span style="color:var(--warning);">"Server connection failed."</span>',
    problem:
      "Manual diagnostics take 15 mins and fail to distinguish between local ISP issues and specific Cloud (AWS/Azure) region degradations.",
    solution:
      "Automated L1–L4 diagnostic engine that ranks global cloud regions by real-time TCP latency. Failed checks are automatically converted into structured tickets via REST API for instant incident logging.",
    result:
      "Reduced diagnostic time from <strong>15 mins to under 2 mins</strong>. Pinpoints regional outages instantly and ensures 100% traceability through automated ticket creation.",
    active: true,
  },
  {
    id: "it-ticket-system",
    title: "IT Ticket System (ITSM)",
    tag: "ITSM · Python · Flask · Automation",
    repo: "RinaRim803/it-ticket-system",
    tags: ["Python", "Flask", "SQLite3", "REST API", "ITIL", "ITSM"],
    scenario:
      'A server goes down at 2 AM. The technician fixes it, but there is <span style="color:var(--warning);">no record</span> of what happened or why, leaving the team in the dark when it fails again.',
    problem:
      '"I fixed it, but I forgot to log it." This lack of documentation meant recurring issues were never identified, and critical system failures were prioritized by "whoever shouted loudest," not by actual business impact.',
    solution:
      "Developed a Flask-based ITSM API that acts as a central brain. It automatically captures system alerts, assigns ITIL-standard priorities (P1–P4) based on severity, and forces every 'fix' into a traceable lifecycle.",
    result:
      "Eliminated the 'Black Box' of manual support. Every system hiccup now has a digital paper trail, allowing for <strong>data-driven root cause analysis</strong> instead of relying on memory.",
    active: true,
  },
  {
    id: "ad-automation",
    title: "IAM & AD Automation Simulator",
    tag: "Identity Management",
    repo: "RinaRim803/ad-automation",
    tags: ["Python", "SQLite", "IAM", "IT Automation"],
    scenario:
      'User reports: <span style="color:var(--warning);">My new team member started today, but they can\'t log into the VPN or see the shared drive. We\'re losing a whole day of work.</span>"',
    problem:
      '(Manual) High risk of human error, inconsistent permission sets, and "Day-One" productivity loss due to back-and-forth communication.',
    solution:
      "A Python-based tool that simulates Implementing Dynamic Groups and Attribute-Based Access Control (ABAC) to automate permission syncing based on HR data.",
    result:
      "Zero-day readiness for new hires and reduced IT ticket volume, ensuring consistent security compliance.",
    active: true,
  },
  // {
  //   id: "device-config-scripts",
  //   title: "Device Configuration Scripts",
  //   tag: "coming soon",
  //   repo: "coming soon",
  //   tags: ["Python", "SQLite3", "ITSM"],
  //   scenario: "",
  //   problem: "",
  //   solution: "",
  //   result: "TBD",
  //   active: false,
  // },
];
