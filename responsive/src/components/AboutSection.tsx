import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AboutSection: React.FC = () => {
  return (
<section 
  id="about" 
  className="section" 
  style={{ 
    backgroundImage: `url('/photo-1491466424936-e304919aada7.jpg')`,
    backgroundSize: 'cover', // Ensures the image covers the entire section
    backgroundPosition: 'center', // Centers the background
    backgroundRepeat: 'no-repeat', // Prevents tiling
    backgroundAttachment: 'fixed', // Optional: Keeps the image fixed while scrolling
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh' // Ensures section takes full viewport height
  }}
>

      <div className="container" style={{ 
        display: 'flex',
        flexDirection: window.innerWidth > 768 ? 'row' : 'column',
        gap: '4rem',
        position: 'relative',
        zIndex: 2
      }}>
        <div style={{ 
          flex: '1',
          position: 'relative'
        }} className="animate-slide-in-left">
          <div style={{ 
            width: '100%',
            paddingBottom: '125%',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <Avatar style={{ 
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '8px'
            }}>
              <AvatarImage 
                src="/462583643_571443202266617_7104652578849766371_n.jpg" 
                alt="Profile"
                style={{ 
                  objectFit: 'cover',
                  width: '90%',
                  height: '90%'
                }}
              />
              <AvatarFallback style={{
                fontSize: '3rem',
                backgroundColor: 'green ',
                opacity: 0.8,
                width: '100%',
                height: '100%'
              }}>
                JP
              </AvatarFallback>
            </Avatar>
          </div>
          
        </div>
        
        <div style={{ flex: '1' }} className="animate-slide-in-right">
          <h2 style={{ 
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1.5rem',
            position: 'relative'
          }}>
            About Me
            <span style={{ 
              content: '',
              position: 'absolute',
              left: 0,
              bottom: '-10px',
              width: '60px',
              height: '4px',
              backgroundColor: 'rgb(170, 255, 195)'
            }}></span>
          </h2>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            marginBottom: '1.5rem',
            lineHeight: 1.8,
            color: 'white'
          }}>
            I am Karl Jasper Bolohabo, a dedicated Full-Stack Developer with a strong passion for designing and developing high-quality software solutions. With expertise in both front-end and back-end technologies, I specialize in building scalable, efficient, and user-centric applications that drive business growth and innovation.

          </p>
          
          <p style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            marginBottom: '2rem',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            My skill set includes designing intuitive user interfaces, developing robust backend architectures, and optimizing system performance to ensure seamless functionality. I am committed to staying at the forefront of technology, continuously learning and adapting to industry advancements to deliver modern, efficient, and future-proof solutions.
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Location:
              </h4>
              <p style={{ color: 'rgba(170, 255, 195)' }}>Estancia,Iloilo Philippines (5017)</p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Experience:
              </h4>
              <p style={{ color: 'rgba(170, 255, 195)' }}>4 Years</p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Email:
              </h4>
              <p style={{ color: 'rgba(170, 255, 195)' }}>jasperbulohabo@example.com</p>
            </div>
            
            <div>
              <h4 style={{ 
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'white'
              }}>
                Education:
              </h4>
              <p style={{ color: 'rgba(170, 255, 195)' }}>Information Technology, WESTERN INSTITUTE OF TECHNOLOGY</p>
            </div>
          </div>
          
          
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'white',
        opacity: 0.03,
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'white',
        opacity: 0.02,
        zIndex: 1
      }}></div>
    </section>
  );
};

export default AboutSection;
