import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";
import { trainingServices } from "@/lib/data";

export const metadata: Metadata = {
  title: "Training & Support",
  description: "Wagtech Africa's comprehensive technical training, installation, calibration, and after-sales support services for all scientific equipment across Africa.",
};

const expertise = [
  { title: "Environmental Sciences", path: "M10 2.5C8 5.5 8 14.5 10 17.5M10 2.5C12 5.5 12 14.5 10 17.5M2.5 10h15", circle: true },
  { title: "Analytical Chemistry", path: "M8 3h4M7 3v6L3 16h14l-4-7V3", circle: false },
  { title: "Seed Technology", path: "M10 17V9M10 9C10 9 5 7 5 3c3 0 5 2 5 6z", circle: false },
  { title: "Agronomy", path: "M10 17V9M10 12C10 12 15 10 15 6c-3 0-5 2-5 6z", circle: false },
  { title: "Civil & Public Health Engineering", path: "M3 9l7-7 7 7v9a1 1 0 01-1 1H4a1 1 0 01-1-1z", circle: false },
];

const svcIcons: Record<string, string> = {
  "installation": "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41",
  "training": "M2 3h16v10H2zM2 13l8 5 8-5",
  "calibration": "M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.41 1.41M14.37 14.37l1.41 1.41",
  "support": "M4 3h3l1.5 4-2 1.5c1 2 2.5 3.5 4.5 4.5L12.5 11 16 12.5V16a1 1 0 01-1 1C6 17 3 8 3 4a1 1 0 011-1z",
  "logistics": "M1 5h12v9H1zM13 8h4l2 4v2h-6V8z",
  "tenders": "M12 2H5a1.5 1.5 0 00-1.5 1.5v13A1.5 1.5 0 005 18h10a1.5 1.5 0 001.5-1.5V6L12 2z",
};

export default function TrainingSupportPage() {
  return (
    <>
      <PageBanner image="/images/gallery/20.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <div className="eyebrow">After-Sales Excellence</div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Training &amp; Technical Support
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            We support you from initial enquiry through to final installation, commissioning, training, and beyond — with in-house expertise across environmental sciences, analytical chemistry, agronomy, and engineering.
          </p>
        </div>
      </PageBanner>

      {/* Services */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Services</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", letterSpacing: "-0.03em", marginBottom: "14px" }}>
              End-to-End Customer Support
            </h2>
            <p style={{ color: "#6B7280", maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
              Complete technical support lifecycle — from procurement advice through installation, training, calibration, and ongoing maintenance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {trainingServices.map((svc) => {
              const iconKey = Object.keys(svcIcons).find((k) => svc.id?.includes(k) || svc.title?.toLowerCase().includes(k)) ?? "support";
              return (
                <div key={svc.id} className="card-light" style={{ padding: "28px" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d={svcIcons[iconKey]} />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "1rem", marginBottom: "10px" }}>{svc.title}</h3>
                  <p style={{ color: "#6B7280", fontSize: "13.5px", lineHeight: 1.75, marginBottom: "18px" }}>{svc.description}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {svc.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", color: "#6B7280" }}>
                        <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <svg width="8" height="8" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10l4.5 4.5L16 6"/></svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section" style={{ background: "#111111" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>In-House Expertise</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              Expert Technical Team
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "12px", marginBottom: "36px" }}>
            {expertise.map((exp) => (
              <div key={exp.title} className="card-dark" style={{ padding: "24px", textAlign: "center" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(196,26,26,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <svg width="22" height="22" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={exp.path} />
                    {exp.circle && <circle cx="10" cy="10" r="7.5" />}
                  </svg>
                </div>
                <p style={{ color: "#fff", fontWeight: 500, fontSize: "13px", lineHeight: 1.4 }}>{exp.title}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: 1.7, maxWidth: "600px", margin: "0 auto" }}>
            With extensive contacts at universities and research institutes in the UK and Europe, and a worldwide network of local Wagtech representatives trained in our full product range.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: "#F8F8F8" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <div className="eyebrow" style={{ justifyContent: "center" }}>Our Process</div>
            <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#0D0D0D", fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              From Enquiry to Operation
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "14px" }}>
            {[
              { step: "01", title: "Enquiry & Assessment", desc: "We assess your requirements and recommend the most suitable solution for your application and budget." },
              { step: "02", title: "Procurement", desc: "We handle sourcing, import, customs clearance, and logistics to deliver equipment safely to your location." },
              { step: "03", title: "Installation", desc: "Our certified engineers perform professional on-site installation and system configuration." },
              { step: "04", title: "Commissioning & Training", desc: "Full commissioning with hands-on operator training to ensure your team can operate equipment confidently." },
              { step: "05", title: "Ongoing Support", desc: "Continuous technical support, calibration services, spare parts supply, and maintenance programs." },
            ].map((step) => (
              <div key={step.step} className="card-light" style={{ padding: "28px" }}>
                <div style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, fontSize: "2rem", color: "#C41A1A", lineHeight: 1, marginBottom: "12px" }}>
                  {step.step}
                </div>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.9rem", marginBottom: "8px" }}>
                  {step.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#C41A1A", padding: "80px 0" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 900, color: "#fff", fontSize: "clamp(2rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", marginBottom: "16px" }}>
            Get Technical Support
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "36px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
            Our technical team is ready to assist with equipment selection, installation, training, or troubleshooting.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#C41A1A", fontWeight: 700, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "14px" }}>
              Contact Support Team
            </Link>
            <a href="https://wa.me/254720763839" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: "10px", textDecoration: "none", fontSize: "14px" }}>
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
