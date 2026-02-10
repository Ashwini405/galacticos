


import { useEffect, useRef } from "react";

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
    padding: "90px 10%",
    background: "linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
    gap: "50px",
  },
  textBlock: {
    maxWidth: "560px",
  },
  heading: {
    fontSize: "38px",
    fontWeight: "700",
    color: "#004f9f",
    lineHeight: "1.25",
    marginBottom: "22px",
  },
  paragraph: {
    fontSize: "16.5px",
    color: "#444",
    lineHeight: "1.75",
    marginBottom: "18px",
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
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#0078ff",
    boxShadow: "0 0 12px rgba(0,120,255,0.8)",
  },
  visualBlock: {
    position: "relative",
  },
  canvas: {
    width: "460px",
    height: "320px",
  },
};
