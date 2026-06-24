/* ============================================================
   data.js — content updated from Irfan's resume (June 2026)
   Public portfolio: professional content only.
   ============================================================ */

window.SKILLS = [
  { group: "AI & Automation",
    items: ["Agentic AI workflows", "Power Automate", "AI documentation systems", "Prompt engineering (Claude, Copilot, ChatGPT)", "Workflow orchestration"] },
  { group: "Post-Production & Studio Ops",
    items: ["Studio equipment readiness", "User onboarding & workflow support", "Global team coordination", "Vendor & production partner comms", "AV/VC room support"] },
  { group: "Cloud & Infrastructure",
    items: ["Azure AD", "Office 365", "Exchange Online", "VMware ESXi", "Hyper-V", "Windows Server 2008-2019", "Linux Ubuntu", "macOS", "SCCM"] },
  { group: "Data Center & Network Support",
    items: ["Data center remote hands", "Dell EMC storage", "Hardware diagnostics", "Faulty-part replacement", "Server & storage support", "Network switch config", "SD-WAN migration", "SLA-driven support"] },
  { group: "Enterprise Tools",
    items: ["ServiceNow", "Jira", "Monday.com", "Adobe CC license mgmt", "Cheqroom", "Incident Management", "SharePoint design & automation", "SQL Server"] },
  { group: "Web & Hosting",
    items: ["WordPress site design", "Shared hosting management", "Custom-coded development", "addify.ae"] }
];

window.EXPERIENCE = [
  { role: "CTE Support Engineer - LinkedIn", meta: "Graz, Austria | 2021 - Present",
    points: [
      "Post-production and studio operations support across global teams",
      "Coordination with global vendors, production partners, and internal stakeholders",
      "Studio environments, equipment readiness, and workflow troubleshooting",
      "AI-powered automation pipelines using Power Automate and agentic AI",
      "SharePoint sites, document libraries, and automated content flows",
      "Improved ServiceNow (SNOW) and Jira workflows for SLA compliance",
      "AI-generated documentation systems using Claude, Copilot, and custom scripts",
      "AV/VC room setups, integrations, and hybrid meeting workflows"
    ] },
  { role: "Dispatch Engineer / Data Center & Remote Hands Support - Self-Employed", meta: "Europe | Apr 2020 - May 2021",
    points: [
      "On-site dispatch and remote-hands support across enterprise data centers",
      "Production hardware support under strict SLAs; faulty-part replacement for servers and storage",
      "Dell EMC storage installation, configuration, and diagnostics",
      "Hardware diagnostics and component-level troubleshooting",
      "Network support: switch configuration, structured cabling, and connectivity checks",
      "SD-WAN migration support and remote-hands coordination",
      "Dispatched to enterprise sites via field-service partners including AVASO Technology, Ubique, HCL, NTT GN, Force Era, and Canon Europa"
    ] },
  { role: "IT Support Engineer & Helpdesk Team Leader - Al Sahraa Group", meta: "Abu Dhabi, UAE | 2014 - 2019",
    points: [
      "Led IT infrastructure projects: network design, server deployment, data center ops",
      "Windows Server 2012/2016, Active Directory, GPOs, WDS, SCCM, firewalls",
      "Supervised the IT Helpdesk with KPI-driven ticket resolution",
      "Administered Office 365, SharePoint, Exchange 2013, MX configuration",
      "Maintained LAN, routers, switches, APs, CCTV, DVR/NVR, enterprise hardware",
      "Database backups, DR readiness, and virtual server maintenance"
    ] },
  { role: "IT Support Administrator - Al Sadaf Fashions", meta: "Abu Dhabi, UAE | 2011 - 2013",
    points: [
      "Managed IT Helpdesk operations and branch-level infrastructure",
      "Configured servers, desktops, networks, and security policies",
      "Windows Server 2008, Active Directory, Lotus Domino, secure data sharing",
      "SQL Server, backups, and POS systems",
      "Sales posting, barcode generation, pricing updates, data backups"
    ] }
];

