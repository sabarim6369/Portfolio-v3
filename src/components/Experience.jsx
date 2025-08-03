import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-content">
          <div className="experience-card">
            <div className="company-logo">
              <div className="logo-placeholder">
                RAMPeX
              </div>
            </div>
            
            <div className="experience-details">
              <div className="experience-header">
                <h3 className="position">Full Stack Developer Intern</h3>
                <span className="duration">2024</span>
              </div>
              
              <h4 className="company">RAMPeX Technologies</h4>
              
              <div className="experience-description">
                <p>
                  Worked as a Full-Stack Development Intern contributing to multiple real-world projects 
                  across frontend and backend. Gained hands-on experience with modern web technologies 
                  in an Agile development environment.
                </p>
                
                <div className="achievements">
                  <h5>Key Achievements & Responsibilities:</h5>
                  <ul>
                    <li>Developed and maintained multiple web applications using React.js and Node.js</li>
                    <li>Implemented RESTful APIs and database integration with MongoDB</li>
                    <li>Collaborated with cross-functional teams in Agile/Scrum methodology</li>
                    <li>Deployed applications on AWS cloud infrastructure</li>
                    <li>Participated in code reviews and maintained coding standards</li>
                    <li>Optimized application performance and user experience</li>
                  </ul>
                </div>
                
                <div className="tech-stack">
                  <h5>Technologies Used:</h5>
                  <div className="tech-tags">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                    <span className="tech-tag">MongoDB</span>
                    <span className="tech-tag">AWS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="experience-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div className="stat-content">
                <h4>Multiple Projects</h4>
                <p>Contributed to various client projects</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              </div>
              <div className="stat-content">
                <h4>Full Stack Development</h4>
                <p>Frontend & Backend expertise</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="stat-content">
                <h4>Modern Technologies</h4>
                <p>React, Node.js, AWS & more</p>
              </div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <div className="stat-content">
                <h4>Agile Environment</h4>
                <p>Collaborative team development</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="looking-ahead">
          <div className="ahead-card">
            <h3>Looking Ahead</h3>
            <p>
              Currently seeking opportunities to leverage my full-stack development skills and contribute 
              to innovative projects. Passionate about creating scalable solutions and learning new technologies.
            </p>
            <div className="ahead-goals">
              <div className="goal">
                <span className="goal-icon">🎯</span>
                <span>Senior Developer Role</span>
              </div>
              <div className="goal">
                <span className="goal-icon">🚀</span>
                <span>Open Source Contributions</span>
              </div>
              <div className="goal">
                <span className="goal-icon">💡</span>
                <span>Product Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
