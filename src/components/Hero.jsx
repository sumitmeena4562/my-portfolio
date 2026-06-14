import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

const Hero = () => {
  const { name, title, aboutMe, githubUrl, linkedinUrl, email, location } = resumeData.personalInfo;
  
  return (
    <section id="home" className="animate-fade-in" style={{
      paddingTop: '80px',
      paddingBottom: '20px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '24px',
        width: '100%',
        alignItems: 'center',
      }}>
        {/* Left Column: Heading and Details */}
        <div>
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: '800',
            lineHeight: '1.15',
            color: 'var(--text-primary)',
            marginBottom: '8px',
          }}>
            {name}
          </h1>
          
          <h2 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--primary)',
            marginBottom: '16px',
          }}>
            {title}
          </h2>

          <p style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.5',
            marginBottom: '20px',
            maxWidth: '550px',
          }}>
            {aboutMe}
          </p>

          {/* Actions & Socials inline */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="#resume" className="btn btn-primary">
                <FileText size={14} /> View Resume
              </a>
              <a href={`mailto:${email}`} className="btn btn-secondary">
                <Mail size={14} /> Contact
              </a>
            </div>

            {/* Vertically centered social list */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              borderLeft: '1px solid var(--border-color)',
              paddingLeft: '16px',
            }}>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                <GithubIcon size={18} />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Areas / High-level stats */}
        <div className="glass-panel" style={{
          padding: '16px 20px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
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
        @media (max-width: 768px) {
          #home > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
