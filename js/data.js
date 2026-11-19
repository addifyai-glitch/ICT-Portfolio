/* ============================================================
   data.js — single source of truth for the page content.
   Public portfolio: professional content only.

   This file is NOT loaded by the browser. After editing it, run
       node scripts/build.mjs
   to pre-render the content into index.html (static HTML, so the
   page works without JavaScript and crawlers see the full text).
   ============================================================ */

/* Field & Data Centre Services — service cards */
window.SERVICES = [
  { title: "Remote & smart hands",        desc: "On-site L1–L3 remote-hands and smart-hands support." },
  { title: "SD-WAN & network devices",    desc: "Deployment and migration of SD-WAN and network devices (Cisco ENCS, Silver Peak)." },
  { title: "Hardware break-fix",          desc: "Break-fix, RMA handling and hardware recovery." },
  { title: "Server & storage",            desc: "Server, blade and Dell EMC storage support." },
  { title: "IT backfill & site support",  desc: "IT backfill and on-site support for customer sites." },
  { title: "Device rollouts",             desc: "Device rollouts, e.g. smart-cart deployment." },
  { title: "HSE-compliant site work",     desc: "Site work under customer HSE inductions and site rules." }
];

/* Project references — industry + region only.
   NEVER add client names, ticket numbers or prices here. */
window.REFERENCES = [
  { industry: "Parcel logistics",            location: "3 depots — Carinthia, Lower Austria", scope: "Network and hardware field service" },
  { industry: "Imaging technology",          location: "Data centre, Vienna",                 scope: "2 × Cisco ENCS upgrades" },
  { industry: "Imaging technology",          location: "Klagenfurt, Carinthia",               scope: "SD-WAN deployment and hardware recovery" },
  { industry: "Semiconductors",              location: "Gratkorn, Styria",                    scope: "On-site field service" },
  { industry: "Pharmaceuticals",             location: "Vienna",                              scope: "3 assignments, incl. IT backfill (2021 and 2022)" },
  { industry: "Hygiene & water technology",  location: "Vienna",                              scope: "Silver Peak SD-WAN RMA" },
  { industry: "Management consulting",       location: "Customer site",                       scope: "Field service" },
  { industry: "Agriscience",                 location: "Parndorf, Burgenland",                scope: "Field service" },
  { industry: "Retail technology",           location: "Sattledt, Upper Austria",             scope: "33 smart carts deployed" },
  { industry: "Medical devices",             location: "Brunn am Gebirge, Lower Austria",     scope: "Field service" },
  { industry: "Industrial manufacturer",     location: "Vienna",                              scope: "Site work after HSE induction" }
];
window.REFERENCES_CAPTION  = "Delivered as a subcontracted field engineer for an international IT services provider, 2021–2025.";
window.REFERENCES_COVERAGE = "Vienna, Styria, Carinthia, Upper & Lower Austria, Burgenland";

window.SKILLS = [
  { group: "Data Center & Network Support",
    items: ["Data center remote hands", "Dell EMC storage", "Hardware diagnostics", "Faulty-part replacement", "Server & storage support", "Network switch config", "SD-WAN migration", "SLA-driven support"] },
  { group: "Cloud & Infrastructure",
    items: ["Microsoft 365 administration", "Microsoft Intune (endpoint management)", "Identity & access (Entra ID)", "Exchange Online administration", "Conditional Access", "Data Loss Prevention (DLP)", "Endpoint compliance (Intune)", "VMware ESXi", "Hyper-V", "Windows Server 2008-2019", "Linux Ubuntu", "macOS", "SCCM"] },
  { group: "Enterprise Tools",
    items: ["Atlassian Cloud administration", "Jira Service Management (permissions & workflows)", "ServiceNow", "Jira", "Monday.com", "Adobe CC license mgmt", "Cheqroom", "Incident Management", "SharePoint design & automation", "SQL Server"] },
  { group: "AI & Automation",
    items: ["Agentic AI workflows", "AI-assisted development", "Power Automate", "AI documentation systems", "Prompt engineering (Claude, Copilot, ChatGPT)", "Workflow orchestration"] },
  { group: "Web & Hosting",
    items: ["WordPress site design", "Shared hosting management", "Custom-coded development", "Basic backend integration (Supabase)", "addify.ae"] }
];

