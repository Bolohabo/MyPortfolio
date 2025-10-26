import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutSection: React.FC = () => {
  const images = [
    "/462583643_571443202266617_7104652578849766371_n.jpg",
    "/cc4a7fc6-7605-43ed-be8e-b1fa745d6d65.jpg",
    "/dd945a16-b129-4304-bc9c-c64db20df45a.jpg",
    "/177a1232-f16f-4347-9170-f143b448e73f.jpg",
    "/26a54034-47a3-434e-a53f-13ee8126bf11.jpg",
    "/5ce16e09-58a3-4008-b812-32a6d16a1c74.jpg",
  ];

  // 🎨 Hobbies with photo paths  
  const hobbies = [
    { name: "Basketball", image: "/bball.jpg" },
    { name: "Writing Poems", image: "/poem.png" },
    { name: "Drawing and Painting", image: "/art.jpg" },
    { name: "Playing Online Games", image: "/ml.jpg" },
    { name: "Traveling", image: "/travel.jpg" },
    { name: "Exploring Nature", image: "/nature.jpg" },
  ];

  const [selectedHobby, setSelectedHobby] = useState<{
    name: string;
    image: string;
  } | null>(null);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "linear-gradient(135deg, #5b21b6 0%, #1e3a8a 100%)",
        padding: "4rem 2rem",
      }}
    >
      {/* Background gradient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(249,168,212,0.15), transparent 70%), radial-gradient(circle at 80% 70%, rgba(253,186,116,0.15), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      {/* Main container */}
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth > 900 ? "row" : "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Photos grid */}
        <div
          style={{
            flex: "1",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.25)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 25px rgba(255,183,107,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Avatar style={{ width: "100%", height: "100%" }}>
                <AvatarImage
                  src={src}
                  alt={`Profile ${index + 1}`}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
                <AvatarFallback
                  style={{
                    fontSize: "1.5rem",
                    backgroundColor: "#f59e0b",
                    color: "white",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  JP
                </AvatarFallback>
              </Avatar>
            </div>
          ))}
        </div>

        {/* Text content */}
        <div style={{ flex: "1", textAlign: "left", maxWidth: "600px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "1.5rem",
              position: "relative",
              textAlign: "center",
            }}
          >
            About Me
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: "-10px",
                transform: "translateX(-50%)",
                width: "70px",
                height: "4px",
                borderRadius: "5px",
                background:
                  "linear-gradient(90deg, #fbbf77, #f59e0b, #fb923c)", // peach glow
                boxShadow: "0 0 15px rgba(255, 183, 107, 0.8)",
              }}
            ></span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              marginBottom: "1.2rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.9)",
              textAlign: "justify",
            }}
          >
            I am Karl Jasper Bolohabo, a passionate Full-Stack Developer with a
            love for creating innovative and user-friendly digital experiences.
            My focus is on building clean, efficient, and scalable applications
            that bridge creativity with functionality.
          </p>

          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
              marginBottom: "2rem",
              lineHeight: 1.8,
              color: "rgba(230,230,255,0.9)",
              textAlign: "justify",
            }}
          >
            From intuitive front-end designs to robust backend systems, I aim to
            craft seamless solutions that enhance user experiences and empower
            businesses to thrive in the digital landscape.
          </p>

          {/* 👇 Personal Info Section (Restored) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
              marginBottom: "3rem",
            }}
          >
            {[
              { label: "Location", value: "Estancia, Iloilo, Philippines" },
              { label: "Experience", value: "4 Years" },
              { label: "Email", value: "jasperbolohabo@example.com" },
              {
                label: "Education",
                value:
                  "Information Technology, WESTERN INSTITUTE OF TECHNOLOGY",
              },
            ].map((item, i) => (
              <div key={i}>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.3rem",
                    color: "white",
                  }}
                >
                  {item.label}:
                </h4>
                <p
                  style={{
                    color: "rgb(255, 214, 170)",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* 🎨 Hobbies Section */}
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: "#fde68a",
                textAlign: "center",
              }}
            >
              Hobbies & Interests
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1rem",
              }}
            >
              {hobbies.map((hobby, i) => (
                <li
                  key={i}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(251,191,36,0.15), rgba(253,186,116,0.15))",
                    padding: "0.8rem 1rem",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 500,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(255, 204, 128, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => setSelectedHobby(hobby)}
                >
                  {hobby.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 🖼️ Popup Modal for Hobby Image */}
      {selectedHobby && (
        <div
          onClick={() => setSelectedHobby(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "fadeIn 0.3s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#1f1f2e",
              borderRadius: "15px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 0 20px rgba(255,183,107,0.3)",
              animation: "scaleIn 0.3s ease",
            }}
          >
            <img
              src={selectedHobby.image}
              alt={selectedHobby.name}
              style={{
                maxWidth: "400px",
                maxHeight: "400px",
                width: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
            <h4
              style={{
                marginTop: "1rem",
                color: "#ffcf9f",
                fontSize: "1.5rem",
              }}
            >
              {selectedHobby.name}
            </h4>
            <button
              onClick={() => setSelectedHobby(null)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1.5rem",
                backgroundColor: "#f59e0b",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
