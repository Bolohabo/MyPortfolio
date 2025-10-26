import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // simulate loading process
    const timer = setTimeout(() => setFadeOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="background-animate"></div>
      <h1 className="logo-text">JASPER</h1>
      <div className="sub-text">Trust the Process...</div>
    </div>
  );
};

export default LoadingScreen;
