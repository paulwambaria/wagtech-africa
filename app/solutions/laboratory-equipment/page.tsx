import PageBanner from "@/components/PageBanner";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laboratory Equipment",
  description: "Complete laboratory equipment and scientific instrumentation for water quality, environmental, and research laboratories across Africa.",
};

export default function LaboratoryEquipmentPage() {
  return (
    <>
      <PageBanner image="/images/gallery/07.jpg">
        <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
          <Link href="/solutions" style={{ color: "#C41A1A", fontSize: "13px", fontWeight: 600, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "20px" }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 10H4M9 5l-5 5 5 5"/></svg>
            Solutions
          </Link>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(196,26,26,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
            <svg width="26" height="26" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3h4M7 3v6L3 16h14l-4-7V3"/>
            </svg>
          </div>
          <h1 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "720px", marginBottom: "20px" }}>
            Laboratory Equipment
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75, maxWidth: "560px" }}>
            Complete laboratory equipment and scientific instrumentation for water quality, environmental, and research laboratories across Africa.
          </p>
        </div>
      </PageBanner>

      <section className="section" style={{ background: "#fff" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px", marginBottom: "56px" }}>
            {[
              { title: "Water Quality Analyzers", desc: "Benchtop and portable water quality analyzers for pH, turbidity, conductivity, dissolved oxygen, and chemical parameters.", tags: ["Benchtop", "Portable", "Multi-parameter"] },
              { title: "Heavy Metals Instruments", desc: "Laboratory METALYSER® HM5000 and other heavy metals analyzers for high-throughput research and regulatory testing.", tags: ["18 Parameters", "1ppb Detection", "High Throughput"] },
              { title: "Microbiological Equipment", desc: "Complete microbiology laboratory equipment including incubators, filtration systems, and colony counters.", tags: ["Incubators", "Filtration", "Colony Count"] },
              { title: "Chemical Analysis", desc: "Photometers, spectrophotometers, titrators, and reagent systems for complete water chemistry analysis.", tags: ["Photometers", "Titration", "Reagents"] },
              { title: "Sample Collection", desc: "Water sampling equipment, coolers, containers, and field sampling kits for standard and specialized collection.", tags: ["Samplers", "Containers", "Field Kits"] },
              { title: "Data Management", desc: "Laboratory information management systems, data loggers, and cloud-based data management platforms.", tags: ["LIMS", "Data Logging", "Cloud Platform"] },
            ].map((item) => (
              <div key={item.title} className="card-light" style={{ padding: "28px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(196,26,26,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#C41A1A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3h4M7 3v6L3 16h14l-4-7V3"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-jakarta, 'Plus Jakarta Sans', system-ui, sans-serif)", fontWeight: 700, color: "#0D0D0D", fontSize: "0.95rem", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.75, marginBottom: "14px" }}>{item.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map((t) => (
                    <span key={t} className="tag tag-red" style={{ fontSize: "10px" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#6B7280", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
              Need specific laboratory equipment? We can source virtually any scientific instrument or laboratory consumable.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              <Link href="/contact" className="btn-red">Send Enquiry</Link>
              <Link href="/downloads" className="btn-outline-dark">Download Catalogue</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
