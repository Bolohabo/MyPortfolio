import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleLinkHover = () => {
      setHovered(true);
    };

    const handleLinkLeave = () => {
      setHovered(false);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const links = document.querySelectorAll('a, button, .project-card');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${hovered ? 'hover' : ''}`} 
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: hidden ? 0 : 1
      }}
    />
  );
};

export default CustomCursor;
