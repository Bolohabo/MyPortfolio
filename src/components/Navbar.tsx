import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 3rem',
        background: scrolled ? 'rgba(0, 0, 0, 0.3)' : 'transparent',
        backdropFilter: scrolled ? 'blur(6px)' : 'none',
        transition: 'all 0.4s ease-in-out',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* ===== Logo Section ===== */}
      <h1
        style={{
          fontSize: '1.8rem',
          fontWeight: 700,
          fontFamily: "'Poppins', sans-serif",
          cursor: 'pointer',
          color: '#fff',
          letterSpacing: '1px',
          margin: 0,
          textShadow:
            '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(138,43,226,0.9), 0 0 30px rgba(106,90,205,0.8)',
          animation: 'glowPulse 2s ease-in-out infinite alternate',
        }}
        onClick={() => scrollToSection('home')}
      >
        Portfolio
      </h1>

      {/* ===== Mobile Menu Icon ===== */}
      <div
        style={menuToggleStyle}
        className={menuOpen ? 'menu open' : 'menu'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ===== Navigation Links ===== */}
      <ul
        style={{
          display: menuOpen ? 'flex' : window.innerWidth > 768 ? 'flex' : 'none',
          flexDirection: window.innerWidth > 768 ? 'row' : 'column',
          position: window.innerWidth > 768 ? 'static' : 'fixed',
          top: 0,
          right: 0,
          height: window.innerWidth > 768 ? 'auto' : '100vh',
          width: window.innerWidth > 768 ? 'auto' : '70%',
          background:
            window.innerWidth > 768 ? 'transparent' : 'rgba(0, 0, 0, 0.9)',
          backdropFilter: window.innerWidth > 768 ? 'none' : 'blur(10px)',
          alignItems: window.innerWidth > 768 ? 'center' : 'flex-start',
          justifyContent: window.innerWidth > 768 ? 'flex-end' : 'center',
          gap: '2rem',
          padding: window.innerWidth > 768 ? 0 : '2rem',
          transition: 'transform 0.3s ease-in-out',
          transform:
            menuOpen || window.innerWidth > 768
              ? 'translateX(0)'
              : 'translateX(100%)',
          listStyle: 'none',
          margin: 0,
        }}
      >
        {['Home', 'Projects', 'About', 'Skills', 'Contact'].map((item) => (
          <li key={item}>
            <a
              onClick={() => scrollToSection(item.toLowerCase())}
              className="nav-link"
              style={navLinkStyle}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* ===== Inline Styling for Animations ===== */}
      <style>
        {`
          /* ===== Glowing Underline Effect ===== */
          .nav-link {
            position: relative;
            color: white;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: -3px;
            width: 0;
            height: 2px;
            background: white;
            box-shadow: 0 0 8px rgba(255,255,255,0.8),
                        0 0 12px rgba(255,255,255,0.6);
            transition: width 0.3s ease-in-out;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          /* ===== Animated Hamburger Icon ===== */
          .menu {
            display: none;
          }

          @media (max-width: 768px) {
            .menu {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              width: 35px;
              height: 25px;
              cursor: pointer;
              position: relative;
              z-index: 101;
              transition: all 0.3s ease;
            }

            .menu span {
              background: white;
              height: 3px;
              width: 100%;
              border-radius: 3px;
              position: absolute;
              transition: all 0.3s ease;
            }

            .menu span:nth-child(1) { top: 0; }
            .menu span:nth-child(2) { top: 10px; }
            .menu span:nth-child(3) { top: 20px; }

            .menu.open span:nth-child(1) {
              transform: rotate(45deg);
              top: 10px;
            }
            .menu.open span:nth-child(2) { opacity: 0; }
            .menu.open span:nth-child(3) {
              transform: rotate(-45deg);
              top: 10px;
            }
          }

          /* ===== Glow Pulse Animation for Logo ===== */
          @keyframes glowPulse {
            0% {
              text-shadow: 0 0 10px rgba(255,255,255,0.9),
                           0 0 20px rgba(138,43,226,0.9),
                           0 0 30px rgba(106,90,205,0.8);
            }
            50% {
              text-shadow: 0 0 15px rgba(255,255,255,1),
                           0 0 25px rgba(138,43,226,1),
                           0 0 35px rgba(106,90,205,0.9);
            }
            100% {
              text-shadow: 0 0 10px rgba(255,255,255,0.9),
                           0 0 20px rgba(138,43,226,0.9),
                           0 0 30px rgba(106,90,205,0.8);
            }
          }
        `}
      </style>
    </nav>
  );
};

// ====== Styles ======
const menuToggleStyle: React.CSSProperties = {
  display: window.innerWidth <= 768 ? 'flex' : 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  width: '35px',
  height: '25px',
  position: 'relative',
  zIndex: 101,
  transition: 'transform 0.3s ease-in-out',
};

const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '1.1rem',
  fontWeight: 500,
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  transition: 'all 0.3s ease-in-out',
};

export default Navbar;
