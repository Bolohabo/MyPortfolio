import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
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
      description: "My First Webinar Experience",
      link: "https://www.example.com/iot-webinar"
    },

    {
      id: 2,
      title: "Web Application",
      category: "Uptalk",
      imageUrl: "/482904034_621797760659731_1819538740459630610_n.png",
      description: "Our first Web Application project and my first experience as a Fullstack developer beginner.",
      link: "https://www.figma.com/design/cFB2YU0R9stjX6pXnLUAYI/UpTalk_UI_Design?node-id=0-1&p=f&t=S4QwTlWK6QUcRffJ-0"
    },
    {
      id: 3,
      title: "Arduino",
      category: "Pulse rate scanner",
      imageUrl: "/486729343_1379593079901497_806045859933632605_n.jpg",
      description: "Innovative scanner that can help individual monitoring thier health issues.",
      link: "https://www.example.com/iot-webinar"
    },
    {
      id: 4,
      title: "AL (Anti-Ligoy Web-App)",
      category: "Web Application",
      imageUrl: "/LANDINGPAGE.png",
      description: "A user-friendly application that helps the guardian to monitor their students.",
      link: "https://www.figma.com/slides/h7UK7byOcgQ818uyHYqQZM/HCI-SECTION-1-G4?node-id=4-25&t=pcRciVFkWFaclNE5-0"
    }
  ];

  return (
    <section 
      id="projects" 
      className="section" 
      style={{ 
        backgroundImage: `url('/minimalism-simple-blue-gradient-wallpaper-preview.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      {/* Overlay to ensure text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1
      }}></div>
      
      <div className="container">
        <div style={{ 
          marginBottom: '4rem', 
          textAlign: 'center', 
          position: 'relative',
          zIndex: 2
        }}>
          <h2 className="animate-fade-in" style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            color: '#fff'
          }}>
           My Projects
          </h2>
          <p className="animate-fade-in" style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'white',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            A selection of my recent work and personal projects.
          </p>
        </div>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '2rem',
          position: 'relative',
          zIndex: 2
        }}>
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card animate-${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
              style={{ 
                height: '350px',
                backgroundColor: '#fff',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
              }}
            >
                <div className="image-container" style={{
                height: '167%', // Control the image height as a percentage of card height
                width: '10',
                overflow: 'hidden'
              }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  style={{ 
                    width: '100%',
                    height: '60%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
              </div>
              <div className="project-overlay">
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                  <h3 style={{ 
                    color: '#fff',
                    marginBottom: '0.5rem', 
                    fontSize: '1.5rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    {project.category}
                  </p>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.description}
                  </p>
                  <Button variant="default"
  style={{
    background: 'linear-gradient(135deg, #16a34a, #86efac)', // Mint Green Gradient
    color: 'white',
    border: 'none',
    cursor: 'pointer'
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative element */}
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: '10%',
        width: '40%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)',
        zIndex: 1
      }}></div>
    </section>
  );
};

export default ProjectsSection;
