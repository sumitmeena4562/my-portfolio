import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const Contact = () => {
  const { phone, email, location } = resumeData.personalInfo;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Spaced format for display consistency
  const formattedPhone = '+91 62616 52446';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="no-print">
      <h2 className="section-title">Contact Me</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.2fr',
        gap: '40px',
      }}>
        {/* Contact Info Card */}
        <div className="glass-panel" style={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '24px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
        }}>
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              marginBottom: '10px',
              color: 'var(--text-primary)',
            }}>
              Let's Connect
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.88rem',
              lineHeight: '1.5',
            }}>
              I am open to internship opportunities, full-time roles, and collaboration on interesting web development projects. Feel free to reach out!
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}>
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--primary-light)',
                width: '36px',
                height: '36px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                border: '1px solid var(--border-color)',
                flexShrink: 0,
              }}>
                <Phone size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Call / WhatsApp</div>
                <a href={`tel:${phone.replace(/\s+/g, '')}`} style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  {formattedPhone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--primary-light)',
                width: '36px',
                height: '36px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                border: '1px solid var(--border-color)',
                flexShrink: 0,
              }}>
                <Mail size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Email Address</div>
                <a href={`mailto:${email}`} style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                >
                  {email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: 'var(--primary-light)',
                width: '36px',
                height: '36px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                border: '1px solid var(--border-color)',
                flexShrink: 0,
              }}>
                <MapPin size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  lineHeight: '1.3',
                }}>
                  {location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-panel" style={{
          padding: '24px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
        }}>
          {submitted ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              minHeight: '220px',
              textAlign: 'center',
              gap: '12px',
            }}>
              <CheckCircle size={48} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)' }}>Message Sent!</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Thank you for reaching out, Sumit will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '4px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'var(--transition-smooth)',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{
                alignSelf: 'flex-start',
                padding: '8px 20px',
              }}>
                Send Message <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
