import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 }
      ],
      color: "#ff6b9d"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express", level: 85 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 80 }
      ],
      color: "#4ecdc4"
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Nginx", level: 70 }
      ],
      color: "#a8e6cf"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>Skills & Technologies</h2>
        <p className="skills-subtitle">제가 다루는 기술들과 숙련도입니다</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <h3 style={{ color: category.color }}>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: category.color
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 