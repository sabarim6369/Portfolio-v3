import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-brand">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <span className="logo">SM</span>
          </a>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#achievements" onClick={(e) => { e.preventDefault(); scrollToSection('achievements'); }}>Achievements</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            <li>
              <button 
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 18C8.69 18 6 15.31 6 12S8.69 6 12 6 18 8.69 18 12 15.31 18 12 18M12 16C14.21 16 16 14.21 16 12S14.21 8 12 8 8 9.79 8 12 9.79 16 12 16M12 2L14.39 5.42C13.65 5.15 12.84 5 12 5S10.35 5.15 9.61 5.42L12 2M3.34 7L7.5 6.65C6.9 7.16 6.36 7.78 5.94 8.5C5.52 9.22 5.25 10 5.11 10.79L3.34 7M3.34 17L5.11 13.21C5.25 14 5.52 14.78 5.94 15.5C6.36 16.22 6.9 16.84 7.5 17.35L3.34 17M20.66 7L16.5 6.65C17.1 7.16 17.64 7.78 18.06 8.5C18.48 9.22 18.75 10 18.89 10.79L20.66 7M20.66 17L18.89 13.21C18.75 14 18.48 14.78 18.06 15.5C17.64 16.22 17.1 16.84 16.5 17.35L20.66 17M12 22L9.61 18.58C10.35 18.85 11.16 19 12 19S13.65 18.85 14.39 18.58L12 22Z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.4 6.35,17.41C9.37,20.43 14,20.54 17.33,17.97Z"/>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
