import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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
        width: '100%',
        zIndex: 1000,
        padding: '1rem 2rem',
        borderRadius: '0 0 20px 20px',
      
        transition: 'all 0.4s ease-in-out',
        boxShadow: scrolled ? '0 5px 15px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center'
      }}>
        {/* Fancy "Portfolio" Logo */}
        <a href="/" style={logoStyle}>
          Portfolio
        </a>
        
        {/* Mobile Menu Icon */}
        <div 
          className="mobile-menu-toggle"
          style={menuToggleStyle(menuOpen)}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul style={{
          display: window.innerWidth > 768 || menuOpen ? 'flex' : 'none',
          flexDirection: window.innerWidth > 768 ? 'row' : 'column',
          position: window.innerWidth > 768 ? 'static' : 'fixed',
          top: 0,
          right: 0,
          height: window.innerWidth > 768 ? 'auto' : '100vh',
          width: window.innerWidth > 768 ? 'auto' : '70%',
          background: 'linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(15,15,15,0.95) 100%)',

          alignItems: window.innerWidth > 768 ? 'center' : 'flex-start',
          justifyContent: window.innerWidth > 768 ? 'flex-end' : 'center',
          gap: '2rem',
          padding: window.innerWidth > 768 ? 0 : '2rem',
          boxShadow: window.innerWidth > 768 ? 'none' : '-5px 0 15px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          borderRadius: '10px',
          transition: 'transform 0.3s ease-in-out',
          transform: menuOpen || window.innerWidth > 768 ? 'translateX(0)' : 'translateX(100%)'
        }}>
          {['Home', 'Projects', 'About', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a className="nav-link" onClick={() => scrollToSection(item.toLowerCase())} style={navLinkStyle}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Styles
const logoStyle: React.CSSProperties = {
  fontSize: '1.8rem',  // Reduced from 2.5rem
  fontWeight: 700, 
  textDecoration: 'none',
  color: 'white',
  fontFamily: "'Poppins', sans-serif",
  transition: 'all 0.3s ease-in-out',
  background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0px 0px 8px rgba(255, 255, 255, 0.5)',  // Reduced glow
  padding: '0.3rem 0.8rem',  // Adjusted padding
  borderRadius: '8px',
  backdropFilter: 'blur(8px)',
  boxShadow: '0px 0px 12px rgba(255, 255, 255, 0.2)',  // Softer shadow
  cursor: 'pointer',
};

const menuToggleStyle = (menuOpen: boolean): React.CSSProperties => ({
  display: 'block',
  cursor: 'pointer',
  width: '35px',
  height: '30px',
  position: 'relative',
  zIndex: 101,
  transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s ease-in-out'
});

const navLinkStyle: React.CSSProperties = {
  cursor: 'pointer',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: '500',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease-in-out, background 0.3s ease-in-out',
  borderRadius: '10px',
  position: 'relative',
  overflow: 'hidden',
  textShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
};

// Adding hover effect
const navLinkHoverEffect = `
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  }
`;

export default Navbar;
