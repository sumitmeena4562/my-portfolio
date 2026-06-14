import React from 'react';
import { Calendar } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const About = () => {
  const { aboutMe } = resumeData.personalInfo;
  const { education } = resumeData;

  const highlights = [
    { title: 'Responsive UIs', desc: 'Expertise in building mobile-first layout designs using modern CSS.' },
    { title: 'API Integrations', desc: 'Seamlessly connecting REST APIs and rendering dynamic state variables.' },
    { title: 'Reusable Code', desc: 'Developing modular UI components for clean React architectures.' }
  ];

  return (
    <section id="about" className="no-print">
      <h2 className="section-title">About & Education</h2>
      
      <div className="about-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
      }}>
        {/* Left: Bio summary & highlights */}
        <div>
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: 'var(--text-primary)',
          }}>
            Professional Bio
          </h3>
          <p style={{
            fontSize: '0.88rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}>
            {aboutMe}
          </p>

          {/* Bullet Highlight List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {highlights.map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
              }}>
                <span style={{
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  lineHeight: '1',
                  marginTop: '1px',
                }}>
                  ✓
                </span>
                <div>
                  <h4 style={{
                    fontSize: '0.88rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '2px',
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '0.8.0rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.4',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Education List */}
        <div>
          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: '700',
            marginBottom: '10px',
            color: 'var(--text-primary)',
          }}>
            Education History
          </h3>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}>
            {education.map((edu, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)', /* Removed left accent border */
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '4px',
                  flexWrap: 'wrap',
                  gap: '4px',
                }}>
                  <h4 style={{
                    fontSize: '0.92rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                  }}>
                    {edu.degree}
                  </h4>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                  }}>
                    <Calendar size={10} /> {edu.year.split(': ')[1]}
                  </span>
                </div>
                
                <div style={{
                  fontSize: '0.82rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  marginBottom: '2px',
                }}>
                  {edu.institution}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                }}>
                  {edu.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
