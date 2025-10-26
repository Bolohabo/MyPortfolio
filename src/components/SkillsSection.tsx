import React, { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
  url?: string;
}

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const skills: Skill[] = [
    {
      name: "React",
      level: 30,
      category: "Frontend",
      description:
        "React is a JavaScript library for building fast, dynamic user interfaces using reusable components and a virtual DOM.",
      url: "https://react.dev/",
    },
    {
      name: "JavaScript",
      level: 25,
      category: "Programming",
      description:
        "JavaScript brings interactivity to web pages and powers both frontend and backend development using frameworks like React or Node.js.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      level: 15,
      category: "Programming",
      description:
        "TypeScript is a superset of JavaScript that adds strong typing, improving maintainability and catching errors before runtime.",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Node.js",
      level: 15,
      category: "Backend",
      description:
        "Node.js allows developers to run JavaScript on the server, enabling fast, scalable backend services and real-time applications.",
      url: "https://nodejs.org/",
    },
    {
      name: "HTML/CSS",
      level: 60,
      category: "Frontend",
      description:
        "HTML structures web content while CSS styles it. Together they create the visual and interactive layer of web applications.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "MongoDB",
      level: 10,
      category: "Database",
      description:
        "MongoDB is a NoSQL database designed for scalability, storing data in flexible JSON-like documents.",
      url: "https://www.mongodb.com/",
    },
    {
      name: "Figma",
      level: 55,
      category: "Design",
      description:
        "Figma is a collaborative UI/UX design tool that enables designers and developers to create prototypes and design systems in real-time.",
      url: "https://www.figma.com/",
    },
    {
      name: "Git",
      level: 30,
      category: "Tools",
      description:
        "Git is a version control system that tracks code changes and allows multiple developers to collaborate seamlessly.",
      url: "https://git-scm.com/",
    },
    
  ];

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  // 🌀 Sequential fade-in animation for skills
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleIndexes((prev) =>
        index < skills.length ? [...prev, index++] : prev
      );
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        overflow: "hidden",
        color: "white",
        padding: "6rem 2rem",
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #0f172a 100%)",
      }}
    >
      {/* 🔮 Animated gradient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(255, 182, 185, 0.25), transparent 70%), radial-gradient(circle at 70% 80%, rgba(255, 218, 185, 0.25), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
          animation: "moveGradient 15s ease-in-out infinite alternate",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h2
            style={{
              color: "white",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "1rem",
              fontWeight: 700,
              textShadow: "0 0 15px rgba(255, 183, 107, 0.6)",
            }}
          >
            My Skills
          </h2>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              color: "rgba(255,255,255,0.85)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Technologies and tools I work and used with:
          </p>
        </div>

        {/* 💻 Skill categories */}
        {categories.map((category) => (
          <div key={category} style={{ marginBottom: "3.5rem" }}>
            <h3
              style={{
                fontSize: "1.6rem",
                marginBottom: "1.5rem",
                color: "#fbbf77",
                textShadow: "0 0 8px rgba(251,191,36,0.6)",
              }}
            >
              {category}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {skills
                .filter((s) => s.category === category)
                .map((skill, index) => {
                  const isVisible = visibleIndexes.includes(
                    skills.indexOf(skill)
                  );
                  return (
                    <div
                      key={skill.name}
                      onClick={() => setSelectedSkill(skill)}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08))",
                        padding: "1.2rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(255,255,255,0.15)",
                        backdropFilter: "blur(10px)",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <h4 style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                          {skill.name}
                        </h4>
                        <span style={{ fontSize: "0.9rem", color: "#fde68a" }}>
                          {skill.level}%
                        </span>
                      </div>

                      <div
                        style={{
                          height: "8px",
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${skill.level}%`,
                            background:
                              "linear-gradient(90deg, #fbbf77, #f59e0b, #fb923c)",
                            borderRadius: "4px",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}

        {/* ✉️ Contact CTA */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              color: "white",
              marginBottom: "1.5rem",
            }}
          >
            Want to work together?
          </h3>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              background:
                "linear-gradient(90deg, #fbbf77, #f59e0b, #fb923c)",
              color: "white",
              padding: "0.8rem 1.8rem",
              borderRadius: "10px",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(255,183,107,0.5)",
              transition: "all 0.3s ease",
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* 💬 Skill Description Modal */}
      {selectedSkill && (
        <div
          onClick={() => setSelectedSkill(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(20px)",
              borderRadius: "16px",
              padding: "2rem",
              maxWidth: "500px",
              textAlign: "center",
              color: "white",
              animation: "fadeIn 0.5s ease",
              boxShadow: "0 0 25px rgba(255,183,107,0.3)",
            }}
          >
            <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
              {selectedSkill.name}
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.5rem",
              }}
            >
              {selectedSkill.description}
            </p>
            <a
              href={selectedSkill.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(90deg, #fbbf77, #f59e0b, #fb923c)",
                padding: "0.6rem 1.4rem",
                borderRadius: "8px",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      )}

      {/* ✨ Keyframes */}
      <style>
        {`
          @keyframes moveGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default SkillsSection;
