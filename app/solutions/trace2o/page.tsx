import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trace2O Solutions",
  description: "Trace2O, Wagtech Africa's sister company offering a global range of innovative analytical instruments and complete turnkey monitoring solutions.",
};

export default function Trace2OPage() {
  return (
    <>
      <PageBanner image="/images/gallery/18.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#800000", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(128,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#800000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 3v10M6 9l4 4 4-4"/><path d="M3 15h14"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Trace2O Solutions
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Wagtech Africa&apos;s sister company offering a global range of innovative analytical instruments and complete turnkey monitoring solutions.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>About Trace2O</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "2rem", letterSpacing: "-0.02em", marginBottom: "16px" }}>
              Innovative Analytical Instruments
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "580px", margin: "0 auto", lineHeight: 1.8 }}>
              Trace2O is dedicated to developing next-generation analytical instruments that make high-quality analysis more affordable, accessible, and practical, backed by a global R&amp;D network.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { title: "Advanced Analytical Instruments", desc: "Next-generation instruments for water, soil, and environmental analysis with improved accuracy and ease of use.", iconPath: "M8 3h4M7 3v6L3 16h14l-4-7V3" },
              { title: "Cost-Effective Solutions", desc: "Innovative designs that make high-quality analysis more affordable than traditional laboratory techniques.", iconPath: "M10 2a4 4 0 000 8 4 4 0 000-8zM4 18a6 6 0 0112 0" },
              { title: "Global Research Network", desc: "Backed by a worldwide network of R&D centres continuously developing new analytical technologies.", iconPath: "M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15" },
              { title: "Complete Turnkey Solutions", desc: "Full analytical workflow solutions from sample collection through analysis and data management.", iconPath: "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41" },
            ].map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "28px" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(128,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="#800000" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.iconPath} />
                    {item.title === "Global Research Network" && <circle cx="10" cy="10" r="7.5" />}
                    {item.title === "Cost-Effective Solutions" && <circle cx="10" cy="10" r="3.5" />}
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.95rem", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.75 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: "#2C2C2C", borderRadius: "20px", padding: "52px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "1.6rem", letterSpacing: "-0.02em", marginBottom: "12px" }}>
              Learn More About Trace2O
            </h3>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.7, marginBottom: "28px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
              Contact our team for the complete Trace2O product catalogue and to discuss how these innovative instruments can meet your analytical needs.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/contact" className="btn-red">Contact Us</Link>
              <Link href="/downloads" className="btn-ghost-white">Download Brochures</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
