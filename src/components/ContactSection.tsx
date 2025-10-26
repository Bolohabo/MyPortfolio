import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="section"
      style={{
        background:
          "linear-gradient(135deg, #1e1b4b 10%, #3b1c71 50%, #5b3ec8 90%)",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blue-Violet Glow Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(150,100,255,0.2), transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1100px",
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "1.5rem",
          boxShadow: "0 0 30px rgba(120,80,255,0.3)",
          padding: "3rem",
          backdropFilter: "blur(15px)",
        }}
      >
        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "#c7bfff",
              textShadow: "0 0 15px rgba(150,100,255,0.8)",
              marginBottom: "1rem",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.85)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Have a project in mind or want to collaborate? Let’s make something
            amazing together.
          </p>
        </div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "3rem",
          }}
        >
          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontSize: "1.7rem",
                marginBottom: "1.5rem",
                color: "#c9bfff",
              }}
            >
              Contact Information
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Feel free to reach me through these channels. I’ll respond as soon
              as possible.
            </p>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                { icon: "📞", label: "Phone", value: "+63 947-573-5890" },
                {
                  icon: "📧",
                  label: "Email",
                  value: "jasperbolohabo@example.com",
                },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Estancia, Iloilo, Philippines",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                      background: "rgba(150,100,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.3rem",
                      boxShadow: "0 0 10px rgba(120,80,255,0.4)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                        color: "#e2dfff",
                      }}
                    >
                      {item.label}
                    </h4>
                    <p style={{ color: "rgba(255,255,255,0.85)" }}>
                      {item.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <h3
              style={{
                fontSize: "1.7rem",
                margin: "2rem 0 1rem",
                color: "#c7bfff",
              }}
            >
              Follow Me
            </h3>
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                {
                  href: "https://github.com/Bolohabo",
                  icon: "🐙",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/jasper-bulohabo-a454a2359/",
                  icon: "💼",
                  label: "LinkedIn",
                },
                {
                  href: "https://www.facebook.com/share/1BYY6nYFXk/",
                  icon: "📘",
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/jasssssss_per/",
                  icon: "📸",
                  label: "Instagram",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    color: "white",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#7c4dff";
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 15px rgba(150,100,255,0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            {["name", "email", "subject"].map((field) => (
              <div style={{ marginBottom: "1.5rem" }} key={field}>
                <label
                  htmlFor={field}
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "0.9rem 1rem",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(150,100,255,0.3)",
                    borderRadius: "8px",
                    color: "white",
                    fontSize: "1rem",
                    transition: "0.3s ease",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "#a78bfa")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor =
                      "rgba(150,100,255,0.3)")
                  }
                />
              </div>
            ))}

            <div style={{ marginBottom: "2rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                style={{
                  width: "100%",
                  padding: "0.9rem 1rem",
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(150,100,255,0.3)",
                  borderRadius: "8px",
                  color: "white",
                  fontSize: "1rem",
                  resize: "vertical",
                  transition: "0.3s ease",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#a78bfa")}
                onBlur={(e) =>
                  (e.target.style.borderColor = "rgba(150,100,255,0.3)")
                }
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              style={{
                width: "100%",
                padding: "0.9rem",
                border: "none",
                borderRadius: "8px",
                background:
                  formStatus === "success"
                    ? "#4ade80"
                    : "linear-gradient(135deg, #7c4dff, #5b3ec8)",
                color: "white",
                fontWeight: 600,
                fontSize: "1.1rem",
                cursor: "pointer",
                boxShadow: "0 0 10px rgba(150,100,255,0.6)",
                transition: "all 0.3s ease",
              }}
            >
              {formStatus === "submitting"
                ? "Sending..."
                : formStatus === "success"
                ? "Message Sent!"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
