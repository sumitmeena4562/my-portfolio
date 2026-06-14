import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  const { projects } = resumeData;

  return (
    <section id="projects" className="no-print">
      <h2 className="section-title">Academic & Personal Projects</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '16px',
      }}>
        {projects.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-panel" 
            style={{
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div>
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '8px',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '6px',
              }}>
                {proj.title}
              </h3>

              <p style={{
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                marginBottom: '10px',
                lineHeight: '1.4',
              }}>
                {proj.description}
              </p>

              <ul style={{
                paddingLeft: '14px',
                marginBottom: '12px',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: '1.4',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                {proj.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>
            </div>

            <div>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px',
                marginBottom: '10px',
              }}>
                {proj.tech.map((t, tIdx) => (
                  <span 
                    key={tIdx} 
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: '600',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--bg-primary)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)', /* Matched Experience tag styling */
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid var(--border-color)',
                paddingTop: '8px',
                fontSize: '0.8rem',
              }}>
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    fontWeight: '600',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  <GithubIcon size={12} /> Repository
                </a>
                {proj.demo && (
                  <a 
                    href={proj.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{
                      color: 'var(--text-muted)',
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
