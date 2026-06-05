/* ============================================================
   data.js — single source of truth for all portfolio content
   Edit this file to update skills, experience, projects, certs.
   ============================================================ */

window.SKILLS = [
  {
    category: "AI & Automation",
    name: "MCP Server Engineering",
    level: 90,
    tags: ["Claude Code", "Agentic Workflows", "Tool Design", "JSON-RPC"]
  },
  {
    category: "AI & Automation",
    name: "Power Automate",
    level: 88,
    tags: ["Cloud Flows", "Desktop Flows", "AI Builder", "SharePoint"]
  },
  {
    category: "AI & Automation",
    name: "AI Agentic Workflows",
    level: 85,
    tags: ["Prompt Engineering", "Multi-step Agents", "Claude API", "Orchestration"]
  },
  {
    category: "AI & Automation",
    name: "AI Documentation Systems",
    level: 82,
    tags: ["Auto-generation", "Confluence", "Notion", "Knowledge Bases"]
  },
  {
    category: "Cloud & Infrastructure",
    name: "Microsoft Azure",
    level: 80,
    tags: ["Entra ID", "Virtual Machines", "Azure AD", "SSO"]
  },
  {
    category: "Cloud & Infrastructure",
    name: "Office 365 / M365",
    level: 88,
    tags: ["Exchange Online", "Teams", "SharePoint", "Intune"]
  },
  {
    category: "Cloud & Infrastructure",
    name: "Windows Server & AD",
    level: 82,
    tags: ["Active Directory", "Group Policy", "DNS", "DHCP"]
  },
  {
    category: "Web Development",
    name: "WordPress Development",
    level: 78,
    tags: ["Custom Themes", "Plugins", "WooCommerce", "ACF"]
  },
  {
    category: "Web Development",
    name: "HTML / CSS / JavaScript",
    level: 80,
    tags: ["Responsive Design", "Vanilla JS", "CSS Variables", "Vercel"]
  },
  {
    category: "Studio & Operations",
    name: "Post-Production Support",
    level: 85,
    tags: ["Avid Media Composer", "Shared Storage", "Render Pipelines", "Asset Management"]
  },
  {
    category: "Studio & Operations",
    name: "Studio Operations",
    level: 83,
    tags: ["Broadcast IT", "AV Systems", "Vendor Management", "On-air Support"]
  },
  {
    category: "Collaboration",
    name: "Global Team Coordination",
    level: 87,
    tags: ["Cross-functional", "Remote Teams", "Stakeholder Mgmt", "ITSM"]
  }
];

window.EXPERIENCE = [
  {
    role: "IT Systems Engineer & AI Automation Specialist",
    company: "Addify — Dubai, UAE",
    date: "2022 — Present",
    bullets: [
      "Designed and deployed custom MCP servers enabling Claude-powered agentic workflows for internal and client automation use-cases.",
      "Built Power Automate flows integrating SharePoint, Teams, and Azure services, eliminating repetitive manual tasks for cross-functional teams.",
      "Engineered AI documentation systems that auto-generate technical runbooks and SOPs from workflow data.",
      "Developed and maintained portfolio and client sites using WordPress and hard-coded HTML/CSS/JS on Vercel.",
      "Managed Azure AD / Entra ID, Office 365, and endpoint infrastructure for the organisation."
    ]
  },
  {
    role: "IT Support & Studio Operations Engineer",
    company: "Broadcast / Post-Production Studio — UAE",
    date: "2018 — 2022",
    bullets: [
      "Provided Tier 2/3 IT support for Avid Media Composer edit suites, shared storage (Avid ISIS / NEXIS), and render pipelines.",
      "Coordinated with global vendors and production teams to maintain zero-downtime post-production operations.",
      "Managed Windows Server AD, Group Policy, DNS/DHCP, and backup systems for a 100+ user environment.",
      "Deployed and maintained AV and broadcast infrastructure for live on-air and studio recording environments.",
      "Onboarded and trained staff on M365, Teams, and internal ITSM ticketing workflows."
    ]
  },
  {
    role: "IT Support Technician",
    company: "Systems Integrator — Pakistan",
    date: "2015 — 2018",
    bullets: [
      "Installed and configured network infrastructure including switches, routers, and firewall appliances.",
      "Provided desktop support, OS deployments, and software licensing across SMB clients.",
      "Maintained documentation for client network topologies and IT asset inventories."
    ]
  }
];

window.PROJECTS = [
  {
    icon: "🤖",
    title: "Claude Code MCP Server Suite",
    description: "Custom MCP server toolkit exposing internal company tools — ticketing system, knowledge base search, and asset registry — as callable tools for Claude agentic sessions. Reduces context-switching by 60% for engineering workflows.",
    tags: ["MCP", "Claude Code", "Node.js", "REST APIs"],
    link: null
  },
  {
    icon: "⚡",
    title: "Power Automate Onboarding Pipeline",
    description: "End-to-end employee onboarding automation flow: creates Entra ID account, licenses Office 365, provisions SharePoint access, sends welcome email, and logs the event — all triggered from a single Teams form submission.",
    tags: ["Power Automate", "Entra ID", "M365", "SharePoint"],
    link: null
  },
  {
    icon: "📄",
    title: "AI Runbook Generator",
    description: "Agentic workflow that ingests existing Power Automate flow definitions and uses Claude to generate structured, human-readable SOPs and runbooks, exported to Confluence and SharePoint automatically.",
    tags: ["Claude API", "Power Automate", "Confluence", "AI Docs"],
    link: null
  },
  {
    icon: "🌐",
    title: "addify.ae — Agency Web Presence",
    description: "Built and maintain the addify.ae WordPress site with custom theme, SEO optimisation, WooCommerce integration, and ongoing content management. Also manages DNS and hosting infrastructure.",
    tags: ["WordPress", "WooCommerce", "SEO", "DNS"],
    link: "https://addify.ae"
  },
  {
    icon: "🎬",
    title: "Post-Production Storage Automation",
    description: "Scripted Avid NEXIS workspace provisioning and archive workflows using PowerShell. Reduced manual storage allocation time by 75% and enforced tiered retention policies automatically.",
    tags: ["PowerShell", "Avid NEXIS", "Storage", "Scripting"],
    link: null
  },
  {
    icon: "🔐",
    title: "Zero-Touch Endpoint Deployment",
    description: "Implemented Microsoft Autopilot + Intune configuration profiles to achieve zero-touch Windows PC provisioning. Devices ship directly to end-users and self-configure to policy on first boot.",
    tags: ["Intune", "Autopilot", "Azure AD", "Endpoint Mgmt"],
    link: null
  }
];

window.CERTS = [
  {
    icon: "🤖",
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "2025",
    badge: "Verified"
  },
  {
    icon: "☁️",
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2023",
    badge: "Active"
  },
  {
    icon: "💼",
    name: "Microsoft 365 Certified: Fundamentals (MS-900)",
    issuer: "Microsoft",
    date: "2023",
    badge: "Active"
  },
  {
    icon: "⚡",
    name: "Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    date: "2024",
    badge: "Active"
  },
  {
    icon: "🔐",
    name: "Microsoft Certified: Security, Compliance & Identity (SC-900)",
    issuer: "Microsoft",
    date: "2024",
    badge: "Active"
  },
  {
    icon: "🌐",
    name: "ITIL® 4 Foundation",
    issuer: "PeopleCert / Axelos",
    date: "2022",
    badge: "Active"
  }
];
