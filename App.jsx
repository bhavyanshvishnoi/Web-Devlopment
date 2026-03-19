import { useState, useEffect } from "react";

const skills = ["Java", "HTML", "CSS"];

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "goal", label: "Goal" },
  { id: "contact", label: "Contact" },
];

function useTypingEffect(text, speed = 60) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function Portfolio() {
  const [active, setActive] = useState("about");
  const [visible, setVisible] = useState(false);
  const typed = useTypingEffect("Bhavyansh Vishnoi", 80);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const styles = {
    root: {
      fontFamily: "'Courier New', monospace",
      background: "#0a0a0f",
      minHeight: "100vh",
      color: "#e0e0e0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "0 0 60px",
      position: "relative",
      overflow: "hidden",
    },
    grid: {
      position: "fixed",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(0,255,180,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,180,0.04) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
      pointerEvents: "none",
      zIndex: 0,
    },
    glow: {
      position: "fixed",
      width: "600px",
      height: "600px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(0,255,180,0.07) 0%, transparent 70%)",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      pointerEvents: "none",
      zIndex: 0,
    },
    header: {
      width: "100%",
      maxWidth: "820px",
      marginTop: "60px",
      padding: "0 24px",
      position: "relative",
      zIndex: 1,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(-20px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    },
    nameTag: {
      display: "inline-block",
      fontSize: "11px",
      letterSpacing: "4px",
      color: "#00ffb4",
      textTransform: "uppercase",
      marginBottom: "8px",
      fontFamily: "'Courier New', monospace",
    },
    name: {
      fontSize: "clamp(2.4rem, 6vw, 4rem)",
      fontWeight: "900",
      fontFamily: "'Georgia', serif",
      color: "#ffffff",
      lineHeight: 1.1,
      margin: "0 0 10px",
      letterSpacing: "-1px",
    },
    cursor: {
      display: "inline-block",
      width: "3px",
      height: "0.85em",
      background: "#00ffb4",
      verticalAlign: "middle",
      marginLeft: "3px",
      animation: "blink 1s step-end infinite",
    },
    subtitle: {
      fontSize: "14px",
      color: "#888",
      letterSpacing: "2px",
      textTransform: "uppercase",
      marginTop: "6px",
    },
    divider: {
      width: "100%",
      maxWidth: "820px",
      height: "1px",
      background: "linear-gradient(90deg, transparent, #00ffb4, transparent)",
      margin: "32px 24px",
      position: "relative",
      zIndex: 1,
    },
    nav: {
      display: "flex",
      gap: "6px",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "820px",
      padding: "0 24px",
      position: "relative",
      zIndex: 1,
      marginBottom: "36px",
    },
    navBtn: (isActive) => ({
      background: isActive ? "#00ffb4" : "transparent",
      color: isActive ? "#0a0a0f" : "#00ffb4",
      border: "1px solid #00ffb4",
      padding: "7px 18px",
      borderRadius: "2px",
      fontFamily: "'Courier New', monospace",
      fontSize: "12px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "all 0.2s ease",
      fontWeight: isActive ? "700" : "400",
    }),
    card: {
      width: "100%",
      maxWidth: "820px",
      padding: "0 24px",
      position: "relative",
      zIndex: 1,
      animation: "fadeIn 0.4s ease",
    },
    sectionTitle: {
      fontSize: "11px",
      letterSpacing: "5px",
      color: "#00ffb4",
      textTransform: "uppercase",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    titleLine: {
      flex: 1,
      height: "1px",
      background: "rgba(0,255,180,0.2)",
    },
    contentBox: {
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(0,255,180,0.12)",
      borderRadius: "4px",
      padding: "28px 32px",
    },
    para: {
      color: "#c8c8c8",
      lineHeight: "1.9",
      fontSize: "15px",
      margin: 0,
    },
    skillsWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: "12px",
    },
    skillPill: {
      background: "transparent",
      border: "1px solid #00ffb4",
      color: "#00ffb4",
      padding: "10px 22px",
      borderRadius: "2px",
      fontFamily: "'Courier New', monospace",
      fontSize: "13px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      position: "relative",
      overflow: "hidden",
    },
    skillBar: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,255,180,0.07)",
      transformOrigin: "left",
      animation: "fillBar 1s ease forwards",
    },
    eduInstitution: {
      color: "#00ffb4",
      fontSize: "13px",
      letterSpacing: "1px",
      marginTop: "6px",
    },
    degree: {
      color: "#fff",
      fontSize: "18px",
      fontFamily: "'Georgia', serif",
      fontWeight: "700",
      margin: 0,
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "14px 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    },
    contactLabel: {
      color: "#00ffb4",
      fontSize: "11px",
      letterSpacing: "3px",
      textTransform: "uppercase",
      width: "60px",
      flexShrink: 0,
    },
    contactValue: {
      color: "#e0e0e0",
      fontSize: "14px",
    },
  };

  const content = {
    about: (
      <div style={styles.contentBox}>
        <p style={styles.para}>
          Hello! I'm an enthusiastic and motivated learner in the field of web
          development and programming. I enjoy building modern and responsive
          websites and continuously improving my programming skills.
        </p>
      </div>
    ),
    skills: (
      <div style={styles.contentBox}>
        <div style={styles.skillsWrap}>
          {skills.map((s) => (
            <div key={s} style={styles.skillPill}>
              <div style={styles.skillBar} />
              <span style={{ position: "relative", zIndex: 1 }}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    education: (
      <div style={styles.contentBox}>
        <p style={styles.degree}>Bachelor of Computer Applications (BCA)</p>
        <p style={styles.eduInstitution}>
          Sant Singaji Institute of Science and Management
        </p>
        <p style={{ ...styles.para, marginTop: "12px", color: "#666", fontSize: "13px" }}>
          1st Year &nbsp;·&nbsp; Current
        </p>
      </div>
    ),
    goal: (
      <div style={styles.contentBox}>
        <p style={styles.para}>
          My goal is to start my own IT company startup and build useful
          software solutions that make a real difference in the world.
        </p>
      </div>
    ),
    contact: (
      <div style={styles.contentBox}>
        {[
          { label: "Email", value: "bhavyanshvishnoi@gmail.com" },
          { label: "Phone", value: "+91 9753947011" },
        ].map(({ label, value }) => (
          <div key={label} style={styles.contactRow}>
            <span style={styles.contactLabel}>{label}</span>
            <span style={styles.contactValue}>{value}</span>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fillBar { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={styles.root}>
        <div style={styles.grid} />
        <div style={styles.glow} />

        {/* Header */}
        <div style={styles.header}>
          <span style={styles.nameTag}>// Portfolio</span>
          <h1 style={styles.name}>
            {typed}
            <span style={styles.cursor} />
          </h1>
          <p style={styles.subtitle}>BCA 1st Year Student</p>
        </div>

        <div style={styles.divider} />

        {/* Nav */}
        <nav style={styles.nav}>
          {sections.map(({ id, label }) => (
            <button
              key={id}
              style={styles.navBtn(active === id)}
              onClick={() => setActive(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div style={styles.card} key={active}>
          <div style={styles.sectionTitle}>
            <span>{sections.find((s) => s.id === active)?.label}</span>
            <div style={styles.titleLine} />
          </div>
          {content[active]}
        </div>
      </div>
    </>
  );
}
