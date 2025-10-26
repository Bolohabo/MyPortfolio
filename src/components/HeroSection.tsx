import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hello, I'm Karl Jasper Bolohabo, your Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4rem',
        padding: '2rem 4rem',
        flexWrap: 'wrap',
        background: 'linear-gradient(-45deg, #8a2be2, #4b0082, #6a5acd, #9370db)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Left: Profile Image */}
      <div
        style={{
          flex: '1 1 350px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src="jas-removebg-preview.png"
          alt="Profile"
          onClick={scrollToAbout}
          style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            border: '6px solid #490381',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
            objectFit: 'cover',
            cursor: 'pointer',
            transition: 'transform 0.4s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>

      {/* Right: Text Section */}
      <div
        style={{
          flex: '1 1 400px',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            marginBottom: '1.2rem',
            fontWeight: '700',
            lineHeight: 1.2,
          }}
        >
          {displayText}
          <span style={{ animation: 'blink 1s infinite' }}>|</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: '#E0E0E0',
            marginBottom: '0',
            fontWeight: 400,
          }}
        >
          Philippians 4:13
        </p>
      </div>

      {/* Animated gradient keyframes */}
      <style>
        {`
          @keyframes gradientBG {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
          }

          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;
