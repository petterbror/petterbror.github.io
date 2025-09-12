import type { TechInterest } from '../types';

interface SkillsProps {
  techInterests: TechInterest[];
}

export const Skills = ({ techInterests }: SkillsProps) => {
  return (
    <section id="interests" className="interests">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Full-stack development with focus on integration development within IAM</p>
        
        <div className="interests-grid">
          {techInterests.map((interest, index) => (
            <div key={index} className="interest-card">
              <h3 className="interest-category">{interest.category}</h3>
              <p className="interest-description">{interest.description}</p>
              <div className="interest-technologies">
                {interest.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
