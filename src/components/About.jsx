import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Computer Science Engineering student at Sri Eshwar College of Engineering 
              with a strong foundation in full-stack development. My journey in tech started with curiosity 
              and has evolved into a deep love for creating digital solutions that make a difference.
            </p>
            
            <p>
              With hands-on experience as a Full Stack Developer intern at RAMPeX Technologies, I've contributed 
              to multiple real-world projects and gained expertise in modern web technologies. I thrive in 
              collaborative environments and enjoy tackling complex challenges.
            </p>
            
            <p>
              When I'm not coding, you'll find me solving algorithmic challenges on LeetCode, contributing to 
              open-source projects, or exploring the latest trends in technology. I believe in continuous 
              learning and always strive to write clean, efficient code.
            </p>

            <div className="quick-facts">
              <div className="fact">
                <span className="fact-label">Current CGPA:</span>
                <span className="fact-value">8.2/10</span>
              </div>
              <div className="fact">
                <span className="fact-label">LeetCode Rating:</span>
                <span className="fact-value">1603 (Max)</span>
              </div>
              <div className="fact">
                <span className="fact-label">GitHub Repos:</span>
                <span className="fact-value">100+</span>
              </div>
            </div>
          </div>
          
          <div className="education-timeline">
            <h3 className="timeline-title">Education Journey</h3>
            
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>B.E. Computer Science Engineering</h4>
                  <p className="institution">Sri Eshwar College of Engineering</p>
                  <p className="duration">2023 - 2027</p>
                  <p className="grade">CGPA: 8.2 (Upto 3rd Sem)</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Higher Secondary Certificate</h4>
                  <p className="institution">Kongunadu Matric Hr Sec School</p>
                  <p className="duration">2021 - 2023</p>
                  <p className="grade">94.5%</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Secondary School Leaving Certificate</h4>
                  <p className="institution">Kongunadu Matric Hr Sec School</p>
                  <p className="duration">2020 - 2021</p>
                  <p className="grade">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-info">
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>sabari.m2023cse@sece.ac.in</span>
          </div>
          <div className="contact-item">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>+91 6369012255</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
