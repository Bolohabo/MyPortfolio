import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress from 1 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30); // Increase every 30ms

    // After reaching 100%, start fade-out and remove loading screen
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out effect
      setTimeout(() => setIsLoading(false), 500); // Hide after fade-out
    }, 3300); // 3s + fade buffer

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader"></div>
      <h2>Loading... {progress}%</h2>
    </div>
  );
};

export default LoadingScreen;
