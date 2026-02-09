import { useState } from "react";

export default function Careers() {
  const [openJob, setOpenJob] = useState(0);

  const jobs = [
    {
      title: "Senior Java Developer",
      shift: "1pm – 11pm (UK Shift)",
      desc:
        "Strong experience in Java, Spring Boot, Microservices, SQL. Work on enterprise-grade applications.",
    },
    {
      title: "Senior Production Support Engineer",
      shift: "Rotational",
      desc:
        "L2/L3 production support, monitoring, incident management, and root cause analysis.",
    },
    {
      title: "Java Developer",
      shift: "Day Shift",
      desc:
        "Develop scalable backend services using Java and Spring ecosystem.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section
        style={{
          height: "70vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            height: "100%",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
          }}
        >
          <h1 style={{ fontSize: "48px" }}>Be Your Best</h1>
          <p style={{ fontSize: "20px" }}>
            Are you ready for the ride of your life?
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section
        style={{
          background: "#f1f1f1",
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ color: "#1565c0" }}>Go farther. Grow further</h2>
        <p style={{ maxWidth: "800px", margin: "20px auto" }}>
          At Sagarsoft, we are driven by purpose and passion. We nurture talent,
          celebrate individuality, and build long-term careers.
        </p>
      </section>

      {/* LIFE AT */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2>Life at Sagarsoft</h2>

        {[
          {
            img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
            text: "Work hard, Play hard",
          },
          {
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            text: "Embrace Learning",
          },
          {
            img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
            text: "Mentoring Matters!",
          },
          {
            img: "https://images.unsplash.com/photo-1515165562835-c4c0f05bdfc8",
            text: "Celebrate Culture",
          },
          {
            img: "https://images.unsplash.com/photo-1507209696997-3c532be9b2b5",
            text: "Work-Life Balance",
          },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              gap: "30px",
              alignItems: "center",
              maxWidth: "1000px",
              margin: "40px auto",
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{ width: "45%", borderRadius: "8px" }}
            />
            <h4>{item.text}</h4>
          </div>
        ))}
      </section>

      {/* CAREER TYPES */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "60px",
        }}
      >
        {[
          {
            title: "Lateral hirings",
            desc:
              "‘Growth’ and ‘Work-Life Balance’. Have your cake and eat it too.",
          },
          {
            title: "Interns & freshers",
            desc:
              "Strong mentoring program to build a rock-solid foundation.",
          },
          {
            title: "Back to work",
            desc:
              "Supporting professionals returning after a career break.",
          },
        ].map((card, i) => (
          <div
            key={i}
            style={{
              background: "#1565c0",
              color: "#fff",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </section>

      {/* OPPORTUNITIES + APPLY */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "40px",
          padding: "60px",
        }}
      >
        {/* JOBS */}
        <div>
          <h2 style={{ color: "#1565c0" }}>Opportunities</h2>

          {jobs.map((job, i) => (
            <div key={i} style={{ borderBottom: "1px solid #ddd" }}>
              <div
                onClick={() => setOpenJob(openJob === i ? null : i)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  padding: "15px 0",
                }}
              >
                <strong>{job.title}</strong>
                <span>{openJob === i ? "−" : "+"}</span>
              </div>

              {openJob === i && (
                <div style={{ paddingBottom: "15px" }}>
                  <p><b>Shift:</b> {job.shift}</p>
                  <p>{job.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* APPLY FORM */}
        <div
          style={{
            background: "#f5f5f5",
            padding: "30px",
          }}
        >
          <h3>Apply Now</h3>
          <input style={inputStyle} placeholder="Name *" />
          <input style={inputStyle} placeholder="Email *" />
          <input style={inputStyle} placeholder="Phone *" />
          <input style={inputStyle} placeholder="Job Title *" />
          <input style={inputStyle} type="file" />
          <textarea style={inputStyle} placeholder="Message" />
          <button
            style={{
              background: "#7cb342",
              color: "#fff",
              border: "none",
              padding: "12px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </section>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
};
