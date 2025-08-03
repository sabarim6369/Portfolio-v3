import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('Personal');

  const projects = [
    {
      id: 1,
      title: "Lead Flow CRM",
      description:
        "A comprehensive lead management system with analytics, call monitoring, and performance tracking. Features three panels: superadmin, admin, and telecaller for efficient staff oversight.",
      longDescription:
        "The Lead Management System streamlines lead and telecaller management with advanced analytics and real-time call monitoring. It includes role-based access control and comprehensive performance tracking.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Twilio"],
      category: "Freelance",
      year: "2024",
      status: "completed",
      github: "https://github.com/sabarim6369/AWS_Leadmanagementsystem.git",
      live: "https://leadflow-demo.com",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time call monitoring with Twilio integration",
        "Role-based dashboard for different user types",
        "Advanced analytics and performance metrics",
        "Lead assignment and tracking system",
      ],
    },
    {
      id: 2,
      title: "SOKKAI E-commerce Platform",
      description:
        "Full-stack clothing e-commerce platform featuring product browsing, cart management, secure payments, user authentication, and comprehensive admin panel.",
      longDescription:
        "A modern e-commerce solution built for clothing retail with seamless user experience and robust backend management.",
      tech: ["Next.js", "MongoDB", "Razorpay"],
      category: "Freelance",
      year: "2024",
      status: "completed",
      github: "https://github.com/sabarim6369/sokkaifinal.git",
      live: "https://sokkai-store.com",
      image: "/api/placeholder/600/400",
      features: [
        "Secure payment integration with Razorpay",
        "Responsive design for all devices",
        "Order management and tracking",
        "Admin dashboard for inventory management",
      ],
    },
 {
  id: 3,
  title: "RMS - Product Training Platform",
  description:
    "An enterprise-grade training platform with separate panels for Admin, Trainer, and Student. I contributed to the Trainer panel, enabling content delivery, session handling, and performance evaluation.",
  longDescription:
    "RMS is a robust training management system tailored for corporate training environments. It includes dedicated panels for Admin, Trainer, and Student. Admins manage users and sessions, Trainers handle batch creation, content upload, feedback, and performance reviews, while Students access assigned sessions and materials. I was responsible for building and enhancing the Trainer panel — focusing on streamlined content delivery, evaluation workflows, and session reporting.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  category: "Intern",
  year: "2025",
  status: "completed",
  github:
    "https://github.com/RAMPeXTechnologies/RAMPeX-Management-System.git",
  live: null,
  image: "/api/placeholder/600/400",
  features: [
    "Role-based access: Admin, Trainer, Student",
    "Trainer panel for batch and session management",
    "Material upload and feedback collection",
    "Student performance tracking and evaluation",
    "Interactive content delivery system",
    "Admin-side user and training program control",
    "Secure authentication and session control",
    "Enterprise-ready backend with scalable design"
  ]
}
,
    {
      id: 4,
      title: "THOTS Social Polling App",
      description:
        "Mobile application that brings interactive polling to social media. Features scrollable poll feeds replacing traditional reels with real-time opinion sharing capabilities.",
      longDescription:
        "THOTS revolutionizes social media interaction by focusing on opinion sharing through polls in an engaging, community-driven format.",
      tech: ["React Native", "Node.js", "Express", "MongoDB"],
      category: "Freelance",
      year: "2025",
      status: "completed",
      github: "https://github.com/sabarim6369/Thoughtsapp.git",
      live: "https://drive.google.com/drive/folders/1Zc97FZM0yqXA5UzLIjlR_WDq7tbVkk1v?usp=sharing",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time polling with instant results",
        "Social media-style scrollable feed",
        "Community-driven opinion sharing",
        "Cross-platform mobile compatibility",
      ],
    },
    {
      id: 5,
      title: "Milver - MILK Transport",
      description:
        "A transport management system for Milk Transport, including driver allocation and delivery maintenance. Designed to streamline daily delivery routes and ensure timely distribution of milk with real-time tracking.",
      longDescription:
        "Milver is a comprehensive milk transport management system designed to streamline operations for dairy logistics. It offers tools for driver allocation, route planning, real-time delivery tracking, and administrative oversight, ensuring timely and efficient milk distribution.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      category: "Freelance",
      year: "2024",
      status: "completed",
      github: "https://github.com/Dharanish-AM/MILVER.git",
      live: "https://milver-alpha.vercel.app/",
      image: "/api/placeholder/600/400",
      features: [
        "Driver allocation and scheduling dashboard",
        "Real-time delivery status tracking",
        "Route optimization for milk delivery",
        "Delivery history and logs for admins",
        "User-friendly admin panel for trip management",
        "Secure login and role-based access control",
      ],
    },
    {
      id: 6,
      title: "4Trip - Travel Planning & Booking Companion",
      description:
        "A smart travel planner app allowing users to discover places, create custom itineraries, and manage bookings in one place. Integrated with maps and weather APIs for better planning.",
      longDescription:
        "THOTS revolutionizes social media interaction by focusing on opinion sharing through polls in an engaging, community-driven format.",
      tech: ["ReactNative", "Node.js", "Express", "MongoDB", "Aws"],
      category: "Freelance",
      year: "2025",
      status: "completed",
      github: "https://github.com/vijayguhan10/trip.git",
      live: "https://play.google.com/store/apps/details?id=com.vijayguhan.fourtrip",
      image: "/api/placeholder/600/400",
      features: [
        "Real-time polling with instant results",
        "Social media-style scrollable feed",
        "Community-driven opinion sharing",
        "Cross-platform mobile compatibility",
      ],
    },
    {
      id: 7,
      title: "LumaAccess-V1",
      description:
        "A remote device access and control system enabling users to register, manage, and send commands to their desktop agents from a central dashboard.",
      longDescription:
        "LumaAccess is an intelligent platform that allows remote access and control of connected desktop devices through a secure interface. It features agent registration, user access management, real-time command execution (like shutdown, restart, lock screen), and live screen streaming via WebRTC, making it ideal for IT admins, educators, and enterprise users.",
      tech: [
        "ReactNative",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS",
        "Electron",
        "WebRTC",
      ],
      category: "Personal",
      year: "2025",
      status: "completed",
      github: "https://github.com/sabarim6369/lumaaccess-client.git", // ✅ (Replace this if you have LumaAccess repo)
      live: "https://lumaaccess.vercel.app/",
      image: "/api/placeholder/600/400",
      features: [
        "Electron-based desktop agent with system tray UI",
        "Secure user-device registration and linking",
        "Remote command execution (shutdown, restart, lock, sleep)",
        "Live screen streaming",
        "Cross-platform compatibility with React Native frontend",
        "Auto-launch and persistent background execution",
        "Cloud-hosted backend with real-time device tracking",
      ],
    },
    {
  id: 8,
  title: "AlgoGit",
  description:
    "A Chrome extension that automates GitHub commits for coding platform submissions, classifies concepts, and provides instant solution summaries.",
  longDescription:
    "AlgoGit is a productivity tool for developers that integrates with coding platforms like LeetCode and GFG. It captures each submission, generates commit messages using LLMs, and classifies solutions by concepts (e.g., DP, sliding window). The extension auto-pushes code to GitHub or GitLab repositories with smart summaries and organized folder structures, helping users build a curated, searchable DSA portfolio.",
  tech: [
    "JavaScript",
    "Chrome Extension APIs",
 
    "Spring Boot",
    "MongoDB",
    "OpenAI/Groq LLaMA API",
    "GitHub API",
  ],
  category: "Personal",
  year: "2025",
  status: "completed",
  github: "https://github.com/sabarim6369/AlgoGit.git", 
  live: "https://chromewebstore.google.com/detail/algogit-extension/your-id", // 🔁 Replace with actual Chrome Web Store link when ready
  image: "/api/placeholder/600/400", 
  features: [
    "Automatically captures submissions from LeetCode, GFG, etc.",
    "Generates commit messages and summaries using LLMs",
    "Classifies solutions by concepts (e.g., DP, BFS, two pointers)",
    "Organizes GitHub folder structure by platform and difficulty",
    "Supports both GitHub and GitLab repositories",
    "One-click setup via extension popup UI",
    "Submission streak tracking and stats dashboard",
    "Secure architecture with backend processing using Spring Boot",
  ],
},
  {
  id: 9,
  title: "FeedEase",
  description:
    "A feedback collection system for training sessions, with an admin panel to manage sessions and automated feedback collection via student-accessible links.",
  longDescription:
    "FeedEase is a lightweight training feedback platform featuring a powerful admin panel to manage feedback sessions across training programs. For each session, students receive a unique link to submit feedback anonymously. On the final day of training, the system automatically switches to named feedback mode, capturing student identity alongside responses. All feedback remains accessible to the admin until the end of the training cycle, ensuring complete oversight and actionable insights.",
  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Tailwind CSS"
  ],
  category: "Intern",
  year: "2025",
  status: "completed",
  github: "https://github.com/sabarim6369/feedback_management.git",
  live: "https://feedback-management-iota.vercel.app/",
  image: "/api/placeholder/600/400",
  features: [
    "Admin panel to create and manage daily feedback sessions",
    "Link-based access for students without login",
    "Anonymous feedback submission for each session",
    "Automatic switch to named feedback on final day",
    "Session-wise feedback viewing and export by admin",
    "Secure session access using token-based validation",
    "Feedback data stored securely in MongoDB",
    "Responsive and clean UI"
  ]
},
{
  id: 10,
  title: "JobSy – AI-Powered Career Assistant",
  description:
    "An AI-powered career assistance platform using LangChain and RAG with Ollama LLaMA3, enabling students to find jobs and internships, analyze resumes, generate cover letters, and get ATS scoring.",
  longDescription:
    "JobSy is a smart career assistant platform designed for students and early professionals. Built using LangChain (RAG architecture) with Ollama LLaMA3, it offers personalized career tools including resume parsing and improvement suggestions, ATS scoring, cover letter generation, and intelligent job/internship matching. The platform enhances career readiness with mock interview simulations based on resumes, job descriptions, or specific domains.",
  tech: [
    "React",
    "FastAPI",
    "LangChain",
    "Ollama (LLaMA3)",
    "MongoDB",
    "Tailwind CSS"
  ],
  category: "Personal",
  year: "2025",
  status: "ongoing",
  github: "https://github.com/sabarim6369/Jobsy.git",
  live: "https://feedback-management-iota.vercel.app/",
  image: "/api/placeholder/600/400",
  features: [
    "Resume parsing and section-wise improvement suggestions",
    "Job and internship matching based on resume and preference",
    "ATS scoring system to evaluate resume performance",
    "AI-generated cover letter with download support",
    "Mock interview module (based on resume, JD, or domain)",
    "LangChain-powered multi-step AI workflows with LangGraph",
    "Built-in RAG pipeline using Ollama and LLaMA3",
    "Responsive UI with smooth UX"
  ]
}



  ];

  const categories = [
     { key: 'Freelance', label: 'Freelance' },
    { key: 'Personal', label: 'Personal' },
   
    { key: 'Intern', label: 'Intern' },
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
