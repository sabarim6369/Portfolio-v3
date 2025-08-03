import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'KANAM Hackathon Winner',
      year: '2024',
      type: 'Hackathon',
      description: 'Won first place in the KANAM Hackathon, demonstrating innovative problem-solving and technical excellence.',
      icon: '🏆',
      highlight: true
    },
    {
      id: 2,
      title: 'Legend of Hack Award',
      year: '2024',
      type: 'Competition',
      description: 'Received the prestigious Legend of Hack award at NGP for outstanding performance in competitive programming.',
      icon: '⚡',
      highlight: true
    },
    {
      id: 3,
      title: 'CodeHunter Third Prize',
      year: '2024',
      type: 'Programming Contest',
      description: 'Secured third place in CodeHunter event at KIT College of Engineering, showcasing algorithmic skills.',
      icon: '🥉',
      highlight: false
    },
    {
      id: 4,
      title: 'LeetCode Max Rating 1603',
      year: 'Ongoing',
      type: 'Coding Platform',
      description: 'Achieved maximum rating of 1603 on LeetCode with 440+ problems solved, demonstrating consistent performance.',
      icon: '💻',
      highlight: false
    },
    {
      id: 5,
      title: 'GitHub Contributions',
      year: 'Ongoing',
      type: 'Open Source',
      description: '860+ contributions in the last 8 months across 50+ repositories, showing active development participation.',
      icon: '📈',
      highlight: false
    },
  {
  id: 6,
  title: "Released 3 NPM Packages",
  year: "2025",
  type: "Open Source",
  description: "Published three npm packages showcasing reusable utilities and tools for developers, focused on productivity and problem solving.",
  icon: "📦",
  highlight: true
}

  ];

  const certifications = [
    {
      title: 'Complete C Developer Course',
      provider: 'Udemy',
      year: '2023',
      icon: '🔧'
    },
    {
      title: 'Mastering Data Structures & Algorithms',
      provider: 'Udemy',
      year: '2024',
      icon: '📊'
    },
    {
      title: 'React Certified',
      provider: 'Udemy',
      year: '2024',
      icon: '⚛️'
    },
    {
      title: 'Java Certified',
      provider: 'Udemy',
      year: '2024',
      icon: '☕'
    },
    {
      title: 'Complete Web & Mobile Designer',
      provider: 'Udemy',
      year: '2023',
      icon: '🎨'
    },
    {
      title: 'Python Certified',
      provider: 'HackerRank',
      year: '2023',
      icon: '🐍'
    }
  ];

  const stats = [
    {
      number: '440+',
      label: 'LeetCode Problems',
      icon: '💡',
      color: '#ffa116'
    },
    {
      number: '600+',
      label: 'SkillRack Solutions',
      icon: '⚡',
      color: '#64ffda'
    },
    {
      number: '860+',
      label: 'GitHub Contributions',
      icon: '📈',
      color: '#28a745'
    },
    {
      number: '50+',
      label: 'GitHub Repositories',
      icon: '📁',
      color: '#6f42c1'
    }
  ];

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.highlight ? 'highlight' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <span className="achievement-type">{achievement.type}</span>
                <p className="achievement-description">{achievement.description}</p>
              </div>
              {achievement.highlight && <div className="highlight-badge">Featured</div>}
            </div>
          ))}
        </div>
{/* 
        <div className="stats-section">
          <h3 className="stats-title">Coding Statistics</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="stat-item"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <span className="stat-number" style={{ color: stat.color }}>
                    {stat.number}
                  </span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="certifications-section">
          <h3 className="cert-section-title">Professional Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div 
                key={cert.title} 
                className="certification-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h4 className="cert-title">{cert.title}</h4>
                  <div className="cert-details">
                    <span className="cert-provider">{cert.provider}</span>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-summary">
          <div className="summary-card">
            <h3>Journey Highlights</h3>
            <div className="summary-content">
              <p>
                From winning hackathons to solving 1000+ coding problems across multiple platforms, 
                my journey reflects a commitment to continuous learning and excellence in software development.
              </p>
              <div className="summary-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">🎖️</span>
                  <span>Multiple Competition Wins</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">📚</span>
                  <span>6+ Professional Certifications</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">💻</span>
                  <span>1000+ Problems Solved</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🌟</span>
                  <span>Active Open Source Contributor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
