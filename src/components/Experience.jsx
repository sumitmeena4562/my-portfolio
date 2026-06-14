import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Experience = () => {
  const { experience } = resumeData;

  return (
    <section id="experience" className="no-print">
      <h2 className="section-title">Work Experience</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {experience.map((exp, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{
              padding: '16px 20px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)', /* Removed left accent border */
            }}
          >
            {/* Header info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '12px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '8px',
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.05rem',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  marginBottom: '2px',
                }}>
                  {exp.role}
                </h3>
                
                <h4 style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--primary)',
                }}>
                  {exp.company}
                </h4>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '2px',
                textAlign: 'right',
                fontSize: '0.8rem',
              }}>
                <span style={{
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <Calendar size={12} /> {exp.duration}
                </span>

                <span style={{
                  color: 'var(--text-muted)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <MapPin size={10} /> {exp.location}
                </span>
              </div>
            </div>

            {/* Bullets */}
            <ul style={{
              paddingLeft: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              marginBottom: '14px',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.4',
            }}>
              {exp.bullets.map((bullet, bIdx) => (
                <li key={bIdx}>{bullet}</li>
              ))}
            </ul>

            {/* Technologies tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
            }}>
              {exp.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)',
                    backgroundColor: 'var(--bg-primary)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
