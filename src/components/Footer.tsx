const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #4B0082, #8A2BE2, #9370DB)", // 💜 Blue-Violet Aesthetic
        color: "white",
        padding: "2rem 0",
        textAlign: "center",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: window.innerWidth > 768 ? "row" : "column",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          {/* Brand Name */}
          <div>
            <a
              href="/"
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                color: "white",
                textDecoration: "none",
                fontFamily: "'Playfair Display', serif",
                textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            >
              Jas Do IT
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
              &copy; {currentYear} All Rights Reserved
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: "flex", gap: "1.2rem" }}>
            {[
              { href: "https://github.com", icon: "github" },
              { href: "https://linkedin.com", icon: "linkedin" },
              { href: "https://twitter.com", icon: "twitter" },
              { href: "https://instagram.com", icon: "instagram" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  transition: "transform 0.3s ease, color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#FFD1DC";
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <i className={`bi bi-${social.icon}`} style={{ fontSize: "1.2rem" }}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {["home", "projects", "about", "skills", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "color 0.3s ease, transform 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = "#FFD1DC";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
