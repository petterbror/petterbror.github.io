import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Assignments</h2>
        <p className="section-subtitle">Full-stack development and IAM integrations across various industries</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span className="link-icon"></span>
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
