import profilePhoto2 from '../assets/petter2.jpg';
import { heroInfo } from '../data/hero';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero = ({ onScrollToSection }: HeroProps) => {
  return (
    <section id="about" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{heroInfo.title}</span>
          </h1>
          <p className="hero-subtitle">
            {heroInfo.subtitle}
          </p>
          <p className="hero-description">
            {heroInfo.description}
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => onScrollToSection('projects')}
            >
              View My Projects
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => onScrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-coin">
            <div className="coin-front">
              <div className="profile-icon">
                <img src={profilePhoto2} alt="Petter Kärnestad" />
              </div>
            </div>
            <div className="coin-back">
              <div className="profile-photo">
                <img src={profilePhoto2} alt="Petter Kärnestad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
