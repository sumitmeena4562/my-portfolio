import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="no-print" style={{
      borderTop: '1px solid var(--border-color)',
      padding: '30px 0',
      marginTop: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--text-muted)',
      }}>
        &copy; {new Date().getFullYear()} Sumit Meena. All rights reserved.
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}>
        <a 
          href="#home" 
          style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'var(--transition-smooth)',
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        >
          Back to top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
