import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Water Purification & Sanitisation Solutions",
  description: "Water purification and sanitisation systems for communities, institutions, and humanitarian programs across Africa.",
};

export default function WaterPurificationPage() {
  return (
    <>
      <PageBanner image="/images/gallery/22.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 8h12l-2 8H6L4 8zM4 8l1.5-3h9L16 8"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Water Purification &amp; Sanitisation
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Water purification and sanitisation systems for communities, institutions, and humanitarian programs, ensuring safe drinking water across Africa.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px", alignItems: "start", marginBottom: "64px" }}>
            <div>
              <div className="eyebrow">Our Purification Solutions</div>
              <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "2rem", letterSpacing: "-0.02em", marginBottom: "20px" }}>
                Safe Water for Every Community
              </h2>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "16px" }}>
                Wagtech Africa supplies water purification systems ranging from point-of-use household filters to large-scale community water treatment plants.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "32px" }}>
                Our purification solutions are paired with water quality testing equipment to ensure treated water meets WHO and national drinking water standards.
              </p>
              <Link href="/contact" className="btn-red">Request Information</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { title: "Household Point-of-Use Filters", desc: "Affordable household water filters providing safe drinking water at the point of use for families." },
                { title: "Community Water Kiosks", desc: "Solar-powered community water purification kiosks providing pay-per-use safe water." },
                { title: "Institutional Systems", desc: "Water purification systems for schools, health facilities, offices, and institutions." },
                { title: "Emergency Response Units", desc: "Rapid deployment water purification units for humanitarian emergency response." },
                { title: "Industrial Treatment Plants", desc: "Large-scale water treatment systems for industrial and commercial applications." },
              ].map((item) => (
                <div key={item.title} className="card-light" style={{ padding: "20px", display: "flex", gap: "14px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C41A1A", flexShrink: 0, marginTop: "6px" }} />
                  <div>
                    <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.875rem", marginBottom: "5px" }}>{item.title}</h3>
                    <p style={{ color: "#6B7280", fontSize: "12.5px", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#F8F8F8", padding: "64px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "1.8rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
            Design Your Water Solution
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "28px", lineHeight: 1.7 }}>
            Our water treatment specialists will assess your water source and requirements to design the optimal purification solution.
          </p>
          <Link href="/contact" className="btn-red">Contact Our Team</Link>
        </div>
      </section>
    </>
  );
}
