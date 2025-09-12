import type { Project } from '../types';

export const projectsTitle = "Lorem Ipsum Dolor";
export const projectsSubtitle = "Lorem Ipsum Dolor Sit Amet";


// Lorem Ipsum mock data for projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    technologies: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Consectetur"],
    liveUrl: "https://lorem-ipsum.com"
  },
  {
    id: 2,
    title: "Consectetur Adipiscing",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    technologies: ["Adipiscing", "Elit", "Sed", "Eiusmod", "Tempor", "Incididunt"],
    liveUrl: "https://consectetur-adipiscing.com"
  },
  {
    id: 3,
    title: "Sed Do Eiusmod",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    technologies: ["Labore", "Dolore", "Magna", "Aliqua", "Minim", "Veniam"],
    liveUrl: "https://sed-do-eiusmod.com"
  },
  {
    id: 4,
    title: "Tempor Incididunt",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.",
    technologies: ["Nostrud", "Exercitation", "Ullamco", "Laboris", "Aliquip", "Commodo"],
    liveUrl: "https://tempor-incididunt.com"
  },
  {
    id: 5,
    title: "Ut Labore Dolore",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    technologies: ["Consequat", "Duis", "Aute", "Irure", "Reprehenderit", "Voluptate"],
    liveUrl: "https://ut-labore-dolore.com"
  }
];