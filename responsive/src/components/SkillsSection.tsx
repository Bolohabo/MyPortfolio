import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
  url?: string; 
}

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", level: 90, category: "Frontend", url: "https://react.dev/" },
    { name: "JavaScript", level: 85, category: "Programming", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"  },
    { name: "TypeScript", level: 80, category: "Programming",url: "https://www.typescriptlang.org/"  },
    { name: "Node.js", level: 80, category: "Backend", url: "https://nodejs.org/" },
    { name: "HTML/CSS", level: 90, category: "Frontend", url: "https://developer.mozilla.org/en-US/docs/Web/HTML"  },
    { name: "Redux", level: 70, category: "Frontend",  url: "https://redux.js.org/"},
    { name: "MongoDB", level: 75, category: "Database", url: "https://www.mongodb.com/"  },
    { name: "GraphQL", level: 60, category: "API",  url: "https://graphql.org/"  },
    { name: "Figma", level: 80, category: "Design", url: "https://www.figma.com/"   },
    { name: "Git", level: 80, category: "Tools", url: "https://www.figma.com/" },
    { name: "Docker", level: 70, category: "DevOps",url: "https://www.docker.com/" },
    { name: "AWS", level: 65, category: "Cloud",  url:"https://aws.amazon.com/"}
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="section" style={{ 
      background: 'linear-gradient(135deg, #102A43 10%, #243B55 40%, #64D8CB 90%)',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{ 
          marginBottom: '4rem', 
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 className="animate-fade-in" style={{ 
            color: 'white',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem'
          }}>
            My Skills
          </h2>
          <p className="animate-fade-in" style={{ 
            fontSize: 'clamp(1rem, 1.5vw, 1.1rem)',
            color: 'white',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Technologies and tools I work and used with: 
          </p>
        </div>
        
        <div style={{ marginBottom: '4rem' }}>
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-fade-in" style={{ marginBottom: '3rem' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                {category}
              </h3>
              
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div 
                      key={skill.name} 
                      className="skill-card"
                      style={{ 
                        transition: 'all 0.3s ease',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: '0.75rem',
                        alignItems: 'center'
                      }}>
                        <h4 style={{ 
                          fontSize: '1.1rem',
                          fontWeight: 600
                        }}>
                          <a 
  href={skill.url ? skill.url : "#"} 
  target="_blank" 
  rel="noopener noreferrer"
>
                          {skill.name}
                          </a>
                        </h4>
                        <span style={{ 
                          fontSize: '0.9rem',
                          color: 'green'
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div style={{ 
                        height: '8px',
                        backgroundColor: 'var(--border)',
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          height: '100%',
                          width: `${skill.level}%`,
                          backgroundColor: 'green',
                          borderRadius: '4px',
                          transition: 'width 1s ease-in-out'
                        }}></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="animate-fade-in" style={{ 
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem',
            color:'white',
            marginBottom: '1.5rem'
          }}>
            Want to work together?
          </h3>
          <button 
            className="bg-black text-white px-4 py-2 rounded"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '30%',
        width: '100px',
        height: '200px',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 1
      }}></div>
      
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: '20%',
        width: '150px',
        height: '150px',
        background: 'linear-gradient(-90deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 100%)',
        zIndex: 1

        
      }}></div>
      
    </section>
  );
};

export default SkillsSection;
