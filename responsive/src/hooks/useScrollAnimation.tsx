import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
          element.classList.add('active');
        }
      });
    };

    // Initial check on load
    animateElements();
    
    // Add event listener for scroll
    window.addEventListener('scroll', animateElements);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateElements);
    };
  }, []);
};

export default useScrollAnimation;
