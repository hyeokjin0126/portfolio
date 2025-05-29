import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (실제로는 서버로 전송)
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">
          새로운 프로젝트나 협업 기회에 대해 이야기해보세요!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-details">
                <h4>hyeokjin0126</h4>
                <p>wngnl05@naver.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>+82 10-2593-0555</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-details">
                <h4>Location</h4>
                <p>Seoul, South Korea</p>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-buttons">
                <a href="https://github.com/hyeokjin0126" className="social-btn github" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">이진혁</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">hyeokjin0126@naver.com</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 