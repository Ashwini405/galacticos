import React from "react";

export default function ContactUs() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* HERO SECTION */}
      <section
        style={{
          height: "60vh",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1517430816045-df4b7de11d1d)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />
        <div
          style={{
            position: "relative",
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "8%",
            color: "#fff",
          }}
        >
          <div>
            <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
              Let’s Connect!
            </h1>
            <p style={{ fontSize: "18px" }}>
              We would love to hear from you
            </p>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section style={{ padding: "60px 8%" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#1f6fb2",
            marginBottom: "50px",
          }}
        >
          Relationship equity. The code we live by.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Drop us a line",
              content: (
                <>
                  <p>info@sagarsoft.in</p>
                  <p>hr@sagarsoft.in</p>
                  <p>sales@sagarsoft.in</p>
                </>
              ),
            },
            {
              title: "Let’s talk",
              content: (
                <>
                  <p>Phone: +91-40-67191000</p>
                  <p>Fax: +91-40-23114607</p>
                </>
              ),
            },
            {
              title: "Visit our office",
              content: (
                <>
                  <p>
                    Plot #111, 1st Floor, Road #10,
                    <br />
                    Jubilee Hills, Hyderabad – 500 033, India
                  </p>
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#f7f7f7",
                padding: "30px",
                borderRadius: "6px",
              }}
            >
              <h3 style={{ marginBottom: "15px" }}>{item.title}</h3>
              {item.content}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        style={{
          padding: "70px 8%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="Contact"
          style={{
            width: "100%",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />

        <div>
          <h2 style={{ marginBottom: "25px" }}>Contact our team</h2>

          {[
            { label: "First Name *", type: "text" },
            { label: "Email Address *", type: "email" },
          ].map((field, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "6px" }}>
                {field.label}
              </label>
              <input
                type={field.type}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
          ))}

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "6px" }}>
              Message
            </label>
            <textarea
              rows="5"
              maxLength={180}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>

          <button
            style={{
              background: "#8bc34a",
              color: "#fff",
              border: "none",
              padding: "12px 30px",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* OFFICES */}
      <section style={{ padding: "70px 8%", background: "#fafafa" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#1f6fb2",
            marginBottom: "50px",
          }}
        >
          Our Offices
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          {[
            {
              city: "HYDERABAD",
              highlight: true,
              info:
                "Plot #111, 1st Floor, Road #10, Jubilee Hills, Hyderabad – 500 033, India.\nPhone: +91-40-67191000\ninfo@sagarsoft.in",
            },
            {
              city: "BANGALORE",
              info:
                "91springboard, 4th floor, Gopala Krishna Complex, Residency Road, Bengaluru – 560025\ninfo@sagarsoft.in",
            },
            {
              city: "NEW YORK",
              info:
                "113-25 Queens Blvd, Suite #114 & #116, Forest Hills, NY 11375\nPhone: +1 718-746-3860",
            },
            {
              city: "CONNECTICUT",
              info:
                "200 Glastonbury Blvd, Suite #304, Glastonbury CT 06033\nPhone: +1 860-633-2025",
            },
            {
              city: "NEW JERSEY",
              info:
                "388 Washington Road, Suite A, Sayreville, NJ 08872\ninfo@infowaysoftware.com",
            },
          ].map((office, i) => (
            <div
              key={i}
              style={{
                padding: "25px",
                borderRadius: "6px",
                background: office.highlight ? "#1f6fb2" : "#fff",
                color: office.highlight ? "#fff" : "#333",
              }}
            >
              <h3 style={{ marginBottom: "12px" }}>{office.city}</h3>
              <p style={{ whiteSpace: "pre-line", fontSize: "14px" }}>
                {office.info}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
