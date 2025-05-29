import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              안녕하세요! 저는 사용자 중심의 경험을 만드는 것에 열정적인 풀스택 개발자입니다.
              프론트엔드의 아름다운 디자인과 백엔드의 견고한 로직을 모두 다루며,
              기술과 창의성이 만나는 지점에서 가치를 창출합니다.
            </p>
            <p>
              새로운 기술을 학습하는 것을 즐기고, 팀과의 협업을 통해 더 나은 결과물을 
              만들어내는 것을 중요하게 생각합니다. 깔끔하고 효율적인 코드를 작성하며,
              지속적인 개선과 성장을 추구합니다.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="code-snippet">
                <div className="code-line">
                  <span className="keyword">const</span> 
                  <span className="variable"> developer</span> 
                  <span className="operator"> = </span>
                  <span className="string">"passionate"</span>
                </div>
                <div className="code-line">
                  <span className="keyword">function</span>
                  <span className="function"> createValue</span>
                  <span className="bracket">()</span> 
                  <span className="bracket">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="keyword">  return</span> 
                  <span className="string"> "beautiful code"</span>
                </div>
                <div className="code-line">
                  <span className="bracket">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 