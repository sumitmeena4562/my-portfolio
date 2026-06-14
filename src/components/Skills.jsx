import React from 'react';
import { resumeData } from '../data/resumeData';

const Skills = () => {
  const { categories } = resumeData.skills;
  const { certifications } = resumeData;

  return (
    <section id="skills" className="no-print">
      <h2 className="section-title">Skills & Certifications</h2>

      <div className="skills-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '24px',
      }}>
        {/* Left Side: Technical Skills Categories */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="glass-panel" 
              style={{
                padding: '16px',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '10px',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '4px',
              }}>{cat.title}</h3>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
              }}>
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    style={{
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      backgroundColor: 'var(--bg-primary)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Certifications */}
        <div className="glass-panel" style={{
          padding: '16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
        }}>
          <h3 style={{
            fontSize: '0.95rem',
            fontWeight: '700',
            color: 'var(--text-primary)',
            marginBottom: '10px',
            borderBottom: '1px solid var(--border-color)',
            paddingBottom: '4px',
          }}>
            Certifications
          </h3>

          <ul style={{
            paddingLeft: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {certifications.map((cert, idx) => (
              <li 
                key={idx} 
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4',
                }}
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
