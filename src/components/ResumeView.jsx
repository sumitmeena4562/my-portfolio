import React from 'react';
import { Download, Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { resumeData } from '../data/resumeData';

const ResumeView = () => {
  const { name, phone, email, location, linkedin, github } = resumeData.personalInfo;
  const { categories } = resumeData.skills;
  const { experience, projects, education, certifications } = resumeData;

  // Format phone number with spaces for readability
  const formattedPhone = '+91 62616 52446';

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="resume-section-web">
      {/* Web view header and download trigger */}
      <div className="no-print resume-trigger-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <div>
          <h2 className="section-title" style={{ margin: 0 }}>Curriculum Vitae</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '0.85rem' }}>
            Click print to save a clean PDF copy of your resume.
          </p>
        </div>
        
        <button onClick={handlePrint} className="btn btn-primary resume-print-btn">
          <Download size={14} /> Print / Save as PDF
        </button>
      </div>

      {/* The Resume Sheet - Styled to look like a clean paper resume */}
      <div className="resume-preview-container">
        <div className="resume-paper" style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          padding: '36px 40px', /* Increased horizontal padding */
          borderRadius: 'var(--border-radius)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--card-shadow)',
        }}>
          
          {/* Resume Header */}
          <div className="resume-header" style={{
            textAlign: 'center',
            borderBottom: '2.5px solid var(--text-primary)', /* Solid thick line */
            paddingBottom: '14px',
            marginBottom: '18px',
          }}>
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: '8px',
              color: 'var(--text-primary)',
            }}>
              {name}
            </h1>
            
            {/* Contact Details Grid */}
            <div className="resume-contact-info" style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Phone size={11} style={{ color: 'var(--primary)' }} /> {formattedPhone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={11} style={{ color: 'var(--primary)' }} /> {email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={11} style={{ color: 'var(--primary)' }} /> {location.split(',').slice(0, 3).join(',')}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LinkedinIcon size={11} style={{ color: 'var(--primary)' }} /> {linkedin}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <GithubIcon size={11} style={{ color: 'var(--primary)' }} /> {github}
              </span>
            </div>
          </div>

          {/* About Me Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="resume-section-title" style={{
              fontSize: '0.92rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              borderBottom: '1.5px solid var(--text-primary)',
              paddingBottom: '3px',
              marginBottom: '8px', /* Increased spacing below title */
              color: 'var(--text-primary)',
            }}>
              About Me
            </h3>
            <p style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.45',
            }}>
              {resumeData.personalInfo.aboutMe}
            </p>
          </div>

          {/* Skills Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="resume-section-title" style={{
              fontSize: '0.92rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              borderBottom: '1.5px solid var(--text-primary)',
              paddingBottom: '3px',
              marginBottom: '8px',
              color: 'var(--text-primary)',
            }}>
              Technical Skills
            </h3>
            
            <div className="skills-print-grid" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}>
              {categories.map((cat, idx) => (
                <div key={idx} className="skills-print-category">
                  <strong style={{ color: 'var(--text-primary)' }}>{cat.title}: </strong>
                  {cat.skills.join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="resume-section-title" style={{
              fontSize: '0.92rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              borderBottom: '1.5px solid var(--text-primary)',
              paddingBottom: '3px',
              marginBottom: '8px',
              color: 'var(--text-primary)',
            }}>
              Work Experience
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} className="resume-item" style={{ marginBottom: idx < experience.length - 1 ? '12px' : '0' }}>
                <div className="resume-item-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                }}>
                  <span>{exp.role}</span>
                  <span>{exp.duration}</span>
                </div>
                
                <div className="resume-item-sub" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  color: 'var(--primary)',
                  fontWeight: '600',
                  marginBottom: '6px',
                }}>
                  <span>{exp.company}</span>
                  <span>{exp.location}</span>
                </div>

                <ul className="resume-item-bullets" style={{
                  paddingLeft: '14px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4',
                  marginTop: '4px',
                }}>
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '2px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div style={{ marginBottom: '18px' }}>
            <h3 className="resume-section-title" style={{
              fontSize: '0.92rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              borderBottom: '1.5px solid var(--text-primary)',
              paddingBottom: '3px',
              marginBottom: '8px',
              color: 'var(--text-primary)',
            }}>
              Projects
            </h3>

            {projects.map((proj, idx) => (
              <div key={idx} className="resume-item" style={{ marginBottom: idx < projects.length - 1 ? '12px' : '0' }}>
                {/* Clean Project Header (Single Row for Name) */}
                <div className="resume-item-header" style={{
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)',
                  marginBottom: '2px',
                }}>
                  {proj.title}
                </div>
                
                {/* Tech Stack on a separate line below Title */}
                <div className="resume-item-sub" style={{
                  fontSize: '0.78rem',
                  fontStyle: 'italic',
                  color: 'var(--text-muted)',
                  fontWeight: '500',
                  marginBottom: '4px',
                }}>
                  Technologies: {proj.tech.join(', ')}
                </div>

                <ul className="resume-item-bullets" style={{
                  paddingLeft: '14px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.4',
                }}>
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '2px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Certifications Section */}
          <div className="resume-edu-cert-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '24px',
          }}>
            <div>
              <h3 className="resume-section-title" style={{
                fontSize: '0.92rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                borderBottom: '1.5px solid var(--text-primary)',
                paddingBottom: '3px',
                marginBottom: '8px',
                color: 'var(--text-primary)',
              }}>
                Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem' }}>
                {education.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)' }}>
                      {edu.degree} | {edu.year.split(': ')[1]}
                    </div>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="resume-section-title" style={{
                fontSize: '0.92rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                borderBottom: '1.5px solid var(--text-primary)',
                paddingBottom: '3px',
                marginBottom: '8px',
                color: 'var(--text-primary)',
              }}>
                Certifications
              </h3>

              <ul style={{
                paddingLeft: '14px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.4',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .resume-paper {
            padding: 24px 20px !important;
          }
          .resume-contact-info {
            flex-direction: column !important;
            align-items: center !important;
            gap: 4px !important;
          }
          .resume-edu-cert-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .resume-trigger-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .resume-print-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ResumeView;
