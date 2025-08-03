import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 90, color: '#f7df1e' },
        { name: 'TypeScript', level: 85, color: '#3178c6' },
        { name: 'C/C++', level: 88, color: '#00599c' },
        { name: 'Java', level: 82, color: '#ed8b00' },
        { name: 'Python', level: 75, color: '#3776ab' }
      ]
    },
    {
      title: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        { name: 'React.js', level: 92, color: '#61dafb' },
        { name: 'Next.js', level: 88, color: '#000000' },
        { name: 'HTML/CSS', level: 95, color: '#e34f26' },
        { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
        { name: 'React Native', level: 85, color: '#61dafb' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 90, color: '#339933' },
        { name: 'Express.js', level: 88, color: '#000000' },
        { name: 'MongoDB', level: 85, color: '#47a248' },
        { name: 'MySQL', level: 80, color: '#4479a1' },
        { name: 'NestJS', level: 70, color: '#e0234e' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 82, color: '#ff9900' },
        { name: 'Docker', level: 78, color: '#2496ed' },
        { name: 'Kubernetes', level: 75, color: '#326ce5' },
        { name: 'Jenkins', level: 72, color: '#d33833' },
        { name: 'GitHub Actions', level: 80, color: '#2088ff' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 92, color: '#f05032' },
        { name: 'VS Code', level: 95, color: '#007acc' },
        { name: 'Postman', level: 88, color: '#ff6c37' },
        { name: 'Figma', level: 85, color: '#f24e1e' },
        { name: 'Android Studio', level: 80, color: '#3ddc84' }
      ]
    }
  ];

  const SkillBar = ({ skill, index, isVisible }) => (
    <div className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className={`skill-fill ${isVisible ? 'animate' : ''}`}
          style={{ 
            '--skill-level': `${skill.level}%`,
            '--skill-color': skill.color,
            backgroundColor: skill.color
          }}
        />
      </div>
    </div>
  );

  const PlatformStats = () => (
    <div className="platform-stats">
      <h3 className="stats-title">Coding Platforms</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <h4>LeetCode</h4>
          <div className="stat-details">
            <span className="stat-number">440+</span>
            <span className="stat-label">Problems Solved</span>
          </div>
          <div className="stat-rating">
            <span>Max Rating: 1603</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <h4>SkillRack</h4>
          <div className="stat-details">
            <span className="stat-number">600+</span>
            <span className="stat-label">Problems Solved</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🚀</div>
          <h4>GitHub</h4>
          <div className="stat-details">
            <span className="stat-number">860+</span>
            <span className="stat-label">Contributions</span>
          </div>
          <div className="stat-rating">
            <span>50+ Repositories</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">🎯</div>
          <h4>HackerRank</h4>
          <div className="stat-details">
            <span className="stat-number">5⭐</span>
            <span className="stat-label">Certified</span>
          </div>
          <div className="stat-rating">
            <span>Python</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="skill-category"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <PlatformStats />
        
        <div className="certifications-highlight">
          <h3>Recent Certifications</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <div className="cert-icon">🏆</div>
              <div className="cert-info">
                <h4>React Certified</h4>
                <p>Udemy - 2024</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">☕</div>
              <div className="cert-info">
                <h4>Java Certified</h4>
                <p>Udemy - 2024</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🔧</div>
              <div className="cert-info">
                <h4>Data Structures & Algorithms</h4>
                <p>Udemy - 2024</p>
              </div>
            </div>
            <div className="cert-item">
              <div className="cert-icon">🎨</div>
              <div className="cert-info">
                <h4>UI/UX Design</h4>
                <p>Udemy - 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