window.PROJECTS = [
  { title: "AI Agentic Workflow Demos", desc: "Multi-step agents that plan, call tools, and complete tasks autonomously.", tags: ["Agentic AI", "MCP"] },
  { title: "Power Automate Pipelines", desc: "Business process automation across Office 365, approvals, and notifications.", tags: ["Power Automate", "O365"] },
  { title: "AI Documentation Systems", desc: "Auto-generated SOPs and knowledge bases using Claude, Copilot, and scripts.", tags: ["AI", "Docs"] },
  { title: "SharePoint Architecture", desc: "Site design, document libraries, permission models, and automated flows.", tags: ["SharePoint", "Automation"] },
  { title: "WordPress + AI Hybrid", desc: "WordPress sites augmented with AI-assisted content and tooling.", tags: ["WordPress", "AI"] },
  { title: "addify.ae", desc: "Custom-coded + WordPress hybrid Gulf careers and salary-benchmarking platform.", tags: ["Next.js", "WordPress"] }
];

/* Set `link` to a real verification URL for a clickable verified badge;
   leave "" to render a clean pill. */
window.CERTS = [
  { abbr: "MCSA", name: "MCSA: Microsoft Certified System Administrator", issuer: "Microsoft | 2012", link: "" },
  { abbr: "CC",   name: "Claude Code 101 Certification", issuer: "Anthropic", link: "" },
  { abbr: "G",    name: "Google IT Support Professional", issuer: "Coursera | Jul 2020", link: "" },
  { abbr: "SEC",  name: "IT Security: Defense Against Digital Dark Arts", issuer: "Coursera | Jun 2020", link: "" },
  { abbr: "SYS",  name: "System Administration & IT Infrastructure Services", issuer: "Coursera | Jun 2020", link: "" },
  { abbr: "365",  name: "MS Office 365 for Small Businesses", issuer: "AOE | Apr 2020", link: "" },
  { abbr: "DITM", name: "Diploma in IT Management", issuer: "AOE | Sep 2016", link: "" },
  { abbr: "ICC",  name: "Introduction to Cloud Computing", issuer: "Apr 2016", link: "" },
  { abbr: "TP",   name: "TPNA SMB - TP-Link Network Associate", issuer: "TP-Link | Feb 2018", link: "" },
  { abbr: "WP",   name: "WordPress - Blogging on the Web", issuer: "AOE | Mar 2016", link: "" }
];

window.MS_LEARN_PROFILE = "https://learn.microsoft.com/en-us/users/irfanyounas-1450/";
window.MS_LEARN_STATS   = { badges: 42, trophies: 6, level: 8 };

/* Curated highlights (~12). Full 42 live behind the profile link.
   To swap entries: keep the array ~12 so the section stays scannable. */
window.MS_LEARN = [
  { name: "Azure Virtual Desktop Architecture",                                      category: "Azure",        type: "badge",  status: "completed" },
  { name: "Prepare on-premises workloads for migration to Azure",                   category: "Azure",        type: "badge",  status: "completed" },
  { name: "Set up Azure Migrate for server migration",                              category: "Azure",        type: "badge",  status: "completed" },
  { name: "Introduction to the Microsoft Azure Well-Architected Framework",         category: "Azure",        type: "badge",  status: "completed" },
  { name: "Microsoft Cloud Adoption Framework for Azure",                           category: "Azure",        type: "badge",  status: "completed" },
  { name: "AZ-305 Microsoft Azure Architect Design Prerequisites",                  category: "Azure",        type: "path",   status: "completed" },
  { name: "Implement Copilot for Microsoft 365",                                    category: "AI",           type: "badge",  status: "completed" },
  { name: "Examine data security and compliance in Copilot for Microsoft 365",     category: "AI",           type: "badge",  status: "completed" },
  { name: "MS-012 Prepare your organization for Copilot for Microsoft 365",        category: "AI",           type: "path",   status: "completed" },
  { name: "Implement lifecycle management and governance for Microsoft Teams",      category: "M365",         type: "badge",  status: "completed" },
  { name: "Understand Microsoft Entra ID",                                          category: "M365",         type: "badge",  status: "completed" },
  { name: "Microsoft Azure Fundamentals: Describe Azure architecture and services", category: "Fundamentals", type: "path",   status: "completed" },
];
