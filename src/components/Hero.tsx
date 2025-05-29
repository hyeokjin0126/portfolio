import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>안녕하세요! 👋</h1>
          <h2>저는 <span className="highlight">풀스택 개발자</span>입니다</h2>
          <p>
            아름다운 사용자 경험과 견고한 백엔드를 만드는 것을 좋아합니다.
            <br />
            핑크와 블루처럼 조화로운 코드를 작성하려고 노력합니다.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToProjects} className="btn btn-primary">
              프로젝트 보기
            </button>
            <a href="#contact" className="btn btn-outline">
              연락하기
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">React</div>
          <div className="floating-card card-2">TypeScript</div>
          <div className="floating-card card-3">Node.js</div>
          <div className="floating-card card-4">Python</div>
          <div className="floating-card card-5">MongoDB</div>
          <div className="floating-card card-6">AWS</div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 