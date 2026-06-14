import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { name, title, aboutMe, githubUrl, linkedinUrl, email, location } = resumeData.personalInfo;
  
  return (
    <section id="home" className="animate-fade-in hero-container" style={{
      paddingTop: '80px',
      paddingBottom: '20px',
    }}>
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.25fr 0.75fr',
        gap: '24px',
        width: '100%',
        alignItems: 'center',
      }}>
        {/* Left Column: Heading and Details */}
        <div className="hero-left-col">
          <h1 className="hero-name" style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            lineHeight: '1.15',
            color: 'var(--text-primary)',
            marginBottom: '6px',
          }}>
            {name}
          </h1>
          
          <h2 className="hero-title" style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: 'var(--primary)',
            marginBottom: '16px',
          }}>
            {title}
          </h2>

          <p className="hero-desc" style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '24px',
            maxWidth: '550px',
          }}>
            {aboutMe}
          </p>

          {/* Actions & Socials inline */}
          <div className="hero-actions-container" style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div className="hero-buttons" style={{ 
              display: 'flex', 
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              <a href="#resume" className="btn btn-primary">
                <FileText size={14} /> View Resume
              </a>
              <a href={`mailto:${email}`} className="btn btn-secondary">
                <Mail size={14} /> Contact
              </a>
            </div>

            {/* Styled social outline icons */}
            <div className="hero-socials" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <GithubIcon size={16} />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '8px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.color = 'var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }}
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas / High-level stats */}
        <div className="hero-card glass-panel" style={{
          padding: '16px 20px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          width: '100%',
        }}>
          <h3 style={{
            fontSize: '0.95rem',
            fontWeight: '700',
            marginBottom: '10px',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '6px',
            color: 'var(--text-primary)',
          }}>
            Profile Overview
          </h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
          }}>
            <div>
              <strong>Role:</strong> Frontend Developer Intern
            </div>
            <div>
              <strong>Location:</strong> {location.split(',').slice(0, 2).join(', ')}
            </div>
            <div>
              <strong>Focus:</strong> Responsive UIs & REST APIs
            </div>
            <div>
              <strong>Core Tech:</strong> React, JavaScript, CSS
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .hero-left-col {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-name {
            font-size: 2.25rem !important;
            text-align: center;
            margin-bottom: 8px !important;
          }
          .hero-title {
            font-size: 1.15rem !important;
            text-align: center;
            margin-bottom: 12px !important;
          }
          .hero-desc {
            text-align: center;
            margin-bottom: 20px !important;
            line-height: 1.55 !important;
          }
          .hero-actions-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 16px !important;
            width: 100%;
          }
          .hero-buttons {
            width: 100%;
            flex-direction: column !important;
            align-items: center !important;
            gap: 10px !important;
          }
          .hero-buttons a {
            width: 240px !important; /* Elegant fixed width on mobile */
            text-align: center;
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
            width: 100%;
            margin-top: 4px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
