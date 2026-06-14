import React from 'react';

const Logo = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none',
      userSelect: 'none',
    }}>
      {/* Dynamic SVG Icon */}
      <svg 
        width="34" 
        height="34" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(37, 99, 235, 0.1))',
          transition: 'transform 0.3s ease',
        }}
        className="logo-svg"
      >
        {/* Outer Hexagon Shield with Gradient Border */}
        <path 
          d="M16 3L28 10V22L16 29L4 22V10L16 3Z" 
          stroke="url(#shield-grad)" 
          strokeWidth="2" 
          strokeLinejoin="round"
          fill="url(#bg-grad)"
        />
        
        {/* Left bracket < */}
        <path 
          d="M12.5 11.5L8.5 16L12.5 20.5" 
          stroke="url(#accent-grad)" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Right bracket > */}
        <path 
          d="M19.5 11.5L23.5 16L19.5 20.5" 
          stroke="url(#accent-grad)" 
          strokeWidth="2.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* Modern Slash in center */}
        <path 
          d="M17.5 11L14.5 21" 
          stroke="var(--text-primary)" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
        
        <defs>
          <linearGradient id="shield-grad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" /> {/* Royal Blue */}
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          
          <linearGradient id="accent-grad" x1="8" y1="11" x2="24" y2="21" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          <linearGradient id="bg-grad" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--bg-primary)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="var(--bg-secondary)" stopOpacity="0.95" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stylized Branding Text */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.15',
      }}>
        <span style={{
          fontSize: '0.95rem',
          fontWeight: '800',
          color: 'var(--text-primary)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}>
          Sumit
        </span>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: '700',
          color: 'var(--primary)',
          letterSpacing: '3px',
          textTransform: 'uppercase',
        }}>
          Meena
        </span>
      </div>
    </div>
  );
};

export default Logo;
