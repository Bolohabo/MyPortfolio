import React from 'react';
import { Button } from './ui/button';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "IoT Webinar",
      category: "Internet of Things",
      imageUrl: "/486306123_1351330376102785_1198160583857655833_n.jpg",
      description: "My first webinar experience.",
      link: "https://www.example.com/iot-webinar"
    },
    {
      id: 2,
      title: "Web Application",
      category: "Uptalk",
      imageUrl: "/482904034_621797760659731_1819538740459630610_n.png",
      description: "Our first Web Application project and my first experience as a Fullstack developer.",
      link: "https://www.figma.com/design/cFB2YU0R9stjX6pXnLUAYI/UpTalk_UI_Design"
    },
    {
      id: 3,
      title: "Arduino",
      category: "Pulse rate scanner",
      imageUrl: "/486729343_1379593079901497_806045859933632605_n.jpg",
      description: "Innovative scanner that helps monitor personal health metrics.",
      link: "https://www.example.com/arduino-project"
    },
    {
      id: 4,
      title: "AL (Anti-Ligoy Web-App)",
      category: "Web Application",
      imageUrl: "/LANDINGPAGE.png",
      description: "A user-friendly app for guardians to monitor students.",
      link: "https://www.figma.com/slides/h7UK7byOcgQ818uyHYqQZM/HCI-SECTION-1-G4"
    },
     {
    id: 5, // make sure the id is unique
    title: "mapaWit 2.0",
    category: "Web Application",
    imageUrl: "/Frame.png",
    description: "Web app that can navigate your destination to WIT campus.",
    link: "https://www.example.com/new-project"
  },
   {
    id: 6, // make sure the id is unique
    title: "HCI Design",
    category: "UI Challenge",
    imageUrl: "/KarlJasperBolohabo_UIChallenge1 (1).png",
    description: "Creating fun and enjoyable designs using Figma.",
    link: "https://www.example.com/new-project"
   }
  
  ];

  return (
    <section 
      id="projects" 
      className="relative section"
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* === Animated Gradient Background === */}
      <div 
        className="animated-bg"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1a1b2f, #3a0ca3, #7209b7, #4361ee, #4cc9f0)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 10s ease infinite',
          zIndex: 0,
        }}
      ></div>

      {/* === Frosted Overlay for Readability === */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.55)',
          backdropFilter: 'blur(10px)',
          zIndex: 1
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2, padding: '4rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            background: 'linear-gradient(90deg, #9b5de5, #5ec2f2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(155,93,229,0.6)',
            marginBottom: '1rem'
          }}>
            My Projects
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A selection of my recent work and creative experiments.
          </p>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={project.id}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(8px)',
                transform: 'translateY(0)',
                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style.transform = 'translateY(-10px)');
                (e.currentTarget.style.boxShadow = '0 15px 45px rgba(94,194,242,0.4)');
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style.transform = 'translateY(0)');
                (e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)');
              }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                style={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '16px',
                  borderTopRightRadius: '16px',
                }}
              />
              <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(90deg, #a0c4ff, #b388eb)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}>
                  {project.category}
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '1rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>
                <Button
                  variant="default"
                  style={{
                    background: 'linear-gradient(135deg, #3a0ca3, #7209b7, #5ec2f2)',
                    color: 'white',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.75rem 1.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 0 15px rgba(94,194,242,0.6)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(155,93,229,0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(94,194,242,0.6)';
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