window.EXPERIENCE = [
  { role: "CTE Support Engineer - HCL / LinkedIn", meta: "Graz, Austria | Aug 2021 – Jul 2026",
    points: [
      "Microsoft 365 administration: Intune endpoint management, Entra ID identity & access, and Exchange Online",
      "Atlassian Cloud administration: Jira Service Management permissions and workflows",
      "Post-production and studio operations support across global teams",
      "Coordination with global vendors, production partners, and internal stakeholders",
      "Studio environments, equipment readiness, and workflow troubleshooting",
      "AI-powered automation pipelines using Power Automate and agentic AI",
      "SharePoint sites, document libraries, and automated content flows",
      "Improved ServiceNow (SNOW) and Jira workflows for SLA compliance",
      "AI-generated documentation systems using Claude, Copilot, and custom scripts",
      "AV/VC room setups, integrations, and hybrid meeting workflows"
    ] },
  /* TODO(owner): the project references above are dated 2021–2025, but this role
     ends May 2021. Confirm whether field-service work continued in parallel
     with the HCL / LinkedIn role, and adjust the dates here if so. */
  { role: "IT Field Services: Dispatch & Data Centre Remote Hands - Self-Employed", meta: "Austria | Apr 2020 – May 2021",
    points: [
      "On-site dispatch and remote-hands support across enterprise data centers",
      "Production hardware support under strict SLAs; faulty-part replacement for servers and storage",
      "Dell EMC storage installation, configuration, and diagnostics",
      "Hardware diagnostics and component-level troubleshooting",
      "Network support: switch configuration, structured cabling, and connectivity checks",
      "SD-WAN migration support and remote-hands coordination",
      "Dispatched to enterprise sites via field-service partners including AVASO Technology, Ubique, HCL, NTT GN, Force Era, and Canon Europa"
    ] },
  { role: "IT Support Engineer & Helpdesk Team Leader - Al Sahraa Group", meta: "Abu Dhabi, UAE | 2014 – 2019",
    points: [
      "Led IT infrastructure projects: network design, server deployment, data center ops",
      "Windows Server 2012/2016, Active Directory, GPOs, WDS, SCCM, firewalls",
      "Supervised the IT Helpdesk with KPI-driven ticket resolution",
      "Administered Office 365, SharePoint, Exchange 2013, MX configuration",
      "Maintained LAN, routers, switches, APs, CCTV, DVR/NVR, enterprise hardware",
      "Database backups, DR readiness, and virtual server maintenance"
    ] },
  { role: "IT Support Administrator - Al Sadaf Fashions", meta: "Abu Dhabi, UAE | 2011 – 2013",
    points: [
      "Managed IT Helpdesk operations and branch-level infrastructure",
      "Configured servers, desktops, networks, and security policies",
      "Windows Server 2008, Active Directory, Lotus Domino, secure data sharing",
      "SQL Server, backups, and POS systems",
      "Sales posting, barcode generation, pricing updates, data backups"
    ] }
];

window.PROJECTS = [
  { title: "Addify: Gulf careers platform", desc: "Salary benchmarks and free career tools for UAE and GCC job seekers.",
    tags: ["Next.js", "Custom-coded"], link: "https://addify.ae" },
  { title: "Addify Resume Builder", desc: "Free resume builder with live preview, an AI summary helper and browser PDF export.",
    tags: ["Next.js", "AI-assisted"], link: "https://addify.ae/tools/resume-builder" },
  { title: "This portfolio", desc: "Static HTML/CSS/JS, pre-rendered from one data file and deployed on Vercel.",
    tags: ["HTML/CSS/JS", "Vercel"], link: "https://github.com/addifyai-glitch/ICT-Portfolio" }
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
