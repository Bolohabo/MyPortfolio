import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm Karl Jasper Bolohabo, your Fullstack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section" style={{ 
      height: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '2rem',
      background: `linear-gradient(135deg, #102A43 10%, #243B55 40%, #64D8CB 90%)`,
      backgroundSize: 'cover',
      color: 'white'
    }}>
      {/* Left Side: Text Content */}
      <div style={{ flex: '1', maxWidth: '600px' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          {displayText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
        </h1>
        
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginBottom: '2.5rem',
          lineHeight: 1.6,
          color: '#E0E0E0',
          maxWidth: '600px'
        }}>
         Philippians 4:13
        </p>
      </div>

      {/* Right Side: Circular Image with Click Event */}
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
        <img 
          src="/484821121_636775838985868_6380077642130046954_n.jpg" 
          alt="Profile" 
          onClick={scrollToAbout} 
          style={{ 
            width: '100%', 
            maxWidth: '350px', 
            height: '350px', 
            borderRadius: '50%', 
            border: '6px solid #64D8CB', 
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            objectFit: 'cover',
            cursor: 'pointer', // Added cursor pointer to indicate it's clickable
            transition: 'transform 0.3s ease-in-out',
          }} 
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>
    </section>
  );
};

export default HeroSection;
