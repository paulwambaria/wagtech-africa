import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Wagtech Africa's project gallery — field deployments, weather station installations, mobile laboratories, team activities and more across Africa.",
};

export default function GalleryPage() {
  return (
    <>
      {/* ── Page Banner ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #2C2C2C 0%, #1A1A1A 100%)",
          paddingTop: "120px",
          paddingBottom: "64px",
          borderBottom: "3px solid #C41A1A",
        }}
      >
        <div className="wrap">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div
              style={{
                width: "3px",
                height: "28px",
                background: "#C41A1A",
                borderRadius: "2px",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#C41A1A",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Our Work in Pictures
            </span>
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)",
              marginBottom: "18px",
            }}
          >
            Project Gallery
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "17px",
              maxWidth: "560px",
              lineHeight: 1.7,
            }}
          >
            From remote field deployments to government installations, here is a snapshot
            of Wagtech Africa&apos;s impact across the continent.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section style={{ background: "#F5F5F5", padding: "64px 0 80px" }}>
        <div className="wrap">
          <GalleryClient />
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        style={{
          background: "#C41A1A",
          padding: "56px 0",
        }}
      >
        <div
          className="wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}
        >
          <div>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 800,
                marginBottom: "8px",
                fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)",
              }}
            >
              Ready to start your project?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", margin: 0 }}>
              Talk to our team about your water quality, monitoring, or laboratory needs.
            </p>
          </div>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "#C41A1A",
              fontWeight: 800,
              fontSize: "14px",
              padding: "14px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
