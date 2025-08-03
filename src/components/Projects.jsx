import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Lead Flow CRM',
      description: 'A comprehensive lead management system with analytics, call monitoring, and performance tracking. Features three panels: superadmin, admin, and telecaller for efficient staff oversight.',
      longDescription: 'The Lead Management System streamlines lead and telecaller management with advanced analytics and real-time call monitoring. It includes role-based access control and comprehensive performance tracking.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Twilio'],
      category: 'fullstack',
      year: '2024',
      status: 'completed',
      github: 'https://github.com/sabari-lead-flow',
      live: 'https://leadflow-demo.com',
      image: '/api/placeholder/600/400',
      features: [
        'Real-time call monitoring with Twilio integration',
        'Role-based dashboard for different user types',
        'Advanced analytics and performance metrics',
        'Lead assignment and tracking system'
      ]
    },
    {
      id: 2,
      title: 'SOKKAI E-commerce Platform',
      description: 'Full-stack clothing e-commerce platform featuring product browsing, cart management, secure payments, user authentication, and comprehensive admin panel.',
      longDescription: 'A modern e-commerce solution built for clothing retail with seamless user experience and robust backend management.',
      tech: ['Next.js', 'MongoDB', 'Razorpay'],
      category: 'fullstack',
      year: '2024',
      status: 'completed',
      github: 'https://github.com/sabari-sokkai',
      live: 'https://sokkai-store.com',
      image: '/api/placeholder/600/400',
      features: [
        'Secure payment integration with Razorpay',
        'Responsive design for all devices',
        'Order management and tracking',
        'Admin dashboard for inventory management'
      ]
    },
    {
      id: 3,
      title: 'RMS-Product Training Platform',
      description: 'Software designed specifically for company training management. Currently working on the trainer side focusing on delivering and managing training content and sessions.',
      longDescription: 'A specialized training platform that helps streamline and manage training activities effectively for corporate environments.',
      tech: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
      category: 'fullstack',
      year: '2025',
      status: 'ongoing',
      github: 'https://github.com/sabari-rms',
      live: null,
      image: '/api/placeholder/600/400',
      features: [
        'Interactive training content delivery',
        'Progress tracking and analytics',
        'Session management for trainers',
        'Scalable architecture for enterprise use'
      ]
    },
    {
      id: 4,
      title: 'THOTS Social Polling App',
      description: 'Mobile application that brings interactive polling to social media. Features scrollable poll feeds replacing traditional reels with real-time opinion sharing capabilities.',
      longDescription: 'THOTS revolutionizes social media interaction by focusing on opinion sharing through polls in an engaging, community-driven format.',
      tech: ['React Native', 'Node.js', 'Express', 'MongoDB'],
      category: 'mobile',
      year: '2025',
      status: 'ongoing',
      github: 'https://github.com/sabari-thots',
      live: null,
      image: '/api/placeholder/600/400',
      features: [
        'Real-time polling with instant results',
        'Social media-style scrollable feed',
        'Community-driven opinion sharing',
        'Cross-platform mobile compatibility'
      ]
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category.key}
              className={`filter-btn ${filter === category.key ? 'active' : ''}`}
              onClick={() => setFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="project-overlay">
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedProject(null)}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                </svg>
              </button>
              
              <div className="modal-header">
                <h3>{selectedProject.title}</h3>
                <span className="modal-year">{selectedProject.year}</span>
              </div>
              
              <p className="modal-description">{selectedProject.longDescription}</p>
              
              <div className="modal-features">
                <h4>Key Features</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-tech">
                <h4>Technologies Used</h4>
                <div className="tech-list">
                  {selectedProject.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn">
                  View Code
                </a>
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
