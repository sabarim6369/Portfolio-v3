import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
const titles = [
  'Full Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
  'Cloud Engineer',
  'AI Learner',
  'Freelancer',
  'Innovator'
];
    const currentTitle = titles[titleIndex];
    
    if (currentIndex < currentTitle.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText('');
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, titleIndex]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting fade-in">Hi 👋👋 I am</p>
            <h1 className="hero-name fade-in-up">SABARI M</h1>
            <h2 className="hero-title">
              <span className="typing-text">{displayedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description fade-in-up">
              Passionate Computer Science student with expertise in full-stack development. 
              I love building exceptional digital experiences and solving complex problems 
              through clean, efficient code.
            </p>
            
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">540+</span>
                <span className="stat-label">LeetCode Problems</span>
              </div>
              <div className="stat">
                <span className="stat-number">1200+</span>
                <span className="stat-label">GitHub Contributions</span>
              </div>
              <div className="stat">
                <span className="stat-number">8.2</span>
                <span className="stat-label">CGPA</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="social-links">
              <a href="https://github.com/sabarim6369" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sabarim6369/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/sabarimcse6369/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.69-2.176-6.756-1.846-9.114.637l-3.407 3.632c-.18.192-.311.407-.388.64-.063.19-.104.384-.125.572-.014.123-.01.238 0 .359.024.253.088.503.19.735.16.361.394.672.692.927l4.274 4.193c.881.86 2.317.843 3.185-.05l2.548-2.545a1.417 1.417 0 0 1 2.006 0 1.42 1.42 0 0 1 0 2.008l-2.548 2.546a4.33 4.33 0 0 1-6.179.043l-4.274-4.193a3.982 3.982 0 0 1-1.159-2.027 3.926 3.926 0 0 1-.043-1.518 3.893 3.893 0 0 1 .632-1.539l3.409-3.632c3.251-3.44 8.672-3.812 12.142-.532l3.5 2.831a2.8 2.8 0 0 1 .419 3.925 2.81 2.81 0 0 1-3.944.419l-3.501-2.831c-.438-.355-1.081-.3-1.436.137a1.02 1.02 0 0 0 .137 1.436l3.501 2.831c.957.775 2.349.622 3.146-.344.797-.966.644-2.359-.344-3.146l-3.5-2.831c-2.248-1.817-5.524-1.549-7.429.617L9.13 8.114a1.378 1.378 0 0 0-.961.438z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
<img src="/sabari.jpg" className="avatar-placeholder"></img>              </div>
              
              <div className="code-snippet">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                </div>
                <div className="code-line indent">
                  <span className="property">name</span>: <span className="string">'Sabari M'</span>,
                </div>
               <div className="code-line indent">
  <span className="property">skills</span>: [
  <span className="string">'Full Stack Developer'</span>,<br />
  <span className="string">'Cloud Enthusiast'</span>,<br />
  <span className="string">'Agentic AI Learner'</span>
  ],
</div>

                <div className="code-line indent">
                  <span className="property">passionate</span>: <span className="boolean">true</span>
                </div>
                <div className="code-line">{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
