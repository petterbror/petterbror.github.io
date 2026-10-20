import type { Project } from '../types';

export const projectsTitle = "CV";
export const projectsSubtitle = "Authentication, identity integration and full-stack development across various industries";

export const projects: Project[] = [
  {
    id: 1,
    title: "Lead IAM Developer - XLENT Team IAM",
    description: "Leading IAM developer and integration engineer within XLENT Team IAM. Designs and implements authentication and federation solutions with SAML and OIDC on PhenixID Authentication Services (PAS), including custom authentication flows, scripts and automations.",
    technologies: ["SAML", "OIDC", "PhenixID PAS", "ADFS", "LDAP", "API Integration"],
    liveUrl: "https://xlent.se"
  },
  {
    id: 2,
    title: "IAM Developer - Region Västernorrland",
    description: "Technical specialist for Region Västernorrland's IAM platform Oktav. Works with authentication and integration on PhenixID PAS, and with provisioning jobs such as sync between local and national HSA directories.",
    technologies: ["PhenixID PAS", "SAML", "OIDC", "PhenixID PIM", "HSA", "Provisioning"],
    liveUrl: "https://rvn.se"
  },
  {
    id: 3,
    title: "System Developer - Svandata",
    description: "Back-end developer for cross-platform desktop application for data processing with Electron.NET. Integrates API calls to multiple data sources such as Eurostat and Global Trade Tracker for automated data export.",
    technologies: [".NET", "Electron.NET", "API Integration", "Data Processing", "Excel Export"],
    liveUrl: "https://svandata.se"
  },
  {
    id: 4,
    title: "Lead Developer - Metsä Port Operations",
    description: "Lead developer for new solution for managing port operations including ship arrivals, resource allocation, and time reporting. Complete system development cycle from requirements to implementation with .NET 8.0.",
    technologies: [".NET 8.0", "Entity Framework Core", "MVC", "SQL Server", "xUnit", "Moq"],
    liveUrl: "https://metsa.com"
  },
  {
    id: 5,
    title: "Frontend Developer - Erik Olsson",
    description: "Developed frontend with CSHTML, SASS, and TypeScript for website redesign. Migrated existing JavaScript to TypeScript and created responsive design with modern CSS preprocessing.",
    technologies: ["CSHTML", "SASS", "TypeScript", "JavaScript Migration", "Responsive Design"],
    liveUrl: "https://erikolsson.se"
  }
];
