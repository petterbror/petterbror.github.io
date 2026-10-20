import type { Project } from '../types';
import { projectsSubtitle, projectsTitle } from '../data/projects';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="cv" className="section">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">{projectsTitle}</h2>
          <p className="section-subtitle">{projectsSubtitle}</p>
        </div>

        <ol className="project-list">
          {projects.map((project, index) => {
            const content = (
              <>
                <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-tech">{project.technologies.join(' / ')}</p>
                </div>
                <span className="project-arrow" aria-hidden="true">{project.liveUrl ? '↗' : ''}</span>
              </>
            );
            return (
              <li key={project.id}>
                {project.liveUrl ? (
                  <a className="project" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div className="project">{content}</div>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
