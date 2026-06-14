import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="no-print" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '64px',
      backgroundColor: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        maxWidth: '1000px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        {/* Brand */}
        <a href="#home" style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: 'var(--text-primary)',
          letterSpacing: '0.5px',
        }}>
          SUMIT MEENA
        </a>

        {/* Desktop Links */}
        <div className="desktop-menu" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '24px',
            alignItems: 'center',
          }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            transition: 'var(--transition-smooth)',
          }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="mobile-menu-btn" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <button onClick={toggleTheme} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-primary)',
            backgroundColor: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
          }}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            padding: '4px',
          }}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-dropdown" style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-color)',
          padding: '16px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          listStyle: 'none',
          zIndex: 999,
        }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--text-secondary)',
                padding: '4px 0',
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* CSS style block for responsive menu */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-menu ul {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
