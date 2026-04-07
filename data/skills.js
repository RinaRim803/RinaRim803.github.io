// Skill data — edit this file to update the Skills section.
// No changes needed in index.html or main.js.
//
// Fields per category:
//   label  : section heading shown above the grid
//   items  : array of skill objects
//
// Fields per skill item:
//   name   : skill name (bold, monospace)
//   note   : short description line
//   tag    : badge label
//   type   : badge color — "auto" (blue) | "os" (teal) | "tool" (amber)

const SKILLS = [
  {
    label: "IT Support & Infrastructure",
    items: [
      {
        name: "CompTIA A+ Certified",
        note: "Hardware, Networking, and Cloud Computing Standards",
        tag: "Certified",
        type: "tool",
      },
      {
        name: "Enterprise OS Support",
        note: "Advanced troubleshooting: Windows 10/11, macOS, & Linux",
        tag: "OS",
        type: "os",
      },
      {
        name: "Network Administration",
        note: "TCP/IP, DNS, VPN, Port diagnostics (L1–L4)",
        tag: "Networking",
        type: "tool",
      },
      {
        name: "Technical Operations",
        note: "ITIL lifecycle, SLA-based ticketing, & Remote Support (RDP/SSH)",
        tag: "Service Desk",
        type: "tool",
      },
    ],
  },
  {
    label: "Automation & Development",
    items: [
      {
        name: "Python Automation",
        note: "Custom diagnostic tools using psutil, Sockets, & SMTP",
        tag: "Advanced",
        type: "auto",
      },
      {
        name: "System Scripting",
        note: "PowerShell & Bash for OS-level task automation",
        tag: "Automation",
        type: "auto",
      },
      {
        name: "Backend & API",
        note: "Flask REST APIs, SQLite3 database, & JSON integration",
        tag: "Development",
        type: "auto",
      },
      {
        name: "DevOps & Docs",
        note: "Git version control, GitHub Actions, & Technical Documentation",
        tag: "Infrastructure",
        type: "tool",
      },
    ],
  },
  {
    label: "Cloud Awareness",
    items: [
      {
        name: "Cloud Diagnostics",
        note: "AWS/Azure region latency analysis & service endpoint monitoring",
        tag: "Cloud",
        type: "tool",
      },
    ],
  },
];