import { useState } from 'react'
import './App.css'
import { Navigation, Hero, Projects, Skills, Contact, Footer, WonkyEffects } from './components'
import { projects } from './data/projects'
import { techInterests } from './data/skills'
import { contactInfo } from './data/contact'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="app">
        <WonkyEffects />
        <Navigation 
          activeSection={activeSection} 
          onScrollToSection={scrollToSection} 
        />
        
        <Hero onScrollToSection={scrollToSection} />
        
        <Projects projects={projects} />
        
        <Skills techInterests={techInterests} />
        
        <Contact contactInfo={contactInfo} />
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App