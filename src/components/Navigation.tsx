import { title } from '../data/title';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavigationProps {
  activeSection: string;
  onScrollToSection: (sectionId: string) => void;
}

export const Navigation = ({ activeSection, onScrollToSection }: NavigationProps) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">{title.title}</span>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => onScrollToSection('about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => onScrollToSection('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'interests' ? 'active' : ''}`}
              onClick={() => onScrollToSection('interests')}
            >
              Skills
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => onScrollToSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
        <ThemeSwitcher />
      </div>
    </nav>

  );
};
