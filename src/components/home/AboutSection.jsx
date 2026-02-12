

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = 460;
    let height = canvas.height = 320;

    const nodes = [];
    const NODE_COUNT = 14;
    const MAX_DIST = 130;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 2 + Math.random() * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Gradient glow background
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        40,
        width / 2,
        height / 2,
        260
      );
      gradient.addColorStop(0, "rgba(0,120,255,0.06)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((n, i) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Connections
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);

          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(0, 120, 200, ${1 - dist / MAX_DIST})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }

        // Node glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,120,200,0.8)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(0,120,255,0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(draw);
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.textBlock}>
        <h2 style={styles.heading}>
          We are technology experts and<br />problem solvers
        </h2>

        <p style={styles.paragraph}>
          For nearly <strong>three decades</strong>, we’ve been deploying our
          technology expertise in continuous value creation for a wide spectrum
          of businesses — from global enterprises to emerging tech innovators.
        </p>

        <p style={styles.paragraph}>
          Our digital engineering solutions are crafted to deliver scalable,
          resilient, and future-ready transformations that drive measurable
          business outcomes.
        </p>

        <div style={styles.highlightBox}>
          <span style={styles.dot}></span>
          Trusted Digital Engineering Partner
        </div>

        <Link to="/contact" style={styles.connectButton}>
          Connect With Us
        </Link>
      </div>

      <div style={styles.visualBlock}>
        <canvas ref={canvasRef} style={styles.canvas} />
      </div>
    </section>
  );
}

/* -------------------- STYLES -------------------- */

const styles = {
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "70px 6%",
    background: "linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
    gap: "40px",
    flexWrap: "wrap",
    "@media (max-width: 1024px)": {
      padding: "60px 5%",
      gap: "30px",
    },
    "@media (max-width: 768px)": {
      flexDirection: "column",
      padding: "50px 4%",
      gap: "30px",
    },
    "@media (max-width: 640px)": {
      padding: "40px 4%",
      gap: "24px",
    },
    "@media (max-width: 480px)": {
      padding: "35px 4%",
      gap: "20px",
    },
    "@media (max-width: 360px)": {
      padding: "30px 3%",
      gap: "16px",
    },
  },
  textBlock: {
    maxWidth: "560px",
    flex: "1 1 100%",
    "@media (max-width: 768px)": {
      maxWidth: "100%",
      flex: "1 1 100%",
    },
  },
  heading: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#004f9f",
    lineHeight: "1.25",
    marginBottom: "22px",
    "@media (max-width: 1024px)": {
      fontSize: "32px",
    },
    "@media (max-width: 768px)": {
      fontSize: "28px",
      marginBottom: "16px",
    },
    "@media (max-width: 640px)": {
      fontSize: "25px",
      marginBottom: "14px",
    },
    "@media (max-width: 480px)": {
      fontSize: "22px",
      marginBottom: "12px",
    },
    "@media (max-width: 360px)": {
      fontSize: "20px",
      marginBottom: "10px",
    },
  },
  paragraph: {
    fontSize: "16.5px",
    color: "#444",
    lineHeight: "1.75",
    marginBottom: "18px",
    "@media (max-width: 768px)": {
      fontSize: "15px",
      marginBottom: "14px",
      lineHeight: "1.65",
    },
    "@media (max-width: 640px)": {
      fontSize: "14.5px",
      marginBottom: "12px",
      lineHeight: "1.6",
    },
    "@media (max-width: 480px)": {
      fontSize: "14px",
      marginBottom: "11px",
      lineHeight: "1.55",
    },
    "@media (max-width: 360px)": {
      fontSize: "13px",
      marginBottom: "10px",
      lineHeight: "1.5",
    },
  },
  highlightBox: {
    marginTop: "24px",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 18px",
    borderRadius: "30px",
    background: "rgba(0,120,255,0.08)",
    color: "#005a9c",
    fontWeight: "600",
    fontSize: "14px",
    "@media (max-width: 768px)": {
      padding: "10px 14px",
      fontSize: "13px",
    },
    "@media (max-width: 640px)": {
      padding: "9px 13px",
      fontSize: "12px",
      gap: "8px",
    },
    "@media (max-width: 480px)": {
      fontSize: "12px",
      padding: "9px 12px",
    },
    "@media (max-width: 360px)": {
      fontSize: "11px",
      padding: "8px 10px",
      gap: "6px",
    },
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#0078ff",
    boxShadow: "0 0 12px rgba(0,120,255,0.8)",
    flexShrink: 0,
    "@media (max-width: 640px)": {
      width: "9px",
      height: "9px",
      boxShadow: "0 0 10px rgba(0,120,255,0.7)",
    },
    "@media (max-width: 480px)": {
      width: "8px",
      height: "8px",
    },
    "@media (max-width: 360px)": {
      width: "7px",
      height: "7px",
      boxShadow: "0 0 8px rgba(0,120,255,0.6)",
    },
  },
  connectButton: {
    display: "inline-block",
    marginTop: "24px",
    padding: "12px 28px",
    background: "linear-gradient(135deg, #0078ff, #004f9f)",
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    borderRadius: "30px",
    boxShadow: "0 4px 14px rgba(0, 120, 255, 0.3)",
    transition: "all 0.3s ease",
    "@media (max-width: 768px)": {
      padding: "10px 22px",
      fontSize: "13px",
      marginTop: "16px",
    },
    "@media (max-width: 640px)": {
      padding: "9px 20px",
      fontSize: "12px",
      marginTop: "14px",
    },
    "@media (max-width: 480px)": {
      fontSize: "12px",
      padding: "9px 18px",
      marginTop: "12px",
    },
    "@media (max-width: 360px)": {
      fontSize: "11px",
      padding: "8px 16px",
      marginTop: "10px",
    },
  },
  visualBlock: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      width: "100%",
    },
  },
  canvas: {
    width: "460px",
    height: "320px",
    maxWidth: "100%",
    height: "auto",
    "@media (max-width: 1024px)": {
      width: "380px",
      height: "260px",
    },
    "@media (max-width: 768px)": {
      width: "100%",
      maxWidth: "400px",
      height: "280px",
    },
    "@media (max-width: 640px)": {
      maxWidth: "100%",
      height: "250px",
    },
    "@media (max-width: 480px)": {
      maxWidth: "100%",
      height: "220px",
    },
    "@media (max-width: 360px)": {
      maxWidth: "100%",
      height: "180px",
    },
  },
};
