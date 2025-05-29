import React from 'react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "React와 Node.js로 구축한 풀스택 온라인 쇼핑몰입니다. 사용자 인증, 결제 시스템, 관리자 패널 등 완전한 기능을 제공합니다.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "🛒",
      link: "https://example-ecommerce.netlify.app"
    },
    {
      title: "Real-time Chat App",
      description: "Socket.io를 활용한 실시간 채팅 애플리케이션입니다. 그룹 채팅, 파일 공유, 이모지 반응 등의 기능을 포함합니다.",
      tech: ["Vue.js", "Socket.io", "Redis", "Docker"],
      image: "💬",
      link: "https://example-chat.herokuapp.com"
    },
    {
      title: "Task Management Tool",
      description: "팀 협업을 위한 프로젝트 관리 도구입니다. 칸반 보드, 일정 관리, 팀원 할당 등의 기능을 제공합니다.",
      tech: ["Next.js", "PostgreSQL", "Prisma", "AWS"],
      image: "📋",
      link: "https://example-taskmanager.vercel.app"
    },
    {
      title: "Weather Dashboard",
      description: "다양한 지역의 날씨 정보를 실시간으로 확인할 수 있는 대시보드입니다. 차트와 그래프로 데이터를 시각화합니다.",
      tech: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      image: "🌤️",
      link: "https://example-weather.netlify.app"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p className="projects-subtitle">제가 만든 프로젝트들을 소개합니다</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 