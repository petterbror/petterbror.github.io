import type { TechInterest } from '../types';

export const techInterestsTitle = "Technical Skills";
export const techInterestsSubtitle = "Full-stack development with focus on integration development within IAM";

export const techInterests: TechInterest[] = [
  {
    category: "IAM Provisioning & Sync Jobs",
    technologies: ["PhenixID PIM", "PhenixID PIP", "Identity Provisioning", "Sync Jobs", "HSA Integration", "Data Synchronization"],
    description: "Specialized in provisioning and sync jobs within IAM with focus on PhenixID PIM/PIP and complex integration flows between directory services."
  },
  {
    category: "Backend & Desktop Development",
    technologies: [".NET", ".NET 8.0", "Entity Framework Core", "SQL Server", "Electron.NET", "API Development", "MVC"],
    description: "Development of robust backend systems and desktop applications with .NET, Entity Framework Core, and modern architectural patterns."
  },
  {
    category: "Frontend & Web Development",
    technologies: ["TypeScript", "CSHTML", "SASS", "JavaScript Migration", "Responsive Design", "Web Design"],
    description: "Creating modern web applications with TypeScript, CSHTML, and SASS, including migration from JavaScript to TypeScript."
  },
  {
    category: "System Integration & Data Flows",
    technologies: ["API Integration", "LDAP", "AD Integration", "HSA", "Data Processing", "REST APIs", "Excel Export"],
    description: "Implementation of complex integrations and data flows between systems, directory services, and external APIs for automated data processing."
  }
];
